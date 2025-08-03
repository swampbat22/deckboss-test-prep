import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Leaderboard() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    supabase.from('users')
      .select('email, xp')
      .order('xp', { ascending: false })
      .limit(10)
      .then(({ data }) => setUsers(data))
  }, [])

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ol>
        {users.map((u, i) => (
          <li key={i}>{u.email}: {u.xp} XP</li>
        ))}
      </ol>
    </div>
  )
}
