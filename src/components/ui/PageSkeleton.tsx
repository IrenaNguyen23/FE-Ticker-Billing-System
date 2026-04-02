import { Card } from './Card'
import { Skeleton } from './Skeleton'

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-dark-950 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <Card>
          <div className="space-y-3">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="space-y-4">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          </Card>
          <Card>
            <div className="space-y-4">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-24 w-full" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
