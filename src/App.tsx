import { Suspense, lazy } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { AuthLayout } from './components/layout/AuthLayout'
import { PageSkeleton } from './components/ui/PageSkeleton'
import { ProtectedRoute } from './components/layout/ProtectedRoute'

const LandingPage = lazy(() => import('./pages/Landing/LandingPage'))
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'))
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'))
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage'))
const CheckinPage = lazy(() => import('./pages/Checkin/CheckinPage'))
const TripHistoryPage = lazy(() => import('./pages/Trips/TripHistoryPage'))
const TripDetailPage = lazy(() => import('./pages/Trips/TripDetailPage'))
const WalletPage = lazy(() => import('./pages/Wallet/WalletPage'))
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'))

const PublicOutlet = () => (
  <Suspense fallback={<PageSkeleton />}>
    <Outlet />
  </Suspense>
)

const ProtectedOutlet = () => (
  <ProtectedRoute>
    <Suspense fallback={<PageSkeleton />}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </Suspense>
  </ProtectedRoute>
)

const AuthOutlet = () => (
  <AuthLayout>
    <Suspense fallback={<PageSkeleton />}>
      <Outlet />
    </Suspense>
  </AuthLayout>
)

export default function App() {
  return (
    <Routes>
      <Route element={<PublicOutlet />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route element={<AuthOutlet />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedOutlet />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/checkin" element={<CheckinPage />} />
        <Route path="/trips" element={<TripHistoryPage />} />
        <Route path="/trips/:tripId" element={<TripDetailPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Route>

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
