import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Toast } from '../../components/ui/Toast'
import { useAuth } from '../../hooks/useAuth'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type LoginForm = z.infer<typeof schema>

export default function LoginPage() {
  const [shake, setShake] = useState(false)
  const { loginMutation } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await loginMutation.mutateAsync(values)
    } catch {
      setShake(true)
      Toast.error('Invalid email or password')
      setTimeout(() => setShake(false), 400)
    }
  })

  return (
    <PageWrapper>
      <div className="relative w-full max-w-md">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 rounded-full bg-neon-green/10 blur-3xl" />
        <Card className={`relative overflow-hidden ${shake ? 'shake' : ''}`}>
          <div className="absolute inset-0 border border-white/10 opacity-60" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-dark-800">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/40">MetroTrack</div>
                  <div className="text-xl font-semibold">Welcome back</div>
                </div>
              </div>
              <span className="rounded-pill border border-white/10 bg-dark-800 px-3 py-1 text-xs text-white/60">
                Secure login
              </span>
            </div>

            <form className="space-y-4" onSubmit={onSubmit}>
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                error={errors.email?.message}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Your password"
                {...register('password')}
                error={errors.password?.message}
              />
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Use your metro account</span>
                <span className="hover:text-white">Forgot password?</span>
              </div>
              <Button fullWidth isLoading={loginMutation.isPending} type="submit">
                Sign In
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-white/60">
              Don't have an account?{' '}
              <Link to="/register" className="text-brand-400 hover:text-brand-300">
                Register 
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </PageWrapper>
  )
}
