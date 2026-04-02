import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useThemeStore } from '../../store/theme.store'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const isDark = useThemeStore((s) => s.isDark)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('light')
      root.classList.add('dark')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [isDark])

  return <>{children}</>
}
