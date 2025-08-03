import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🚢 DeckBoss Test Prep</h1>
      <p className="mb-8">Gamified US Merchant Marine Exam Study Platform</p>
      <div className="space-x-4">
        <Link href="/quiz" className="bg-blue-500 text-white px-4 py-2 rounded">Start Mission</Link>
        <Link href="/dashboard" className="bg-green-500 text-white px-4 py-2 rounded">Dashboard</Link>
        <Link href="/leaderboard" className="bg-yellow-500 text-black px-4 py-2 rounded">Leaderboard</Link>
      </div>
    </div>
  )
}
