'use client'

export function QuantumSphere({ className = '' }: { className?: string }) {
  const rings = [0, 32, 64, 96, 128]
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative aspect-square ${className}`}
    >
      {/* core glow */}
      <div className="absolute inset-[22%] rounded-full bg-primary/40 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-[34%] rounded-full bg-accent/50 blur-2xl animate-pulse-glow" />

      {/* orbital rings */}
      <div className="absolute inset-0 animate-spin-slow">
        {rings.map((rot, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/30"
            style={{
              transform: `rotateX(72deg) rotateZ(${rot}deg)`,
              boxShadow: '0 0 40px oklch(0.7 0.16 235 / 0.25) inset',
            }}
          />
        ))}
      </div>

      {/* sphere surface */}
      <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-accent/30 via-primary/20 to-purple/20 backdrop-blur-sm border border-primary/40" />

      {/* orbiting particles */}
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '18s' }}>
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_16px_4px_oklch(0.82_0.14_195_/_0.7)]" />
      </div>
      <div
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDuration: '26s', animationDirection: 'reverse' }}
      >
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px_4px_oklch(0.7_0.16_235_/_0.7)]" />
      </div>
    </div>
  )
}
