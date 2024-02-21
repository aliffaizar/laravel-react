import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { MdSpaceDashboard } from 'react-icons/md'
import { HiMenuAlt2 } from 'react-icons/hi'

import ApplicationLogo from '@/Components/ApplicationLogo'
import Drawer from '@/Components/ui/Drawer'

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='relative bg-gray-50 dark:bg-gray-900 min-h-dvh text-gray-600 dark:text-gray-400'>
      <header className='fixed inset-x-0 top-0 h-16 z-40 flex items-center bg-white shadow-sm shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-600 md:pl-72'>
        <div className='flex flex-auto items-center px-4 sm:px-6 lg:px-8'>
          <button onClick={() => setOpen(!open)}>
            <HiMenuAlt2 className='size-6' />
          </button>
        </div>
        <Drawer show={open} onClose={() => setOpen(false)}>
          <Link
            href='/admin'
            className='h-16 w-full flex items-center justify-center gap-3 shadow-sm shadow-gray-200 dark:shadow-gray-700'
          >
            <ApplicationLogo className='size-8 fill-teal-500 dark:fill-teal-600' />
            <span className='text-2xl font-mono font-bold'>Laravel</span>
          </Link>
          <div className='p-4 space-y-2 h-[calc(100dvh-64px)] overflow-y-auto'>
            <Link
              className='flex items-center gap-2 font-semibold'
              href='/admin'
            >
              <MdSpaceDashboard className='size-6 text-teal-300' />
              <span>Dashboard</span>
            </Link>
          </div>
        </Drawer>
      </header>
      <aside className='hidden md:flex flex-col flex-auto fixed z-50 left-0 inset-y-0 bg-white shadow-sm shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-600 w-72'>
        <Link
          href='/admin'
          className='h-16 w-full flex items-center justify-center gap-3 shadow-sm shadow-gray-200 dark:shadow-gray-700'
        >
          <ApplicationLogo className='size-8 fill-teal-500 dark:fill-teal-600' />
          <span className='text-2xl font-mono font-bold'>Laravel</span>
        </Link>
        <div className='p-4 space-y-2 h-[calc(100dvh-64px)] overflow-y-auto'>
          <Link className='flex items-center gap-2 font-semibold' href='/admin'>
            <MdSpaceDashboard className='size-6 text-teal-300' />
            <span>Dashboard</span>
          </Link>
        </div>
      </aside>
      <div className='md:pl-72 pt-16'>
        <div className='p-4 sm:p-6 lg:p-8'>{children}</div>
      </div>
    </div>
  )
}
