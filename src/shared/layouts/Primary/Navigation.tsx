import { Flex, Image, useDisclosure } from '@chakra-ui/react'
import { PATHS } from '@/modules/builder/paths'
import { PATHS as PATHS_SETTINGS } from '@/modules/settings/paths'
import { MenuDeep, PaintFilled, Settings } from '@/shared/icons'
import NavItem from './NavItem'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'
import { SimpleIconButton } from '@/shared/components/buttons'
import { SimpleDrawer } from '@/shared/components/modals'
import LOGO from '@/assets/logo/full.svg'

export interface Nav {
  label: string
  href?: string
  icon?: JSX.Element
  type: string
}

const nav: Nav[] = [
  {
    label: 'Crear cv',
    href: PATHS.BASE_MODULE.CLI,
    icon: <PaintFilled />,
    type: 'LINK',
  },
  {
    label: 'Ajustes',
    href: PATHS_SETTINGS.BASE_MODULE.CLI,
    icon: <Settings />,
    type: 'LINK',
  },
]

const Navigation = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex gap={2}>
        {!isSmallScream &&
          nav.map((navItem) => (
            <NavItem
              key={navItem.label}
              nav={navItem}
            />
          ))}
        {isSmallScream && (
          <SimpleIconButton
            icon={<MenuDeep />}
            aria-label='menu'
            onClick={() => onToggle()}
            color='zinc.200'
            bg='transparent'
            _hover={{ bg: 'transparent', color: 'zinc.400' }}
            size='xs'
          />
        )}
      </Flex>
      {isOpen && isSmallScream && (
        <SimpleDrawer
          isOpen={isOpen}
          onClose={onToggle}
          placement='left'
          size='full'
        >
          <Flex
            gap={4}
            direction='column'
            p={4}
          >
            <Flex
              w='100%'
              mb={20}
              justify='center'
              align='center'
            >
              <Image
                objectFit='cover'
                src={LOGO}
                alt='logo'
              />
            </Flex>
            {nav.map((navItem) => (
              <NavItem
                key={navItem.label}
                nav={navItem}
              />
            ))}
          </Flex>
        </SimpleDrawer>
      )}
    </>
  )
}

export default Navigation
