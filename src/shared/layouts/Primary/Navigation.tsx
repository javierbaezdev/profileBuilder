import { Flex, Image, useDisclosure } from '@chakra-ui/react'
import { PATHS } from '@/modules/builder/paths'
import { MenuDeep, PaintFilled } from '@/shared/icons'
import NavItem from './NavItem'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'
import { SimpleIconButton } from '@/shared/components/buttons'
import { SimpleDrawer } from '@/shared/components/modals'
import LOGO from '@/assets/logo/logoFull.png'

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
]

const Navigation = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex>
        {!isSmallScream && nav.map((navItem) => <NavItem nav={navItem} />)}
        {isSmallScream && (
          <SimpleIconButton
            icon={<MenuDeep />}
            aria-label='menu'
            onClick={() => onToggle()}
            bg='transparent'
            _hover={{ bg: 'transparent', color: 'mediumPurple.300' }}
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
            gap={2}
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
              <NavItem nav={navItem} />
            ))}
          </Flex>
        </SimpleDrawer>
      )}
    </>
  )
}

export default Navigation
