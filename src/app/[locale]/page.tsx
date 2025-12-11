import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Content simplified for brevity */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Demo Button</button>
        </div>
      </main>
    </div>
  );
}
