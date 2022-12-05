import { MdTimer, MdLibraryBooks } from 'react-icons/md'
import igniteLogo from '../../public/ignite.svg'

export function Header() {

  return (
    <header className='flex items-center justify-between px-10 py-12'>
      <img src={igniteLogo} alt="" />
      <div className='flex gap-5 items-center'>
        <MdTimer size={48} />
        <MdLibraryBooks size={48} />
      </div>
    </header>
  )
}