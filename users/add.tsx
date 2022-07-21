import type { NextApiRequest, NextApiResponse } from 'next'
import connectionMongo from '../../../utils/connectdb'
import Users from '../../../models/users'
import dbConnect from '../../../utils/connectdb'
dbConnect()

type Data = {
  name: string
}
module.exports = async function addUser(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, email } = req.body;
    const add = await Users.create(req.body)
    res.json({ add })
  } catch (err) {
    console.log("This user already exists")
    res.status(405).end();
  }
}