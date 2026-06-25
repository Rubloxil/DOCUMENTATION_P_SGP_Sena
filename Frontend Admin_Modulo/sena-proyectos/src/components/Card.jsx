export default function Card({ title, action, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {title && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800 text-sm">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  )
}
