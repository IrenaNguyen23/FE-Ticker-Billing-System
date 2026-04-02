import { Slot } from '@radix-ui/react-slot'
import { motion } from 'framer-motion'
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { Spinner } from './Spinner'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      leftIcon,
      rightIcon,
      fullWidth,
      asChild,
      children,
      ...props
    },
    ref
  ) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition focus-ring',
            'disabled:opacity-60 disabled:pointer-events-none',
            size === 'sm' && 'h-9 px-4 text-sm',
            size === 'md' && 'h-11 px-5 text-sm',
            size === 'lg' && 'h-12 px-6 text-base',
            size === 'icon' && 'h-10 w-10',
            variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-600 shadow-glow-blue',
            variant === 'secondary' &&
              'border border-dark-600 bg-dark-800 text-white/90 hover:border-brand-500 hover:text-white',
            variant === 'ghost' && 'bg-transparent text-brand-400 hover:text-brand-300',
            variant === 'danger' && 'bg-error text-white hover:bg-red-500',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition focus-ring',
          'disabled:opacity-60 disabled:pointer-events-none',
          size === 'sm' && 'h-9 px-4 text-sm',
          size === 'md' && 'h-11 px-5 text-sm',
          size === 'lg' && 'h-12 px-6 text-base',
          size === 'icon' && 'h-10 w-10',
          variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-600 shadow-glow-blue',
          variant === 'secondary' &&
            'border border-dark-600 bg-dark-800 text-white/90 hover:border-brand-500 hover:text-white',
          variant === 'ghost' && 'bg-transparent text-brand-400 hover:text-brand-300',
          variant === 'danger' && 'bg-error text-white hover:bg-red-500',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner size="sm" /> : leftIcon}
        {children}
        {rightIcon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
