import { motion } from "framer-motion"

export default function NotFoundPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#020307] text-white flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_40%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_4px)]" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-8"
      >
        {/* Logo */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-fuchsia-500/30 rounded-full" />

            <img
              src="/nazros-logo.svg"
              alt="nazrOS"
              className="relative w-32 h-32 object-contain"
            />
          </div>
        </motion.div>

        {/* Code */}
        <motion.h1
          animate={{
            textShadow: [
              "0 0 10px rgba(217,70,239,0.4)",
              "0 0 24px rgba(217,70,239,0.9)",
              "0 0 10px rgba(217,70,239,0.4)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-[120px] leading-none font-black tracking-[-0.08em] text-fuchsia-500"
        >
          404
        </motion.h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold uppercase tracking-[0.2em]">
          Система недоступна
        </h2>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed uppercase tracking-[0.25em]">
          Цифровая среда nazrOS временно находится
          в процессе реконфигурации ядра.
          <br />
          Скоро вернёмся в сеть.
        </p>

        {/* Status */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-3 h-3 rounded-full bg-fuchsia-500 animate-pulse" />

          <span className="text-fuchsia-400 uppercase tracking-[0.3em] text-xs">
            reconnecting to core...
          </span>
        </div>

        {/* Footer */}
        <div className="mt-20 text-white/20 text-xs uppercase tracking-[0.35em]">
          nazrOS core system v1.8.7
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-fuchsia-500/30" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-fuchsia-500/30" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-fuchsia-500/30" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-fuchsia-500/30" />
    </div>
  )
}
