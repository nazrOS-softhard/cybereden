
export function HUDNoise() {
  return (
    <div className="pointer-events-none absolute inset-0 z-2">
      <div className="h-full w-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
    </div>
  );
}
