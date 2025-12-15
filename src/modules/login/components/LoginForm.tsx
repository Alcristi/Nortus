"use client";

import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/field";
import Image from "next/image";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

import { useTranslations } from "next-intl";
import { useLogin } from "../hook/useLogin";
import loginService from "../services/loginService";

export function LoginForm() {
  const content = useTranslations('Login');

  const { handleSubmit, isPending, handleRememberChange, remember, usernameRef } = useLogin(loginService)

  return (
    <div className="w-1/2 p-6 h-[950px] flex flex-col">
      <Image
        src="/login/logo-nortus.png"
        alt="Nortus"
        width={174}
        height={54}
        className="self-start"
      />

      <div className="flex-1 flex items-center ">
        <form className="h-fit w-full" onSubmit={handleSubmit}>
          <FieldGroup>
            <div className="flex flex-col items-start gap-2 text-primary mb-16">
              <h1 className="text-4xl font-medium">{content('title')}</h1>
              <p className="text-balance text-xl">
                {content('description')}
              </p>
            </div>

            <Field className="gap-0">
              <Input id="username" type="text" name="username" placeholder={content('usernamePlaceholder')} required disabled={isPending} ref={usernameRef} />
              <p className="text-base text-secondary mt-1 ml-4">
                {content('usernameHelp')}
              </p>
            </Field>

            <Field>
              <Input id="password" type="password" name="password" required placeholder={content('passwordPlaceholder')} disabled={isPending} />
              <div className="flex items-center justify-between h-16 mt-2">

                <Field className="flex w-fit gap-2 " orientation={"horizontal"}>
                  <Input id="remember" name="remember" type="checkbox" className="size-4" disabled={isPending} checked={remember} onChange={handleRememberChange} />

                  <FieldLabel htmlFor="remember" className="text-secondary text-lg">{content('rememberMe')}</FieldLabel>
                </Field>

                <a
                  href="#"
                  className="ml-auto text-lg underline-offset-2 hover:underline text-third"
                >
                  {content('forgotPassword')}
                </a>
              </div>
            </Field>

            <Field>
              <Button className="bg-button-primary h-16 text-button-text-primary rounded-4xl" type="submit" disabled={isPending}>
                {isPending ? content('submitting') : content('submit')}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>

    </div>
  )
}
