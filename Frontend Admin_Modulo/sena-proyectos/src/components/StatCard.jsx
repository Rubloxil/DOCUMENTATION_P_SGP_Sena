const BORDER_COLORS = {
  green: 'border-t-green-500',
  blue: 'border-t-blue-500',
  orange: 'border-t-orange-400',
  red: 'border-t-red-500',
}

export default function StatCard({ label, value, sub, color = 'blue' }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 border-t-[3px] ${BORDER_COLORS[color]} p-5`}>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  )
}
