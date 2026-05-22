import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/systems/growthn")({
  component: () => (
    <PageShell
      tag="nazrOS · system · growthN"
      title={<><span className="text-acid">growth</span>N</>}
      subtitle="модуль роста · конфигурация · телеметрия"
    >
      <div className="mt-4 max-w-2xl text-center text-sm text-foreground/60">
        Подсистема growthN скоро будет доступна.
      </div>
    </PageShell>
  ),
});
