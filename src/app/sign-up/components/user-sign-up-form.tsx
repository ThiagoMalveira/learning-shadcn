"use client";

import * as React from "react";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface UserSignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface loadingButtons {
  buttonGithub: boolean;
  buttonGoogle: boolean;
  buttonLogin: boolean;
}

export function UserSignUpForm({ className, ...props }: UserSignUpFormProps) {
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
    <div className={cn("grid gap-6 p-8", className)} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="nome@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={
                isLoading.buttonLogin ||
                isLoading.buttonGoogle ||
                isLoading.buttonGithub
              }
            />
          </div>
          <Button
            disabled={
              isLoading.buttonLogin ||
              isLoading.buttonGoogle ||
              isLoading.buttonGithub
            }
            onClick={(event) => handleSubmit(event, "buttonLogin")}
          >
            {isLoading.buttonLogin && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue com e-mail
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button
          variant="outline"
          onClick={(event) => handleSubmit(event, "buttonGithub")}
        >
          {" "}
          {isLoading.buttonGithub ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}
          Github
        </Button>
        <Button
          variant="outline"
          onClick={(event) => handleSubmit(event, "buttonGoogle")}
        >
          {isLoading.buttonGoogle ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}
          Google
        </Button>
      </div>
      <Link href="/sign-in">
        <Button
          className="w-full"
          disabled={
            isLoading.buttonLogin ||
            isLoading.buttonGoogle ||
            isLoading.buttonGithub
          }
        >
          Já sou cadastrado!
        </Button>
      </Link>
    </div>
  );
}
