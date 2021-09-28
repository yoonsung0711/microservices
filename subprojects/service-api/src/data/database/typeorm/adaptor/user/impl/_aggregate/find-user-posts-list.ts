import { Connection } from 'typeorm'
import { User } from '@feed/data/database'
import { IDBConnector } from '@feed/data/database'

export const FindUserPostsList = (conn: IDBConnector) => {
  return async (userUid: string): Promise<string[]> => {
    const db: Connection = await conn.getConnection()
    const { posts } = await db
      .getRepository(User)
      .createQueryBuilder()
      .from(User, 'u')
      .select(['u.posts'])
      .where('u.uuid = :uuid', { uuid: userUid })
      .getOneOrFail()
    return posts as string[]
  }
}
