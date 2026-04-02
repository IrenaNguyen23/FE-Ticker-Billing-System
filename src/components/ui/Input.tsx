import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <label className="flex w-full flex-col gap-2 text-sm text-white/80">
        {label && <span className="text-sm font-medium">{label}</span>}
        <input
          ref={ref}
          className={cn(
            'h-11 w-full rounded-input border border-dark-600 bg-dark-700 px-4 text-sm text-white placeholder:text-white/40',
            'focus:border-brand-500 focus:ring-0',
            error && 'border-error',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-error">{error}</span>}
      </label>
    )
  }
)

Input.displayName = 'Input'
