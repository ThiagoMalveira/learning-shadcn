"use client";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./button";
import { UserNav } from "./dataTable/user-nav";
import { ModeToggle } from "./toggle-theme";

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex items-center justify-between space-y-2 w-full">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Seja bem-vindo!</h2>
      </div>
      <div className="flex gap-8">
        <ModeToggle />
        <div className="flex">
          {isLoggedIn ? (
            <UserNav />
          ) : (
            <Link
              href="/sign-in"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
