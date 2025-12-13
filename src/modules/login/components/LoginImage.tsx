import Image from "next/image";

export default function LoginImage() {
    return (
        <div className="relative w-1/2 h-[950px] ">
            <Image
                src="/login/hero-image.png"
                alt="Conceito de gestão de patrimônio digital."
                fill
                className="object-contain  p-6"
            />
        </div>)
}