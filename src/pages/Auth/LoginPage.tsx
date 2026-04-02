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
      <Card className={`w-full max-w-md ${shake ? 'shake' : ''}`}>
        <div className="mb-6 text-center">
          <div className="text-lg font-semibold">Welcome back</div>
          <div className="text-sm text-white/60">Sign in to continue</div>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
          <Input
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <div className="text-right text-xs text-white/60">Forgot password?</div>
          <Button fullWidth isLoading={loginMutation.isPending} type="submit">
            Sign In
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-white/60">
          Don't have an account?{' '}
          <Link to="/register" className="text-brand-400 hover:text-brand-300">
            Register ->
          </Link>
        </div>
      </Card>
    </PageWrapper>
  )
}
