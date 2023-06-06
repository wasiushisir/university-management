import { Request, Response } from 'express'
import { createUser } from '../users/user.service'

export const createUserFromDb = async (req: Request, res: Response) => {
  try {
    const data = req.body
    console.log(data)

    // const user = req.body

    const result = await createUser(data)
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}
