import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

const Label = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className={cn('flex leading-none font-semibold', className)}
    >
      {children}
    </label>
  )
})

export default Label
