import { useInView } from 'react-intersection-observer'

export function useAnimateOnScroll(options?: Parameters<typeof useInView>[0]) {
  return useInView({
    triggerOnce: true,
    threshold: 0.15,
    ...options,
  })
}
