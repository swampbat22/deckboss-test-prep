import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard({ user_id }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    supabase.from('users').select('*').eq('id', user_id).single().then(({ data }) => {
      setProfile(data)
    })
  }, [user_id])

  if (!profile) return <div>Loading...</div>

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
      <p>XP: {profile.xp}</p>
      <p>Streak: {profile.streak}</p>
    </div>
  )
}
