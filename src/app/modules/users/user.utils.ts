import { User } from './user.model'

const findUserById = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findUserById()) || (0).toString().padStart(5, '0')
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId
}
