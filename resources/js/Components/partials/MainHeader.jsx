import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from '@inertiajs/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import ApplicationLogo from '../ApplicationLogo'
import Button from '../ui/Button'
import useOutsideClick from '@/hooks/useOutsideClick'

export default function MainHeader() {
  const [open, setOpen] = useState(false)
  const ref = useOutsideClick(() => setOpen(false))

  return (
    <header ref={ref} className='relative'>
      <div className='bg-white absolute z-50 inset-x-0 shadow-sm shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-600'>
        <div className='h-16 flex justify-between max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-8'>
          <ApplicationLogo className='size-10 fill-gray-600 dark:fill-gray-400' />
          <Button
            variant='ghost'
            size='icon'
            className='p-2 block sm:hidden !bg-transparent'
            onClick={() => setOpen(!open)}
          >
            <HiMenu className='size-6' />
          </Button>

          <div className='hidden sm:flex justify-end items-center gap-4 lg:gap-6'>
            <nav className='flex justify-end items-center gap-2 lg:gap-4'>
              <Link className='font-semibold' href='/'>
                Home
              </Link>
              <Link href='/'>Post</Link>
              <Link href='/'>About</Link>
            </nav>
            <div className='space-x-2 lg:space-x-4'>
              <Button variant='ghost' size='sm' as={Link} href='/'>
                Login
              </Button>
              <Button size='sm' as={Link} href='/'>
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition='tween'
            className='absolute top-16 z-40 inset-x-0 bg-gray-800 sm:hidden'
          >
            <div className='space-y-4 p-4'>
              <nav className='flex flex-col gap-2'>
                <Link href='/'>Home</Link>
                <Link href='/'>Home</Link>
                <Link href='/'>Home</Link>
              </nav>
              <div className='space-y-2'>
                <Button variant='ghost' className='flex' as={Link} href='/'>
                  Login
                </Button>
                <Button className='flex' as={Link} href='/'>
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
