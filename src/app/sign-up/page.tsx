import { Metadata } from "next";
import Link from "next/link";

import { Card } from "@/components/card";
import { UserSignUpForm } from "./components/user-sign-up-form";

export const metadata: Metadata = {
  title: "SignUp",
  description: "SignUp forms built using the components.",
};

export default function SignUpPage() {
  return (
    <>
      <div className="container relative h-[565px] flex-col items-center justify-center top-8 md:grid lg:max-w-none lg:px-0">
        <Card>
          <div>
            <div className="mx-auto p-8 flex w-full flex-col justify-center space-y-6 sm:w-[475px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Crie uma conta
                </h1>
                <p className="text-sm text-muted-foreground">
                  Coloque seu e-mail abaixo para criar uma conta.
                </p>
              </div>
              <UserSignUpForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                Ao continuar, você aceita os{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  termos de serviço
                </Link>{" "}
                e{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  politica de privacidade
                </Link>
                .
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
