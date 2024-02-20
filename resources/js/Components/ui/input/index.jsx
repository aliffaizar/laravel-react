import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

export const Input = forwardRef(({ type, className, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      {...props}
      className={cn(
        'flex w-full rounded-md border border-gray-200 px-2 py-2 bg-gray-50/90 dark:bg-gray-900/90 dark:border-gray-600 focus:border-teal-600 focus:ring-2 focus:ring-teal-600',
        className
      )}
    />
  )
})
