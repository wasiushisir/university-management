import { User } from './user.model'
import { IUser } from './user.internface'
import config from '../../../config/index'
import { generateUserId } from './user.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  console.log(user)

  const id = await generateUserId()

  user.id = id

  // default pass word

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await new User(user)
  await createdUser.save()
  if (!createdUser) {
    throw Error('Failed to create user')
  }
  return createdUser
}
