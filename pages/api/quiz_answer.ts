import { supabase } from '@/lib/supabase'

export default async function handler(req, res) {
  const { user_id, question_id, is_correct } = req.body

  const base = {
    user_id,
    question_id,
    times_seen: 1,
    times_correct: is_correct ? 1 : 0,
    last_seen: new Date().toISOString()
  }

  await supabase
    .from('user_question_stats')
    .upsert(base, { onConflict: ['user_id', 'question_id'] })

  if (is_correct) {
    await supabase
      .from('users')
      .update({ xp: supabase.raw('xp + 10'), streak: supabase.raw('streak + 1') })
      .eq('id', user_id)
  } else {
    await supabase
      .from('users')
      .update({ streak: 0 })
      .eq('id', user_id)
  }

  res.status(200).json({ status: 'ok' })
}
