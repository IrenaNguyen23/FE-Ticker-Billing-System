import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { TrainScene } from '../../components/three/TrainScene'
import { FloatingCard } from '../../components/three/FloatingCard'

const features = [
  {
    title: 'Check In',
    desc: 'Tap your card or open the app at the station.',
  },
  {
    title: 'Ride',
    desc: 'We track your trip automatically in real time.',
  },
  {
    title: 'Pay',
    desc: 'Fare is deducted instantly from your wallet.',
  },
]

export default function LandingPage() {
  const stats = useAnimateOnScroll()

  return (
    <PageWrapper>
      <div className="min-h-screen bg-dark-950 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-80" />
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="text-sm uppercase tracking-[0.3em] text-white/50">MetroTrack</div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="text-gradient">Your Metro.</span> Smarter.
              </h1>
              <p className="text-base text-white/70 md:text-lg">
                Tap in. Tap out. Track every journey. Pay automatically.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button variant="secondary" size="lg">
                  How it works
                </Button>
              </div>
            </div>
            <div className="relative flex-1">
              <TrainScene />
              <div className="absolute -left-4 -bottom-6">
                <FloatingCard />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card hoverable className="h-full">
                  <div className="text-lg font-semibold">{item.title}</div>
                  <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <Card className="grid gap-6 md:grid-cols-3" padding="lg">
            <div className="space-y-1" ref={stats.ref}>
              <div className="text-3xl font-semibold text-neon-blue">
                {stats.inView && <CountUp end={2400000} duration={2} separator="," />}
                +
              </div>
              <div className="text-xs uppercase text-white/40">Trips processed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-semibold text-neon-green">
                {stats.inView && <CountUp end={99.9} duration={2} decimals={1} />}%
              </div>
              <div className="text-xs uppercase text-white/40">Uptime</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-semibold text-neon-amber">
                {'<'}300ms
              </div>
              <div className="text-xs uppercase text-white/40">Avg response</div>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm uppercase text-white/40">Wallet</div>
              <h2 className="mt-2 text-3xl font-semibold">Your balance. Always in check.</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>Top-up via MoMo or VNPay</li>
                <li>Real-time deduction</li>
                <li>Full history in one place</li>
              </ul>
            </div>
            <Card glow="green">
              <div className="text-xs uppercase text-white/50">Available Balance</div>
              <div className="mt-3 text-3xl font-semibold">125,000 VND</div>
              <div className="mt-6">
                <Button size="sm">Top Up</Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <Card className="flex flex-col items-center justify-between gap-6 md:flex-row" padding="lg">
            <div>
              <div className="text-2xl font-semibold">Start riding smarter today</div>
              <div className="mt-2 text-sm text-white/60">Create your account in seconds.</div>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-input border border-dark-600 bg-dark-800 px-4 text-sm text-white placeholder:text-white/40"
              />
              <Button>Create Account</Button>
            </div>
          </Card>
        </section>

        <footer className="border-t border-white/5 px-6 py-8 text-sm text-white/50">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>MetroTrack - Smarter metro journeys</div>
            <div className="flex gap-4">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Contact</span>
            </div>
          </div>
        </footer>
      </div>
    </PageWrapper>
  )
}
