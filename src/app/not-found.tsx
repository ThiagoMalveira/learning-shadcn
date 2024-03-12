import { buttonVariants } from "@/components/button";
import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold tracking-tight">
          404 | NÃO FOI POSSÍVEL ENCONTRAR
        </h1>
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Voltar a tela inicial
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
