import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case  'GET':
        res.status (200).json({messg:"Fetched Data Successfully"})
        break;
    case 'POST':
        res.status(200).json({messg:"Added Data Successfully"})
        break;
    case 'PUT':
        res.status(200).json({messg:"Updated Data Successfully"})
        break;
    case 'DELETE':
        res.status(200).json({messg:"Deleted Data Successfully"})
        break;
    default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
  } 
}
