export default function Navbar() {
  return (
    <main className="flex justify-between items-center w-full bg-gradient-to-r from-yellow-600 to-red-600 px-5 py-3 rounded-b-lg">
      <h4 className="text-slate-100 font-semibold">Explore</h4>
      <h1 className="text-slate-100 font-bold text-xl">
        Amrta<span className="text-blue-900 font-bold"> Go </span>
      </h1>
      <div className="flex items-center gap-2">
        <div className="text-slate-100 font-semibold">User</div>
      </div>
    </main>
  );
}
