import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ ok:true, stage:'featurize', message:'stub' });
}
