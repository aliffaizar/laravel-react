import { Dialog } from '@headlessui/react'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils/cn'

const drawer = cva('bg-white fixed dark:bg-gray-800', {
  variants: {
    placement: {
      bottom: 'inset-x-0 min-h-64 bottom-0',
      left: 'inset-y-0 w-full max-w-sm left-0',
      rigth: 'inset-y-0  w-full max-w-sm rigth-0',
      top: 'inset-x-0 min-h-64 top-0',
    },
  },
  defaultVariants: {
    placement: 'left',
  },
})

const animationVariants = {
  left: {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100%' },
  },
  right: {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  },
  top: {
    initial: { opacity: 0, y: '-100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100%' },
  },
  bottom: {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
  },
}

const Drawer = ({
  children,
  placement = 'left',
  show = false,
  onClose = () => {},
}) => {
  const close = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {show && (
        <Dialog
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 overflow-y-auto z-50 dark:bg-black/50 backdrop-blur-sm'
          open={show}
          onClose={close}
        >
          <Dialog.Panel
            transition={'tween'}
            initial={animationVariants[placement].initial}
            animate={animationVariants[placement].animate}
            exit={animationVariants[placement].exit}
            as={motion.div}
            className={cn(drawer({ placement }))}
          >
            {children}
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default Drawer
