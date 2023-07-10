export default function Header({children}) {
  return (
    <header className="flex justify-center bg-slate-700 p-4">
        <h2 className="text-gray-100 font-bold">{children}</h2>
    </header>
  )
}