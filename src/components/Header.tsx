import { MdTimer, MdLibraryBooks } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-10 py-12">
      <img src={'/ignite.svg'} alt="" />
      <div className="flex gap-5 items-center">
        <NavLink to="/" title="timer">
          <MdTimer size={48} />
        </NavLink>

        <NavLink to="/history" title="histórico">
          <MdLibraryBooks size={48} />
        </NavLink>
      </div>
    </header>
  )
}
