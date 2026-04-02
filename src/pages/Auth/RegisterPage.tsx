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
      <Card className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="text-lg font-semibold">Create account</div>
          <div className="mt-2 flex items-center justify-center gap-2">
            {[1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full ${dot <= step ? 'bg-brand-500' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <Input label="Full name" {...register('fullName')} error={errors.fullName?.message} />
            <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
            <Input label="Phone number" {...register('phone')} error={errors.phone?.message} />
            <Button fullWidth onClick={next}>
              Continue ->
            </Button>
          </div>
        )}

        {step === 2 && (
          <form className="space-y-4" onSubmit={onSubmit}>
            <Input
              label="Password"
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <Input
              label="Confirm password"
              type="password"
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
                Create Account ->
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
      </Card>
    </PageWrapper>
  )
}
