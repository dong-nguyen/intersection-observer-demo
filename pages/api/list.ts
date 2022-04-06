// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  list: number[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { last } = req.body;
  console.log('🚀 ~ file: list.ts ~ line 13 ~ req.body', req.body);
  const lastValue = last || 0;
  const list = Array.from(Array(Number(20)).keys()).map(
    (_, index) => index + lastValue + 1
  );

  res.status(200).json({ list });
}
