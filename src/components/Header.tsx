import { MdTimer, MdLibraryBooks } from 'react-icons/md'
import { NavigateLink } from './NavigateLink'

export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-10 py-12">
      <img src={'/ignite.svg'} alt="" />
      <div className="flex gap-5 items-center">
        <NavigateLink to="/" title="timer">
          <MdTimer size={48} />
        </NavigateLink>

        <NavigateLink to="/history" title="histórico">
          <MdLibraryBooks size={48} />
        </NavigateLink>
      </div>
    </header>
  )
}
