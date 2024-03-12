import { Metadata } from "next";

import { buttonVariants } from "@/components/button";
import { UserNav } from "@/components/dataTable/user-nav";
import { Separator } from "@/components/separator";
import { SidebarNav } from "@/components/sidebar-nav";
import { ModeToggle } from "@/components/toggle-theme";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Perfil",
    href: "/settings/profile",
  },
  {
    title: "Conta",
    href: "/settings/account",
  },
  {
    title: "Aparência",
    href: "/settings/appearance",
  },
  {
    title: "Notificações",
    href: "/settings/notifications",
  },
  {
    title: "Tela",
    href: "/settings/display",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10  md:block">
        <div className="space-y-0.5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
            <p className="text-muted-foreground">
              Ajuste as configurações da sua conta e preferência de e-mail.
            </p>
          </div>
          <div className="flex gap-8">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5 justify-between flex flex-col">
            <SidebarNav items={sidebarNavItems} />
            <Link
              className={cn("w-full", buttonVariants({ variant: "default" }))}
              href="/table"
            >
              Voltar
            </Link>
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
