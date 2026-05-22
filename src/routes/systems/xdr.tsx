import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/systems/xdr")({
  component: () => (
    <PageShell
      tag="nazrOS · system · xdr"
      title={<><span className="text-cyan">x</span>DR</>}
      subtitle="детект · ответ · корреляция событий"
    >
      <div className="mt-4 max-w-2xl text-center text-sm text-foreground/60">
        Подсистема xDR скоро будет доступна.
      </div>
    </PageShell>
  ),
});
