"use client";

import * as React from "react";

import { Button } from "@/components/button";
import { CardContent } from "@/components/card";
import { Icons } from "@/components/icons";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";

interface UserSignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface loadingButtons {
  buttonGithub: boolean;
  buttonGoogle: boolean;
  buttonLogin: boolean;
}

export function UserSignInForm({ className, ...props }: UserSignInFormProps) {
  const [isLoading, setIsLoading] = React.useState<loadingButtons>({
    buttonGithub: false,
    buttonGoogle: false,
    buttonLogin: false,
  });

  async function handleSubmit(event: React.SyntheticEvent, buttonName: string) {
    event.preventDefault();

    setIsLoading((prevLoading) => ({
      ...prevLoading,
      [buttonName]: true,
    }));

    setTimeout(() => {
      setIsLoading((prevLoading) => ({
        ...prevLoading,
        [buttonName]: false,
      }));
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6 p-4", className)} {...props}>
      <form>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button
              variant="outline"
              onClick={(event) => handleSubmit(event, "buttonGithub")}
              disabled={
                isLoading.buttonGithub ||
                isLoading.buttonGoogle ||
                isLoading.buttonLogin
              }
            >
              {" "}
              {isLoading.buttonGithub ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <div className="flex items-center">
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Github
                </div>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={(event) => handleSubmit(event, "buttonGoogle")}
              disabled={
                isLoading.buttonGithub ||
                isLoading.buttonGoogle ||
                isLoading.buttonLogin
              }
            >
              {isLoading.buttonGoogle ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <div className="flex items-center">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </div>
              )}
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemplo@exemplo.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={
                isLoading.buttonGithub ||
                isLoading.buttonGoogle ||
                isLoading.buttonLogin
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              disabled={
                isLoading.buttonGithub ||
                isLoading.buttonGoogle ||
                isLoading.buttonLogin
              }
            />
          </div>
        </CardContent>
        <div className="pt-8 pb-8">
          <Button
            className="w-full"
            onClick={(event) => handleSubmit(event, "buttonLogin")}
            disabled={
              isLoading.buttonGithub ||
              isLoading.buttonGoogle ||
              isLoading.buttonLogin
            }
          >
            {isLoading.buttonLogin ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Fazer login"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
