import { Connection } from 'typeorm'
import { User } from '@gateway/data/database'
import { IDBConnection } from '@gateway/data/database'

export const FindUserFeedInfo
    = (conn: IDBConnection) => {
        return async (userUid: string): Promise<User> => {
            const db: Connection = await conn.getConnection()
            const user
                = await db.getRepository(User)
                    .createQueryBuilder('user')
                    .leftJoinAndSelect('user.userDetail', 'd')
                    .where('user.uuid = :uuid', { uuid: userUid })
                    .getOneOrFail()
            return user
        }
    }