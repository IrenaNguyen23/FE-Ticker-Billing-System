import { useState } from 'react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

const presets = [50000, 100000, 200000, 500000]

interface TopUpModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm?: (amount: number) => void
}

export function TopUpModal({ open, onOpenChange, onConfirm }: TopUpModalProps) {
  const [amount, setAmount] = useState(100000)

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Top Up Wallet">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {presets.map((value) => (
            <button
              key={value}
              className={`rounded-input border px-3 py-2 text-sm ${
                amount === value
                  ? 'border-brand-500 bg-dark-800 text-white'
                  : 'border-white/10 bg-dark-900 text-white/70'
              }`}
              onClick={() => setAmount(value)}
              type="button"
            >
              {value.toLocaleString('vi-VN')} VND
            </button>
          ))}
        </div>
        <Input
          label="Custom amount"
          type="number"
          min={10000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Button fullWidth onClick={() => onConfirm?.(amount)}>
          Continue to Payment
        </Button>
      </div>
    </Modal>
  )
}
