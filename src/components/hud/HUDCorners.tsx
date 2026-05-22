
export function HUDCorners() {
  return (
    <div className="pointer-events-none absolute inset-0 z-1">
      <svg className="h-full w-full">
        <defs>
          <pattern id="corner" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 20 L20 0" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          </pattern>
        </defs>
        <rect x="10" y="10" width="calc(100% - 20)" height="calc(100% - 20)" fill="none" stroke="url(#corner)" />
      </svg>
    </div>
  );
}
