import { Card } from "@/components/card";
import { Metadata } from "next";
import Link from "next/link";
import { UserSignInForm } from "./components/user-sign-in-form";

export const metadata: Metadata = {
  title: "SignIn",
  description: "SignIn forms built using the components.",
};

export default function SignIn() {
  return (
    <>
      <div className="container relative hidden h-[590px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <Card>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Faça seu login
                </h1>
                <p className="text-sm text-muted-foreground">
                  Insira seu e-mail e senha para continuar
                </p>
              </div>
              <UserSignInForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                Caso deseje voltar{" "}
                <Link
                  href="/sign-up"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  clique aqui
                </Link>{" "}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
