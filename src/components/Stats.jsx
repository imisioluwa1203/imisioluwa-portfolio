import './Stats.css'

const stats = [
  { value: 5, suffix: '+', label: 'Clients served' },
  { value: 3, suffix: '', label: 'Projects built' },
  { value: 6, suffix: '', label: 'Person capstone team' },
]

function StatCard({ value, suffix, label }) {
  return (
    <div className="stat-card">
      <p className="stat-value">
        {value}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </section>
  )
}