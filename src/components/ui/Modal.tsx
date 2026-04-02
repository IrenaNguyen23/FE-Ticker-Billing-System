import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: ReactNode
  className?: string
}

export function Modal({ open, onOpenChange, title, children, className }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-card border border-white/10 bg-dark-900 p-6 shadow-card',
            className
          )}
        >
          <div className="flex items-center justify-between">
            {title && <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>}
            <Dialog.Close className="rounded-full p-1 text-white/70 hover:text-white">
              <X size={18} />
            </Dialog.Close>
          </div>
          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
