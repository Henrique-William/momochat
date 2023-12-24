'use client';

import { useCallback, useState } from "react";
import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from "react-hook-form";

import { BsGithub, BsGoogle  } from 'react-icons/bs';

import Input from "../../components/inputs/Input";
import AuthSocialButton from './AuthSocialButton';
import Button from "@/app/components/Button";


type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoaging, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN'){
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            nome: '',
            email: '',
            senha: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'REGISTER'){
            //Axios Register
        }
        if (variant === 'LOGIN'){
            //NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //NextAuth Social Sign In
    }

    return (  
        <div
            className="
                mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            {/* box do form */}
            <div
                className="
                    bg-white
                        px-4
                        py-8
                        shadow
                        sm:rounded-lg
                        sm:px-10

                    "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input 
                            id="nome" 
                            label="Name" 
                            register={register}
                            errors={errors}
                            disabled={isLoaging}
                        />
                        
                    )}
                        <Input 
                            id="email" 
                            label="Endereço de Email"
                            type="email"
                            register={register}
                            errors={errors}
                            disabled={isLoaging}
                        />
                         <Input 
                            id="senha" 
                            label="Senha"
                            type="senha"
                            register={register}
                            errors={errors}
                            disabled={isLoaging}
                        />
                        <div>
                            <Button
                                disabled={isLoaging}
                                fullWidth
                                type="submit"
                            >
                                {variant === 'LOGIN' ? 'Entrar': 'Resgistrar-se'}
                            </Button>
                        </div>
                </form>

                <div className="mt-6">
          <div className="relative">
            <div 
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
          <AuthSocialButton 
              icon={BsGithub} 
              onClick={() => socialAction('github')} 
            />
            <AuthSocialButton 
              icon={BsGoogle} 
              onClick={() => socialAction('google')} 
            />
          </div>
          
        </div>
            <div 
            className="
                flex 
                gap-2 
                justify-center 
                text-sm 
                mt-6 
                px-2 
                text-gray-500
            "
            >
            <div>
                {variant === 'LOGIN' ? 'Novo por aqui?' : 'Já tem uma conta?'} 
            </div>
            <div 
                onClick={toggleVariant} 
                className="underline cursor-pointer"
            >
                {variant === 'LOGIN' ? 'Criar uma Conta' : 'Login'}
            </div>
            </div>
            </div>
        </div>
    );
}
 
export default AuthForm;
