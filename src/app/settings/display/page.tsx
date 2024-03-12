import { Separator } from "@/components/separator";
import { DisplayForm } from "./components/display-form";

export default function SettingsDisplayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Tela</h3>
        <p className="text-sm text-muted-foreground">
          Ative ou desative itens para controlar o que é exibido no aplicativo.
        </p>
      </div>
      <Separator />
      <DisplayForm />
    </div>
  );
}
