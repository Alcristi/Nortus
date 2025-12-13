import { cn } from "@/lib/utils";
import { LoginForm } from "../components/LoginForm";
import LoginImage from "../components/LoginImage";


export default function LoginView({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex items-center w-full gap-14 ", className)} {...props}>
            <LoginForm />
            <LoginImage />
        </div>
    )
}