import { UserNav } from "./dataTable/user-nav";

export async function Header() {
  return (
    <div className="flex items-center justify-between space-y-2 w-full">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Seja bem-vindo!</h2>
        <p className="text-muted-foreground">
          Aqui está a lista das suas tarefas desse mês!
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <UserNav />
      </div>
    </div>
  );
}
