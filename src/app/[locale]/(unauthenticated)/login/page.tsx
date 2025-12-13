import { LoginForm } from "@/modules/login/components/LoginForm"
import LoginImage from "@/modules/login/components/LoginImage"

export default function LoginPage() {
  return (
    <div className="bg-[#0B1125] flex min-h-svh flex-col items-center justify-center">
      <div className="w-full max-w-[1920px] flex items-center justify-center">
        <LoginForm />
        <LoginImage />
      </div>
    </div>
  )
}
