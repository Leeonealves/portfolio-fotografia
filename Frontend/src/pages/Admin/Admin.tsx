import SideMenu from '../../components/layout/Sidemenu'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <SideMenu />

      {/* Conteúdo */}
      <div className="ml-[15vw] flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>

    </div>
  )
}

export default Admin