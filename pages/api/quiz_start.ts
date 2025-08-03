import { supabase } from '@/lib/supabase'

export default async function handler(req, res) {
  const { subject } = req.body

  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('subject', subject)
    .order('RANDOM()')
    .limit(10)

  if (error) return res.status(500).json({ error })
  res.status(200).json({ questions: data })
}
