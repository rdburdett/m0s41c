// pages/api/auth/sign-in.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Get the ID token from the request body
    const { idToken } = req.body;

    try {
      // Verify the ID token
      const decodedToken = await admin.auth().verifyIdToken(idToken);

      // TODO: Authenticate the user, start a session, etc.

      // Send a response
      res.status(200).json({ message: 'Sign-in successful', uid: decodedToken.uid });
    } catch (error) {
      res.status(401).json({ message: 'Authentication failed', error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}