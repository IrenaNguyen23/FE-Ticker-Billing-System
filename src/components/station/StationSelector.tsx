import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { Station } from '../../types/trip'

interface StationSelectorProps {
  stations: Station[]
  value?: Station | null
  onChange: (station: Station) => void
  disabled?: boolean
  recent?: Station[]
  className?: string
}

export function StationSelector({
  stations,
  value,
  onChange,
  disabled,
  recent = [],
  className,
}: StationSelectorProps) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return stations
    return stations.filter(
      (s) => s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)
    )
  }, [query, stations])

  return (
    <div className={cn('w-full space-y-3', className)}>
      <div className="flex items-center gap-2 rounded-input border border-dark-600 bg-dark-700 px-3">
        <Search size={16} className="text-white/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search station"
          disabled={disabled}
          className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
      </div>
      {recent.length > 0 && (
        <div className="space-y-2">
          <div className="text-xs uppercase text-white/40">Recent</div>
          <div className="flex flex-wrap gap-2">
            {recent.map((station) => (
              <button
                key={station.id}
                className="rounded-pill border border-white/10 bg-dark-800 px-3 py-1 text-xs text-white/80 hover:border-brand-500"
                onClick={() => onChange(station)}
                type="button"
              >
                {station.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="max-h-56 overflow-auto rounded-input border border-white/5 bg-dark-900">
        {filtered.map((station) => (
          <button
            key={station.id}
            type="button"
            onClick={() => onChange(station)}
            className={cn(
              'flex w-full items-center justify-between border-b border-white/5 px-4 py-3 text-left text-sm text-white/80 hover:bg-dark-800',
              value?.id === station.id && 'bg-dark-800'
            )}
          >
            <span>{station.name}</span>
            <span className="text-xs text-white/40">{station.code}</span>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="px-4 py-4 text-sm text-white/50">No stations found.</div>
        )}
      </div>
    </div>
  )
}
