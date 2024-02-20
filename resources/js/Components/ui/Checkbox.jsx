import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

const Checkbox = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type='checkbox'
      ref={ref}
      className={cn(
        'rounded border-gray-200 outline-none focus:ring-offset-0 text-teal-600 bg-gray-50/90 focus:ring-0 transition-colors duration-200 dark:bg-gray-900/90 dark:border-gray-600',
        className
      )}
      {...props}
    />
  )
})

export default Checkbox
