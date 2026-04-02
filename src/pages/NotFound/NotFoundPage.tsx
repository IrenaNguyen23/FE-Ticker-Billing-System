import { Link } from 'react-router-dom'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen items-center justify-center bg-dark-950 px-6">
        <Card className="w-full max-w-lg text-center">
          <div className="text-6xl font-bold text-gradient">404</div>
          <div className="mt-2 text-sm text-white/60">This station does not exist.</div>
          <Button asChild className="mt-6">
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </Card>
      </div>
    </PageWrapper>
  )
}
