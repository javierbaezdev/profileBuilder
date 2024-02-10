import { Icon, Link } from '@chakra-ui/react'
import { Nav } from './Navigation'

interface props {
  nav: Nav
}

const NavItem = ({ nav }: props) => {
  return (
    <>
      {nav.type === 'LINK' && (
        <Link
          href={nav.href}
          display='flex'
          alignItems='center'
          gap={1}
          _hover={{
            textDecoration: 'none',
            color: 'zinc.500',
          }}
        >
          <Icon
            fontSize={20}
            m={0}
          >
            {nav.icon}
          </Icon>
          {nav.label}
        </Link>
      )}
    </>
  )
}

export default NavItem
