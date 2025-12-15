
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { loginSchema } from "../schema/loginSchema";
import { LoginService } from "../types";

export function useLogin(loginService: LoginService) {
    const locale = useLocale();
    const router = useRouter()
    const [isPending, startTransition] = useTransition();
    const [remember, setRemember] = useState(false);
    const usernameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setRemember(true);
            if (usernameRef.current) {
                usernameRef.current.value = storedUsername;
            }
        }
    }, []);

    const handleRememberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemember(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const { success, data } = loginSchema.safeParse(Object.fromEntries(formData))

        console.log(Object.fromEntries(formData), { success }, data)

        if (!success) {
            toast.error('Invalid data');
            return;
        }

        if (success) {
            if (remember) {
                localStorage.setItem('username', data.username);
            } else {
                localStorage.removeItem('username');
            }
        }

        startTransition(async () => {
            try {
                await loginService.executeLogin(data);
                router.push(`/${locale}/dashboard`)
            } catch {
                toast.error('Ocorreu um erro ao realizar o login');
            }
        });
    };

    return { handleSubmit, handleRememberChange, remember, isPending, usernameRef };
}