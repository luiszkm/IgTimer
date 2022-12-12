import { ReactElement } from 'react'
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'

interface ActiveLinkProps extends NavLinkProps {
  children: ReactElement
}
export function NavigateLink({ children, ...rest }: ActiveLinkProps) {
  const { pathname } = useLocation()
  const active = pathname === rest.to
  return (
    <NavLink className={active ? "text-green-500" : ""}
      {...rest}>
      {children}
    </NavLink>
  )
}
