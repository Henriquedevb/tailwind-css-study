export default function NavBar() {
  return (
    <header className="w-screen bg-zinc-900 flex justify-around p-8 border-b border-pink-700 items-center">
      <div>HF</div>

      <nav>
        <ul className="flex flex-row gap-4">
          <li className="text-gray-600 hover:text-gray-500 cursor-pointer">
            Inicio
          </li>
          <li className="text-gray-600 hover:text-gray-500 cursor-pointer">
            Sobre mim
          </li>
          <li className="text-gray-600 hover:text-gray-500 cursor-pointer">
            Projetos
          </li>
          <li className="text-gray-600 hover:text-gray-500 cursor-pointer">
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
