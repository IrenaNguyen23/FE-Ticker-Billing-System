import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { useAuth } from '../../hooks/useAuth'
import { useAuthStore } from '../../store/auth.store'

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

type RegisterForm = z.infer<typeof schema>

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()
  const { registerMutation } = useAuth()
  const setAuth = useAuthStore((s) => s.setAuth)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  })

  const next = () => setStep((s) => Math.min(3, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const onSubmit = handleSubmit(async (values) => {
    const data = await registerMutation.mutateAsync({
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      password: values.password,
    })
    if (data?.user && data?.accessToken) {
      setAuth(data.user, data.accessToken)
    }
    next()
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  })

  return (
    <PageWrapper>
      <div className="relative w-full max-w-md">
        <div className="pointer-events-none absolute -left-16 -top-10 h-36 w-36 rounded-full bg-neon-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-brand-500/15 blur-3xl" />
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 border border-white/10 opacity-60" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/40">MetroTrack</div>
                <div className="text-xl font-semibold">Create account</div>
                <div className="mt-1 text-xs text-white/50">Step {step} of 3</div>
              </div>
              <span className="rounded-pill border border-white/10 bg-dark-800 px-3 py-1 text-xs text-white/60">
                Fast setup
              </span>
            </div>

            <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-dark-800">
              <div
                className="h-full bg-brand-500 transition-all"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <Input
                  label="Full name"
                  placeholder="Nguyen Van A"
                  {...register('fullName')}
                  error={errors.fullName?.message}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />
                <Input
                  label="Phone number"
                  placeholder="0900 123 456"
                  {...register('phone')}
                  error={errors.phone?.message}
                />
                <Button fullWidth onClick={next}>
                  Continue
                </Button>
              </div>
            )}

            {step === 2 && (
              <form className="space-y-4" onSubmit={onSubmit}>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a strong password"
                  {...register('password')}
                  error={errors.password?.message}
                />
                <Input
                  label="Confirm password"
                  type="password"
                  placeholder="Repeat your password"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword?.message}
                />
                {getValues('password') &&
                  getValues('confirmPassword') &&
                  getValues('password') !== getValues('confirmPassword') && (
                    <div className="text-xs text-error">Passwords do not match.</div>
                  )}
                <div className="flex gap-3">
                  <Button variant="secondary" type="button" onClick={prev} fullWidth>
                    Back
                  </Button>
                  <Button fullWidth isLoading={registerMutation.isPending} type="submit">
                    Create Account
                  </Button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="space-y-4 text-center">
                <div className="text-lg font-semibold">Account created!</div>
                <div className="text-sm text-white/60">Your wallet is ready.</div>
                <div className="text-xs text-white/50">Redirecting to dashboard...</div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </PageWrapper>
  )
}
