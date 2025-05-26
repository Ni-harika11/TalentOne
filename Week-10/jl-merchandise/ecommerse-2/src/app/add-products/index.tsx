import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Only POST allowed' });

  try {
    const client = await clientPromise;
    const db = client.db('Jl-Merchandies'); // replace with your DB name
    const collection = db.collection('products');

    const result = await collection.insertOne(req.body);
    res.status(201).json({ message: 'Product added', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting product', error });
  }
}
