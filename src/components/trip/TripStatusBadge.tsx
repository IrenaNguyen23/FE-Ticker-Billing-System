import { Badge } from '../ui/Badge'

export function TripStatusBadge({ status }: { status: 'ACTIVE' | 'COMPLETED' | 'FAILED' }) {
  if (status === 'ACTIVE') return <Badge variant="info">Active</Badge>
  if (status === 'FAILED') return <Badge variant="error">Failed</Badge>
  return <Badge variant="success">Completed</Badge>
}
