// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import getProperties, { Data } from '../../api/getProperties';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = getProperties();
  res.status(200).json(data);
}
