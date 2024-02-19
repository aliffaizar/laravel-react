import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const button = cva(
  'inline-flex items-center justify-center font-medium capitalize disabled:pointer-events-none disabled:opacity-80',
  {
    variants: {
      variant: {
        default: 'bg-teal-600 text-white hover:bg-teal-500',
        ghost:
          'bg-gray-200 hover:bg-gray-300 hover:text-gray-800 dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:hover:text-gray-200',
      },
      size: {
        default: 'h-10 py-2 px-4 rounded',
        sm: 'h-9 px-4 text-sm rounded-md',
        lg: 'h-11 px-8 rounded-md',
        xl: 'h-12 px-10 rounded-md text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = forwardRef(
  ({ className, variant, size, as = 'button', ...props }, ref) => {
    const Comp = as
    return (
      <Comp
        className={cn(button({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Button
