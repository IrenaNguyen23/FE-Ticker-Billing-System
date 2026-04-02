import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { day: 'Mon', amount: 12000 },
  { day: 'Tue', amount: 18000 },
  { day: 'Wed', amount: 9000 },
  { day: 'Thu', amount: 24000 },
  { day: 'Fri', amount: 21000 },
  { day: 'Sat', amount: 14000 },
  { day: 'Sun', amount: 16000 },
]

export function SpendingChart() {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="spend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fill: '#8da4c4', fontSize: 12 }} axisLine={false} />
          <YAxis tick={{ fill: '#8da4c4', fontSize: 12 }} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: '#0d1526',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              color: '#f0f6ff',
            }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#0ea5e9"
            fillOpacity={1}
            fill="url(#spend)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
