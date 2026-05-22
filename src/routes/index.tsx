import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <PageShell
      tag="nazrOS · core · online"
      title={
        <>
          КИБЕР<span className="text-neon">ЭДЭН</span>
        </>
      }
      subtitle="ВХОД · АРХИТЕКТУРА · СЕТЬ"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3"
        data-testid="home-nav-links"
      >
        <Link
          to="/login"
          data-testid="home-login-link"
          className="rounded-full border border-[var(--neon)] bg-[var(--neon)]/15 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-[var(--neon)]/30"
        >
          войти
        </Link>
        <Link
          to="/dashboard"
          data-testid="home-dashboard-link"
          className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-xl hover:border-[var(--cyan)]"
        >
          дашборд
        </Link>
        <Link
          to="/journal"
          data-testid="home-journal-link"
          className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-xl hover:border-[var(--cyan)]"
        >
          журнал
        </Link>
        <Link
          to="/market"
          data-testid="home-market-link"
          className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-xl hover:border-[var(--cyan)]"
        >
          маркет
        </Link>
      </motion.div>
    </PageShell>
  );
}
