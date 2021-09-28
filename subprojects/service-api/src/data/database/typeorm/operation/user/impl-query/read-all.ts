import { IUserAdaptor, User } from '@feed/data/database'

export const ReadAll = (user: IUserAdaptor) => {
  return async (): Promise<User[]> => {
    return await user.findAll()
  }
}
