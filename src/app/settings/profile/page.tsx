import { Separator } from "@/components/separator";
import { ProfileForm } from "./components/profile-form";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Seu perfil</h3>
        <p className="text-sm text-muted-foreground">Como os outros te veem.</p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
