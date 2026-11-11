
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Dataset
 * 
 */
export type Dataset = $Result.DefaultSelection<Prisma.$DatasetPayload>
/**
 * Model DatasetRecord
 * 
 */
export type DatasetRecord = $Result.DefaultSelection<Prisma.$DatasetRecordPayload>
/**
 * Model ModelVersion
 * 
 */
export type ModelVersion = $Result.DefaultSelection<Prisma.$ModelVersionPayload>
/**
 * Model InferenceRequest
 * 
 */
export type InferenceRequest = $Result.DefaultSelection<Prisma.$InferenceRequestPayload>
/**
 * Model PredictionResult
 * 
 */
export type PredictionResult = $Result.DefaultSelection<Prisma.$PredictionResultPayload>
/**
 * Model OutboxEvent
 * 
 */
export type OutboxEvent = $Result.DefaultSelection<Prisma.$OutboxEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DatasetStatus: {
  UPLOADING: 'UPLOADING',
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus]


export const EventClass: {
  GAMMA: 'GAMMA',
  HADRON: 'HADRON'
};

export type EventClass = (typeof EventClass)[keyof typeof EventClass]


export const ModelStatus: {
  TRAINING: 'TRAINING',
  READY: 'READY',
  DEPLOYED: 'DEPLOYED',
  ARCHIVED: 'ARCHIVED',
  FAILED: 'FAILED'
};

export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus]


export const InferenceStatus: {
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type InferenceStatus = (typeof InferenceStatus)[keyof typeof InferenceStatus]


export const InferenceType: {
  SINGLE: 'SINGLE',
  BATCH: 'BATCH'
};

export type InferenceType = (typeof InferenceType)[keyof typeof InferenceType]


export const OutboxStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

export type OutboxStatus = (typeof OutboxStatus)[keyof typeof OutboxStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DatasetStatus = $Enums.DatasetStatus

export const DatasetStatus: typeof $Enums.DatasetStatus

export type EventClass = $Enums.EventClass

export const EventClass: typeof $Enums.EventClass

export type ModelStatus = $Enums.ModelStatus

export const ModelStatus: typeof $Enums.ModelStatus

export type InferenceStatus = $Enums.InferenceStatus

export const InferenceStatus: typeof $Enums.InferenceStatus

export type InferenceType = $Enums.InferenceType

export const InferenceType: typeof $Enums.InferenceType

export type OutboxStatus = $Enums.OutboxStatus

export const OutboxStatus: typeof $Enums.OutboxStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataset`: Exposes CRUD operations for the **Dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.dataset.findMany()
    * ```
    */
  get dataset(): Prisma.DatasetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datasetRecord`: Exposes CRUD operations for the **DatasetRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatasetRecords
    * const datasetRecords = await prisma.datasetRecord.findMany()
    * ```
    */
  get datasetRecord(): Prisma.DatasetRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelVersion`: Exposes CRUD operations for the **ModelVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelVersions
    * const modelVersions = await prisma.modelVersion.findMany()
    * ```
    */
  get modelVersion(): Prisma.ModelVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inferenceRequest`: Exposes CRUD operations for the **InferenceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InferenceRequests
    * const inferenceRequests = await prisma.inferenceRequest.findMany()
    * ```
    */
  get inferenceRequest(): Prisma.InferenceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predictionResult`: Exposes CRUD operations for the **PredictionResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PredictionResults
    * const predictionResults = await prisma.predictionResult.findMany()
    * ```
    */
  get predictionResult(): Prisma.PredictionResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outboxEvent`: Exposes CRUD operations for the **OutboxEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutboxEvents
    * const outboxEvents = await prisma.outboxEvent.findMany()
    * ```
    */
  get outboxEvent(): Prisma.OutboxEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ApiKey: 'ApiKey',
    Dataset: 'Dataset',
    DatasetRecord: 'DatasetRecord',
    ModelVersion: 'ModelVersion',
    InferenceRequest: 'InferenceRequest',
    PredictionResult: 'PredictionResult',
    OutboxEvent: 'OutboxEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "apiKey" | "dataset" | "datasetRecord" | "modelVersion" | "inferenceRequest" | "predictionResult" | "outboxEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Dataset: {
        payload: Prisma.$DatasetPayload<ExtArgs>
        fields: Prisma.DatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findFirst: {
            args: Prisma.DatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findMany: {
            args: Prisma.DatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          create: {
            args: Prisma.DatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          createMany: {
            args: Prisma.DatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          delete: {
            args: Prisma.DatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          update: {
            args: Prisma.DatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          upsert: {
            args: Prisma.DatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          aggregate: {
            args: Prisma.DatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataset>
          }
          groupBy: {
            args: Prisma.DatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetCountAggregateOutputType> | number
          }
        }
      }
      DatasetRecord: {
        payload: Prisma.$DatasetRecordPayload<ExtArgs>
        fields: Prisma.DatasetRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>
          }
          findFirst: {
            args: Prisma.DatasetRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>
          }
          findMany: {
            args: Prisma.DatasetRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>[]
          }
          create: {
            args: Prisma.DatasetRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>
          }
          createMany: {
            args: Prisma.DatasetRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>[]
          }
          delete: {
            args: Prisma.DatasetRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>
          }
          update: {
            args: Prisma.DatasetRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>
          }
          deleteMany: {
            args: Prisma.DatasetRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>[]
          }
          upsert: {
            args: Prisma.DatasetRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetRecordPayload>
          }
          aggregate: {
            args: Prisma.DatasetRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatasetRecord>
          }
          groupBy: {
            args: Prisma.DatasetRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetRecordCountAggregateOutputType> | number
          }
        }
      }
      ModelVersion: {
        payload: Prisma.$ModelVersionPayload<ExtArgs>
        fields: Prisma.ModelVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          findFirst: {
            args: Prisma.ModelVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          findMany: {
            args: Prisma.ModelVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>[]
          }
          create: {
            args: Prisma.ModelVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          createMany: {
            args: Prisma.ModelVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>[]
          }
          delete: {
            args: Prisma.ModelVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          update: {
            args: Prisma.ModelVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          deleteMany: {
            args: Prisma.ModelVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>[]
          }
          upsert: {
            args: Prisma.ModelVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVersionPayload>
          }
          aggregate: {
            args: Prisma.ModelVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelVersion>
          }
          groupBy: {
            args: Prisma.ModelVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ModelVersionCountAggregateOutputType> | number
          }
        }
      }
      InferenceRequest: {
        payload: Prisma.$InferenceRequestPayload<ExtArgs>
        fields: Prisma.InferenceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InferenceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InferenceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>
          }
          findFirst: {
            args: Prisma.InferenceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InferenceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>
          }
          findMany: {
            args: Prisma.InferenceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>[]
          }
          create: {
            args: Prisma.InferenceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>
          }
          createMany: {
            args: Prisma.InferenceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InferenceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>[]
          }
          delete: {
            args: Prisma.InferenceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>
          }
          update: {
            args: Prisma.InferenceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>
          }
          deleteMany: {
            args: Prisma.InferenceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InferenceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InferenceRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>[]
          }
          upsert: {
            args: Prisma.InferenceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceRequestPayload>
          }
          aggregate: {
            args: Prisma.InferenceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInferenceRequest>
          }
          groupBy: {
            args: Prisma.InferenceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InferenceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InferenceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<InferenceRequestCountAggregateOutputType> | number
          }
        }
      }
      PredictionResult: {
        payload: Prisma.$PredictionResultPayload<ExtArgs>
        fields: Prisma.PredictionResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>
          }
          findFirst: {
            args: Prisma.PredictionResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>
          }
          findMany: {
            args: Prisma.PredictionResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>[]
          }
          create: {
            args: Prisma.PredictionResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>
          }
          createMany: {
            args: Prisma.PredictionResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>[]
          }
          delete: {
            args: Prisma.PredictionResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>
          }
          update: {
            args: Prisma.PredictionResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>
          }
          deleteMany: {
            args: Prisma.PredictionResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>[]
          }
          upsert: {
            args: Prisma.PredictionResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionResultPayload>
          }
          aggregate: {
            args: Prisma.PredictionResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredictionResult>
          }
          groupBy: {
            args: Prisma.PredictionResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionResultCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionResultCountAggregateOutputType> | number
          }
        }
      }
      OutboxEvent: {
        payload: Prisma.$OutboxEventPayload<ExtArgs>
        fields: Prisma.OutboxEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboxEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboxEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          findFirst: {
            args: Prisma.OutboxEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboxEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          findMany: {
            args: Prisma.OutboxEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          create: {
            args: Prisma.OutboxEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          createMany: {
            args: Prisma.OutboxEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutboxEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          delete: {
            args: Prisma.OutboxEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          update: {
            args: Prisma.OutboxEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          deleteMany: {
            args: Prisma.OutboxEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboxEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutboxEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          upsert: {
            args: Prisma.OutboxEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          aggregate: {
            args: Prisma.OutboxEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutboxEvent>
          }
          groupBy: {
            args: Prisma.OutboxEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboxEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboxEventCountArgs<ExtArgs>
            result: $Utils.Optional<OutboxEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    apiKey?: ApiKeyOmit
    dataset?: DatasetOmit
    datasetRecord?: DatasetRecordOmit
    modelVersion?: ModelVersionOmit
    inferenceRequest?: InferenceRequestOmit
    predictionResult?: PredictionResultOmit
    outboxEvent?: OutboxEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    datasets: number
    inferenceRequests: number
    apiKeys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasets?: boolean | UserCountOutputTypeCountDatasetsArgs
    inferenceRequests?: boolean | UserCountOutputTypeCountInferenceRequestsArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDatasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInferenceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InferenceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }


  /**
   * Count Type DatasetCountOutputType
   */

  export type DatasetCountOutputType = {
    records: number
  }

  export type DatasetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | DatasetCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetCountOutputType
     */
    select?: DatasetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetRecordWhereInput
  }


  /**
   * Count Type DatasetRecordCountOutputType
   */

  export type DatasetRecordCountOutputType = {
    predictions: number
  }

  export type DatasetRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | DatasetRecordCountOutputTypeCountPredictionsArgs
  }

  // Custom InputTypes
  /**
   * DatasetRecordCountOutputType without action
   */
  export type DatasetRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecordCountOutputType
     */
    select?: DatasetRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasetRecordCountOutputType without action
   */
  export type DatasetRecordCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionResultWhereInput
  }


  /**
   * Count Type ModelVersionCountOutputType
   */

  export type ModelVersionCountOutputType = {
    inferenceRequests: number
  }

  export type ModelVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inferenceRequests?: boolean | ModelVersionCountOutputTypeCountInferenceRequestsArgs
  }

  // Custom InputTypes
  /**
   * ModelVersionCountOutputType without action
   */
  export type ModelVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersionCountOutputType
     */
    select?: ModelVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelVersionCountOutputType without action
   */
  export type ModelVersionCountOutputTypeCountInferenceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InferenceRequestWhereInput
  }


  /**
   * Count Type InferenceRequestCountOutputType
   */

  export type InferenceRequestCountOutputType = {
    results: number
  }

  export type InferenceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | InferenceRequestCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * InferenceRequestCountOutputType without action
   */
  export type InferenceRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequestCountOutputType
     */
    select?: InferenceRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InferenceRequestCountOutputType without action
   */
  export type InferenceRequestCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    datasets?: boolean | User$datasetsArgs<ExtArgs>
    inferenceRequests?: boolean | User$inferenceRequestsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasets?: boolean | User$datasetsArgs<ExtArgs>
    inferenceRequests?: boolean | User$inferenceRequestsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      datasets: Prisma.$DatasetPayload<ExtArgs>[]
      inferenceRequests: Prisma.$InferenceRequestPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datasets<T extends User$datasetsArgs<ExtArgs> = {}>(args?: Subset<T, User$datasetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inferenceRequests<T extends User$inferenceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$inferenceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.datasets
   */
  export type User$datasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    cursor?: DatasetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * User.inferenceRequests
   */
  export type User$inferenceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    where?: InferenceRequestWhereInput
    orderBy?: InferenceRequestOrderByWithRelationInput | InferenceRequestOrderByWithRelationInput[]
    cursor?: InferenceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InferenceRequestScalarFieldEnum | InferenceRequestScalarFieldEnum[]
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    isActive: boolean | null
    expiresAt: Date | null
    lastUsedAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyHash: string | null
    isActive: boolean | null
    expiresAt: Date | null
    lastUsedAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    keyHash: number
    isActive: number
    expiresAt: number
    lastUsedAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    isActive?: true
    expiresAt?: true
    lastUsedAt?: true
    userId?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    isActive?: true
    expiresAt?: true
    lastUsedAt?: true
    userId?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    keyHash?: true
    isActive?: true
    expiresAt?: true
    lastUsedAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string
    keyHash: string
    isActive: boolean
    expiresAt: Date | null
    lastUsedAt: Date | null
    userId: string
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyHash?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    keyHash?: boolean
    isActive?: boolean
    expiresAt?: boolean
    lastUsedAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyHash" | "isActive" | "expiresAt" | "lastUsedAt" | "userId" | "createdAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      keyHash: string
      isActive: boolean
      expiresAt: Date | null
      lastUsedAt: Date | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Dataset
   */

  export type AggregateDataset = {
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  export type DatasetAvgAggregateOutputType = {
    recordCount: number | null
  }

  export type DatasetSumAggregateOutputType = {
    recordCount: number | null
  }

  export type DatasetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fileName: string | null
    storageUri: string | null
    checksum: string | null
    recordCount: number | null
    status: $Enums.DatasetStatus | null
    uploadedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatasetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fileName: string | null
    storageUri: string | null
    checksum: string | null
    recordCount: number | null
    status: $Enums.DatasetStatus | null
    uploadedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatasetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    fileName: number
    storageUri: number
    checksum: number
    recordCount: number
    status: number
    uploadedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DatasetAvgAggregateInputType = {
    recordCount?: true
  }

  export type DatasetSumAggregateInputType = {
    recordCount?: true
  }

  export type DatasetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileName?: true
    storageUri?: true
    checksum?: true
    recordCount?: true
    status?: true
    uploadedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatasetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileName?: true
    storageUri?: true
    checksum?: true
    recordCount?: true
    status?: true
    uploadedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatasetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileName?: true
    storageUri?: true
    checksum?: true
    recordCount?: true
    status?: true
    uploadedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataset to aggregate.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasets
    **/
    _count?: true | DatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetMaxAggregateInputType
  }

  export type GetDatasetAggregateType<T extends DatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataset[P]>
      : GetScalarType<T[P], AggregateDataset[P]>
  }




  export type DatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithAggregationInput | DatasetOrderByWithAggregationInput[]
    by: DatasetScalarFieldEnum[] | DatasetScalarFieldEnum
    having?: DatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetCountAggregateInputType | true
    _avg?: DatasetAvgAggregateInputType
    _sum?: DatasetSumAggregateInputType
    _min?: DatasetMinAggregateInputType
    _max?: DatasetMaxAggregateInputType
  }

  export type DatasetGroupByOutputType = {
    id: string
    name: string
    description: string | null
    fileName: string | null
    storageUri: string | null
    checksum: string | null
    recordCount: number
    status: $Enums.DatasetStatus
    uploadedById: string
    createdAt: Date
    updatedAt: Date
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  type GetDatasetGroupByPayload<T extends DatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetGroupByOutputType[P]>
        }
      >
    >


  export type DatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileName?: boolean
    storageUri?: boolean
    checksum?: boolean
    recordCount?: boolean
    status?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Dataset$recordsArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileName?: boolean
    storageUri?: boolean
    checksum?: boolean
    recordCount?: boolean
    status?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileName?: boolean
    storageUri?: boolean
    checksum?: boolean
    recordCount?: boolean
    status?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    fileName?: boolean
    storageUri?: boolean
    checksum?: boolean
    recordCount?: boolean
    status?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DatasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "fileName" | "storageUri" | "checksum" | "recordCount" | "status" | "uploadedById" | "createdAt" | "updatedAt", ExtArgs["result"]["dataset"]>
  export type DatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Dataset$recordsArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataset"
    objects: {
      uploadedBy: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$DatasetRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      fileName: string | null
      storageUri: string | null
      checksum: string | null
      recordCount: number
      status: $Enums.DatasetStatus
      uploadedById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataset"]>
    composites: {}
  }

  type DatasetGetPayload<S extends boolean | null | undefined | DatasetDefaultArgs> = $Result.GetResult<Prisma.$DatasetPayload, S>

  type DatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetCountAggregateInputType | true
    }

  export interface DatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataset'], meta: { name: 'Dataset' } }
    /**
     * Find zero or one Dataset that matches the filter.
     * @param {DatasetFindUniqueArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetFindUniqueArgs>(args: SelectSubset<T, DatasetFindUniqueArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetFindUniqueOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetFindFirstArgs>(args?: SelectSubset<T, DatasetFindFirstArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.dataset.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.dataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetWithIdOnly = await prisma.dataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetFindManyArgs>(args?: SelectSubset<T, DatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataset.
     * @param {DatasetCreateArgs} args - Arguments to create a Dataset.
     * @example
     * // Create one Dataset
     * const Dataset = await prisma.dataset.create({
     *   data: {
     *     // ... data to create a Dataset
     *   }
     * })
     * 
     */
    create<T extends DatasetCreateArgs>(args: SelectSubset<T, DatasetCreateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {DatasetCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetCreateManyArgs>(args?: SelectSubset<T, DatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {DatasetCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dataset.
     * @param {DatasetDeleteArgs} args - Arguments to delete one Dataset.
     * @example
     * // Delete one Dataset
     * const Dataset = await prisma.dataset.delete({
     *   where: {
     *     // ... filter to delete one Dataset
     *   }
     * })
     * 
     */
    delete<T extends DatasetDeleteArgs>(args: SelectSubset<T, DatasetDeleteArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataset.
     * @param {DatasetUpdateArgs} args - Arguments to update one Dataset.
     * @example
     * // Update one Dataset
     * const dataset = await prisma.dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetUpdateArgs>(args: SelectSubset<T, DatasetUpdateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {DatasetDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDeleteManyArgs>(args?: SelectSubset<T, DatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetUpdateManyArgs>(args: SelectSubset<T, DatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {DatasetUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dataset.
     * @param {DatasetUpsertArgs} args - Arguments to update or create a Dataset.
     * @example
     * // Update or create a Dataset
     * const dataset = await prisma.dataset.upsert({
     *   create: {
     *     // ... data to create a Dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataset we want to update
     *   }
     * })
     */
    upsert<T extends DatasetUpsertArgs>(args: SelectSubset<T, DatasetUpsertArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.dataset.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends DatasetCountArgs>(
      args?: Subset<T, DatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetAggregateArgs>(args: Subset<T, DatasetAggregateArgs>): Prisma.PrismaPromise<GetDatasetAggregateType<T>>

    /**
     * Group by Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetGroupByArgs['orderBy'] }
        : { orderBy?: DatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataset model
   */
  readonly fields: DatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    records<T extends Dataset$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dataset model
   */
  interface DatasetFieldRefs {
    readonly id: FieldRef<"Dataset", 'String'>
    readonly name: FieldRef<"Dataset", 'String'>
    readonly description: FieldRef<"Dataset", 'String'>
    readonly fileName: FieldRef<"Dataset", 'String'>
    readonly storageUri: FieldRef<"Dataset", 'String'>
    readonly checksum: FieldRef<"Dataset", 'String'>
    readonly recordCount: FieldRef<"Dataset", 'Int'>
    readonly status: FieldRef<"Dataset", 'DatasetStatus'>
    readonly uploadedById: FieldRef<"Dataset", 'String'>
    readonly createdAt: FieldRef<"Dataset", 'DateTime'>
    readonly updatedAt: FieldRef<"Dataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dataset findUnique
   */
  export type DatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findUniqueOrThrow
   */
  export type DatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findFirst
   */
  export type DatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findFirstOrThrow
   */
  export type DatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findMany
   */
  export type DatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Datasets to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset create
   */
  export type DatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a Dataset.
     */
    data: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
  }

  /**
   * Dataset createMany
   */
  export type DatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset createManyAndReturn
   */
  export type DatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dataset update
   */
  export type DatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a Dataset.
     */
    data: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
    /**
     * Choose, which Dataset to update.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset updateMany
   */
  export type DatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset updateManyAndReturn
   */
  export type DatasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dataset upsert
   */
  export type DatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the Dataset to update in case it exists.
     */
    where: DatasetWhereUniqueInput
    /**
     * In case the Dataset found by the `where` argument doesn't exist, create a new Dataset with this data.
     */
    create: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
    /**
     * In case the Dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
  }

  /**
   * Dataset delete
   */
  export type DatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter which Dataset to delete.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset deleteMany
   */
  export type DatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasets to delete
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to delete.
     */
    limit?: number
  }

  /**
   * Dataset.records
   */
  export type Dataset$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    where?: DatasetRecordWhereInput
    orderBy?: DatasetRecordOrderByWithRelationInput | DatasetRecordOrderByWithRelationInput[]
    cursor?: DatasetRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetRecordScalarFieldEnum | DatasetRecordScalarFieldEnum[]
  }

  /**
   * Dataset without action
   */
  export type DatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
  }


  /**
   * Model DatasetRecord
   */

  export type AggregateDatasetRecord = {
    _count: DatasetRecordCountAggregateOutputType | null
    _min: DatasetRecordMinAggregateOutputType | null
    _max: DatasetRecordMaxAggregateOutputType | null
  }

  export type DatasetRecordMinAggregateOutputType = {
    id: string | null
    datasetId: string | null
    actualClass: $Enums.EventClass | null
    createdAt: Date | null
  }

  export type DatasetRecordMaxAggregateOutputType = {
    id: string | null
    datasetId: string | null
    actualClass: $Enums.EventClass | null
    createdAt: Date | null
  }

  export type DatasetRecordCountAggregateOutputType = {
    id: number
    datasetId: number
    features: number
    actualClass: number
    createdAt: number
    _all: number
  }


  export type DatasetRecordMinAggregateInputType = {
    id?: true
    datasetId?: true
    actualClass?: true
    createdAt?: true
  }

  export type DatasetRecordMaxAggregateInputType = {
    id?: true
    datasetId?: true
    actualClass?: true
    createdAt?: true
  }

  export type DatasetRecordCountAggregateInputType = {
    id?: true
    datasetId?: true
    features?: true
    actualClass?: true
    createdAt?: true
    _all?: true
  }

  export type DatasetRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetRecord to aggregate.
     */
    where?: DatasetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetRecords to fetch.
     */
    orderBy?: DatasetRecordOrderByWithRelationInput | DatasetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatasetRecords
    **/
    _count?: true | DatasetRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetRecordMaxAggregateInputType
  }

  export type GetDatasetRecordAggregateType<T extends DatasetRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasetRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasetRecord[P]>
      : GetScalarType<T[P], AggregateDatasetRecord[P]>
  }




  export type DatasetRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetRecordWhereInput
    orderBy?: DatasetRecordOrderByWithAggregationInput | DatasetRecordOrderByWithAggregationInput[]
    by: DatasetRecordScalarFieldEnum[] | DatasetRecordScalarFieldEnum
    having?: DatasetRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetRecordCountAggregateInputType | true
    _min?: DatasetRecordMinAggregateInputType
    _max?: DatasetRecordMaxAggregateInputType
  }

  export type DatasetRecordGroupByOutputType = {
    id: string
    datasetId: string
    features: JsonValue
    actualClass: $Enums.EventClass | null
    createdAt: Date
    _count: DatasetRecordCountAggregateOutputType | null
    _min: DatasetRecordMinAggregateOutputType | null
    _max: DatasetRecordMaxAggregateOutputType | null
  }

  type GetDatasetRecordGroupByPayload<T extends DatasetRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetRecordGroupByOutputType[P]>
        }
      >
    >


  export type DatasetRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    features?: boolean
    actualClass?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    predictions?: boolean | DatasetRecord$predictionsArgs<ExtArgs>
    _count?: boolean | DatasetRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetRecord"]>

  export type DatasetRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    features?: boolean
    actualClass?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetRecord"]>

  export type DatasetRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    features?: boolean
    actualClass?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetRecord"]>

  export type DatasetRecordSelectScalar = {
    id?: boolean
    datasetId?: boolean
    features?: boolean
    actualClass?: boolean
    createdAt?: boolean
  }

  export type DatasetRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datasetId" | "features" | "actualClass" | "createdAt", ExtArgs["result"]["datasetRecord"]>
  export type DatasetRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    predictions?: boolean | DatasetRecord$predictionsArgs<ExtArgs>
    _count?: boolean | DatasetRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatasetRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type DatasetRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }

  export type $DatasetRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatasetRecord"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
      predictions: Prisma.$PredictionResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datasetId: string
      features: Prisma.JsonValue
      actualClass: $Enums.EventClass | null
      createdAt: Date
    }, ExtArgs["result"]["datasetRecord"]>
    composites: {}
  }

  type DatasetRecordGetPayload<S extends boolean | null | undefined | DatasetRecordDefaultArgs> = $Result.GetResult<Prisma.$DatasetRecordPayload, S>

  type DatasetRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetRecordCountAggregateInputType | true
    }

  export interface DatasetRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatasetRecord'], meta: { name: 'DatasetRecord' } }
    /**
     * Find zero or one DatasetRecord that matches the filter.
     * @param {DatasetRecordFindUniqueArgs} args - Arguments to find a DatasetRecord
     * @example
     * // Get one DatasetRecord
     * const datasetRecord = await prisma.datasetRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetRecordFindUniqueArgs>(args: SelectSubset<T, DatasetRecordFindUniqueArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatasetRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetRecordFindUniqueOrThrowArgs} args - Arguments to find a DatasetRecord
     * @example
     * // Get one DatasetRecord
     * const datasetRecord = await prisma.datasetRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordFindFirstArgs} args - Arguments to find a DatasetRecord
     * @example
     * // Get one DatasetRecord
     * const datasetRecord = await prisma.datasetRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetRecordFindFirstArgs>(args?: SelectSubset<T, DatasetRecordFindFirstArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordFindFirstOrThrowArgs} args - Arguments to find a DatasetRecord
     * @example
     * // Get one DatasetRecord
     * const datasetRecord = await prisma.datasetRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatasetRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatasetRecords
     * const datasetRecords = await prisma.datasetRecord.findMany()
     * 
     * // Get first 10 DatasetRecords
     * const datasetRecords = await prisma.datasetRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetRecordWithIdOnly = await prisma.datasetRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetRecordFindManyArgs>(args?: SelectSubset<T, DatasetRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatasetRecord.
     * @param {DatasetRecordCreateArgs} args - Arguments to create a DatasetRecord.
     * @example
     * // Create one DatasetRecord
     * const DatasetRecord = await prisma.datasetRecord.create({
     *   data: {
     *     // ... data to create a DatasetRecord
     *   }
     * })
     * 
     */
    create<T extends DatasetRecordCreateArgs>(args: SelectSubset<T, DatasetRecordCreateArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatasetRecords.
     * @param {DatasetRecordCreateManyArgs} args - Arguments to create many DatasetRecords.
     * @example
     * // Create many DatasetRecords
     * const datasetRecord = await prisma.datasetRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetRecordCreateManyArgs>(args?: SelectSubset<T, DatasetRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DatasetRecords and returns the data saved in the database.
     * @param {DatasetRecordCreateManyAndReturnArgs} args - Arguments to create many DatasetRecords.
     * @example
     * // Create many DatasetRecords
     * const datasetRecord = await prisma.datasetRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DatasetRecords and only return the `id`
     * const datasetRecordWithIdOnly = await prisma.datasetRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DatasetRecord.
     * @param {DatasetRecordDeleteArgs} args - Arguments to delete one DatasetRecord.
     * @example
     * // Delete one DatasetRecord
     * const DatasetRecord = await prisma.datasetRecord.delete({
     *   where: {
     *     // ... filter to delete one DatasetRecord
     *   }
     * })
     * 
     */
    delete<T extends DatasetRecordDeleteArgs>(args: SelectSubset<T, DatasetRecordDeleteArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatasetRecord.
     * @param {DatasetRecordUpdateArgs} args - Arguments to update one DatasetRecord.
     * @example
     * // Update one DatasetRecord
     * const datasetRecord = await prisma.datasetRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetRecordUpdateArgs>(args: SelectSubset<T, DatasetRecordUpdateArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatasetRecords.
     * @param {DatasetRecordDeleteManyArgs} args - Arguments to filter DatasetRecords to delete.
     * @example
     * // Delete a few DatasetRecords
     * const { count } = await prisma.datasetRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetRecordDeleteManyArgs>(args?: SelectSubset<T, DatasetRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatasetRecords
     * const datasetRecord = await prisma.datasetRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetRecordUpdateManyArgs>(args: SelectSubset<T, DatasetRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetRecords and returns the data updated in the database.
     * @param {DatasetRecordUpdateManyAndReturnArgs} args - Arguments to update many DatasetRecords.
     * @example
     * // Update many DatasetRecords
     * const datasetRecord = await prisma.datasetRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DatasetRecords and only return the `id`
     * const datasetRecordWithIdOnly = await prisma.datasetRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DatasetRecord.
     * @param {DatasetRecordUpsertArgs} args - Arguments to update or create a DatasetRecord.
     * @example
     * // Update or create a DatasetRecord
     * const datasetRecord = await prisma.datasetRecord.upsert({
     *   create: {
     *     // ... data to create a DatasetRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatasetRecord we want to update
     *   }
     * })
     */
    upsert<T extends DatasetRecordUpsertArgs>(args: SelectSubset<T, DatasetRecordUpsertArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatasetRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordCountArgs} args - Arguments to filter DatasetRecords to count.
     * @example
     * // Count the number of DatasetRecords
     * const count = await prisma.datasetRecord.count({
     *   where: {
     *     // ... the filter for the DatasetRecords we want to count
     *   }
     * })
    **/
    count<T extends DatasetRecordCountArgs>(
      args?: Subset<T, DatasetRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatasetRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetRecordAggregateArgs>(args: Subset<T, DatasetRecordAggregateArgs>): Prisma.PrismaPromise<GetDatasetRecordAggregateType<T>>

    /**
     * Group by DatasetRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetRecordGroupByArgs['orderBy'] }
        : { orderBy?: DatasetRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatasetRecord model
   */
  readonly fields: DatasetRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatasetRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    predictions<T extends DatasetRecord$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, DatasetRecord$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatasetRecord model
   */
  interface DatasetRecordFieldRefs {
    readonly id: FieldRef<"DatasetRecord", 'String'>
    readonly datasetId: FieldRef<"DatasetRecord", 'String'>
    readonly features: FieldRef<"DatasetRecord", 'Json'>
    readonly actualClass: FieldRef<"DatasetRecord", 'EventClass'>
    readonly createdAt: FieldRef<"DatasetRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DatasetRecord findUnique
   */
  export type DatasetRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * Filter, which DatasetRecord to fetch.
     */
    where: DatasetRecordWhereUniqueInput
  }

  /**
   * DatasetRecord findUniqueOrThrow
   */
  export type DatasetRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * Filter, which DatasetRecord to fetch.
     */
    where: DatasetRecordWhereUniqueInput
  }

  /**
   * DatasetRecord findFirst
   */
  export type DatasetRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * Filter, which DatasetRecord to fetch.
     */
    where?: DatasetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetRecords to fetch.
     */
    orderBy?: DatasetRecordOrderByWithRelationInput | DatasetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetRecords.
     */
    cursor?: DatasetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetRecords.
     */
    distinct?: DatasetRecordScalarFieldEnum | DatasetRecordScalarFieldEnum[]
  }

  /**
   * DatasetRecord findFirstOrThrow
   */
  export type DatasetRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * Filter, which DatasetRecord to fetch.
     */
    where?: DatasetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetRecords to fetch.
     */
    orderBy?: DatasetRecordOrderByWithRelationInput | DatasetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetRecords.
     */
    cursor?: DatasetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetRecords.
     */
    distinct?: DatasetRecordScalarFieldEnum | DatasetRecordScalarFieldEnum[]
  }

  /**
   * DatasetRecord findMany
   */
  export type DatasetRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * Filter, which DatasetRecords to fetch.
     */
    where?: DatasetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetRecords to fetch.
     */
    orderBy?: DatasetRecordOrderByWithRelationInput | DatasetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatasetRecords.
     */
    cursor?: DatasetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetRecords.
     */
    distinct?: DatasetRecordScalarFieldEnum | DatasetRecordScalarFieldEnum[]
  }

  /**
   * DatasetRecord create
   */
  export type DatasetRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DatasetRecord.
     */
    data: XOR<DatasetRecordCreateInput, DatasetRecordUncheckedCreateInput>
  }

  /**
   * DatasetRecord createMany
   */
  export type DatasetRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatasetRecords.
     */
    data: DatasetRecordCreateManyInput | DatasetRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatasetRecord createManyAndReturn
   */
  export type DatasetRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * The data used to create many DatasetRecords.
     */
    data: DatasetRecordCreateManyInput | DatasetRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetRecord update
   */
  export type DatasetRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DatasetRecord.
     */
    data: XOR<DatasetRecordUpdateInput, DatasetRecordUncheckedUpdateInput>
    /**
     * Choose, which DatasetRecord to update.
     */
    where: DatasetRecordWhereUniqueInput
  }

  /**
   * DatasetRecord updateMany
   */
  export type DatasetRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatasetRecords.
     */
    data: XOR<DatasetRecordUpdateManyMutationInput, DatasetRecordUncheckedUpdateManyInput>
    /**
     * Filter which DatasetRecords to update
     */
    where?: DatasetRecordWhereInput
    /**
     * Limit how many DatasetRecords to update.
     */
    limit?: number
  }

  /**
   * DatasetRecord updateManyAndReturn
   */
  export type DatasetRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * The data used to update DatasetRecords.
     */
    data: XOR<DatasetRecordUpdateManyMutationInput, DatasetRecordUncheckedUpdateManyInput>
    /**
     * Filter which DatasetRecords to update
     */
    where?: DatasetRecordWhereInput
    /**
     * Limit how many DatasetRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetRecord upsert
   */
  export type DatasetRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DatasetRecord to update in case it exists.
     */
    where: DatasetRecordWhereUniqueInput
    /**
     * In case the DatasetRecord found by the `where` argument doesn't exist, create a new DatasetRecord with this data.
     */
    create: XOR<DatasetRecordCreateInput, DatasetRecordUncheckedCreateInput>
    /**
     * In case the DatasetRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetRecordUpdateInput, DatasetRecordUncheckedUpdateInput>
  }

  /**
   * DatasetRecord delete
   */
  export type DatasetRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    /**
     * Filter which DatasetRecord to delete.
     */
    where: DatasetRecordWhereUniqueInput
  }

  /**
   * DatasetRecord deleteMany
   */
  export type DatasetRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetRecords to delete
     */
    where?: DatasetRecordWhereInput
    /**
     * Limit how many DatasetRecords to delete.
     */
    limit?: number
  }

  /**
   * DatasetRecord.predictions
   */
  export type DatasetRecord$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    where?: PredictionResultWhereInput
    orderBy?: PredictionResultOrderByWithRelationInput | PredictionResultOrderByWithRelationInput[]
    cursor?: PredictionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionResultScalarFieldEnum | PredictionResultScalarFieldEnum[]
  }

  /**
   * DatasetRecord without action
   */
  export type DatasetRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
  }


  /**
   * Model ModelVersion
   */

  export type AggregateModelVersion = {
    _count: ModelVersionCountAggregateOutputType | null
    _avg: ModelVersionAvgAggregateOutputType | null
    _sum: ModelVersionSumAggregateOutputType | null
    _min: ModelVersionMinAggregateOutputType | null
    _max: ModelVersionMaxAggregateOutputType | null
  }

  export type ModelVersionAvgAggregateOutputType = {
    inputSize: number | null
  }

  export type ModelVersionSumAggregateOutputType = {
    inputSize: number | null
  }

  export type ModelVersionMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    description: string | null
    status: $Enums.ModelStatus | null
    artifactUri: string | null
    scalerUri: string | null
    artifactChecksum: string | null
    framework: string | null
    architecture: string | null
    inputSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelVersionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    description: string | null
    status: $Enums.ModelStatus | null
    artifactUri: string | null
    scalerUri: string | null
    artifactChecksum: string | null
    framework: string | null
    architecture: string | null
    inputSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelVersionCountAggregateOutputType = {
    id: number
    name: number
    version: number
    description: number
    status: number
    artifactUri: number
    scalerUri: number
    artifactChecksum: number
    features: number
    classes: number
    preprocessing: number
    metrics: number
    framework: number
    architecture: number
    inputSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelVersionAvgAggregateInputType = {
    inputSize?: true
  }

  export type ModelVersionSumAggregateInputType = {
    inputSize?: true
  }

  export type ModelVersionMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    description?: true
    status?: true
    artifactUri?: true
    scalerUri?: true
    artifactChecksum?: true
    framework?: true
    architecture?: true
    inputSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelVersionMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    description?: true
    status?: true
    artifactUri?: true
    scalerUri?: true
    artifactChecksum?: true
    framework?: true
    architecture?: true
    inputSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelVersionCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    description?: true
    status?: true
    artifactUri?: true
    scalerUri?: true
    artifactChecksum?: true
    features?: true
    classes?: true
    preprocessing?: true
    metrics?: true
    framework?: true
    architecture?: true
    inputSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelVersion to aggregate.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelVersions
    **/
    _count?: true | ModelVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelVersionMaxAggregateInputType
  }

  export type GetModelVersionAggregateType<T extends ModelVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateModelVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelVersion[P]>
      : GetScalarType<T[P], AggregateModelVersion[P]>
  }




  export type ModelVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelVersionWhereInput
    orderBy?: ModelVersionOrderByWithAggregationInput | ModelVersionOrderByWithAggregationInput[]
    by: ModelVersionScalarFieldEnum[] | ModelVersionScalarFieldEnum
    having?: ModelVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelVersionCountAggregateInputType | true
    _avg?: ModelVersionAvgAggregateInputType
    _sum?: ModelVersionSumAggregateInputType
    _min?: ModelVersionMinAggregateInputType
    _max?: ModelVersionMaxAggregateInputType
  }

  export type ModelVersionGroupByOutputType = {
    id: string
    name: string
    version: string
    description: string | null
    status: $Enums.ModelStatus
    artifactUri: string
    scalerUri: string | null
    artifactChecksum: string | null
    features: JsonValue
    classes: JsonValue
    preprocessing: JsonValue | null
    metrics: JsonValue | null
    framework: string
    architecture: string
    inputSize: number
    createdAt: Date
    updatedAt: Date
    _count: ModelVersionCountAggregateOutputType | null
    _avg: ModelVersionAvgAggregateOutputType | null
    _sum: ModelVersionSumAggregateOutputType | null
    _min: ModelVersionMinAggregateOutputType | null
    _max: ModelVersionMaxAggregateOutputType | null
  }

  type GetModelVersionGroupByPayload<T extends ModelVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ModelVersionGroupByOutputType[P]>
        }
      >
    >


  export type ModelVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    description?: boolean
    status?: boolean
    artifactUri?: boolean
    scalerUri?: boolean
    artifactChecksum?: boolean
    features?: boolean
    classes?: boolean
    preprocessing?: boolean
    metrics?: boolean
    framework?: boolean
    architecture?: boolean
    inputSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inferenceRequests?: boolean | ModelVersion$inferenceRequestsArgs<ExtArgs>
    _count?: boolean | ModelVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelVersion"]>

  export type ModelVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    description?: boolean
    status?: boolean
    artifactUri?: boolean
    scalerUri?: boolean
    artifactChecksum?: boolean
    features?: boolean
    classes?: boolean
    preprocessing?: boolean
    metrics?: boolean
    framework?: boolean
    architecture?: boolean
    inputSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modelVersion"]>

  export type ModelVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    description?: boolean
    status?: boolean
    artifactUri?: boolean
    scalerUri?: boolean
    artifactChecksum?: boolean
    features?: boolean
    classes?: boolean
    preprocessing?: boolean
    metrics?: boolean
    framework?: boolean
    architecture?: boolean
    inputSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modelVersion"]>

  export type ModelVersionSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    description?: boolean
    status?: boolean
    artifactUri?: boolean
    scalerUri?: boolean
    artifactChecksum?: boolean
    features?: boolean
    classes?: boolean
    preprocessing?: boolean
    metrics?: boolean
    framework?: boolean
    architecture?: boolean
    inputSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "description" | "status" | "artifactUri" | "scalerUri" | "artifactChecksum" | "features" | "classes" | "preprocessing" | "metrics" | "framework" | "architecture" | "inputSize" | "createdAt" | "updatedAt", ExtArgs["result"]["modelVersion"]>
  export type ModelVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inferenceRequests?: boolean | ModelVersion$inferenceRequestsArgs<ExtArgs>
    _count?: boolean | ModelVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelVersion"
    objects: {
      inferenceRequests: Prisma.$InferenceRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: string
      description: string | null
      status: $Enums.ModelStatus
      artifactUri: string
      scalerUri: string | null
      artifactChecksum: string | null
      features: Prisma.JsonValue
      classes: Prisma.JsonValue
      preprocessing: Prisma.JsonValue | null
      metrics: Prisma.JsonValue | null
      framework: string
      architecture: string
      inputSize: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelVersion"]>
    composites: {}
  }

  type ModelVersionGetPayload<S extends boolean | null | undefined | ModelVersionDefaultArgs> = $Result.GetResult<Prisma.$ModelVersionPayload, S>

  type ModelVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelVersionCountAggregateInputType | true
    }

  export interface ModelVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelVersion'], meta: { name: 'ModelVersion' } }
    /**
     * Find zero or one ModelVersion that matches the filter.
     * @param {ModelVersionFindUniqueArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelVersionFindUniqueArgs>(args: SelectSubset<T, ModelVersionFindUniqueArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelVersionFindUniqueOrThrowArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionFindFirstArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelVersionFindFirstArgs>(args?: SelectSubset<T, ModelVersionFindFirstArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionFindFirstOrThrowArgs} args - Arguments to find a ModelVersion
     * @example
     * // Get one ModelVersion
     * const modelVersion = await prisma.modelVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelVersions
     * const modelVersions = await prisma.modelVersion.findMany()
     * 
     * // Get first 10 ModelVersions
     * const modelVersions = await prisma.modelVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelVersionWithIdOnly = await prisma.modelVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelVersionFindManyArgs>(args?: SelectSubset<T, ModelVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelVersion.
     * @param {ModelVersionCreateArgs} args - Arguments to create a ModelVersion.
     * @example
     * // Create one ModelVersion
     * const ModelVersion = await prisma.modelVersion.create({
     *   data: {
     *     // ... data to create a ModelVersion
     *   }
     * })
     * 
     */
    create<T extends ModelVersionCreateArgs>(args: SelectSubset<T, ModelVersionCreateArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelVersions.
     * @param {ModelVersionCreateManyArgs} args - Arguments to create many ModelVersions.
     * @example
     * // Create many ModelVersions
     * const modelVersion = await prisma.modelVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelVersionCreateManyArgs>(args?: SelectSubset<T, ModelVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelVersions and returns the data saved in the database.
     * @param {ModelVersionCreateManyAndReturnArgs} args - Arguments to create many ModelVersions.
     * @example
     * // Create many ModelVersions
     * const modelVersion = await prisma.modelVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelVersions and only return the `id`
     * const modelVersionWithIdOnly = await prisma.modelVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelVersion.
     * @param {ModelVersionDeleteArgs} args - Arguments to delete one ModelVersion.
     * @example
     * // Delete one ModelVersion
     * const ModelVersion = await prisma.modelVersion.delete({
     *   where: {
     *     // ... filter to delete one ModelVersion
     *   }
     * })
     * 
     */
    delete<T extends ModelVersionDeleteArgs>(args: SelectSubset<T, ModelVersionDeleteArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelVersion.
     * @param {ModelVersionUpdateArgs} args - Arguments to update one ModelVersion.
     * @example
     * // Update one ModelVersion
     * const modelVersion = await prisma.modelVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelVersionUpdateArgs>(args: SelectSubset<T, ModelVersionUpdateArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelVersions.
     * @param {ModelVersionDeleteManyArgs} args - Arguments to filter ModelVersions to delete.
     * @example
     * // Delete a few ModelVersions
     * const { count } = await prisma.modelVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelVersionDeleteManyArgs>(args?: SelectSubset<T, ModelVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelVersions
     * const modelVersion = await prisma.modelVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelVersionUpdateManyArgs>(args: SelectSubset<T, ModelVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelVersions and returns the data updated in the database.
     * @param {ModelVersionUpdateManyAndReturnArgs} args - Arguments to update many ModelVersions.
     * @example
     * // Update many ModelVersions
     * const modelVersion = await prisma.modelVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelVersions and only return the `id`
     * const modelVersionWithIdOnly = await prisma.modelVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelVersion.
     * @param {ModelVersionUpsertArgs} args - Arguments to update or create a ModelVersion.
     * @example
     * // Update or create a ModelVersion
     * const modelVersion = await prisma.modelVersion.upsert({
     *   create: {
     *     // ... data to create a ModelVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelVersion we want to update
     *   }
     * })
     */
    upsert<T extends ModelVersionUpsertArgs>(args: SelectSubset<T, ModelVersionUpsertArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionCountArgs} args - Arguments to filter ModelVersions to count.
     * @example
     * // Count the number of ModelVersions
     * const count = await prisma.modelVersion.count({
     *   where: {
     *     // ... the filter for the ModelVersions we want to count
     *   }
     * })
    **/
    count<T extends ModelVersionCountArgs>(
      args?: Subset<T, ModelVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelVersionAggregateArgs>(args: Subset<T, ModelVersionAggregateArgs>): Prisma.PrismaPromise<GetModelVersionAggregateType<T>>

    /**
     * Group by ModelVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelVersionGroupByArgs['orderBy'] }
        : { orderBy?: ModelVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelVersion model
   */
  readonly fields: ModelVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inferenceRequests<T extends ModelVersion$inferenceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, ModelVersion$inferenceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelVersion model
   */
  interface ModelVersionFieldRefs {
    readonly id: FieldRef<"ModelVersion", 'String'>
    readonly name: FieldRef<"ModelVersion", 'String'>
    readonly version: FieldRef<"ModelVersion", 'String'>
    readonly description: FieldRef<"ModelVersion", 'String'>
    readonly status: FieldRef<"ModelVersion", 'ModelStatus'>
    readonly artifactUri: FieldRef<"ModelVersion", 'String'>
    readonly scalerUri: FieldRef<"ModelVersion", 'String'>
    readonly artifactChecksum: FieldRef<"ModelVersion", 'String'>
    readonly features: FieldRef<"ModelVersion", 'Json'>
    readonly classes: FieldRef<"ModelVersion", 'Json'>
    readonly preprocessing: FieldRef<"ModelVersion", 'Json'>
    readonly metrics: FieldRef<"ModelVersion", 'Json'>
    readonly framework: FieldRef<"ModelVersion", 'String'>
    readonly architecture: FieldRef<"ModelVersion", 'String'>
    readonly inputSize: FieldRef<"ModelVersion", 'Int'>
    readonly createdAt: FieldRef<"ModelVersion", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelVersion findUnique
   */
  export type ModelVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion findUniqueOrThrow
   */
  export type ModelVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion findFirst
   */
  export type ModelVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelVersions.
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVersions.
     */
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * ModelVersion findFirstOrThrow
   */
  export type ModelVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersion to fetch.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelVersions.
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVersions.
     */
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * ModelVersion findMany
   */
  export type ModelVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter, which ModelVersions to fetch.
     */
    where?: ModelVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVersions to fetch.
     */
    orderBy?: ModelVersionOrderByWithRelationInput | ModelVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelVersions.
     */
    cursor?: ModelVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVersions.
     */
    distinct?: ModelVersionScalarFieldEnum | ModelVersionScalarFieldEnum[]
  }

  /**
   * ModelVersion create
   */
  export type ModelVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelVersion.
     */
    data: XOR<ModelVersionCreateInput, ModelVersionUncheckedCreateInput>
  }

  /**
   * ModelVersion createMany
   */
  export type ModelVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelVersions.
     */
    data: ModelVersionCreateManyInput | ModelVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelVersion createManyAndReturn
   */
  export type ModelVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ModelVersions.
     */
    data: ModelVersionCreateManyInput | ModelVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelVersion update
   */
  export type ModelVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelVersion.
     */
    data: XOR<ModelVersionUpdateInput, ModelVersionUncheckedUpdateInput>
    /**
     * Choose, which ModelVersion to update.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion updateMany
   */
  export type ModelVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelVersions.
     */
    data: XOR<ModelVersionUpdateManyMutationInput, ModelVersionUncheckedUpdateManyInput>
    /**
     * Filter which ModelVersions to update
     */
    where?: ModelVersionWhereInput
    /**
     * Limit how many ModelVersions to update.
     */
    limit?: number
  }

  /**
   * ModelVersion updateManyAndReturn
   */
  export type ModelVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * The data used to update ModelVersions.
     */
    data: XOR<ModelVersionUpdateManyMutationInput, ModelVersionUncheckedUpdateManyInput>
    /**
     * Filter which ModelVersions to update
     */
    where?: ModelVersionWhereInput
    /**
     * Limit how many ModelVersions to update.
     */
    limit?: number
  }

  /**
   * ModelVersion upsert
   */
  export type ModelVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelVersion to update in case it exists.
     */
    where: ModelVersionWhereUniqueInput
    /**
     * In case the ModelVersion found by the `where` argument doesn't exist, create a new ModelVersion with this data.
     */
    create: XOR<ModelVersionCreateInput, ModelVersionUncheckedCreateInput>
    /**
     * In case the ModelVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelVersionUpdateInput, ModelVersionUncheckedUpdateInput>
  }

  /**
   * ModelVersion delete
   */
  export type ModelVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    /**
     * Filter which ModelVersion to delete.
     */
    where: ModelVersionWhereUniqueInput
  }

  /**
   * ModelVersion deleteMany
   */
  export type ModelVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelVersions to delete
     */
    where?: ModelVersionWhereInput
    /**
     * Limit how many ModelVersions to delete.
     */
    limit?: number
  }

  /**
   * ModelVersion.inferenceRequests
   */
  export type ModelVersion$inferenceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    where?: InferenceRequestWhereInput
    orderBy?: InferenceRequestOrderByWithRelationInput | InferenceRequestOrderByWithRelationInput[]
    cursor?: InferenceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InferenceRequestScalarFieldEnum | InferenceRequestScalarFieldEnum[]
  }

  /**
   * ModelVersion without action
   */
  export type ModelVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
  }


  /**
   * Model InferenceRequest
   */

  export type AggregateInferenceRequest = {
    _count: InferenceRequestCountAggregateOutputType | null
    _avg: InferenceRequestAvgAggregateOutputType | null
    _sum: InferenceRequestSumAggregateOutputType | null
    _min: InferenceRequestMinAggregateOutputType | null
    _max: InferenceRequestMaxAggregateOutputType | null
  }

  export type InferenceRequestAvgAggregateOutputType = {
    observationCount: number | null
    latencyMs: number | null
    retryCount: number | null
  }

  export type InferenceRequestSumAggregateOutputType = {
    observationCount: number | null
    latencyMs: number | null
    retryCount: number | null
  }

  export type InferenceRequestMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    traceId: string | null
    idempotencyKey: string | null
    type: $Enums.InferenceType | null
    status: $Enums.InferenceStatus | null
    observationCount: number | null
    latencyMs: number | null
    retryCount: number | null
    errorCode: string | null
    errorMessage: string | null
    userId: string | null
    modelVersionId: string | null
    queuedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InferenceRequestMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    traceId: string | null
    idempotencyKey: string | null
    type: $Enums.InferenceType | null
    status: $Enums.InferenceStatus | null
    observationCount: number | null
    latencyMs: number | null
    retryCount: number | null
    errorCode: string | null
    errorMessage: string | null
    userId: string | null
    modelVersionId: string | null
    queuedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InferenceRequestCountAggregateOutputType = {
    id: number
    requestId: number
    traceId: number
    idempotencyKey: number
    type: number
    status: number
    inputFeatures: number
    observationCount: number
    latencyMs: number
    retryCount: number
    errorCode: number
    errorMessage: number
    userId: number
    modelVersionId: number
    queuedAt: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InferenceRequestAvgAggregateInputType = {
    observationCount?: true
    latencyMs?: true
    retryCount?: true
  }

  export type InferenceRequestSumAggregateInputType = {
    observationCount?: true
    latencyMs?: true
    retryCount?: true
  }

  export type InferenceRequestMinAggregateInputType = {
    id?: true
    requestId?: true
    traceId?: true
    idempotencyKey?: true
    type?: true
    status?: true
    observationCount?: true
    latencyMs?: true
    retryCount?: true
    errorCode?: true
    errorMessage?: true
    userId?: true
    modelVersionId?: true
    queuedAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InferenceRequestMaxAggregateInputType = {
    id?: true
    requestId?: true
    traceId?: true
    idempotencyKey?: true
    type?: true
    status?: true
    observationCount?: true
    latencyMs?: true
    retryCount?: true
    errorCode?: true
    errorMessage?: true
    userId?: true
    modelVersionId?: true
    queuedAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InferenceRequestCountAggregateInputType = {
    id?: true
    requestId?: true
    traceId?: true
    idempotencyKey?: true
    type?: true
    status?: true
    inputFeatures?: true
    observationCount?: true
    latencyMs?: true
    retryCount?: true
    errorCode?: true
    errorMessage?: true
    userId?: true
    modelVersionId?: true
    queuedAt?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InferenceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InferenceRequest to aggregate.
     */
    where?: InferenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceRequests to fetch.
     */
    orderBy?: InferenceRequestOrderByWithRelationInput | InferenceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InferenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InferenceRequests
    **/
    _count?: true | InferenceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InferenceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InferenceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InferenceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InferenceRequestMaxAggregateInputType
  }

  export type GetInferenceRequestAggregateType<T extends InferenceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateInferenceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInferenceRequest[P]>
      : GetScalarType<T[P], AggregateInferenceRequest[P]>
  }




  export type InferenceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InferenceRequestWhereInput
    orderBy?: InferenceRequestOrderByWithAggregationInput | InferenceRequestOrderByWithAggregationInput[]
    by: InferenceRequestScalarFieldEnum[] | InferenceRequestScalarFieldEnum
    having?: InferenceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InferenceRequestCountAggregateInputType | true
    _avg?: InferenceRequestAvgAggregateInputType
    _sum?: InferenceRequestSumAggregateInputType
    _min?: InferenceRequestMinAggregateInputType
    _max?: InferenceRequestMaxAggregateInputType
  }

  export type InferenceRequestGroupByOutputType = {
    id: string
    requestId: string
    traceId: string | null
    idempotencyKey: string | null
    type: $Enums.InferenceType
    status: $Enums.InferenceStatus
    inputFeatures: JsonValue
    observationCount: number
    latencyMs: number | null
    retryCount: number
    errorCode: string | null
    errorMessage: string | null
    userId: string | null
    modelVersionId: string | null
    queuedAt: Date
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InferenceRequestCountAggregateOutputType | null
    _avg: InferenceRequestAvgAggregateOutputType | null
    _sum: InferenceRequestSumAggregateOutputType | null
    _min: InferenceRequestMinAggregateOutputType | null
    _max: InferenceRequestMaxAggregateOutputType | null
  }

  type GetInferenceRequestGroupByPayload<T extends InferenceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InferenceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InferenceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InferenceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], InferenceRequestGroupByOutputType[P]>
        }
      >
    >


  export type InferenceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    traceId?: boolean
    idempotencyKey?: boolean
    type?: boolean
    status?: boolean
    inputFeatures?: boolean
    observationCount?: boolean
    latencyMs?: boolean
    retryCount?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    userId?: boolean
    modelVersionId?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | InferenceRequest$userArgs<ExtArgs>
    modelVersion?: boolean | InferenceRequest$modelVersionArgs<ExtArgs>
    results?: boolean | InferenceRequest$resultsArgs<ExtArgs>
    _count?: boolean | InferenceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inferenceRequest"]>

  export type InferenceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    traceId?: boolean
    idempotencyKey?: boolean
    type?: boolean
    status?: boolean
    inputFeatures?: boolean
    observationCount?: boolean
    latencyMs?: boolean
    retryCount?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    userId?: boolean
    modelVersionId?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | InferenceRequest$userArgs<ExtArgs>
    modelVersion?: boolean | InferenceRequest$modelVersionArgs<ExtArgs>
  }, ExtArgs["result"]["inferenceRequest"]>

  export type InferenceRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    traceId?: boolean
    idempotencyKey?: boolean
    type?: boolean
    status?: boolean
    inputFeatures?: boolean
    observationCount?: boolean
    latencyMs?: boolean
    retryCount?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    userId?: boolean
    modelVersionId?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | InferenceRequest$userArgs<ExtArgs>
    modelVersion?: boolean | InferenceRequest$modelVersionArgs<ExtArgs>
  }, ExtArgs["result"]["inferenceRequest"]>

  export type InferenceRequestSelectScalar = {
    id?: boolean
    requestId?: boolean
    traceId?: boolean
    idempotencyKey?: boolean
    type?: boolean
    status?: boolean
    inputFeatures?: boolean
    observationCount?: boolean
    latencyMs?: boolean
    retryCount?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    userId?: boolean
    modelVersionId?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InferenceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "traceId" | "idempotencyKey" | "type" | "status" | "inputFeatures" | "observationCount" | "latencyMs" | "retryCount" | "errorCode" | "errorMessage" | "userId" | "modelVersionId" | "queuedAt" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["inferenceRequest"]>
  export type InferenceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InferenceRequest$userArgs<ExtArgs>
    modelVersion?: boolean | InferenceRequest$modelVersionArgs<ExtArgs>
    results?: boolean | InferenceRequest$resultsArgs<ExtArgs>
    _count?: boolean | InferenceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InferenceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InferenceRequest$userArgs<ExtArgs>
    modelVersion?: boolean | InferenceRequest$modelVersionArgs<ExtArgs>
  }
  export type InferenceRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | InferenceRequest$userArgs<ExtArgs>
    modelVersion?: boolean | InferenceRequest$modelVersionArgs<ExtArgs>
  }

  export type $InferenceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InferenceRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      modelVersion: Prisma.$ModelVersionPayload<ExtArgs> | null
      results: Prisma.$PredictionResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      traceId: string | null
      idempotencyKey: string | null
      type: $Enums.InferenceType
      status: $Enums.InferenceStatus
      inputFeatures: Prisma.JsonValue
      observationCount: number
      latencyMs: number | null
      retryCount: number
      errorCode: string | null
      errorMessage: string | null
      userId: string | null
      modelVersionId: string | null
      queuedAt: Date
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inferenceRequest"]>
    composites: {}
  }

  type InferenceRequestGetPayload<S extends boolean | null | undefined | InferenceRequestDefaultArgs> = $Result.GetResult<Prisma.$InferenceRequestPayload, S>

  type InferenceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InferenceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InferenceRequestCountAggregateInputType | true
    }

  export interface InferenceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InferenceRequest'], meta: { name: 'InferenceRequest' } }
    /**
     * Find zero or one InferenceRequest that matches the filter.
     * @param {InferenceRequestFindUniqueArgs} args - Arguments to find a InferenceRequest
     * @example
     * // Get one InferenceRequest
     * const inferenceRequest = await prisma.inferenceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InferenceRequestFindUniqueArgs>(args: SelectSubset<T, InferenceRequestFindUniqueArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InferenceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InferenceRequestFindUniqueOrThrowArgs} args - Arguments to find a InferenceRequest
     * @example
     * // Get one InferenceRequest
     * const inferenceRequest = await prisma.inferenceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InferenceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, InferenceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InferenceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestFindFirstArgs} args - Arguments to find a InferenceRequest
     * @example
     * // Get one InferenceRequest
     * const inferenceRequest = await prisma.inferenceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InferenceRequestFindFirstArgs>(args?: SelectSubset<T, InferenceRequestFindFirstArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InferenceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestFindFirstOrThrowArgs} args - Arguments to find a InferenceRequest
     * @example
     * // Get one InferenceRequest
     * const inferenceRequest = await prisma.inferenceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InferenceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, InferenceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InferenceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InferenceRequests
     * const inferenceRequests = await prisma.inferenceRequest.findMany()
     * 
     * // Get first 10 InferenceRequests
     * const inferenceRequests = await prisma.inferenceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inferenceRequestWithIdOnly = await prisma.inferenceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InferenceRequestFindManyArgs>(args?: SelectSubset<T, InferenceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InferenceRequest.
     * @param {InferenceRequestCreateArgs} args - Arguments to create a InferenceRequest.
     * @example
     * // Create one InferenceRequest
     * const InferenceRequest = await prisma.inferenceRequest.create({
     *   data: {
     *     // ... data to create a InferenceRequest
     *   }
     * })
     * 
     */
    create<T extends InferenceRequestCreateArgs>(args: SelectSubset<T, InferenceRequestCreateArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InferenceRequests.
     * @param {InferenceRequestCreateManyArgs} args - Arguments to create many InferenceRequests.
     * @example
     * // Create many InferenceRequests
     * const inferenceRequest = await prisma.inferenceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InferenceRequestCreateManyArgs>(args?: SelectSubset<T, InferenceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InferenceRequests and returns the data saved in the database.
     * @param {InferenceRequestCreateManyAndReturnArgs} args - Arguments to create many InferenceRequests.
     * @example
     * // Create many InferenceRequests
     * const inferenceRequest = await prisma.inferenceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InferenceRequests and only return the `id`
     * const inferenceRequestWithIdOnly = await prisma.inferenceRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InferenceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, InferenceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InferenceRequest.
     * @param {InferenceRequestDeleteArgs} args - Arguments to delete one InferenceRequest.
     * @example
     * // Delete one InferenceRequest
     * const InferenceRequest = await prisma.inferenceRequest.delete({
     *   where: {
     *     // ... filter to delete one InferenceRequest
     *   }
     * })
     * 
     */
    delete<T extends InferenceRequestDeleteArgs>(args: SelectSubset<T, InferenceRequestDeleteArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InferenceRequest.
     * @param {InferenceRequestUpdateArgs} args - Arguments to update one InferenceRequest.
     * @example
     * // Update one InferenceRequest
     * const inferenceRequest = await prisma.inferenceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InferenceRequestUpdateArgs>(args: SelectSubset<T, InferenceRequestUpdateArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InferenceRequests.
     * @param {InferenceRequestDeleteManyArgs} args - Arguments to filter InferenceRequests to delete.
     * @example
     * // Delete a few InferenceRequests
     * const { count } = await prisma.inferenceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InferenceRequestDeleteManyArgs>(args?: SelectSubset<T, InferenceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InferenceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InferenceRequests
     * const inferenceRequest = await prisma.inferenceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InferenceRequestUpdateManyArgs>(args: SelectSubset<T, InferenceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InferenceRequests and returns the data updated in the database.
     * @param {InferenceRequestUpdateManyAndReturnArgs} args - Arguments to update many InferenceRequests.
     * @example
     * // Update many InferenceRequests
     * const inferenceRequest = await prisma.inferenceRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InferenceRequests and only return the `id`
     * const inferenceRequestWithIdOnly = await prisma.inferenceRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InferenceRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, InferenceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InferenceRequest.
     * @param {InferenceRequestUpsertArgs} args - Arguments to update or create a InferenceRequest.
     * @example
     * // Update or create a InferenceRequest
     * const inferenceRequest = await prisma.inferenceRequest.upsert({
     *   create: {
     *     // ... data to create a InferenceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InferenceRequest we want to update
     *   }
     * })
     */
    upsert<T extends InferenceRequestUpsertArgs>(args: SelectSubset<T, InferenceRequestUpsertArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InferenceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestCountArgs} args - Arguments to filter InferenceRequests to count.
     * @example
     * // Count the number of InferenceRequests
     * const count = await prisma.inferenceRequest.count({
     *   where: {
     *     // ... the filter for the InferenceRequests we want to count
     *   }
     * })
    **/
    count<T extends InferenceRequestCountArgs>(
      args?: Subset<T, InferenceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InferenceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InferenceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InferenceRequestAggregateArgs>(args: Subset<T, InferenceRequestAggregateArgs>): Prisma.PrismaPromise<GetInferenceRequestAggregateType<T>>

    /**
     * Group by InferenceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InferenceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InferenceRequestGroupByArgs['orderBy'] }
        : { orderBy?: InferenceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InferenceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInferenceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InferenceRequest model
   */
  readonly fields: InferenceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InferenceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InferenceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends InferenceRequest$userArgs<ExtArgs> = {}>(args?: Subset<T, InferenceRequest$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    modelVersion<T extends InferenceRequest$modelVersionArgs<ExtArgs> = {}>(args?: Subset<T, InferenceRequest$modelVersionArgs<ExtArgs>>): Prisma__ModelVersionClient<$Result.GetResult<Prisma.$ModelVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    results<T extends InferenceRequest$resultsArgs<ExtArgs> = {}>(args?: Subset<T, InferenceRequest$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InferenceRequest model
   */
  interface InferenceRequestFieldRefs {
    readonly id: FieldRef<"InferenceRequest", 'String'>
    readonly requestId: FieldRef<"InferenceRequest", 'String'>
    readonly traceId: FieldRef<"InferenceRequest", 'String'>
    readonly idempotencyKey: FieldRef<"InferenceRequest", 'String'>
    readonly type: FieldRef<"InferenceRequest", 'InferenceType'>
    readonly status: FieldRef<"InferenceRequest", 'InferenceStatus'>
    readonly inputFeatures: FieldRef<"InferenceRequest", 'Json'>
    readonly observationCount: FieldRef<"InferenceRequest", 'Int'>
    readonly latencyMs: FieldRef<"InferenceRequest", 'Int'>
    readonly retryCount: FieldRef<"InferenceRequest", 'Int'>
    readonly errorCode: FieldRef<"InferenceRequest", 'String'>
    readonly errorMessage: FieldRef<"InferenceRequest", 'String'>
    readonly userId: FieldRef<"InferenceRequest", 'String'>
    readonly modelVersionId: FieldRef<"InferenceRequest", 'String'>
    readonly queuedAt: FieldRef<"InferenceRequest", 'DateTime'>
    readonly startedAt: FieldRef<"InferenceRequest", 'DateTime'>
    readonly completedAt: FieldRef<"InferenceRequest", 'DateTime'>
    readonly createdAt: FieldRef<"InferenceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"InferenceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InferenceRequest findUnique
   */
  export type InferenceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which InferenceRequest to fetch.
     */
    where: InferenceRequestWhereUniqueInput
  }

  /**
   * InferenceRequest findUniqueOrThrow
   */
  export type InferenceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which InferenceRequest to fetch.
     */
    where: InferenceRequestWhereUniqueInput
  }

  /**
   * InferenceRequest findFirst
   */
  export type InferenceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which InferenceRequest to fetch.
     */
    where?: InferenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceRequests to fetch.
     */
    orderBy?: InferenceRequestOrderByWithRelationInput | InferenceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InferenceRequests.
     */
    cursor?: InferenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InferenceRequests.
     */
    distinct?: InferenceRequestScalarFieldEnum | InferenceRequestScalarFieldEnum[]
  }

  /**
   * InferenceRequest findFirstOrThrow
   */
  export type InferenceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which InferenceRequest to fetch.
     */
    where?: InferenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceRequests to fetch.
     */
    orderBy?: InferenceRequestOrderByWithRelationInput | InferenceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InferenceRequests.
     */
    cursor?: InferenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InferenceRequests.
     */
    distinct?: InferenceRequestScalarFieldEnum | InferenceRequestScalarFieldEnum[]
  }

  /**
   * InferenceRequest findMany
   */
  export type InferenceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * Filter, which InferenceRequests to fetch.
     */
    where?: InferenceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceRequests to fetch.
     */
    orderBy?: InferenceRequestOrderByWithRelationInput | InferenceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InferenceRequests.
     */
    cursor?: InferenceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InferenceRequests.
     */
    distinct?: InferenceRequestScalarFieldEnum | InferenceRequestScalarFieldEnum[]
  }

  /**
   * InferenceRequest create
   */
  export type InferenceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a InferenceRequest.
     */
    data: XOR<InferenceRequestCreateInput, InferenceRequestUncheckedCreateInput>
  }

  /**
   * InferenceRequest createMany
   */
  export type InferenceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InferenceRequests.
     */
    data: InferenceRequestCreateManyInput | InferenceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InferenceRequest createManyAndReturn
   */
  export type InferenceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * The data used to create many InferenceRequests.
     */
    data: InferenceRequestCreateManyInput | InferenceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InferenceRequest update
   */
  export type InferenceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a InferenceRequest.
     */
    data: XOR<InferenceRequestUpdateInput, InferenceRequestUncheckedUpdateInput>
    /**
     * Choose, which InferenceRequest to update.
     */
    where: InferenceRequestWhereUniqueInput
  }

  /**
   * InferenceRequest updateMany
   */
  export type InferenceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InferenceRequests.
     */
    data: XOR<InferenceRequestUpdateManyMutationInput, InferenceRequestUncheckedUpdateManyInput>
    /**
     * Filter which InferenceRequests to update
     */
    where?: InferenceRequestWhereInput
    /**
     * Limit how many InferenceRequests to update.
     */
    limit?: number
  }

  /**
   * InferenceRequest updateManyAndReturn
   */
  export type InferenceRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * The data used to update InferenceRequests.
     */
    data: XOR<InferenceRequestUpdateManyMutationInput, InferenceRequestUncheckedUpdateManyInput>
    /**
     * Filter which InferenceRequests to update
     */
    where?: InferenceRequestWhereInput
    /**
     * Limit how many InferenceRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InferenceRequest upsert
   */
  export type InferenceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the InferenceRequest to update in case it exists.
     */
    where: InferenceRequestWhereUniqueInput
    /**
     * In case the InferenceRequest found by the `where` argument doesn't exist, create a new InferenceRequest with this data.
     */
    create: XOR<InferenceRequestCreateInput, InferenceRequestUncheckedCreateInput>
    /**
     * In case the InferenceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InferenceRequestUpdateInput, InferenceRequestUncheckedUpdateInput>
  }

  /**
   * InferenceRequest delete
   */
  export type InferenceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
    /**
     * Filter which InferenceRequest to delete.
     */
    where: InferenceRequestWhereUniqueInput
  }

  /**
   * InferenceRequest deleteMany
   */
  export type InferenceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InferenceRequests to delete
     */
    where?: InferenceRequestWhereInput
    /**
     * Limit how many InferenceRequests to delete.
     */
    limit?: number
  }

  /**
   * InferenceRequest.user
   */
  export type InferenceRequest$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * InferenceRequest.modelVersion
   */
  export type InferenceRequest$modelVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVersion
     */
    select?: ModelVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVersion
     */
    omit?: ModelVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVersionInclude<ExtArgs> | null
    where?: ModelVersionWhereInput
  }

  /**
   * InferenceRequest.results
   */
  export type InferenceRequest$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    where?: PredictionResultWhereInput
    orderBy?: PredictionResultOrderByWithRelationInput | PredictionResultOrderByWithRelationInput[]
    cursor?: PredictionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionResultScalarFieldEnum | PredictionResultScalarFieldEnum[]
  }

  /**
   * InferenceRequest without action
   */
  export type InferenceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceRequest
     */
    select?: InferenceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceRequest
     */
    omit?: InferenceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceRequestInclude<ExtArgs> | null
  }


  /**
   * Model PredictionResult
   */

  export type AggregatePredictionResult = {
    _count: PredictionResultCountAggregateOutputType | null
    _avg: PredictionResultAvgAggregateOutputType | null
    _sum: PredictionResultSumAggregateOutputType | null
    _min: PredictionResultMinAggregateOutputType | null
    _max: PredictionResultMaxAggregateOutputType | null
  }

  export type PredictionResultAvgAggregateOutputType = {
    observationIndex: number | null
    gammaProbability: number | null
    hadronProbability: number | null
    confidence: number | null
  }

  export type PredictionResultSumAggregateOutputType = {
    observationIndex: number | null
    gammaProbability: number | null
    hadronProbability: number | null
    confidence: number | null
  }

  export type PredictionResultMinAggregateOutputType = {
    id: string | null
    inferenceRequestId: string | null
    observationIndex: number | null
    datasetRecordId: string | null
    predictedClass: $Enums.EventClass | null
    gammaProbability: number | null
    hadronProbability: number | null
    confidence: number | null
    createdAt: Date | null
  }

  export type PredictionResultMaxAggregateOutputType = {
    id: string | null
    inferenceRequestId: string | null
    observationIndex: number | null
    datasetRecordId: string | null
    predictedClass: $Enums.EventClass | null
    gammaProbability: number | null
    hadronProbability: number | null
    confidence: number | null
    createdAt: Date | null
  }

  export type PredictionResultCountAggregateOutputType = {
    id: number
    inferenceRequestId: number
    observationIndex: number
    datasetRecordId: number
    predictedClass: number
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt: number
    _all: number
  }


  export type PredictionResultAvgAggregateInputType = {
    observationIndex?: true
    gammaProbability?: true
    hadronProbability?: true
    confidence?: true
  }

  export type PredictionResultSumAggregateInputType = {
    observationIndex?: true
    gammaProbability?: true
    hadronProbability?: true
    confidence?: true
  }

  export type PredictionResultMinAggregateInputType = {
    id?: true
    inferenceRequestId?: true
    observationIndex?: true
    datasetRecordId?: true
    predictedClass?: true
    gammaProbability?: true
    hadronProbability?: true
    confidence?: true
    createdAt?: true
  }

  export type PredictionResultMaxAggregateInputType = {
    id?: true
    inferenceRequestId?: true
    observationIndex?: true
    datasetRecordId?: true
    predictedClass?: true
    gammaProbability?: true
    hadronProbability?: true
    confidence?: true
    createdAt?: true
  }

  export type PredictionResultCountAggregateInputType = {
    id?: true
    inferenceRequestId?: true
    observationIndex?: true
    datasetRecordId?: true
    predictedClass?: true
    gammaProbability?: true
    hadronProbability?: true
    confidence?: true
    createdAt?: true
    _all?: true
  }

  export type PredictionResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredictionResult to aggregate.
     */
    where?: PredictionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionResults to fetch.
     */
    orderBy?: PredictionResultOrderByWithRelationInput | PredictionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PredictionResults
    **/
    _count?: true | PredictionResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionResultMaxAggregateInputType
  }

  export type GetPredictionResultAggregateType<T extends PredictionResultAggregateArgs> = {
        [P in keyof T & keyof AggregatePredictionResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredictionResult[P]>
      : GetScalarType<T[P], AggregatePredictionResult[P]>
  }




  export type PredictionResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionResultWhereInput
    orderBy?: PredictionResultOrderByWithAggregationInput | PredictionResultOrderByWithAggregationInput[]
    by: PredictionResultScalarFieldEnum[] | PredictionResultScalarFieldEnum
    having?: PredictionResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionResultCountAggregateInputType | true
    _avg?: PredictionResultAvgAggregateInputType
    _sum?: PredictionResultSumAggregateInputType
    _min?: PredictionResultMinAggregateInputType
    _max?: PredictionResultMaxAggregateInputType
  }

  export type PredictionResultGroupByOutputType = {
    id: string
    inferenceRequestId: string
    observationIndex: number
    datasetRecordId: string | null
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt: Date
    _count: PredictionResultCountAggregateOutputType | null
    _avg: PredictionResultAvgAggregateOutputType | null
    _sum: PredictionResultSumAggregateOutputType | null
    _min: PredictionResultMinAggregateOutputType | null
    _max: PredictionResultMaxAggregateOutputType | null
  }

  type GetPredictionResultGroupByPayload<T extends PredictionResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionResultGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionResultGroupByOutputType[P]>
        }
      >
    >


  export type PredictionResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inferenceRequestId?: boolean
    observationIndex?: boolean
    datasetRecordId?: boolean
    predictedClass?: boolean
    gammaProbability?: boolean
    hadronProbability?: boolean
    confidence?: boolean
    createdAt?: boolean
    inferenceRequest?: boolean | InferenceRequestDefaultArgs<ExtArgs>
    datasetRecord?: boolean | PredictionResult$datasetRecordArgs<ExtArgs>
  }, ExtArgs["result"]["predictionResult"]>

  export type PredictionResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inferenceRequestId?: boolean
    observationIndex?: boolean
    datasetRecordId?: boolean
    predictedClass?: boolean
    gammaProbability?: boolean
    hadronProbability?: boolean
    confidence?: boolean
    createdAt?: boolean
    inferenceRequest?: boolean | InferenceRequestDefaultArgs<ExtArgs>
    datasetRecord?: boolean | PredictionResult$datasetRecordArgs<ExtArgs>
  }, ExtArgs["result"]["predictionResult"]>

  export type PredictionResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inferenceRequestId?: boolean
    observationIndex?: boolean
    datasetRecordId?: boolean
    predictedClass?: boolean
    gammaProbability?: boolean
    hadronProbability?: boolean
    confidence?: boolean
    createdAt?: boolean
    inferenceRequest?: boolean | InferenceRequestDefaultArgs<ExtArgs>
    datasetRecord?: boolean | PredictionResult$datasetRecordArgs<ExtArgs>
  }, ExtArgs["result"]["predictionResult"]>

  export type PredictionResultSelectScalar = {
    id?: boolean
    inferenceRequestId?: boolean
    observationIndex?: boolean
    datasetRecordId?: boolean
    predictedClass?: boolean
    gammaProbability?: boolean
    hadronProbability?: boolean
    confidence?: boolean
    createdAt?: boolean
  }

  export type PredictionResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inferenceRequestId" | "observationIndex" | "datasetRecordId" | "predictedClass" | "gammaProbability" | "hadronProbability" | "confidence" | "createdAt", ExtArgs["result"]["predictionResult"]>
  export type PredictionResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inferenceRequest?: boolean | InferenceRequestDefaultArgs<ExtArgs>
    datasetRecord?: boolean | PredictionResult$datasetRecordArgs<ExtArgs>
  }
  export type PredictionResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inferenceRequest?: boolean | InferenceRequestDefaultArgs<ExtArgs>
    datasetRecord?: boolean | PredictionResult$datasetRecordArgs<ExtArgs>
  }
  export type PredictionResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inferenceRequest?: boolean | InferenceRequestDefaultArgs<ExtArgs>
    datasetRecord?: boolean | PredictionResult$datasetRecordArgs<ExtArgs>
  }

  export type $PredictionResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PredictionResult"
    objects: {
      inferenceRequest: Prisma.$InferenceRequestPayload<ExtArgs>
      datasetRecord: Prisma.$DatasetRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inferenceRequestId: string
      observationIndex: number
      datasetRecordId: string | null
      predictedClass: $Enums.EventClass
      gammaProbability: number
      hadronProbability: number
      confidence: number
      createdAt: Date
    }, ExtArgs["result"]["predictionResult"]>
    composites: {}
  }

  type PredictionResultGetPayload<S extends boolean | null | undefined | PredictionResultDefaultArgs> = $Result.GetResult<Prisma.$PredictionResultPayload, S>

  type PredictionResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionResultCountAggregateInputType | true
    }

  export interface PredictionResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PredictionResult'], meta: { name: 'PredictionResult' } }
    /**
     * Find zero or one PredictionResult that matches the filter.
     * @param {PredictionResultFindUniqueArgs} args - Arguments to find a PredictionResult
     * @example
     * // Get one PredictionResult
     * const predictionResult = await prisma.predictionResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionResultFindUniqueArgs>(args: SelectSubset<T, PredictionResultFindUniqueArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PredictionResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionResultFindUniqueOrThrowArgs} args - Arguments to find a PredictionResult
     * @example
     * // Get one PredictionResult
     * const predictionResult = await prisma.predictionResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionResultFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredictionResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultFindFirstArgs} args - Arguments to find a PredictionResult
     * @example
     * // Get one PredictionResult
     * const predictionResult = await prisma.predictionResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionResultFindFirstArgs>(args?: SelectSubset<T, PredictionResultFindFirstArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredictionResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultFindFirstOrThrowArgs} args - Arguments to find a PredictionResult
     * @example
     * // Get one PredictionResult
     * const predictionResult = await prisma.predictionResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionResultFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PredictionResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PredictionResults
     * const predictionResults = await prisma.predictionResult.findMany()
     * 
     * // Get first 10 PredictionResults
     * const predictionResults = await prisma.predictionResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionResultWithIdOnly = await prisma.predictionResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionResultFindManyArgs>(args?: SelectSubset<T, PredictionResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PredictionResult.
     * @param {PredictionResultCreateArgs} args - Arguments to create a PredictionResult.
     * @example
     * // Create one PredictionResult
     * const PredictionResult = await prisma.predictionResult.create({
     *   data: {
     *     // ... data to create a PredictionResult
     *   }
     * })
     * 
     */
    create<T extends PredictionResultCreateArgs>(args: SelectSubset<T, PredictionResultCreateArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PredictionResults.
     * @param {PredictionResultCreateManyArgs} args - Arguments to create many PredictionResults.
     * @example
     * // Create many PredictionResults
     * const predictionResult = await prisma.predictionResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionResultCreateManyArgs>(args?: SelectSubset<T, PredictionResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PredictionResults and returns the data saved in the database.
     * @param {PredictionResultCreateManyAndReturnArgs} args - Arguments to create many PredictionResults.
     * @example
     * // Create many PredictionResults
     * const predictionResult = await prisma.predictionResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PredictionResults and only return the `id`
     * const predictionResultWithIdOnly = await prisma.predictionResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionResultCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PredictionResult.
     * @param {PredictionResultDeleteArgs} args - Arguments to delete one PredictionResult.
     * @example
     * // Delete one PredictionResult
     * const PredictionResult = await prisma.predictionResult.delete({
     *   where: {
     *     // ... filter to delete one PredictionResult
     *   }
     * })
     * 
     */
    delete<T extends PredictionResultDeleteArgs>(args: SelectSubset<T, PredictionResultDeleteArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PredictionResult.
     * @param {PredictionResultUpdateArgs} args - Arguments to update one PredictionResult.
     * @example
     * // Update one PredictionResult
     * const predictionResult = await prisma.predictionResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionResultUpdateArgs>(args: SelectSubset<T, PredictionResultUpdateArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PredictionResults.
     * @param {PredictionResultDeleteManyArgs} args - Arguments to filter PredictionResults to delete.
     * @example
     * // Delete a few PredictionResults
     * const { count } = await prisma.predictionResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionResultDeleteManyArgs>(args?: SelectSubset<T, PredictionResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredictionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PredictionResults
     * const predictionResult = await prisma.predictionResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionResultUpdateManyArgs>(args: SelectSubset<T, PredictionResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredictionResults and returns the data updated in the database.
     * @param {PredictionResultUpdateManyAndReturnArgs} args - Arguments to update many PredictionResults.
     * @example
     * // Update many PredictionResults
     * const predictionResult = await prisma.predictionResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PredictionResults and only return the `id`
     * const predictionResultWithIdOnly = await prisma.predictionResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PredictionResultUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PredictionResult.
     * @param {PredictionResultUpsertArgs} args - Arguments to update or create a PredictionResult.
     * @example
     * // Update or create a PredictionResult
     * const predictionResult = await prisma.predictionResult.upsert({
     *   create: {
     *     // ... data to create a PredictionResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PredictionResult we want to update
     *   }
     * })
     */
    upsert<T extends PredictionResultUpsertArgs>(args: SelectSubset<T, PredictionResultUpsertArgs<ExtArgs>>): Prisma__PredictionResultClient<$Result.GetResult<Prisma.$PredictionResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PredictionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultCountArgs} args - Arguments to filter PredictionResults to count.
     * @example
     * // Count the number of PredictionResults
     * const count = await prisma.predictionResult.count({
     *   where: {
     *     // ... the filter for the PredictionResults we want to count
     *   }
     * })
    **/
    count<T extends PredictionResultCountArgs>(
      args?: Subset<T, PredictionResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PredictionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredictionResultAggregateArgs>(args: Subset<T, PredictionResultAggregateArgs>): Prisma.PrismaPromise<GetPredictionResultAggregateType<T>>

    /**
     * Group by PredictionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredictionResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionResultGroupByArgs['orderBy'] }
        : { orderBy?: PredictionResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredictionResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PredictionResult model
   */
  readonly fields: PredictionResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PredictionResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inferenceRequest<T extends InferenceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InferenceRequestDefaultArgs<ExtArgs>>): Prisma__InferenceRequestClient<$Result.GetResult<Prisma.$InferenceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    datasetRecord<T extends PredictionResult$datasetRecordArgs<ExtArgs> = {}>(args?: Subset<T, PredictionResult$datasetRecordArgs<ExtArgs>>): Prisma__DatasetRecordClient<$Result.GetResult<Prisma.$DatasetRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PredictionResult model
   */
  interface PredictionResultFieldRefs {
    readonly id: FieldRef<"PredictionResult", 'String'>
    readonly inferenceRequestId: FieldRef<"PredictionResult", 'String'>
    readonly observationIndex: FieldRef<"PredictionResult", 'Int'>
    readonly datasetRecordId: FieldRef<"PredictionResult", 'String'>
    readonly predictedClass: FieldRef<"PredictionResult", 'EventClass'>
    readonly gammaProbability: FieldRef<"PredictionResult", 'Float'>
    readonly hadronProbability: FieldRef<"PredictionResult", 'Float'>
    readonly confidence: FieldRef<"PredictionResult", 'Float'>
    readonly createdAt: FieldRef<"PredictionResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PredictionResult findUnique
   */
  export type PredictionResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * Filter, which PredictionResult to fetch.
     */
    where: PredictionResultWhereUniqueInput
  }

  /**
   * PredictionResult findUniqueOrThrow
   */
  export type PredictionResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * Filter, which PredictionResult to fetch.
     */
    where: PredictionResultWhereUniqueInput
  }

  /**
   * PredictionResult findFirst
   */
  export type PredictionResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * Filter, which PredictionResult to fetch.
     */
    where?: PredictionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionResults to fetch.
     */
    orderBy?: PredictionResultOrderByWithRelationInput | PredictionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredictionResults.
     */
    cursor?: PredictionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionResults.
     */
    distinct?: PredictionResultScalarFieldEnum | PredictionResultScalarFieldEnum[]
  }

  /**
   * PredictionResult findFirstOrThrow
   */
  export type PredictionResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * Filter, which PredictionResult to fetch.
     */
    where?: PredictionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionResults to fetch.
     */
    orderBy?: PredictionResultOrderByWithRelationInput | PredictionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredictionResults.
     */
    cursor?: PredictionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionResults.
     */
    distinct?: PredictionResultScalarFieldEnum | PredictionResultScalarFieldEnum[]
  }

  /**
   * PredictionResult findMany
   */
  export type PredictionResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * Filter, which PredictionResults to fetch.
     */
    where?: PredictionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionResults to fetch.
     */
    orderBy?: PredictionResultOrderByWithRelationInput | PredictionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PredictionResults.
     */
    cursor?: PredictionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionResults.
     */
    distinct?: PredictionResultScalarFieldEnum | PredictionResultScalarFieldEnum[]
  }

  /**
   * PredictionResult create
   */
  export type PredictionResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * The data needed to create a PredictionResult.
     */
    data: XOR<PredictionResultCreateInput, PredictionResultUncheckedCreateInput>
  }

  /**
   * PredictionResult createMany
   */
  export type PredictionResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PredictionResults.
     */
    data: PredictionResultCreateManyInput | PredictionResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredictionResult createManyAndReturn
   */
  export type PredictionResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * The data used to create many PredictionResults.
     */
    data: PredictionResultCreateManyInput | PredictionResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredictionResult update
   */
  export type PredictionResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * The data needed to update a PredictionResult.
     */
    data: XOR<PredictionResultUpdateInput, PredictionResultUncheckedUpdateInput>
    /**
     * Choose, which PredictionResult to update.
     */
    where: PredictionResultWhereUniqueInput
  }

  /**
   * PredictionResult updateMany
   */
  export type PredictionResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PredictionResults.
     */
    data: XOR<PredictionResultUpdateManyMutationInput, PredictionResultUncheckedUpdateManyInput>
    /**
     * Filter which PredictionResults to update
     */
    where?: PredictionResultWhereInput
    /**
     * Limit how many PredictionResults to update.
     */
    limit?: number
  }

  /**
   * PredictionResult updateManyAndReturn
   */
  export type PredictionResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * The data used to update PredictionResults.
     */
    data: XOR<PredictionResultUpdateManyMutationInput, PredictionResultUncheckedUpdateManyInput>
    /**
     * Filter which PredictionResults to update
     */
    where?: PredictionResultWhereInput
    /**
     * Limit how many PredictionResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredictionResult upsert
   */
  export type PredictionResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * The filter to search for the PredictionResult to update in case it exists.
     */
    where: PredictionResultWhereUniqueInput
    /**
     * In case the PredictionResult found by the `where` argument doesn't exist, create a new PredictionResult with this data.
     */
    create: XOR<PredictionResultCreateInput, PredictionResultUncheckedCreateInput>
    /**
     * In case the PredictionResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionResultUpdateInput, PredictionResultUncheckedUpdateInput>
  }

  /**
   * PredictionResult delete
   */
  export type PredictionResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
    /**
     * Filter which PredictionResult to delete.
     */
    where: PredictionResultWhereUniqueInput
  }

  /**
   * PredictionResult deleteMany
   */
  export type PredictionResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredictionResults to delete
     */
    where?: PredictionResultWhereInput
    /**
     * Limit how many PredictionResults to delete.
     */
    limit?: number
  }

  /**
   * PredictionResult.datasetRecord
   */
  export type PredictionResult$datasetRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetRecord
     */
    select?: DatasetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetRecord
     */
    omit?: DatasetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetRecordInclude<ExtArgs> | null
    where?: DatasetRecordWhereInput
  }

  /**
   * PredictionResult without action
   */
  export type PredictionResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionResult
     */
    select?: PredictionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionResult
     */
    omit?: PredictionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionResultInclude<ExtArgs> | null
  }


  /**
   * Model OutboxEvent
   */

  export type AggregateOutboxEvent = {
    _count: OutboxEventCountAggregateOutputType | null
    _avg: OutboxEventAvgAggregateOutputType | null
    _sum: OutboxEventSumAggregateOutputType | null
    _min: OutboxEventMinAggregateOutputType | null
    _max: OutboxEventMaxAggregateOutputType | null
  }

  export type OutboxEventAvgAggregateOutputType = {
    attempts: number | null
  }

  export type OutboxEventSumAggregateOutputType = {
    attempts: number | null
  }

  export type OutboxEventMinAggregateOutputType = {
    id: string | null
    eventType: string | null
    aggregateType: string | null
    aggregateId: string | null
    status: $Enums.OutboxStatus | null
    attempts: number | null
    nextAttemptAt: Date | null
    publishedAt: Date | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutboxEventMaxAggregateOutputType = {
    id: string | null
    eventType: string | null
    aggregateType: string | null
    aggregateId: string | null
    status: $Enums.OutboxStatus | null
    attempts: number | null
    nextAttemptAt: Date | null
    publishedAt: Date | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutboxEventCountAggregateOutputType = {
    id: number
    eventType: number
    aggregateType: number
    aggregateId: number
    payload: number
    status: number
    attempts: number
    nextAttemptAt: number
    publishedAt: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutboxEventAvgAggregateInputType = {
    attempts?: true
  }

  export type OutboxEventSumAggregateInputType = {
    attempts?: true
  }

  export type OutboxEventMinAggregateInputType = {
    id?: true
    eventType?: true
    aggregateType?: true
    aggregateId?: true
    status?: true
    attempts?: true
    nextAttemptAt?: true
    publishedAt?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutboxEventMaxAggregateInputType = {
    id?: true
    eventType?: true
    aggregateType?: true
    aggregateId?: true
    status?: true
    attempts?: true
    nextAttemptAt?: true
    publishedAt?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutboxEventCountAggregateInputType = {
    id?: true
    eventType?: true
    aggregateType?: true
    aggregateId?: true
    payload?: true
    status?: true
    attempts?: true
    nextAttemptAt?: true
    publishedAt?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutboxEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboxEvent to aggregate.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutboxEvents
    **/
    _count?: true | OutboxEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboxEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboxEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboxEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboxEventMaxAggregateInputType
  }

  export type GetOutboxEventAggregateType<T extends OutboxEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOutboxEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutboxEvent[P]>
      : GetScalarType<T[P], AggregateOutboxEvent[P]>
  }




  export type OutboxEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboxEventWhereInput
    orderBy?: OutboxEventOrderByWithAggregationInput | OutboxEventOrderByWithAggregationInput[]
    by: OutboxEventScalarFieldEnum[] | OutboxEventScalarFieldEnum
    having?: OutboxEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboxEventCountAggregateInputType | true
    _avg?: OutboxEventAvgAggregateInputType
    _sum?: OutboxEventSumAggregateInputType
    _min?: OutboxEventMinAggregateInputType
    _max?: OutboxEventMaxAggregateInputType
  }

  export type OutboxEventGroupByOutputType = {
    id: string
    eventType: string
    aggregateType: string
    aggregateId: string
    payload: JsonValue
    status: $Enums.OutboxStatus
    attempts: number
    nextAttemptAt: Date
    publishedAt: Date | null
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: OutboxEventCountAggregateOutputType | null
    _avg: OutboxEventAvgAggregateOutputType | null
    _sum: OutboxEventSumAggregateOutputType | null
    _min: OutboxEventMinAggregateOutputType | null
    _max: OutboxEventMaxAggregateOutputType | null
  }

  type GetOutboxEventGroupByPayload<T extends OutboxEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboxEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboxEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboxEventGroupByOutputType[P]>
            : GetScalarType<T[P], OutboxEventGroupByOutputType[P]>
        }
      >
    >


  export type OutboxEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    nextAttemptAt?: boolean
    publishedAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    nextAttemptAt?: boolean
    publishedAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    nextAttemptAt?: boolean
    publishedAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectScalar = {
    id?: boolean
    eventType?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    nextAttemptAt?: boolean
    publishedAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutboxEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "aggregateType" | "aggregateId" | "payload" | "status" | "attempts" | "nextAttemptAt" | "publishedAt" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["outboxEvent"]>

  export type $OutboxEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutboxEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventType: string
      aggregateType: string
      aggregateId: string
      payload: Prisma.JsonValue
      status: $Enums.OutboxStatus
      attempts: number
      nextAttemptAt: Date
      publishedAt: Date | null
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outboxEvent"]>
    composites: {}
  }

  type OutboxEventGetPayload<S extends boolean | null | undefined | OutboxEventDefaultArgs> = $Result.GetResult<Prisma.$OutboxEventPayload, S>

  type OutboxEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboxEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboxEventCountAggregateInputType | true
    }

  export interface OutboxEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutboxEvent'], meta: { name: 'OutboxEvent' } }
    /**
     * Find zero or one OutboxEvent that matches the filter.
     * @param {OutboxEventFindUniqueArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboxEventFindUniqueArgs>(args: SelectSubset<T, OutboxEventFindUniqueArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutboxEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboxEventFindUniqueOrThrowArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboxEventFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboxEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboxEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindFirstArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboxEventFindFirstArgs>(args?: SelectSubset<T, OutboxEventFindFirstArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboxEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindFirstOrThrowArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboxEventFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboxEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutboxEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutboxEvents
     * const outboxEvents = await prisma.outboxEvent.findMany()
     * 
     * // Get first 10 OutboxEvents
     * const outboxEvents = await prisma.outboxEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutboxEventFindManyArgs>(args?: SelectSubset<T, OutboxEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutboxEvent.
     * @param {OutboxEventCreateArgs} args - Arguments to create a OutboxEvent.
     * @example
     * // Create one OutboxEvent
     * const OutboxEvent = await prisma.outboxEvent.create({
     *   data: {
     *     // ... data to create a OutboxEvent
     *   }
     * })
     * 
     */
    create<T extends OutboxEventCreateArgs>(args: SelectSubset<T, OutboxEventCreateArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutboxEvents.
     * @param {OutboxEventCreateManyArgs} args - Arguments to create many OutboxEvents.
     * @example
     * // Create many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboxEventCreateManyArgs>(args?: SelectSubset<T, OutboxEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutboxEvents and returns the data saved in the database.
     * @param {OutboxEventCreateManyAndReturnArgs} args - Arguments to create many OutboxEvents.
     * @example
     * // Create many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutboxEvents and only return the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutboxEventCreateManyAndReturnArgs>(args?: SelectSubset<T, OutboxEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutboxEvent.
     * @param {OutboxEventDeleteArgs} args - Arguments to delete one OutboxEvent.
     * @example
     * // Delete one OutboxEvent
     * const OutboxEvent = await prisma.outboxEvent.delete({
     *   where: {
     *     // ... filter to delete one OutboxEvent
     *   }
     * })
     * 
     */
    delete<T extends OutboxEventDeleteArgs>(args: SelectSubset<T, OutboxEventDeleteArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutboxEvent.
     * @param {OutboxEventUpdateArgs} args - Arguments to update one OutboxEvent.
     * @example
     * // Update one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboxEventUpdateArgs>(args: SelectSubset<T, OutboxEventUpdateArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutboxEvents.
     * @param {OutboxEventDeleteManyArgs} args - Arguments to filter OutboxEvents to delete.
     * @example
     * // Delete a few OutboxEvents
     * const { count } = await prisma.outboxEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboxEventDeleteManyArgs>(args?: SelectSubset<T, OutboxEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboxEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboxEventUpdateManyArgs>(args: SelectSubset<T, OutboxEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboxEvents and returns the data updated in the database.
     * @param {OutboxEventUpdateManyAndReturnArgs} args - Arguments to update many OutboxEvents.
     * @example
     * // Update many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutboxEvents and only return the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutboxEventUpdateManyAndReturnArgs>(args: SelectSubset<T, OutboxEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutboxEvent.
     * @param {OutboxEventUpsertArgs} args - Arguments to update or create a OutboxEvent.
     * @example
     * // Update or create a OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.upsert({
     *   create: {
     *     // ... data to create a OutboxEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutboxEvent we want to update
     *   }
     * })
     */
    upsert<T extends OutboxEventUpsertArgs>(args: SelectSubset<T, OutboxEventUpsertArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutboxEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventCountArgs} args - Arguments to filter OutboxEvents to count.
     * @example
     * // Count the number of OutboxEvents
     * const count = await prisma.outboxEvent.count({
     *   where: {
     *     // ... the filter for the OutboxEvents we want to count
     *   }
     * })
    **/
    count<T extends OutboxEventCountArgs>(
      args?: Subset<T, OutboxEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboxEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutboxEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutboxEventAggregateArgs>(args: Subset<T, OutboxEventAggregateArgs>): Prisma.PrismaPromise<GetOutboxEventAggregateType<T>>

    /**
     * Group by OutboxEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutboxEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboxEventGroupByArgs['orderBy'] }
        : { orderBy?: OutboxEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutboxEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboxEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutboxEvent model
   */
  readonly fields: OutboxEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutboxEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboxEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutboxEvent model
   */
  interface OutboxEventFieldRefs {
    readonly id: FieldRef<"OutboxEvent", 'String'>
    readonly eventType: FieldRef<"OutboxEvent", 'String'>
    readonly aggregateType: FieldRef<"OutboxEvent", 'String'>
    readonly aggregateId: FieldRef<"OutboxEvent", 'String'>
    readonly payload: FieldRef<"OutboxEvent", 'Json'>
    readonly status: FieldRef<"OutboxEvent", 'OutboxStatus'>
    readonly attempts: FieldRef<"OutboxEvent", 'Int'>
    readonly nextAttemptAt: FieldRef<"OutboxEvent", 'DateTime'>
    readonly publishedAt: FieldRef<"OutboxEvent", 'DateTime'>
    readonly lastError: FieldRef<"OutboxEvent", 'String'>
    readonly createdAt: FieldRef<"OutboxEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"OutboxEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutboxEvent findUnique
   */
  export type OutboxEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent findUniqueOrThrow
   */
  export type OutboxEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent findFirst
   */
  export type OutboxEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent findFirstOrThrow
   */
  export type OutboxEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent findMany
   */
  export type OutboxEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvents to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent create
   */
  export type OutboxEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data needed to create a OutboxEvent.
     */
    data: XOR<OutboxEventCreateInput, OutboxEventUncheckedCreateInput>
  }

  /**
   * OutboxEvent createMany
   */
  export type OutboxEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutboxEvents.
     */
    data: OutboxEventCreateManyInput | OutboxEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutboxEvent createManyAndReturn
   */
  export type OutboxEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data used to create many OutboxEvents.
     */
    data: OutboxEventCreateManyInput | OutboxEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutboxEvent update
   */
  export type OutboxEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data needed to update a OutboxEvent.
     */
    data: XOR<OutboxEventUpdateInput, OutboxEventUncheckedUpdateInput>
    /**
     * Choose, which OutboxEvent to update.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent updateMany
   */
  export type OutboxEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutboxEvents.
     */
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyInput>
    /**
     * Filter which OutboxEvents to update
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to update.
     */
    limit?: number
  }

  /**
   * OutboxEvent updateManyAndReturn
   */
  export type OutboxEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data used to update OutboxEvents.
     */
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyInput>
    /**
     * Filter which OutboxEvents to update
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to update.
     */
    limit?: number
  }

  /**
   * OutboxEvent upsert
   */
  export type OutboxEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The filter to search for the OutboxEvent to update in case it exists.
     */
    where: OutboxEventWhereUniqueInput
    /**
     * In case the OutboxEvent found by the `where` argument doesn't exist, create a new OutboxEvent with this data.
     */
    create: XOR<OutboxEventCreateInput, OutboxEventUncheckedCreateInput>
    /**
     * In case the OutboxEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboxEventUpdateInput, OutboxEventUncheckedUpdateInput>
  }

  /**
   * OutboxEvent delete
   */
  export type OutboxEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter which OutboxEvent to delete.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent deleteMany
   */
  export type OutboxEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboxEvents to delete
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to delete.
     */
    limit?: number
  }

  /**
   * OutboxEvent without action
   */
  export type OutboxEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyHash: 'keyHash',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    lastUsedAt: 'lastUsedAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const DatasetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    fileName: 'fileName',
    storageUri: 'storageUri',
    checksum: 'checksum',
    recordCount: 'recordCount',
    status: 'status',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DatasetScalarFieldEnum = (typeof DatasetScalarFieldEnum)[keyof typeof DatasetScalarFieldEnum]


  export const DatasetRecordScalarFieldEnum: {
    id: 'id',
    datasetId: 'datasetId',
    features: 'features',
    actualClass: 'actualClass',
    createdAt: 'createdAt'
  };

  export type DatasetRecordScalarFieldEnum = (typeof DatasetRecordScalarFieldEnum)[keyof typeof DatasetRecordScalarFieldEnum]


  export const ModelVersionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    description: 'description',
    status: 'status',
    artifactUri: 'artifactUri',
    scalerUri: 'scalerUri',
    artifactChecksum: 'artifactChecksum',
    features: 'features',
    classes: 'classes',
    preprocessing: 'preprocessing',
    metrics: 'metrics',
    framework: 'framework',
    architecture: 'architecture',
    inputSize: 'inputSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelVersionScalarFieldEnum = (typeof ModelVersionScalarFieldEnum)[keyof typeof ModelVersionScalarFieldEnum]


  export const InferenceRequestScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    traceId: 'traceId',
    idempotencyKey: 'idempotencyKey',
    type: 'type',
    status: 'status',
    inputFeatures: 'inputFeatures',
    observationCount: 'observationCount',
    latencyMs: 'latencyMs',
    retryCount: 'retryCount',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage',
    userId: 'userId',
    modelVersionId: 'modelVersionId',
    queuedAt: 'queuedAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InferenceRequestScalarFieldEnum = (typeof InferenceRequestScalarFieldEnum)[keyof typeof InferenceRequestScalarFieldEnum]


  export const PredictionResultScalarFieldEnum: {
    id: 'id',
    inferenceRequestId: 'inferenceRequestId',
    observationIndex: 'observationIndex',
    datasetRecordId: 'datasetRecordId',
    predictedClass: 'predictedClass',
    gammaProbability: 'gammaProbability',
    hadronProbability: 'hadronProbability',
    confidence: 'confidence',
    createdAt: 'createdAt'
  };

  export type PredictionResultScalarFieldEnum = (typeof PredictionResultScalarFieldEnum)[keyof typeof PredictionResultScalarFieldEnum]


  export const OutboxEventScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    aggregateType: 'aggregateType',
    aggregateId: 'aggregateId',
    payload: 'payload',
    status: 'status',
    attempts: 'attempts',
    nextAttemptAt: 'nextAttemptAt',
    publishedAt: 'publishedAt',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutboxEventScalarFieldEnum = (typeof OutboxEventScalarFieldEnum)[keyof typeof OutboxEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DatasetStatus'
   */
  export type EnumDatasetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DatasetStatus'>
    


  /**
   * Reference to a field of type 'DatasetStatus[]'
   */
  export type ListEnumDatasetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DatasetStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'EventClass'
   */
  export type EnumEventClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventClass'>
    


  /**
   * Reference to a field of type 'EventClass[]'
   */
  export type ListEnumEventClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventClass[]'>
    


  /**
   * Reference to a field of type 'ModelStatus'
   */
  export type EnumModelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelStatus'>
    


  /**
   * Reference to a field of type 'ModelStatus[]'
   */
  export type ListEnumModelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelStatus[]'>
    


  /**
   * Reference to a field of type 'InferenceType'
   */
  export type EnumInferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InferenceType'>
    


  /**
   * Reference to a field of type 'InferenceType[]'
   */
  export type ListEnumInferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InferenceType[]'>
    


  /**
   * Reference to a field of type 'InferenceStatus'
   */
  export type EnumInferenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InferenceStatus'>
    


  /**
   * Reference to a field of type 'InferenceStatus[]'
   */
  export type ListEnumInferenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InferenceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OutboxStatus'
   */
  export type EnumOutboxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutboxStatus'>
    


  /**
   * Reference to a field of type 'OutboxStatus[]'
   */
  export type ListEnumOutboxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutboxStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    datasets?: DatasetListRelationFilter
    inferenceRequests?: InferenceRequestListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    datasets?: DatasetOrderByRelationAggregateInput
    inferenceRequests?: InferenceRequestOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    datasets?: DatasetListRelationFilter
    inferenceRequests?: InferenceRequestListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: UuidFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    userId?: UuidFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    userId?: UuidFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    userId?: UuidWithAggregatesFilter<"ApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type DatasetWhereInput = {
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    id?: UuidFilter<"Dataset"> | string
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    fileName?: StringNullableFilter<"Dataset"> | string | null
    storageUri?: StringNullableFilter<"Dataset"> | string | null
    checksum?: StringNullableFilter<"Dataset"> | string | null
    recordCount?: IntFilter<"Dataset"> | number
    status?: EnumDatasetStatusFilter<"Dataset"> | $Enums.DatasetStatus
    uploadedById?: UuidFilter<"Dataset"> | string
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeFilter<"Dataset"> | Date | string
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: DatasetRecordListRelationFilter
  }

  export type DatasetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    storageUri?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    recordCount?: SortOrder
    status?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedBy?: UserOrderByWithRelationInput
    records?: DatasetRecordOrderByRelationAggregateInput
  }

  export type DatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    fileName?: StringNullableFilter<"Dataset"> | string | null
    storageUri?: StringNullableFilter<"Dataset"> | string | null
    checksum?: StringNullableFilter<"Dataset"> | string | null
    recordCount?: IntFilter<"Dataset"> | number
    status?: EnumDatasetStatusFilter<"Dataset"> | $Enums.DatasetStatus
    uploadedById?: UuidFilter<"Dataset"> | string
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeFilter<"Dataset"> | Date | string
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: DatasetRecordListRelationFilter
  }, "id">

  export type DatasetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    storageUri?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    recordCount?: SortOrder
    status?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DatasetCountOrderByAggregateInput
    _avg?: DatasetAvgOrderByAggregateInput
    _max?: DatasetMaxOrderByAggregateInput
    _min?: DatasetMinOrderByAggregateInput
    _sum?: DatasetSumOrderByAggregateInput
  }

  export type DatasetScalarWhereWithAggregatesInput = {
    AND?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    OR?: DatasetScalarWhereWithAggregatesInput[]
    NOT?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Dataset"> | string
    name?: StringWithAggregatesFilter<"Dataset"> | string
    description?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    storageUri?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    checksum?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    recordCount?: IntWithAggregatesFilter<"Dataset"> | number
    status?: EnumDatasetStatusWithAggregatesFilter<"Dataset"> | $Enums.DatasetStatus
    uploadedById?: UuidWithAggregatesFilter<"Dataset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
  }

  export type DatasetRecordWhereInput = {
    AND?: DatasetRecordWhereInput | DatasetRecordWhereInput[]
    OR?: DatasetRecordWhereInput[]
    NOT?: DatasetRecordWhereInput | DatasetRecordWhereInput[]
    id?: UuidFilter<"DatasetRecord"> | string
    datasetId?: UuidFilter<"DatasetRecord"> | string
    features?: JsonFilter<"DatasetRecord">
    actualClass?: EnumEventClassNullableFilter<"DatasetRecord"> | $Enums.EventClass | null
    createdAt?: DateTimeFilter<"DatasetRecord"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    predictions?: PredictionResultListRelationFilter
  }

  export type DatasetRecordOrderByWithRelationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    features?: SortOrder
    actualClass?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
    predictions?: PredictionResultOrderByRelationAggregateInput
  }

  export type DatasetRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DatasetRecordWhereInput | DatasetRecordWhereInput[]
    OR?: DatasetRecordWhereInput[]
    NOT?: DatasetRecordWhereInput | DatasetRecordWhereInput[]
    datasetId?: UuidFilter<"DatasetRecord"> | string
    features?: JsonFilter<"DatasetRecord">
    actualClass?: EnumEventClassNullableFilter<"DatasetRecord"> | $Enums.EventClass | null
    createdAt?: DateTimeFilter<"DatasetRecord"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    predictions?: PredictionResultListRelationFilter
  }, "id">

  export type DatasetRecordOrderByWithAggregationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    features?: SortOrder
    actualClass?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DatasetRecordCountOrderByAggregateInput
    _max?: DatasetRecordMaxOrderByAggregateInput
    _min?: DatasetRecordMinOrderByAggregateInput
  }

  export type DatasetRecordScalarWhereWithAggregatesInput = {
    AND?: DatasetRecordScalarWhereWithAggregatesInput | DatasetRecordScalarWhereWithAggregatesInput[]
    OR?: DatasetRecordScalarWhereWithAggregatesInput[]
    NOT?: DatasetRecordScalarWhereWithAggregatesInput | DatasetRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DatasetRecord"> | string
    datasetId?: UuidWithAggregatesFilter<"DatasetRecord"> | string
    features?: JsonWithAggregatesFilter<"DatasetRecord">
    actualClass?: EnumEventClassNullableWithAggregatesFilter<"DatasetRecord"> | $Enums.EventClass | null
    createdAt?: DateTimeWithAggregatesFilter<"DatasetRecord"> | Date | string
  }

  export type ModelVersionWhereInput = {
    AND?: ModelVersionWhereInput | ModelVersionWhereInput[]
    OR?: ModelVersionWhereInput[]
    NOT?: ModelVersionWhereInput | ModelVersionWhereInput[]
    id?: UuidFilter<"ModelVersion"> | string
    name?: StringFilter<"ModelVersion"> | string
    version?: StringFilter<"ModelVersion"> | string
    description?: StringNullableFilter<"ModelVersion"> | string | null
    status?: EnumModelStatusFilter<"ModelVersion"> | $Enums.ModelStatus
    artifactUri?: StringFilter<"ModelVersion"> | string
    scalerUri?: StringNullableFilter<"ModelVersion"> | string | null
    artifactChecksum?: StringNullableFilter<"ModelVersion"> | string | null
    features?: JsonFilter<"ModelVersion">
    classes?: JsonFilter<"ModelVersion">
    preprocessing?: JsonNullableFilter<"ModelVersion">
    metrics?: JsonNullableFilter<"ModelVersion">
    framework?: StringFilter<"ModelVersion"> | string
    architecture?: StringFilter<"ModelVersion"> | string
    inputSize?: IntFilter<"ModelVersion"> | number
    createdAt?: DateTimeFilter<"ModelVersion"> | Date | string
    updatedAt?: DateTimeFilter<"ModelVersion"> | Date | string
    inferenceRequests?: InferenceRequestListRelationFilter
  }

  export type ModelVersionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    artifactUri?: SortOrder
    scalerUri?: SortOrderInput | SortOrder
    artifactChecksum?: SortOrderInput | SortOrder
    features?: SortOrder
    classes?: SortOrder
    preprocessing?: SortOrderInput | SortOrder
    metrics?: SortOrderInput | SortOrder
    framework?: SortOrder
    architecture?: SortOrder
    inputSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inferenceRequests?: InferenceRequestOrderByRelationAggregateInput
  }

  export type ModelVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_version?: ModelVersionNameVersionCompoundUniqueInput
    AND?: ModelVersionWhereInput | ModelVersionWhereInput[]
    OR?: ModelVersionWhereInput[]
    NOT?: ModelVersionWhereInput | ModelVersionWhereInput[]
    name?: StringFilter<"ModelVersion"> | string
    version?: StringFilter<"ModelVersion"> | string
    description?: StringNullableFilter<"ModelVersion"> | string | null
    status?: EnumModelStatusFilter<"ModelVersion"> | $Enums.ModelStatus
    artifactUri?: StringFilter<"ModelVersion"> | string
    scalerUri?: StringNullableFilter<"ModelVersion"> | string | null
    artifactChecksum?: StringNullableFilter<"ModelVersion"> | string | null
    features?: JsonFilter<"ModelVersion">
    classes?: JsonFilter<"ModelVersion">
    preprocessing?: JsonNullableFilter<"ModelVersion">
    metrics?: JsonNullableFilter<"ModelVersion">
    framework?: StringFilter<"ModelVersion"> | string
    architecture?: StringFilter<"ModelVersion"> | string
    inputSize?: IntFilter<"ModelVersion"> | number
    createdAt?: DateTimeFilter<"ModelVersion"> | Date | string
    updatedAt?: DateTimeFilter<"ModelVersion"> | Date | string
    inferenceRequests?: InferenceRequestListRelationFilter
  }, "id" | "name_version">

  export type ModelVersionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    artifactUri?: SortOrder
    scalerUri?: SortOrderInput | SortOrder
    artifactChecksum?: SortOrderInput | SortOrder
    features?: SortOrder
    classes?: SortOrder
    preprocessing?: SortOrderInput | SortOrder
    metrics?: SortOrderInput | SortOrder
    framework?: SortOrder
    architecture?: SortOrder
    inputSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelVersionCountOrderByAggregateInput
    _avg?: ModelVersionAvgOrderByAggregateInput
    _max?: ModelVersionMaxOrderByAggregateInput
    _min?: ModelVersionMinOrderByAggregateInput
    _sum?: ModelVersionSumOrderByAggregateInput
  }

  export type ModelVersionScalarWhereWithAggregatesInput = {
    AND?: ModelVersionScalarWhereWithAggregatesInput | ModelVersionScalarWhereWithAggregatesInput[]
    OR?: ModelVersionScalarWhereWithAggregatesInput[]
    NOT?: ModelVersionScalarWhereWithAggregatesInput | ModelVersionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ModelVersion"> | string
    name?: StringWithAggregatesFilter<"ModelVersion"> | string
    version?: StringWithAggregatesFilter<"ModelVersion"> | string
    description?: StringNullableWithAggregatesFilter<"ModelVersion"> | string | null
    status?: EnumModelStatusWithAggregatesFilter<"ModelVersion"> | $Enums.ModelStatus
    artifactUri?: StringWithAggregatesFilter<"ModelVersion"> | string
    scalerUri?: StringNullableWithAggregatesFilter<"ModelVersion"> | string | null
    artifactChecksum?: StringNullableWithAggregatesFilter<"ModelVersion"> | string | null
    features?: JsonWithAggregatesFilter<"ModelVersion">
    classes?: JsonWithAggregatesFilter<"ModelVersion">
    preprocessing?: JsonNullableWithAggregatesFilter<"ModelVersion">
    metrics?: JsonNullableWithAggregatesFilter<"ModelVersion">
    framework?: StringWithAggregatesFilter<"ModelVersion"> | string
    architecture?: StringWithAggregatesFilter<"ModelVersion"> | string
    inputSize?: IntWithAggregatesFilter<"ModelVersion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ModelVersion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModelVersion"> | Date | string
  }

  export type InferenceRequestWhereInput = {
    AND?: InferenceRequestWhereInput | InferenceRequestWhereInput[]
    OR?: InferenceRequestWhereInput[]
    NOT?: InferenceRequestWhereInput | InferenceRequestWhereInput[]
    id?: UuidFilter<"InferenceRequest"> | string
    requestId?: StringFilter<"InferenceRequest"> | string
    traceId?: StringNullableFilter<"InferenceRequest"> | string | null
    idempotencyKey?: StringNullableFilter<"InferenceRequest"> | string | null
    type?: EnumInferenceTypeFilter<"InferenceRequest"> | $Enums.InferenceType
    status?: EnumInferenceStatusFilter<"InferenceRequest"> | $Enums.InferenceStatus
    inputFeatures?: JsonFilter<"InferenceRequest">
    observationCount?: IntFilter<"InferenceRequest"> | number
    latencyMs?: IntNullableFilter<"InferenceRequest"> | number | null
    retryCount?: IntFilter<"InferenceRequest"> | number
    errorCode?: StringNullableFilter<"InferenceRequest"> | string | null
    errorMessage?: StringNullableFilter<"InferenceRequest"> | string | null
    userId?: UuidNullableFilter<"InferenceRequest"> | string | null
    modelVersionId?: UuidNullableFilter<"InferenceRequest"> | string | null
    queuedAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    startedAt?: DateTimeNullableFilter<"InferenceRequest"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"InferenceRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    modelVersion?: XOR<ModelVersionNullableScalarRelationFilter, ModelVersionWhereInput> | null
    results?: PredictionResultListRelationFilter
  }

  export type InferenceRequestOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    traceId?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    inputFeatures?: SortOrder
    observationCount?: SortOrder
    latencyMs?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    modelVersionId?: SortOrderInput | SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    modelVersion?: ModelVersionOrderByWithRelationInput
    results?: PredictionResultOrderByRelationAggregateInput
  }

  export type InferenceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    idempotencyKey?: string
    AND?: InferenceRequestWhereInput | InferenceRequestWhereInput[]
    OR?: InferenceRequestWhereInput[]
    NOT?: InferenceRequestWhereInput | InferenceRequestWhereInput[]
    traceId?: StringNullableFilter<"InferenceRequest"> | string | null
    type?: EnumInferenceTypeFilter<"InferenceRequest"> | $Enums.InferenceType
    status?: EnumInferenceStatusFilter<"InferenceRequest"> | $Enums.InferenceStatus
    inputFeatures?: JsonFilter<"InferenceRequest">
    observationCount?: IntFilter<"InferenceRequest"> | number
    latencyMs?: IntNullableFilter<"InferenceRequest"> | number | null
    retryCount?: IntFilter<"InferenceRequest"> | number
    errorCode?: StringNullableFilter<"InferenceRequest"> | string | null
    errorMessage?: StringNullableFilter<"InferenceRequest"> | string | null
    userId?: UuidNullableFilter<"InferenceRequest"> | string | null
    modelVersionId?: UuidNullableFilter<"InferenceRequest"> | string | null
    queuedAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    startedAt?: DateTimeNullableFilter<"InferenceRequest"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"InferenceRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    modelVersion?: XOR<ModelVersionNullableScalarRelationFilter, ModelVersionWhereInput> | null
    results?: PredictionResultListRelationFilter
  }, "id" | "requestId" | "idempotencyKey">

  export type InferenceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    traceId?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    inputFeatures?: SortOrder
    observationCount?: SortOrder
    latencyMs?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    modelVersionId?: SortOrderInput | SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InferenceRequestCountOrderByAggregateInput
    _avg?: InferenceRequestAvgOrderByAggregateInput
    _max?: InferenceRequestMaxOrderByAggregateInput
    _min?: InferenceRequestMinOrderByAggregateInput
    _sum?: InferenceRequestSumOrderByAggregateInput
  }

  export type InferenceRequestScalarWhereWithAggregatesInput = {
    AND?: InferenceRequestScalarWhereWithAggregatesInput | InferenceRequestScalarWhereWithAggregatesInput[]
    OR?: InferenceRequestScalarWhereWithAggregatesInput[]
    NOT?: InferenceRequestScalarWhereWithAggregatesInput | InferenceRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InferenceRequest"> | string
    requestId?: StringWithAggregatesFilter<"InferenceRequest"> | string
    traceId?: StringNullableWithAggregatesFilter<"InferenceRequest"> | string | null
    idempotencyKey?: StringNullableWithAggregatesFilter<"InferenceRequest"> | string | null
    type?: EnumInferenceTypeWithAggregatesFilter<"InferenceRequest"> | $Enums.InferenceType
    status?: EnumInferenceStatusWithAggregatesFilter<"InferenceRequest"> | $Enums.InferenceStatus
    inputFeatures?: JsonWithAggregatesFilter<"InferenceRequest">
    observationCount?: IntWithAggregatesFilter<"InferenceRequest"> | number
    latencyMs?: IntNullableWithAggregatesFilter<"InferenceRequest"> | number | null
    retryCount?: IntWithAggregatesFilter<"InferenceRequest"> | number
    errorCode?: StringNullableWithAggregatesFilter<"InferenceRequest"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"InferenceRequest"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"InferenceRequest"> | string | null
    modelVersionId?: UuidNullableWithAggregatesFilter<"InferenceRequest"> | string | null
    queuedAt?: DateTimeWithAggregatesFilter<"InferenceRequest"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"InferenceRequest"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"InferenceRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InferenceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InferenceRequest"> | Date | string
  }

  export type PredictionResultWhereInput = {
    AND?: PredictionResultWhereInput | PredictionResultWhereInput[]
    OR?: PredictionResultWhereInput[]
    NOT?: PredictionResultWhereInput | PredictionResultWhereInput[]
    id?: UuidFilter<"PredictionResult"> | string
    inferenceRequestId?: UuidFilter<"PredictionResult"> | string
    observationIndex?: IntFilter<"PredictionResult"> | number
    datasetRecordId?: UuidNullableFilter<"PredictionResult"> | string | null
    predictedClass?: EnumEventClassFilter<"PredictionResult"> | $Enums.EventClass
    gammaProbability?: FloatFilter<"PredictionResult"> | number
    hadronProbability?: FloatFilter<"PredictionResult"> | number
    confidence?: FloatFilter<"PredictionResult"> | number
    createdAt?: DateTimeFilter<"PredictionResult"> | Date | string
    inferenceRequest?: XOR<InferenceRequestScalarRelationFilter, InferenceRequestWhereInput>
    datasetRecord?: XOR<DatasetRecordNullableScalarRelationFilter, DatasetRecordWhereInput> | null
  }

  export type PredictionResultOrderByWithRelationInput = {
    id?: SortOrder
    inferenceRequestId?: SortOrder
    observationIndex?: SortOrder
    datasetRecordId?: SortOrderInput | SortOrder
    predictedClass?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    inferenceRequest?: InferenceRequestOrderByWithRelationInput
    datasetRecord?: DatasetRecordOrderByWithRelationInput
  }

  export type PredictionResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inferenceRequestId_observationIndex?: PredictionResultInferenceRequestIdObservationIndexCompoundUniqueInput
    AND?: PredictionResultWhereInput | PredictionResultWhereInput[]
    OR?: PredictionResultWhereInput[]
    NOT?: PredictionResultWhereInput | PredictionResultWhereInput[]
    inferenceRequestId?: UuidFilter<"PredictionResult"> | string
    observationIndex?: IntFilter<"PredictionResult"> | number
    datasetRecordId?: UuidNullableFilter<"PredictionResult"> | string | null
    predictedClass?: EnumEventClassFilter<"PredictionResult"> | $Enums.EventClass
    gammaProbability?: FloatFilter<"PredictionResult"> | number
    hadronProbability?: FloatFilter<"PredictionResult"> | number
    confidence?: FloatFilter<"PredictionResult"> | number
    createdAt?: DateTimeFilter<"PredictionResult"> | Date | string
    inferenceRequest?: XOR<InferenceRequestScalarRelationFilter, InferenceRequestWhereInput>
    datasetRecord?: XOR<DatasetRecordNullableScalarRelationFilter, DatasetRecordWhereInput> | null
  }, "id" | "inferenceRequestId_observationIndex">

  export type PredictionResultOrderByWithAggregationInput = {
    id?: SortOrder
    inferenceRequestId?: SortOrder
    observationIndex?: SortOrder
    datasetRecordId?: SortOrderInput | SortOrder
    predictedClass?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    _count?: PredictionResultCountOrderByAggregateInput
    _avg?: PredictionResultAvgOrderByAggregateInput
    _max?: PredictionResultMaxOrderByAggregateInput
    _min?: PredictionResultMinOrderByAggregateInput
    _sum?: PredictionResultSumOrderByAggregateInput
  }

  export type PredictionResultScalarWhereWithAggregatesInput = {
    AND?: PredictionResultScalarWhereWithAggregatesInput | PredictionResultScalarWhereWithAggregatesInput[]
    OR?: PredictionResultScalarWhereWithAggregatesInput[]
    NOT?: PredictionResultScalarWhereWithAggregatesInput | PredictionResultScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PredictionResult"> | string
    inferenceRequestId?: UuidWithAggregatesFilter<"PredictionResult"> | string
    observationIndex?: IntWithAggregatesFilter<"PredictionResult"> | number
    datasetRecordId?: UuidNullableWithAggregatesFilter<"PredictionResult"> | string | null
    predictedClass?: EnumEventClassWithAggregatesFilter<"PredictionResult"> | $Enums.EventClass
    gammaProbability?: FloatWithAggregatesFilter<"PredictionResult"> | number
    hadronProbability?: FloatWithAggregatesFilter<"PredictionResult"> | number
    confidence?: FloatWithAggregatesFilter<"PredictionResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PredictionResult"> | Date | string
  }

  export type OutboxEventWhereInput = {
    AND?: OutboxEventWhereInput | OutboxEventWhereInput[]
    OR?: OutboxEventWhereInput[]
    NOT?: OutboxEventWhereInput | OutboxEventWhereInput[]
    id?: UuidFilter<"OutboxEvent"> | string
    eventType?: StringFilter<"OutboxEvent"> | string
    aggregateType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringFilter<"OutboxEvent"> | string
    payload?: JsonFilter<"OutboxEvent">
    status?: EnumOutboxStatusFilter<"OutboxEvent"> | $Enums.OutboxStatus
    attempts?: IntFilter<"OutboxEvent"> | number
    nextAttemptAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    publishedAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OutboxEvent"> | Date | string
  }

  export type OutboxEventOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    nextAttemptAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutboxEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutboxEventWhereInput | OutboxEventWhereInput[]
    OR?: OutboxEventWhereInput[]
    NOT?: OutboxEventWhereInput | OutboxEventWhereInput[]
    eventType?: StringFilter<"OutboxEvent"> | string
    aggregateType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringFilter<"OutboxEvent"> | string
    payload?: JsonFilter<"OutboxEvent">
    status?: EnumOutboxStatusFilter<"OutboxEvent"> | $Enums.OutboxStatus
    attempts?: IntFilter<"OutboxEvent"> | number
    nextAttemptAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    publishedAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OutboxEvent"> | Date | string
  }, "id">

  export type OutboxEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    nextAttemptAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutboxEventCountOrderByAggregateInput
    _avg?: OutboxEventAvgOrderByAggregateInput
    _max?: OutboxEventMaxOrderByAggregateInput
    _min?: OutboxEventMinOrderByAggregateInput
    _sum?: OutboxEventSumOrderByAggregateInput
  }

  export type OutboxEventScalarWhereWithAggregatesInput = {
    AND?: OutboxEventScalarWhereWithAggregatesInput | OutboxEventScalarWhereWithAggregatesInput[]
    OR?: OutboxEventScalarWhereWithAggregatesInput[]
    NOT?: OutboxEventScalarWhereWithAggregatesInput | OutboxEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OutboxEvent"> | string
    eventType?: StringWithAggregatesFilter<"OutboxEvent"> | string
    aggregateType?: StringWithAggregatesFilter<"OutboxEvent"> | string
    aggregateId?: StringWithAggregatesFilter<"OutboxEvent"> | string
    payload?: JsonWithAggregatesFilter<"OutboxEvent">
    status?: EnumOutboxStatusWithAggregatesFilter<"OutboxEvent"> | $Enums.OutboxStatus
    attempts?: IntWithAggregatesFilter<"OutboxEvent"> | number
    nextAttemptAt?: DateTimeWithAggregatesFilter<"OutboxEvent"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"OutboxEvent"> | Date | string | null
    lastError?: StringNullableWithAggregatesFilter<"OutboxEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OutboxEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OutboxEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    inferenceRequests?: InferenceRequestCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    inferenceRequests?: InferenceRequestUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    inferenceRequests?: InferenceRequestUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    inferenceRequests?: InferenceRequestUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyHash: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name: string
    keyHash: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name: string
    keyHash: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutDatasetsInput
    records?: DatasetRecordCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    uploadedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DatasetRecordUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    records?: DatasetRecordUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DatasetRecordUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    uploadedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatasetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetRecordCreateInput = {
    id?: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutRecordsInput
    predictions?: PredictionResultCreateNestedManyWithoutDatasetRecordInput
  }

  export type DatasetRecordUncheckedCreateInput = {
    id?: string
    datasetId: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
    predictions?: PredictionResultUncheckedCreateNestedManyWithoutDatasetRecordInput
  }

  export type DatasetRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutRecordsNestedInput
    predictions?: PredictionResultUpdateManyWithoutDatasetRecordNestedInput
  }

  export type DatasetRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionResultUncheckedUpdateManyWithoutDatasetRecordNestedInput
  }

  export type DatasetRecordCreateManyInput = {
    id?: string
    datasetId: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
  }

  export type DatasetRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionCreateInput = {
    id?: string
    name: string
    version: string
    description?: string | null
    status?: $Enums.ModelStatus
    artifactUri: string
    scalerUri?: string | null
    artifactChecksum?: string | null
    features: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: string
    architecture?: string
    inputSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inferenceRequests?: InferenceRequestCreateNestedManyWithoutModelVersionInput
  }

  export type ModelVersionUncheckedCreateInput = {
    id?: string
    name: string
    version: string
    description?: string | null
    status?: $Enums.ModelStatus
    artifactUri: string
    scalerUri?: string | null
    artifactChecksum?: string | null
    features: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: string
    architecture?: string
    inputSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inferenceRequests?: InferenceRequestUncheckedCreateNestedManyWithoutModelVersionInput
  }

  export type ModelVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    artifactUri?: StringFieldUpdateOperationsInput | string
    scalerUri?: NullableStringFieldUpdateOperationsInput | string | null
    artifactChecksum?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: StringFieldUpdateOperationsInput | string
    architecture?: StringFieldUpdateOperationsInput | string
    inputSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferenceRequests?: InferenceRequestUpdateManyWithoutModelVersionNestedInput
  }

  export type ModelVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    artifactUri?: StringFieldUpdateOperationsInput | string
    scalerUri?: NullableStringFieldUpdateOperationsInput | string | null
    artifactChecksum?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: StringFieldUpdateOperationsInput | string
    architecture?: StringFieldUpdateOperationsInput | string
    inputSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferenceRequests?: InferenceRequestUncheckedUpdateManyWithoutModelVersionNestedInput
  }

  export type ModelVersionCreateManyInput = {
    id?: string
    name: string
    version: string
    description?: string | null
    status?: $Enums.ModelStatus
    artifactUri: string
    scalerUri?: string | null
    artifactChecksum?: string | null
    features: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: string
    architecture?: string
    inputSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    artifactUri?: StringFieldUpdateOperationsInput | string
    scalerUri?: NullableStringFieldUpdateOperationsInput | string | null
    artifactChecksum?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: StringFieldUpdateOperationsInput | string
    architecture?: StringFieldUpdateOperationsInput | string
    inputSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    artifactUri?: StringFieldUpdateOperationsInput | string
    scalerUri?: NullableStringFieldUpdateOperationsInput | string | null
    artifactChecksum?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: StringFieldUpdateOperationsInput | string
    architecture?: StringFieldUpdateOperationsInput | string
    inputSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceRequestCreateInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutInferenceRequestsInput
    modelVersion?: ModelVersionCreateNestedOneWithoutInferenceRequestsInput
    results?: PredictionResultCreateNestedManyWithoutInferenceRequestInput
  }

  export type InferenceRequestUncheckedCreateInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    userId?: string | null
    modelVersionId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: PredictionResultUncheckedCreateNestedManyWithoutInferenceRequestInput
  }

  export type InferenceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInferenceRequestsNestedInput
    modelVersion?: ModelVersionUpdateOneWithoutInferenceRequestsNestedInput
    results?: PredictionResultUpdateManyWithoutInferenceRequestNestedInput
  }

  export type InferenceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    modelVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: PredictionResultUncheckedUpdateManyWithoutInferenceRequestNestedInput
  }

  export type InferenceRequestCreateManyInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    userId?: string | null
    modelVersionId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InferenceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    modelVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultCreateInput = {
    id?: string
    observationIndex?: number
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
    inferenceRequest: InferenceRequestCreateNestedOneWithoutResultsInput
    datasetRecord?: DatasetRecordCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionResultUncheckedCreateInput = {
    id?: string
    inferenceRequestId: string
    observationIndex?: number
    datasetRecordId?: string | null
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
  }

  export type PredictionResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferenceRequest?: InferenceRequestUpdateOneRequiredWithoutResultsNestedInput
    datasetRecord?: DatasetRecordUpdateOneWithoutPredictionsNestedInput
  }

  export type PredictionResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inferenceRequestId?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    datasetRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultCreateManyInput = {
    id?: string
    inferenceRequestId: string
    observationIndex?: number
    datasetRecordId?: string | null
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
  }

  export type PredictionResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inferenceRequestId?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    datasetRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxEventCreateInput = {
    id?: string
    eventType: string
    aggregateType: string
    aggregateId: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.OutboxStatus
    attempts?: number
    nextAttemptAt?: Date | string
    publishedAt?: Date | string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutboxEventUncheckedCreateInput = {
    id?: string
    eventType: string
    aggregateType: string
    aggregateId: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.OutboxStatus
    attempts?: number
    nextAttemptAt?: Date | string
    publishedAt?: Date | string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutboxEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxEventCreateManyInput = {
    id?: string
    eventType: string
    aggregateType: string
    aggregateId: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.OutboxStatus
    attempts?: number
    nextAttemptAt?: Date | string
    publishedAt?: Date | string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutboxEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumOutboxStatusFieldUpdateOperationsInput | $Enums.OutboxStatus
    attempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DatasetListRelationFilter = {
    every?: DatasetWhereInput
    some?: DatasetWhereInput
    none?: DatasetWhereInput
  }

  export type InferenceRequestListRelationFilter = {
    every?: InferenceRequestWhereInput
    some?: InferenceRequestWhereInput
    none?: InferenceRequestWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DatasetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InferenceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    lastUsedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDatasetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DatasetStatus | EnumDatasetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDatasetStatusFilter<$PrismaModel> | $Enums.DatasetStatus
  }

  export type DatasetRecordListRelationFilter = {
    every?: DatasetRecordWhereInput
    some?: DatasetRecordWhereInput
    none?: DatasetRecordWhereInput
  }

  export type DatasetRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatasetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileName?: SortOrder
    storageUri?: SortOrder
    checksum?: SortOrder
    recordCount?: SortOrder
    status?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatasetAvgOrderByAggregateInput = {
    recordCount?: SortOrder
  }

  export type DatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileName?: SortOrder
    storageUri?: SortOrder
    checksum?: SortOrder
    recordCount?: SortOrder
    status?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatasetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileName?: SortOrder
    storageUri?: SortOrder
    checksum?: SortOrder
    recordCount?: SortOrder
    status?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatasetSumOrderByAggregateInput = {
    recordCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDatasetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DatasetStatus | EnumDatasetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDatasetStatusWithAggregatesFilter<$PrismaModel> | $Enums.DatasetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDatasetStatusFilter<$PrismaModel>
    _max?: NestedEnumDatasetStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumEventClassNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventClassNullableFilter<$PrismaModel> | $Enums.EventClass | null
  }

  export type DatasetScalarRelationFilter = {
    is?: DatasetWhereInput
    isNot?: DatasetWhereInput
  }

  export type PredictionResultListRelationFilter = {
    every?: PredictionResultWhereInput
    some?: PredictionResultWhereInput
    none?: PredictionResultWhereInput
  }

  export type PredictionResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatasetRecordCountOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    features?: SortOrder
    actualClass?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    actualClass?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetRecordMinOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    actualClass?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumEventClassNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventClassNullableWithAggregatesFilter<$PrismaModel> | $Enums.EventClass | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEventClassNullableFilter<$PrismaModel>
    _max?: NestedEnumEventClassNullableFilter<$PrismaModel>
  }

  export type EnumModelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusFilter<$PrismaModel> | $Enums.ModelStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ModelVersionNameVersionCompoundUniqueInput = {
    name: string
    version: string
  }

  export type ModelVersionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    description?: SortOrder
    status?: SortOrder
    artifactUri?: SortOrder
    scalerUri?: SortOrder
    artifactChecksum?: SortOrder
    features?: SortOrder
    classes?: SortOrder
    preprocessing?: SortOrder
    metrics?: SortOrder
    framework?: SortOrder
    architecture?: SortOrder
    inputSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelVersionAvgOrderByAggregateInput = {
    inputSize?: SortOrder
  }

  export type ModelVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    description?: SortOrder
    status?: SortOrder
    artifactUri?: SortOrder
    scalerUri?: SortOrder
    artifactChecksum?: SortOrder
    framework?: SortOrder
    architecture?: SortOrder
    inputSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelVersionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    description?: SortOrder
    status?: SortOrder
    artifactUri?: SortOrder
    scalerUri?: SortOrder
    artifactChecksum?: SortOrder
    framework?: SortOrder
    architecture?: SortOrder
    inputSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelVersionSumOrderByAggregateInput = {
    inputSize?: SortOrder
  }

  export type EnumModelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelStatusFilter<$PrismaModel>
    _max?: NestedEnumModelStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumInferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceType | EnumInferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceTypeFilter<$PrismaModel> | $Enums.InferenceType
  }

  export type EnumInferenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceStatus | EnumInferenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceStatusFilter<$PrismaModel> | $Enums.InferenceStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ModelVersionNullableScalarRelationFilter = {
    is?: ModelVersionWhereInput | null
    isNot?: ModelVersionWhereInput | null
  }

  export type InferenceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    traceId?: SortOrder
    idempotencyKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    inputFeatures?: SortOrder
    observationCount?: SortOrder
    latencyMs?: SortOrder
    retryCount?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    userId?: SortOrder
    modelVersionId?: SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InferenceRequestAvgOrderByAggregateInput = {
    observationCount?: SortOrder
    latencyMs?: SortOrder
    retryCount?: SortOrder
  }

  export type InferenceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    traceId?: SortOrder
    idempotencyKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    observationCount?: SortOrder
    latencyMs?: SortOrder
    retryCount?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    userId?: SortOrder
    modelVersionId?: SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InferenceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    traceId?: SortOrder
    idempotencyKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    observationCount?: SortOrder
    latencyMs?: SortOrder
    retryCount?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    userId?: SortOrder
    modelVersionId?: SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InferenceRequestSumOrderByAggregateInput = {
    observationCount?: SortOrder
    latencyMs?: SortOrder
    retryCount?: SortOrder
  }

  export type EnumInferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceType | EnumInferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumInferenceTypeFilter<$PrismaModel>
  }

  export type EnumInferenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceStatus | EnumInferenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InferenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInferenceStatusFilter<$PrismaModel>
    _max?: NestedEnumInferenceStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEventClassFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel>
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    not?: NestedEnumEventClassFilter<$PrismaModel> | $Enums.EventClass
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InferenceRequestScalarRelationFilter = {
    is?: InferenceRequestWhereInput
    isNot?: InferenceRequestWhereInput
  }

  export type DatasetRecordNullableScalarRelationFilter = {
    is?: DatasetRecordWhereInput | null
    isNot?: DatasetRecordWhereInput | null
  }

  export type PredictionResultInferenceRequestIdObservationIndexCompoundUniqueInput = {
    inferenceRequestId: string
    observationIndex: number
  }

  export type PredictionResultCountOrderByAggregateInput = {
    id?: SortOrder
    inferenceRequestId?: SortOrder
    observationIndex?: SortOrder
    datasetRecordId?: SortOrder
    predictedClass?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionResultAvgOrderByAggregateInput = {
    observationIndex?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
  }

  export type PredictionResultMaxOrderByAggregateInput = {
    id?: SortOrder
    inferenceRequestId?: SortOrder
    observationIndex?: SortOrder
    datasetRecordId?: SortOrder
    predictedClass?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionResultMinOrderByAggregateInput = {
    id?: SortOrder
    inferenceRequestId?: SortOrder
    observationIndex?: SortOrder
    datasetRecordId?: SortOrder
    predictedClass?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionResultSumOrderByAggregateInput = {
    observationIndex?: SortOrder
    gammaProbability?: SortOrder
    hadronProbability?: SortOrder
    confidence?: SortOrder
  }

  export type EnumEventClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel>
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    not?: NestedEnumEventClassWithAggregatesFilter<$PrismaModel> | $Enums.EventClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventClassFilter<$PrismaModel>
    _max?: NestedEnumEventClassFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOutboxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusFilter<$PrismaModel> | $Enums.OutboxStatus
  }

  export type OutboxEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    nextAttemptAt?: SortOrder
    publishedAt?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutboxEventAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type OutboxEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    nextAttemptAt?: SortOrder
    publishedAt?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutboxEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    nextAttemptAt?: SortOrder
    publishedAt?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutboxEventSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumOutboxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutboxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutboxStatusFilter<$PrismaModel>
    _max?: NestedEnumOutboxStatusFilter<$PrismaModel>
  }

  export type DatasetCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
  }

  export type InferenceRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<InferenceRequestCreateWithoutUserInput, InferenceRequestUncheckedCreateWithoutUserInput> | InferenceRequestCreateWithoutUserInput[] | InferenceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutUserInput | InferenceRequestCreateOrConnectWithoutUserInput[]
    createMany?: InferenceRequestCreateManyUserInputEnvelope
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type DatasetUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
  }

  export type InferenceRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InferenceRequestCreateWithoutUserInput, InferenceRequestUncheckedCreateWithoutUserInput> | InferenceRequestCreateWithoutUserInput[] | InferenceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutUserInput | InferenceRequestCreateOrConnectWithoutUserInput[]
    createMany?: InferenceRequestCreateManyUserInputEnvelope
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DatasetUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    upsert?: DatasetUpsertWithWhereUniqueWithoutUploadedByInput | DatasetUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    set?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    disconnect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    delete?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    update?: DatasetUpdateWithWhereUniqueWithoutUploadedByInput | DatasetUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DatasetUpdateManyWithWhereWithoutUploadedByInput | DatasetUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
  }

  export type InferenceRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<InferenceRequestCreateWithoutUserInput, InferenceRequestUncheckedCreateWithoutUserInput> | InferenceRequestCreateWithoutUserInput[] | InferenceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutUserInput | InferenceRequestCreateOrConnectWithoutUserInput[]
    upsert?: InferenceRequestUpsertWithWhereUniqueWithoutUserInput | InferenceRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InferenceRequestCreateManyUserInputEnvelope
    set?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    disconnect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    delete?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    update?: InferenceRequestUpdateWithWhereUniqueWithoutUserInput | InferenceRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InferenceRequestUpdateManyWithWhereWithoutUserInput | InferenceRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InferenceRequestScalarWhereInput | InferenceRequestScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type DatasetUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    upsert?: DatasetUpsertWithWhereUniqueWithoutUploadedByInput | DatasetUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    set?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    disconnect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    delete?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    update?: DatasetUpdateWithWhereUniqueWithoutUploadedByInput | DatasetUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DatasetUpdateManyWithWhereWithoutUploadedByInput | DatasetUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
  }

  export type InferenceRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InferenceRequestCreateWithoutUserInput, InferenceRequestUncheckedCreateWithoutUserInput> | InferenceRequestCreateWithoutUserInput[] | InferenceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutUserInput | InferenceRequestCreateOrConnectWithoutUserInput[]
    upsert?: InferenceRequestUpsertWithWhereUniqueWithoutUserInput | InferenceRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InferenceRequestCreateManyUserInputEnvelope
    set?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    disconnect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    delete?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    update?: InferenceRequestUpdateWithWhereUniqueWithoutUserInput | InferenceRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InferenceRequestUpdateManyWithWhereWithoutUserInput | InferenceRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InferenceRequestScalarWhereInput | InferenceRequestScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserCreateNestedOneWithoutDatasetsInput = {
    create?: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDatasetsInput
    connect?: UserWhereUniqueInput
  }

  export type DatasetRecordCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetRecordCreateWithoutDatasetInput, DatasetRecordUncheckedCreateWithoutDatasetInput> | DatasetRecordCreateWithoutDatasetInput[] | DatasetRecordUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetRecordCreateOrConnectWithoutDatasetInput | DatasetRecordCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetRecordCreateManyDatasetInputEnvelope
    connect?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
  }

  export type DatasetRecordUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetRecordCreateWithoutDatasetInput, DatasetRecordUncheckedCreateWithoutDatasetInput> | DatasetRecordCreateWithoutDatasetInput[] | DatasetRecordUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetRecordCreateOrConnectWithoutDatasetInput | DatasetRecordCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetRecordCreateManyDatasetInputEnvelope
    connect?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDatasetStatusFieldUpdateOperationsInput = {
    set?: $Enums.DatasetStatus
  }

  export type UserUpdateOneRequiredWithoutDatasetsNestedInput = {
    create?: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDatasetsInput
    upsert?: UserUpsertWithoutDatasetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDatasetsInput, UserUpdateWithoutDatasetsInput>, UserUncheckedUpdateWithoutDatasetsInput>
  }

  export type DatasetRecordUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetRecordCreateWithoutDatasetInput, DatasetRecordUncheckedCreateWithoutDatasetInput> | DatasetRecordCreateWithoutDatasetInput[] | DatasetRecordUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetRecordCreateOrConnectWithoutDatasetInput | DatasetRecordCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetRecordUpsertWithWhereUniqueWithoutDatasetInput | DatasetRecordUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetRecordCreateManyDatasetInputEnvelope
    set?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    disconnect?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    delete?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    connect?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    update?: DatasetRecordUpdateWithWhereUniqueWithoutDatasetInput | DatasetRecordUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetRecordUpdateManyWithWhereWithoutDatasetInput | DatasetRecordUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetRecordScalarWhereInput | DatasetRecordScalarWhereInput[]
  }

  export type DatasetRecordUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetRecordCreateWithoutDatasetInput, DatasetRecordUncheckedCreateWithoutDatasetInput> | DatasetRecordCreateWithoutDatasetInput[] | DatasetRecordUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetRecordCreateOrConnectWithoutDatasetInput | DatasetRecordCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetRecordUpsertWithWhereUniqueWithoutDatasetInput | DatasetRecordUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetRecordCreateManyDatasetInputEnvelope
    set?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    disconnect?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    delete?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    connect?: DatasetRecordWhereUniqueInput | DatasetRecordWhereUniqueInput[]
    update?: DatasetRecordUpdateWithWhereUniqueWithoutDatasetInput | DatasetRecordUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetRecordUpdateManyWithWhereWithoutDatasetInput | DatasetRecordUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetRecordScalarWhereInput | DatasetRecordScalarWhereInput[]
  }

  export type DatasetCreateNestedOneWithoutRecordsInput = {
    create?: XOR<DatasetCreateWithoutRecordsInput, DatasetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutRecordsInput
    connect?: DatasetWhereUniqueInput
  }

  export type PredictionResultCreateNestedManyWithoutDatasetRecordInput = {
    create?: XOR<PredictionResultCreateWithoutDatasetRecordInput, PredictionResultUncheckedCreateWithoutDatasetRecordInput> | PredictionResultCreateWithoutDatasetRecordInput[] | PredictionResultUncheckedCreateWithoutDatasetRecordInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutDatasetRecordInput | PredictionResultCreateOrConnectWithoutDatasetRecordInput[]
    createMany?: PredictionResultCreateManyDatasetRecordInputEnvelope
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
  }

  export type PredictionResultUncheckedCreateNestedManyWithoutDatasetRecordInput = {
    create?: XOR<PredictionResultCreateWithoutDatasetRecordInput, PredictionResultUncheckedCreateWithoutDatasetRecordInput> | PredictionResultCreateWithoutDatasetRecordInput[] | PredictionResultUncheckedCreateWithoutDatasetRecordInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutDatasetRecordInput | PredictionResultCreateOrConnectWithoutDatasetRecordInput[]
    createMany?: PredictionResultCreateManyDatasetRecordInputEnvelope
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
  }

  export type NullableEnumEventClassFieldUpdateOperationsInput = {
    set?: $Enums.EventClass | null
  }

  export type DatasetUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<DatasetCreateWithoutRecordsInput, DatasetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutRecordsInput
    upsert?: DatasetUpsertWithoutRecordsInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutRecordsInput, DatasetUpdateWithoutRecordsInput>, DatasetUncheckedUpdateWithoutRecordsInput>
  }

  export type PredictionResultUpdateManyWithoutDatasetRecordNestedInput = {
    create?: XOR<PredictionResultCreateWithoutDatasetRecordInput, PredictionResultUncheckedCreateWithoutDatasetRecordInput> | PredictionResultCreateWithoutDatasetRecordInput[] | PredictionResultUncheckedCreateWithoutDatasetRecordInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutDatasetRecordInput | PredictionResultCreateOrConnectWithoutDatasetRecordInput[]
    upsert?: PredictionResultUpsertWithWhereUniqueWithoutDatasetRecordInput | PredictionResultUpsertWithWhereUniqueWithoutDatasetRecordInput[]
    createMany?: PredictionResultCreateManyDatasetRecordInputEnvelope
    set?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    disconnect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    delete?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    update?: PredictionResultUpdateWithWhereUniqueWithoutDatasetRecordInput | PredictionResultUpdateWithWhereUniqueWithoutDatasetRecordInput[]
    updateMany?: PredictionResultUpdateManyWithWhereWithoutDatasetRecordInput | PredictionResultUpdateManyWithWhereWithoutDatasetRecordInput[]
    deleteMany?: PredictionResultScalarWhereInput | PredictionResultScalarWhereInput[]
  }

  export type PredictionResultUncheckedUpdateManyWithoutDatasetRecordNestedInput = {
    create?: XOR<PredictionResultCreateWithoutDatasetRecordInput, PredictionResultUncheckedCreateWithoutDatasetRecordInput> | PredictionResultCreateWithoutDatasetRecordInput[] | PredictionResultUncheckedCreateWithoutDatasetRecordInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutDatasetRecordInput | PredictionResultCreateOrConnectWithoutDatasetRecordInput[]
    upsert?: PredictionResultUpsertWithWhereUniqueWithoutDatasetRecordInput | PredictionResultUpsertWithWhereUniqueWithoutDatasetRecordInput[]
    createMany?: PredictionResultCreateManyDatasetRecordInputEnvelope
    set?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    disconnect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    delete?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    update?: PredictionResultUpdateWithWhereUniqueWithoutDatasetRecordInput | PredictionResultUpdateWithWhereUniqueWithoutDatasetRecordInput[]
    updateMany?: PredictionResultUpdateManyWithWhereWithoutDatasetRecordInput | PredictionResultUpdateManyWithWhereWithoutDatasetRecordInput[]
    deleteMany?: PredictionResultScalarWhereInput | PredictionResultScalarWhereInput[]
  }

  export type InferenceRequestCreateNestedManyWithoutModelVersionInput = {
    create?: XOR<InferenceRequestCreateWithoutModelVersionInput, InferenceRequestUncheckedCreateWithoutModelVersionInput> | InferenceRequestCreateWithoutModelVersionInput[] | InferenceRequestUncheckedCreateWithoutModelVersionInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutModelVersionInput | InferenceRequestCreateOrConnectWithoutModelVersionInput[]
    createMany?: InferenceRequestCreateManyModelVersionInputEnvelope
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
  }

  export type InferenceRequestUncheckedCreateNestedManyWithoutModelVersionInput = {
    create?: XOR<InferenceRequestCreateWithoutModelVersionInput, InferenceRequestUncheckedCreateWithoutModelVersionInput> | InferenceRequestCreateWithoutModelVersionInput[] | InferenceRequestUncheckedCreateWithoutModelVersionInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutModelVersionInput | InferenceRequestCreateOrConnectWithoutModelVersionInput[]
    createMany?: InferenceRequestCreateManyModelVersionInputEnvelope
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
  }

  export type EnumModelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModelStatus
  }

  export type InferenceRequestUpdateManyWithoutModelVersionNestedInput = {
    create?: XOR<InferenceRequestCreateWithoutModelVersionInput, InferenceRequestUncheckedCreateWithoutModelVersionInput> | InferenceRequestCreateWithoutModelVersionInput[] | InferenceRequestUncheckedCreateWithoutModelVersionInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutModelVersionInput | InferenceRequestCreateOrConnectWithoutModelVersionInput[]
    upsert?: InferenceRequestUpsertWithWhereUniqueWithoutModelVersionInput | InferenceRequestUpsertWithWhereUniqueWithoutModelVersionInput[]
    createMany?: InferenceRequestCreateManyModelVersionInputEnvelope
    set?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    disconnect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    delete?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    update?: InferenceRequestUpdateWithWhereUniqueWithoutModelVersionInput | InferenceRequestUpdateWithWhereUniqueWithoutModelVersionInput[]
    updateMany?: InferenceRequestUpdateManyWithWhereWithoutModelVersionInput | InferenceRequestUpdateManyWithWhereWithoutModelVersionInput[]
    deleteMany?: InferenceRequestScalarWhereInput | InferenceRequestScalarWhereInput[]
  }

  export type InferenceRequestUncheckedUpdateManyWithoutModelVersionNestedInput = {
    create?: XOR<InferenceRequestCreateWithoutModelVersionInput, InferenceRequestUncheckedCreateWithoutModelVersionInput> | InferenceRequestCreateWithoutModelVersionInput[] | InferenceRequestUncheckedCreateWithoutModelVersionInput[]
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutModelVersionInput | InferenceRequestCreateOrConnectWithoutModelVersionInput[]
    upsert?: InferenceRequestUpsertWithWhereUniqueWithoutModelVersionInput | InferenceRequestUpsertWithWhereUniqueWithoutModelVersionInput[]
    createMany?: InferenceRequestCreateManyModelVersionInputEnvelope
    set?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    disconnect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    delete?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    connect?: InferenceRequestWhereUniqueInput | InferenceRequestWhereUniqueInput[]
    update?: InferenceRequestUpdateWithWhereUniqueWithoutModelVersionInput | InferenceRequestUpdateWithWhereUniqueWithoutModelVersionInput[]
    updateMany?: InferenceRequestUpdateManyWithWhereWithoutModelVersionInput | InferenceRequestUpdateManyWithWhereWithoutModelVersionInput[]
    deleteMany?: InferenceRequestScalarWhereInput | InferenceRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInferenceRequestsInput = {
    create?: XOR<UserCreateWithoutInferenceRequestsInput, UserUncheckedCreateWithoutInferenceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInferenceRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ModelVersionCreateNestedOneWithoutInferenceRequestsInput = {
    create?: XOR<ModelVersionCreateWithoutInferenceRequestsInput, ModelVersionUncheckedCreateWithoutInferenceRequestsInput>
    connectOrCreate?: ModelVersionCreateOrConnectWithoutInferenceRequestsInput
    connect?: ModelVersionWhereUniqueInput
  }

  export type PredictionResultCreateNestedManyWithoutInferenceRequestInput = {
    create?: XOR<PredictionResultCreateWithoutInferenceRequestInput, PredictionResultUncheckedCreateWithoutInferenceRequestInput> | PredictionResultCreateWithoutInferenceRequestInput[] | PredictionResultUncheckedCreateWithoutInferenceRequestInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutInferenceRequestInput | PredictionResultCreateOrConnectWithoutInferenceRequestInput[]
    createMany?: PredictionResultCreateManyInferenceRequestInputEnvelope
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
  }

  export type PredictionResultUncheckedCreateNestedManyWithoutInferenceRequestInput = {
    create?: XOR<PredictionResultCreateWithoutInferenceRequestInput, PredictionResultUncheckedCreateWithoutInferenceRequestInput> | PredictionResultCreateWithoutInferenceRequestInput[] | PredictionResultUncheckedCreateWithoutInferenceRequestInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutInferenceRequestInput | PredictionResultCreateOrConnectWithoutInferenceRequestInput[]
    createMany?: PredictionResultCreateManyInferenceRequestInputEnvelope
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
  }

  export type EnumInferenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.InferenceType
  }

  export type EnumInferenceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InferenceStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutInferenceRequestsNestedInput = {
    create?: XOR<UserCreateWithoutInferenceRequestsInput, UserUncheckedCreateWithoutInferenceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInferenceRequestsInput
    upsert?: UserUpsertWithoutInferenceRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInferenceRequestsInput, UserUpdateWithoutInferenceRequestsInput>, UserUncheckedUpdateWithoutInferenceRequestsInput>
  }

  export type ModelVersionUpdateOneWithoutInferenceRequestsNestedInput = {
    create?: XOR<ModelVersionCreateWithoutInferenceRequestsInput, ModelVersionUncheckedCreateWithoutInferenceRequestsInput>
    connectOrCreate?: ModelVersionCreateOrConnectWithoutInferenceRequestsInput
    upsert?: ModelVersionUpsertWithoutInferenceRequestsInput
    disconnect?: ModelVersionWhereInput | boolean
    delete?: ModelVersionWhereInput | boolean
    connect?: ModelVersionWhereUniqueInput
    update?: XOR<XOR<ModelVersionUpdateToOneWithWhereWithoutInferenceRequestsInput, ModelVersionUpdateWithoutInferenceRequestsInput>, ModelVersionUncheckedUpdateWithoutInferenceRequestsInput>
  }

  export type PredictionResultUpdateManyWithoutInferenceRequestNestedInput = {
    create?: XOR<PredictionResultCreateWithoutInferenceRequestInput, PredictionResultUncheckedCreateWithoutInferenceRequestInput> | PredictionResultCreateWithoutInferenceRequestInput[] | PredictionResultUncheckedCreateWithoutInferenceRequestInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutInferenceRequestInput | PredictionResultCreateOrConnectWithoutInferenceRequestInput[]
    upsert?: PredictionResultUpsertWithWhereUniqueWithoutInferenceRequestInput | PredictionResultUpsertWithWhereUniqueWithoutInferenceRequestInput[]
    createMany?: PredictionResultCreateManyInferenceRequestInputEnvelope
    set?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    disconnect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    delete?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    update?: PredictionResultUpdateWithWhereUniqueWithoutInferenceRequestInput | PredictionResultUpdateWithWhereUniqueWithoutInferenceRequestInput[]
    updateMany?: PredictionResultUpdateManyWithWhereWithoutInferenceRequestInput | PredictionResultUpdateManyWithWhereWithoutInferenceRequestInput[]
    deleteMany?: PredictionResultScalarWhereInput | PredictionResultScalarWhereInput[]
  }

  export type PredictionResultUncheckedUpdateManyWithoutInferenceRequestNestedInput = {
    create?: XOR<PredictionResultCreateWithoutInferenceRequestInput, PredictionResultUncheckedCreateWithoutInferenceRequestInput> | PredictionResultCreateWithoutInferenceRequestInput[] | PredictionResultUncheckedCreateWithoutInferenceRequestInput[]
    connectOrCreate?: PredictionResultCreateOrConnectWithoutInferenceRequestInput | PredictionResultCreateOrConnectWithoutInferenceRequestInput[]
    upsert?: PredictionResultUpsertWithWhereUniqueWithoutInferenceRequestInput | PredictionResultUpsertWithWhereUniqueWithoutInferenceRequestInput[]
    createMany?: PredictionResultCreateManyInferenceRequestInputEnvelope
    set?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    disconnect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    delete?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    connect?: PredictionResultWhereUniqueInput | PredictionResultWhereUniqueInput[]
    update?: PredictionResultUpdateWithWhereUniqueWithoutInferenceRequestInput | PredictionResultUpdateWithWhereUniqueWithoutInferenceRequestInput[]
    updateMany?: PredictionResultUpdateManyWithWhereWithoutInferenceRequestInput | PredictionResultUpdateManyWithWhereWithoutInferenceRequestInput[]
    deleteMany?: PredictionResultScalarWhereInput | PredictionResultScalarWhereInput[]
  }

  export type InferenceRequestCreateNestedOneWithoutResultsInput = {
    create?: XOR<InferenceRequestCreateWithoutResultsInput, InferenceRequestUncheckedCreateWithoutResultsInput>
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutResultsInput
    connect?: InferenceRequestWhereUniqueInput
  }

  export type DatasetRecordCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<DatasetRecordCreateWithoutPredictionsInput, DatasetRecordUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: DatasetRecordCreateOrConnectWithoutPredictionsInput
    connect?: DatasetRecordWhereUniqueInput
  }

  export type EnumEventClassFieldUpdateOperationsInput = {
    set?: $Enums.EventClass
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InferenceRequestUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<InferenceRequestCreateWithoutResultsInput, InferenceRequestUncheckedCreateWithoutResultsInput>
    connectOrCreate?: InferenceRequestCreateOrConnectWithoutResultsInput
    upsert?: InferenceRequestUpsertWithoutResultsInput
    connect?: InferenceRequestWhereUniqueInput
    update?: XOR<XOR<InferenceRequestUpdateToOneWithWhereWithoutResultsInput, InferenceRequestUpdateWithoutResultsInput>, InferenceRequestUncheckedUpdateWithoutResultsInput>
  }

  export type DatasetRecordUpdateOneWithoutPredictionsNestedInput = {
    create?: XOR<DatasetRecordCreateWithoutPredictionsInput, DatasetRecordUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: DatasetRecordCreateOrConnectWithoutPredictionsInput
    upsert?: DatasetRecordUpsertWithoutPredictionsInput
    disconnect?: DatasetRecordWhereInput | boolean
    delete?: DatasetRecordWhereInput | boolean
    connect?: DatasetRecordWhereUniqueInput
    update?: XOR<XOR<DatasetRecordUpdateToOneWithWhereWithoutPredictionsInput, DatasetRecordUpdateWithoutPredictionsInput>, DatasetRecordUncheckedUpdateWithoutPredictionsInput>
  }

  export type EnumOutboxStatusFieldUpdateOperationsInput = {
    set?: $Enums.OutboxStatus
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDatasetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DatasetStatus | EnumDatasetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDatasetStatusFilter<$PrismaModel> | $Enums.DatasetStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDatasetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DatasetStatus | EnumDatasetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatasetStatus[] | ListEnumDatasetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDatasetStatusWithAggregatesFilter<$PrismaModel> | $Enums.DatasetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDatasetStatusFilter<$PrismaModel>
    _max?: NestedEnumDatasetStatusFilter<$PrismaModel>
  }

  export type NestedEnumEventClassNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventClassNullableFilter<$PrismaModel> | $Enums.EventClass | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumEventClassNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventClassNullableWithAggregatesFilter<$PrismaModel> | $Enums.EventClass | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEventClassNullableFilter<$PrismaModel>
    _max?: NestedEnumEventClassNullableFilter<$PrismaModel>
  }

  export type NestedEnumModelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusFilter<$PrismaModel> | $Enums.ModelStatus
  }

  export type NestedEnumModelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelStatusFilter<$PrismaModel>
    _max?: NestedEnumModelStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumInferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceType | EnumInferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceTypeFilter<$PrismaModel> | $Enums.InferenceType
  }

  export type NestedEnumInferenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceStatus | EnumInferenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceStatusFilter<$PrismaModel> | $Enums.InferenceStatus
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumInferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceType | EnumInferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceType[] | ListEnumInferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumInferenceTypeFilter<$PrismaModel>
  }

  export type NestedEnumInferenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InferenceStatus | EnumInferenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InferenceStatus[] | ListEnumInferenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInferenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InferenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInferenceStatusFilter<$PrismaModel>
    _max?: NestedEnumInferenceStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEventClassFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel>
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    not?: NestedEnumEventClassFilter<$PrismaModel> | $Enums.EventClass
  }

  export type NestedEnumEventClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventClass | EnumEventClassFieldRefInput<$PrismaModel>
    in?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventClass[] | ListEnumEventClassFieldRefInput<$PrismaModel>
    not?: NestedEnumEventClassWithAggregatesFilter<$PrismaModel> | $Enums.EventClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventClassFilter<$PrismaModel>
    _max?: NestedEnumEventClassFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOutboxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusFilter<$PrismaModel> | $Enums.OutboxStatus
  }

  export type NestedEnumOutboxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutboxStatus | EnumOutboxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutboxStatus[] | ListEnumOutboxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOutboxStatusWithAggregatesFilter<$PrismaModel> | $Enums.OutboxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutboxStatusFilter<$PrismaModel>
    _max?: NestedEnumOutboxStatusFilter<$PrismaModel>
  }

  export type DatasetCreateWithoutUploadedByInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DatasetRecordCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutUploadedByInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DatasetRecordUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutUploadedByInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput>
  }

  export type DatasetCreateManyUploadedByInputEnvelope = {
    data: DatasetCreateManyUploadedByInput | DatasetCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type InferenceRequestCreateWithoutUserInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modelVersion?: ModelVersionCreateNestedOneWithoutInferenceRequestsInput
    results?: PredictionResultCreateNestedManyWithoutInferenceRequestInput
  }

  export type InferenceRequestUncheckedCreateWithoutUserInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    modelVersionId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: PredictionResultUncheckedCreateNestedManyWithoutInferenceRequestInput
  }

  export type InferenceRequestCreateOrConnectWithoutUserInput = {
    where: InferenceRequestWhereUniqueInput
    create: XOR<InferenceRequestCreateWithoutUserInput, InferenceRequestUncheckedCreateWithoutUserInput>
  }

  export type InferenceRequestCreateManyUserInputEnvelope = {
    data: InferenceRequestCreateManyUserInput | InferenceRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    name: string
    keyHash: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    keyHash: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: DatasetWhereUniqueInput
    update: XOR<DatasetUpdateWithoutUploadedByInput, DatasetUncheckedUpdateWithoutUploadedByInput>
    create: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput>
  }

  export type DatasetUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: DatasetWhereUniqueInput
    data: XOR<DatasetUpdateWithoutUploadedByInput, DatasetUncheckedUpdateWithoutUploadedByInput>
  }

  export type DatasetUpdateManyWithWhereWithoutUploadedByInput = {
    where: DatasetScalarWhereInput
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type DatasetScalarWhereInput = {
    AND?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
    OR?: DatasetScalarWhereInput[]
    NOT?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
    id?: UuidFilter<"Dataset"> | string
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    fileName?: StringNullableFilter<"Dataset"> | string | null
    storageUri?: StringNullableFilter<"Dataset"> | string | null
    checksum?: StringNullableFilter<"Dataset"> | string | null
    recordCount?: IntFilter<"Dataset"> | number
    status?: EnumDatasetStatusFilter<"Dataset"> | $Enums.DatasetStatus
    uploadedById?: UuidFilter<"Dataset"> | string
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeFilter<"Dataset"> | Date | string
  }

  export type InferenceRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: InferenceRequestWhereUniqueInput
    update: XOR<InferenceRequestUpdateWithoutUserInput, InferenceRequestUncheckedUpdateWithoutUserInput>
    create: XOR<InferenceRequestCreateWithoutUserInput, InferenceRequestUncheckedCreateWithoutUserInput>
  }

  export type InferenceRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: InferenceRequestWhereUniqueInput
    data: XOR<InferenceRequestUpdateWithoutUserInput, InferenceRequestUncheckedUpdateWithoutUserInput>
  }

  export type InferenceRequestUpdateManyWithWhereWithoutUserInput = {
    where: InferenceRequestScalarWhereInput
    data: XOR<InferenceRequestUpdateManyMutationInput, InferenceRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type InferenceRequestScalarWhereInput = {
    AND?: InferenceRequestScalarWhereInput | InferenceRequestScalarWhereInput[]
    OR?: InferenceRequestScalarWhereInput[]
    NOT?: InferenceRequestScalarWhereInput | InferenceRequestScalarWhereInput[]
    id?: UuidFilter<"InferenceRequest"> | string
    requestId?: StringFilter<"InferenceRequest"> | string
    traceId?: StringNullableFilter<"InferenceRequest"> | string | null
    idempotencyKey?: StringNullableFilter<"InferenceRequest"> | string | null
    type?: EnumInferenceTypeFilter<"InferenceRequest"> | $Enums.InferenceType
    status?: EnumInferenceStatusFilter<"InferenceRequest"> | $Enums.InferenceStatus
    inputFeatures?: JsonFilter<"InferenceRequest">
    observationCount?: IntFilter<"InferenceRequest"> | number
    latencyMs?: IntNullableFilter<"InferenceRequest"> | number | null
    retryCount?: IntFilter<"InferenceRequest"> | number
    errorCode?: StringNullableFilter<"InferenceRequest"> | string | null
    errorMessage?: StringNullableFilter<"InferenceRequest"> | string | null
    userId?: UuidNullableFilter<"InferenceRequest"> | string | null
    modelVersionId?: UuidNullableFilter<"InferenceRequest"> | string | null
    queuedAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    startedAt?: DateTimeNullableFilter<"InferenceRequest"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"InferenceRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"InferenceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"InferenceRequest"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: UuidFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    userId?: UuidFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    inferenceRequests?: InferenceRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    inferenceRequests?: InferenceRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    inferenceRequests?: InferenceRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    inferenceRequests?: InferenceRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDatasetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inferenceRequests?: InferenceRequestCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDatasetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inferenceRequests?: InferenceRequestUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDatasetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
  }

  export type DatasetRecordCreateWithoutDatasetInput = {
    id?: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
    predictions?: PredictionResultCreateNestedManyWithoutDatasetRecordInput
  }

  export type DatasetRecordUncheckedCreateWithoutDatasetInput = {
    id?: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
    predictions?: PredictionResultUncheckedCreateNestedManyWithoutDatasetRecordInput
  }

  export type DatasetRecordCreateOrConnectWithoutDatasetInput = {
    where: DatasetRecordWhereUniqueInput
    create: XOR<DatasetRecordCreateWithoutDatasetInput, DatasetRecordUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetRecordCreateManyDatasetInputEnvelope = {
    data: DatasetRecordCreateManyDatasetInput | DatasetRecordCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDatasetsInput = {
    update: XOR<UserUpdateWithoutDatasetsInput, UserUncheckedUpdateWithoutDatasetsInput>
    create: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDatasetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDatasetsInput, UserUncheckedUpdateWithoutDatasetsInput>
  }

  export type UserUpdateWithoutDatasetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferenceRequests?: InferenceRequestUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDatasetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferenceRequests?: InferenceRequestUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DatasetRecordUpsertWithWhereUniqueWithoutDatasetInput = {
    where: DatasetRecordWhereUniqueInput
    update: XOR<DatasetRecordUpdateWithoutDatasetInput, DatasetRecordUncheckedUpdateWithoutDatasetInput>
    create: XOR<DatasetRecordCreateWithoutDatasetInput, DatasetRecordUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetRecordUpdateWithWhereUniqueWithoutDatasetInput = {
    where: DatasetRecordWhereUniqueInput
    data: XOR<DatasetRecordUpdateWithoutDatasetInput, DatasetRecordUncheckedUpdateWithoutDatasetInput>
  }

  export type DatasetRecordUpdateManyWithWhereWithoutDatasetInput = {
    where: DatasetRecordScalarWhereInput
    data: XOR<DatasetRecordUpdateManyMutationInput, DatasetRecordUncheckedUpdateManyWithoutDatasetInput>
  }

  export type DatasetRecordScalarWhereInput = {
    AND?: DatasetRecordScalarWhereInput | DatasetRecordScalarWhereInput[]
    OR?: DatasetRecordScalarWhereInput[]
    NOT?: DatasetRecordScalarWhereInput | DatasetRecordScalarWhereInput[]
    id?: UuidFilter<"DatasetRecord"> | string
    datasetId?: UuidFilter<"DatasetRecord"> | string
    features?: JsonFilter<"DatasetRecord">
    actualClass?: EnumEventClassNullableFilter<"DatasetRecord"> | $Enums.EventClass | null
    createdAt?: DateTimeFilter<"DatasetRecord"> | Date | string
  }

  export type DatasetCreateWithoutRecordsInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutDatasetsInput
  }

  export type DatasetUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    uploadedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatasetCreateOrConnectWithoutRecordsInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutRecordsInput, DatasetUncheckedCreateWithoutRecordsInput>
  }

  export type PredictionResultCreateWithoutDatasetRecordInput = {
    id?: string
    observationIndex?: number
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
    inferenceRequest: InferenceRequestCreateNestedOneWithoutResultsInput
  }

  export type PredictionResultUncheckedCreateWithoutDatasetRecordInput = {
    id?: string
    inferenceRequestId: string
    observationIndex?: number
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
  }

  export type PredictionResultCreateOrConnectWithoutDatasetRecordInput = {
    where: PredictionResultWhereUniqueInput
    create: XOR<PredictionResultCreateWithoutDatasetRecordInput, PredictionResultUncheckedCreateWithoutDatasetRecordInput>
  }

  export type PredictionResultCreateManyDatasetRecordInputEnvelope = {
    data: PredictionResultCreateManyDatasetRecordInput | PredictionResultCreateManyDatasetRecordInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithoutRecordsInput = {
    update: XOR<DatasetUpdateWithoutRecordsInput, DatasetUncheckedUpdateWithoutRecordsInput>
    create: XOR<DatasetCreateWithoutRecordsInput, DatasetUncheckedCreateWithoutRecordsInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutRecordsInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutRecordsInput, DatasetUncheckedUpdateWithoutRecordsInput>
  }

  export type DatasetUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutDatasetsNestedInput
  }

  export type DatasetUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultUpsertWithWhereUniqueWithoutDatasetRecordInput = {
    where: PredictionResultWhereUniqueInput
    update: XOR<PredictionResultUpdateWithoutDatasetRecordInput, PredictionResultUncheckedUpdateWithoutDatasetRecordInput>
    create: XOR<PredictionResultCreateWithoutDatasetRecordInput, PredictionResultUncheckedCreateWithoutDatasetRecordInput>
  }

  export type PredictionResultUpdateWithWhereUniqueWithoutDatasetRecordInput = {
    where: PredictionResultWhereUniqueInput
    data: XOR<PredictionResultUpdateWithoutDatasetRecordInput, PredictionResultUncheckedUpdateWithoutDatasetRecordInput>
  }

  export type PredictionResultUpdateManyWithWhereWithoutDatasetRecordInput = {
    where: PredictionResultScalarWhereInput
    data: XOR<PredictionResultUpdateManyMutationInput, PredictionResultUncheckedUpdateManyWithoutDatasetRecordInput>
  }

  export type PredictionResultScalarWhereInput = {
    AND?: PredictionResultScalarWhereInput | PredictionResultScalarWhereInput[]
    OR?: PredictionResultScalarWhereInput[]
    NOT?: PredictionResultScalarWhereInput | PredictionResultScalarWhereInput[]
    id?: UuidFilter<"PredictionResult"> | string
    inferenceRequestId?: UuidFilter<"PredictionResult"> | string
    observationIndex?: IntFilter<"PredictionResult"> | number
    datasetRecordId?: UuidNullableFilter<"PredictionResult"> | string | null
    predictedClass?: EnumEventClassFilter<"PredictionResult"> | $Enums.EventClass
    gammaProbability?: FloatFilter<"PredictionResult"> | number
    hadronProbability?: FloatFilter<"PredictionResult"> | number
    confidence?: FloatFilter<"PredictionResult"> | number
    createdAt?: DateTimeFilter<"PredictionResult"> | Date | string
  }

  export type InferenceRequestCreateWithoutModelVersionInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutInferenceRequestsInput
    results?: PredictionResultCreateNestedManyWithoutInferenceRequestInput
  }

  export type InferenceRequestUncheckedCreateWithoutModelVersionInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    userId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: PredictionResultUncheckedCreateNestedManyWithoutInferenceRequestInput
  }

  export type InferenceRequestCreateOrConnectWithoutModelVersionInput = {
    where: InferenceRequestWhereUniqueInput
    create: XOR<InferenceRequestCreateWithoutModelVersionInput, InferenceRequestUncheckedCreateWithoutModelVersionInput>
  }

  export type InferenceRequestCreateManyModelVersionInputEnvelope = {
    data: InferenceRequestCreateManyModelVersionInput | InferenceRequestCreateManyModelVersionInput[]
    skipDuplicates?: boolean
  }

  export type InferenceRequestUpsertWithWhereUniqueWithoutModelVersionInput = {
    where: InferenceRequestWhereUniqueInput
    update: XOR<InferenceRequestUpdateWithoutModelVersionInput, InferenceRequestUncheckedUpdateWithoutModelVersionInput>
    create: XOR<InferenceRequestCreateWithoutModelVersionInput, InferenceRequestUncheckedCreateWithoutModelVersionInput>
  }

  export type InferenceRequestUpdateWithWhereUniqueWithoutModelVersionInput = {
    where: InferenceRequestWhereUniqueInput
    data: XOR<InferenceRequestUpdateWithoutModelVersionInput, InferenceRequestUncheckedUpdateWithoutModelVersionInput>
  }

  export type InferenceRequestUpdateManyWithWhereWithoutModelVersionInput = {
    where: InferenceRequestScalarWhereInput
    data: XOR<InferenceRequestUpdateManyMutationInput, InferenceRequestUncheckedUpdateManyWithoutModelVersionInput>
  }

  export type UserCreateWithoutInferenceRequestsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInferenceRequestsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInferenceRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInferenceRequestsInput, UserUncheckedCreateWithoutInferenceRequestsInput>
  }

  export type ModelVersionCreateWithoutInferenceRequestsInput = {
    id?: string
    name: string
    version: string
    description?: string | null
    status?: $Enums.ModelStatus
    artifactUri: string
    scalerUri?: string | null
    artifactChecksum?: string | null
    features: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: string
    architecture?: string
    inputSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelVersionUncheckedCreateWithoutInferenceRequestsInput = {
    id?: string
    name: string
    version: string
    description?: string | null
    status?: $Enums.ModelStatus
    artifactUri: string
    scalerUri?: string | null
    artifactChecksum?: string | null
    features: JsonNullValueInput | InputJsonValue
    classes: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: string
    architecture?: string
    inputSize?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelVersionCreateOrConnectWithoutInferenceRequestsInput = {
    where: ModelVersionWhereUniqueInput
    create: XOR<ModelVersionCreateWithoutInferenceRequestsInput, ModelVersionUncheckedCreateWithoutInferenceRequestsInput>
  }

  export type PredictionResultCreateWithoutInferenceRequestInput = {
    id?: string
    observationIndex?: number
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
    datasetRecord?: DatasetRecordCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionResultUncheckedCreateWithoutInferenceRequestInput = {
    id?: string
    observationIndex?: number
    datasetRecordId?: string | null
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
  }

  export type PredictionResultCreateOrConnectWithoutInferenceRequestInput = {
    where: PredictionResultWhereUniqueInput
    create: XOR<PredictionResultCreateWithoutInferenceRequestInput, PredictionResultUncheckedCreateWithoutInferenceRequestInput>
  }

  export type PredictionResultCreateManyInferenceRequestInputEnvelope = {
    data: PredictionResultCreateManyInferenceRequestInput | PredictionResultCreateManyInferenceRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInferenceRequestsInput = {
    update: XOR<UserUpdateWithoutInferenceRequestsInput, UserUncheckedUpdateWithoutInferenceRequestsInput>
    create: XOR<UserCreateWithoutInferenceRequestsInput, UserUncheckedCreateWithoutInferenceRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInferenceRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInferenceRequestsInput, UserUncheckedUpdateWithoutInferenceRequestsInput>
  }

  export type UserUpdateWithoutInferenceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInferenceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModelVersionUpsertWithoutInferenceRequestsInput = {
    update: XOR<ModelVersionUpdateWithoutInferenceRequestsInput, ModelVersionUncheckedUpdateWithoutInferenceRequestsInput>
    create: XOR<ModelVersionCreateWithoutInferenceRequestsInput, ModelVersionUncheckedCreateWithoutInferenceRequestsInput>
    where?: ModelVersionWhereInput
  }

  export type ModelVersionUpdateToOneWithWhereWithoutInferenceRequestsInput = {
    where?: ModelVersionWhereInput
    data: XOR<ModelVersionUpdateWithoutInferenceRequestsInput, ModelVersionUncheckedUpdateWithoutInferenceRequestsInput>
  }

  export type ModelVersionUpdateWithoutInferenceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    artifactUri?: StringFieldUpdateOperationsInput | string
    scalerUri?: NullableStringFieldUpdateOperationsInput | string | null
    artifactChecksum?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: StringFieldUpdateOperationsInput | string
    architecture?: StringFieldUpdateOperationsInput | string
    inputSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelVersionUncheckedUpdateWithoutInferenceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    artifactUri?: StringFieldUpdateOperationsInput | string
    scalerUri?: NullableStringFieldUpdateOperationsInput | string | null
    artifactChecksum?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    classes?: JsonNullValueInput | InputJsonValue
    preprocessing?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    framework?: StringFieldUpdateOperationsInput | string
    architecture?: StringFieldUpdateOperationsInput | string
    inputSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultUpsertWithWhereUniqueWithoutInferenceRequestInput = {
    where: PredictionResultWhereUniqueInput
    update: XOR<PredictionResultUpdateWithoutInferenceRequestInput, PredictionResultUncheckedUpdateWithoutInferenceRequestInput>
    create: XOR<PredictionResultCreateWithoutInferenceRequestInput, PredictionResultUncheckedCreateWithoutInferenceRequestInput>
  }

  export type PredictionResultUpdateWithWhereUniqueWithoutInferenceRequestInput = {
    where: PredictionResultWhereUniqueInput
    data: XOR<PredictionResultUpdateWithoutInferenceRequestInput, PredictionResultUncheckedUpdateWithoutInferenceRequestInput>
  }

  export type PredictionResultUpdateManyWithWhereWithoutInferenceRequestInput = {
    where: PredictionResultScalarWhereInput
    data: XOR<PredictionResultUpdateManyMutationInput, PredictionResultUncheckedUpdateManyWithoutInferenceRequestInput>
  }

  export type InferenceRequestCreateWithoutResultsInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutInferenceRequestsInput
    modelVersion?: ModelVersionCreateNestedOneWithoutInferenceRequestsInput
  }

  export type InferenceRequestUncheckedCreateWithoutResultsInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    userId?: string | null
    modelVersionId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InferenceRequestCreateOrConnectWithoutResultsInput = {
    where: InferenceRequestWhereUniqueInput
    create: XOR<InferenceRequestCreateWithoutResultsInput, InferenceRequestUncheckedCreateWithoutResultsInput>
  }

  export type DatasetRecordCreateWithoutPredictionsInput = {
    id?: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutRecordsInput
  }

  export type DatasetRecordUncheckedCreateWithoutPredictionsInput = {
    id?: string
    datasetId: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
  }

  export type DatasetRecordCreateOrConnectWithoutPredictionsInput = {
    where: DatasetRecordWhereUniqueInput
    create: XOR<DatasetRecordCreateWithoutPredictionsInput, DatasetRecordUncheckedCreateWithoutPredictionsInput>
  }

  export type InferenceRequestUpsertWithoutResultsInput = {
    update: XOR<InferenceRequestUpdateWithoutResultsInput, InferenceRequestUncheckedUpdateWithoutResultsInput>
    create: XOR<InferenceRequestCreateWithoutResultsInput, InferenceRequestUncheckedCreateWithoutResultsInput>
    where?: InferenceRequestWhereInput
  }

  export type InferenceRequestUpdateToOneWithWhereWithoutResultsInput = {
    where?: InferenceRequestWhereInput
    data: XOR<InferenceRequestUpdateWithoutResultsInput, InferenceRequestUncheckedUpdateWithoutResultsInput>
  }

  export type InferenceRequestUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInferenceRequestsNestedInput
    modelVersion?: ModelVersionUpdateOneWithoutInferenceRequestsNestedInput
  }

  export type InferenceRequestUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    modelVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetRecordUpsertWithoutPredictionsInput = {
    update: XOR<DatasetRecordUpdateWithoutPredictionsInput, DatasetRecordUncheckedUpdateWithoutPredictionsInput>
    create: XOR<DatasetRecordCreateWithoutPredictionsInput, DatasetRecordUncheckedCreateWithoutPredictionsInput>
    where?: DatasetRecordWhereInput
  }

  export type DatasetRecordUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: DatasetRecordWhereInput
    data: XOR<DatasetRecordUpdateWithoutPredictionsInput, DatasetRecordUncheckedUpdateWithoutPredictionsInput>
  }

  export type DatasetRecordUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type DatasetRecordUncheckedUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateManyUploadedByInput = {
    id?: string
    name: string
    description?: string | null
    fileName?: string | null
    storageUri?: string | null
    checksum?: string | null
    recordCount?: number
    status?: $Enums.DatasetStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InferenceRequestCreateManyUserInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    modelVersionId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    name: string
    keyHash: string
    isActive?: boolean
    expiresAt?: Date | string | null
    lastUsedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DatasetUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DatasetRecordUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DatasetRecordUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    storageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    status?: EnumDatasetStatusFieldUpdateOperationsInput | $Enums.DatasetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelVersion?: ModelVersionUpdateOneWithoutInferenceRequestsNestedInput
    results?: PredictionResultUpdateManyWithoutInferenceRequestNestedInput
  }

  export type InferenceRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    modelVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: PredictionResultUncheckedUpdateManyWithoutInferenceRequestNestedInput
  }

  export type InferenceRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    modelVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetRecordCreateManyDatasetInput = {
    id?: string
    features: JsonNullValueInput | InputJsonValue
    actualClass?: $Enums.EventClass | null
    createdAt?: Date | string
  }

  export type DatasetRecordUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionResultUpdateManyWithoutDatasetRecordNestedInput
  }

  export type DatasetRecordUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionResultUncheckedUpdateManyWithoutDatasetRecordNestedInput
  }

  export type DatasetRecordUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    actualClass?: NullableEnumEventClassFieldUpdateOperationsInput | $Enums.EventClass | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultCreateManyDatasetRecordInput = {
    id?: string
    inferenceRequestId: string
    observationIndex?: number
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
  }

  export type PredictionResultUpdateWithoutDatasetRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferenceRequest?: InferenceRequestUpdateOneRequiredWithoutResultsNestedInput
  }

  export type PredictionResultUncheckedUpdateWithoutDatasetRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    inferenceRequestId?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultUncheckedUpdateManyWithoutDatasetRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    inferenceRequestId?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceRequestCreateManyModelVersionInput = {
    id?: string
    requestId: string
    traceId?: string | null
    idempotencyKey?: string | null
    type?: $Enums.InferenceType
    status?: $Enums.InferenceStatus
    inputFeatures: JsonNullValueInput | InputJsonValue
    observationCount?: number
    latencyMs?: number | null
    retryCount?: number
    errorCode?: string | null
    errorMessage?: string | null
    userId?: string | null
    queuedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InferenceRequestUpdateWithoutModelVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInferenceRequestsNestedInput
    results?: PredictionResultUpdateManyWithoutInferenceRequestNestedInput
  }

  export type InferenceRequestUncheckedUpdateWithoutModelVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: PredictionResultUncheckedUpdateManyWithoutInferenceRequestNestedInput
  }

  export type InferenceRequestUncheckedUpdateManyWithoutModelVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInferenceTypeFieldUpdateOperationsInput | $Enums.InferenceType
    status?: EnumInferenceStatusFieldUpdateOperationsInput | $Enums.InferenceStatus
    inputFeatures?: JsonNullValueInput | InputJsonValue
    observationCount?: IntFieldUpdateOperationsInput | number
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultCreateManyInferenceRequestInput = {
    id?: string
    observationIndex?: number
    datasetRecordId?: string | null
    predictedClass: $Enums.EventClass
    gammaProbability: number
    hadronProbability: number
    confidence: number
    createdAt?: Date | string
  }

  export type PredictionResultUpdateWithoutInferenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetRecord?: DatasetRecordUpdateOneWithoutPredictionsNestedInput
  }

  export type PredictionResultUncheckedUpdateWithoutInferenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    datasetRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionResultUncheckedUpdateManyWithoutInferenceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationIndex?: IntFieldUpdateOperationsInput | number
    datasetRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    predictedClass?: EnumEventClassFieldUpdateOperationsInput | $Enums.EventClass
    gammaProbability?: FloatFieldUpdateOperationsInput | number
    hadronProbability?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}