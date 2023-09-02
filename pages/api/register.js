import { registerUser } from '../../utils/api';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const userData = req.body;
      const registeredUser = await registerUser(userData);
      res.status(200).json(registeredUser);
    } catch (error) {
      res.status(500).json({ message: 'Registration failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}