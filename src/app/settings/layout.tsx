import { Metadata } from "next";

import { UserNav } from "@/components/dataTable/user-nav";
import { Separator } from "@/components/separator";
import { SidebarNav } from "@/components/sidebar-nav";

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
      <div className="space-y-6 p-10 pb-16  md:block">
        <div className="space-y-0.5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
            <p className="text-muted-foreground">
              Ajuste as configurações da sua conta e preferência de e-mail.
            </p>
          </div>
          <UserNav />
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}