import { NavLink, Link, useNavigate } from 'react-router-dom'

const SideMenu = () => {
  const navigate = useNavigate()

  const handleLogout = () => {localStorage.removeItem('token')
  navigate('/login')}

  const linkBase = "text-lg transition-all duration-150 hover:text-[#8D2B00]"

  const activeLink = "text-[#8D2B00] font-bold text-lg"

  return (
    <div className="fixed top-0 left-0 h-screen bg-white w-[15vw] shadow-md">

      <div className="flex flex-col justify-between h-full py-6 px-6">

        {/* LOGO */}
        <div className="flex flex-col space-y-12">

          <Link to="/" className="flex justify-center">
            <img src="/logo.png" alt="Logo" className="w-[8vw]" />
          </Link>

          {/* MENU */}
          <nav>
            <ul className="flex flex-col space-y-6">

              <li>
                <NavLink to="/admin" end className={({ isActive }) => isActive ? `${linkBase} ${activeLink}` : linkBase}>
                  Painel
                </NavLink>
              </li>

              <li>
                <NavLink to="/admin/upload" className={({ isActive }) => isActive ? `${linkBase} ${activeLink}` : linkBase}>
                  Carregar fotos
                </NavLink>
              </li>

              <li>
                <NavLink to="/admin/edit" className={({ isActive }) => isActive ? `${linkBase} ${activeLink}` : linkBase}>
                  Editar
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/messages" className={({ isActive }) => isActive ? `${linkBase} ${activeLink}` : linkBase}>
                  Mensagens
                </NavLink>
              </li>

            </ul>
          </nav>

        </div>

        {/* LOGOUT */}
        <button
          className="px-4 py-2 bg-[#8D2B00] hover:bg-[#1D361F] text-white font-semibold rounded-lg transition"
          onClick={handleLogout}>
          Sair
        </button>

      </div>

    </div>
  )
}

export default SideMenu