import Dashboard from '@/xp_dashboard/Dashboard'
import { useAuth } from '@/auth_setup/authContext'

export default function DashboardPage() {
  const { user } = useAuth()
  if (!user) return <div>Please log in</div>
  return <Dashboard user_id={user.id} />
}
