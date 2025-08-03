import { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from '@/components/Quiz'

export default function QuizPage() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios.post('/api/quiz_start', { subject: 'Navigation' }).then(res => {
      setQuestions(res.data.questions)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">🧭 Start Your Mission</h1>
      <Quiz questions={questions} user_id={'REPLACE_WITH_AUTH_USER'} />
    </div>
  )
}
