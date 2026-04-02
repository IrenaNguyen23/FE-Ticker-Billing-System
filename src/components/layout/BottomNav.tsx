import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Ticket, Wallet, MapPin } from 'lucide-react'
import { cn } from '../../lib/utils'

const navItems = [
  { to: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { to: '/checkin', label: 'Check', icon: MapPin },
  { to: '/trips', label: 'Trips', icon: Ticket },
  { to: '/wallet', label: 'Wallet', icon: Wallet },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-dark-900 px-4 py-3 md:hidden">
      <div className="flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-1 text-xs text-white/60',
                  isActive && 'text-brand-400'
                )
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
