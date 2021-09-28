import { default as database } from './database'
import { default as env } from './env'
import { default as cors_ } from './cors'
import { default as session } from './session'
import { default as token, ITokenConfig } from './token'
import { default as services } from './registry'
import { default as circuit } from './gateway/circuit'

import bunyan from 'bunyan'
import sess from 'express-session'
import cors from 'cors'

import { getLogger } from './logger'
import { ConnectionOptions } from 'typeorm'
import { IRegistryConfig } from './registry/index'
import { ICircuitBreakerConfig } from '@gateway/typings/circuit-breaker'

export interface IConfig {
    server: {
        port: number,
        log: () => bunyan,
        cors_: cors.CorsOptions,
        session: sess.SessionOptions,
        token: ITokenConfig,
    },
    database: {
        dev: ConnectionOptions,
        prod: ConnectionOptions, 
        i11: ConnectionOptions, 
        e2e: ConnectionOptions, 
    },
    services: {
        production: IRegistryConfig
        development: IRegistryConfig
    },
    circuit: ICircuitBreakerConfig,
    // finder: IFinderConfig
}

export default {
    server: {
        // secret: env.SECRET,
        port: env.PORT,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        log: () => getLogger('service-api-auth', '1.0.0', 'debug'),
        cors_,
        session,
        token
    },
    database,
    services,
    circuit,
    // finder
}
