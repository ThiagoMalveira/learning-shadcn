import { Separator } from "@/components/separator";
import { NotificationsForm } from "./components/notification-form";

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notificações</h3>
        <p className="text-sm text-muted-foreground">
          Configure como você recebe as notificações.
        </p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  );
}
