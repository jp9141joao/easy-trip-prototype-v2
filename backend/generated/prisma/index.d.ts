
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tb_revoked_token
 * 
 */
export type tb_revoked_token = $Result.DefaultSelection<Prisma.$tb_revoked_tokenPayload>
/**
 * Model tb_user
 * 
 */
export type tb_user = $Result.DefaultSelection<Prisma.$tb_userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_revoked_tokens
 * const tb_revoked_tokens = await prisma.tb_revoked_token.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tb_revoked_tokens
   * const tb_revoked_tokens = await prisma.tb_revoked_token.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tb_revoked_token`: Exposes CRUD operations for the **tb_revoked_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_revoked_tokens
    * const tb_revoked_tokens = await prisma.tb_revoked_token.findMany()
    * ```
    */
  get tb_revoked_token(): Prisma.tb_revoked_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_user`: Exposes CRUD operations for the **tb_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_users
    * const tb_users = await prisma.tb_user.findMany()
    * ```
    */
  get tb_user(): Prisma.tb_userDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    tb_revoked_token: 'tb_revoked_token',
    tb_user: 'tb_user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tb_revoked_token" | "tb_user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_revoked_token: {
        payload: Prisma.$tb_revoked_tokenPayload<ExtArgs>
        fields: Prisma.tb_revoked_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_revoked_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_revoked_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>
          }
          findFirst: {
            args: Prisma.tb_revoked_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_revoked_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>
          }
          findMany: {
            args: Prisma.tb_revoked_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>[]
          }
          create: {
            args: Prisma.tb_revoked_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>
          }
          createMany: {
            args: Prisma.tb_revoked_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_revoked_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>[]
          }
          delete: {
            args: Prisma.tb_revoked_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>
          }
          update: {
            args: Prisma.tb_revoked_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>
          }
          deleteMany: {
            args: Prisma.tb_revoked_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_revoked_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_revoked_tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>[]
          }
          upsert: {
            args: Prisma.tb_revoked_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_revoked_tokenPayload>
          }
          aggregate: {
            args: Prisma.Tb_revoked_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_revoked_token>
          }
          groupBy: {
            args: Prisma.tb_revoked_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_revoked_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_revoked_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_revoked_tokenCountAggregateOutputType> | number
          }
        }
      }
      tb_user: {
        payload: Prisma.$tb_userPayload<ExtArgs>
        fields: Prisma.tb_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          findFirst: {
            args: Prisma.tb_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          findMany: {
            args: Prisma.tb_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
          }
          create: {
            args: Prisma.tb_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          createMany: {
            args: Prisma.tb_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
          }
          delete: {
            args: Prisma.tb_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          update: {
            args: Prisma.tb_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          deleteMany: {
            args: Prisma.tb_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
          }
          upsert: {
            args: Prisma.tb_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          aggregate: {
            args: Prisma.Tb_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_user>
          }
          groupBy: {
            args: Prisma.tb_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_userCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_userCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    tb_revoked_token?: tb_revoked_tokenOmit
    tb_user?: tb_userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model tb_revoked_token
   */

  export type AggregateTb_revoked_token = {
    _count: Tb_revoked_tokenCountAggregateOutputType | null
    _avg: Tb_revoked_tokenAvgAggregateOutputType | null
    _sum: Tb_revoked_tokenSumAggregateOutputType | null
    _min: Tb_revoked_tokenMinAggregateOutputType | null
    _max: Tb_revoked_tokenMaxAggregateOutputType | null
  }

  export type Tb_revoked_tokenAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_revoked_tokenSumAggregateOutputType = {
    id: bigint | null
  }

  export type Tb_revoked_tokenMinAggregateOutputType = {
    id: bigint | null
    jti: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Tb_revoked_tokenMaxAggregateOutputType = {
    id: bigint | null
    jti: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Tb_revoked_tokenCountAggregateOutputType = {
    id: number
    jti: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Tb_revoked_tokenAvgAggregateInputType = {
    id?: true
  }

  export type Tb_revoked_tokenSumAggregateInputType = {
    id?: true
  }

  export type Tb_revoked_tokenMinAggregateInputType = {
    id?: true
    jti?: true
    expires_at?: true
    created_at?: true
  }

  export type Tb_revoked_tokenMaxAggregateInputType = {
    id?: true
    jti?: true
    expires_at?: true
    created_at?: true
  }

  export type Tb_revoked_tokenCountAggregateInputType = {
    id?: true
    jti?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Tb_revoked_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_revoked_token to aggregate.
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_revoked_tokens to fetch.
     */
    orderBy?: tb_revoked_tokenOrderByWithRelationInput | tb_revoked_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_revoked_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_revoked_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_revoked_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_revoked_tokens
    **/
    _count?: true | Tb_revoked_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_revoked_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_revoked_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_revoked_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_revoked_tokenMaxAggregateInputType
  }

  export type GetTb_revoked_tokenAggregateType<T extends Tb_revoked_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_revoked_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_revoked_token[P]>
      : GetScalarType<T[P], AggregateTb_revoked_token[P]>
  }




  export type tb_revoked_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_revoked_tokenWhereInput
    orderBy?: tb_revoked_tokenOrderByWithAggregationInput | tb_revoked_tokenOrderByWithAggregationInput[]
    by: Tb_revoked_tokenScalarFieldEnum[] | Tb_revoked_tokenScalarFieldEnum
    having?: tb_revoked_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_revoked_tokenCountAggregateInputType | true
    _avg?: Tb_revoked_tokenAvgAggregateInputType
    _sum?: Tb_revoked_tokenSumAggregateInputType
    _min?: Tb_revoked_tokenMinAggregateInputType
    _max?: Tb_revoked_tokenMaxAggregateInputType
  }

  export type Tb_revoked_tokenGroupByOutputType = {
    id: bigint
    jti: string
    expires_at: Date
    created_at: Date
    _count: Tb_revoked_tokenCountAggregateOutputType | null
    _avg: Tb_revoked_tokenAvgAggregateOutputType | null
    _sum: Tb_revoked_tokenSumAggregateOutputType | null
    _min: Tb_revoked_tokenMinAggregateOutputType | null
    _max: Tb_revoked_tokenMaxAggregateOutputType | null
  }

  type GetTb_revoked_tokenGroupByPayload<T extends tb_revoked_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_revoked_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_revoked_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_revoked_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_revoked_tokenGroupByOutputType[P]>
        }
      >
    >


  export type tb_revoked_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jti?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tb_revoked_token"]>

  export type tb_revoked_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jti?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tb_revoked_token"]>

  export type tb_revoked_tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jti?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tb_revoked_token"]>

  export type tb_revoked_tokenSelectScalar = {
    id?: boolean
    jti?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type tb_revoked_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jti" | "expires_at" | "created_at", ExtArgs["result"]["tb_revoked_token"]>

  export type $tb_revoked_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_revoked_token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      jti: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["tb_revoked_token"]>
    composites: {}
  }

  type tb_revoked_tokenGetPayload<S extends boolean | null | undefined | tb_revoked_tokenDefaultArgs> = $Result.GetResult<Prisma.$tb_revoked_tokenPayload, S>

  type tb_revoked_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_revoked_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_revoked_tokenCountAggregateInputType | true
    }

  export interface tb_revoked_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_revoked_token'], meta: { name: 'tb_revoked_token' } }
    /**
     * Find zero or one Tb_revoked_token that matches the filter.
     * @param {tb_revoked_tokenFindUniqueArgs} args - Arguments to find a Tb_revoked_token
     * @example
     * // Get one Tb_revoked_token
     * const tb_revoked_token = await prisma.tb_revoked_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_revoked_tokenFindUniqueArgs>(args: SelectSubset<T, tb_revoked_tokenFindUniqueArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_revoked_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_revoked_tokenFindUniqueOrThrowArgs} args - Arguments to find a Tb_revoked_token
     * @example
     * // Get one Tb_revoked_token
     * const tb_revoked_token = await prisma.tb_revoked_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_revoked_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_revoked_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_revoked_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_revoked_tokenFindFirstArgs} args - Arguments to find a Tb_revoked_token
     * @example
     * // Get one Tb_revoked_token
     * const tb_revoked_token = await prisma.tb_revoked_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_revoked_tokenFindFirstArgs>(args?: SelectSubset<T, tb_revoked_tokenFindFirstArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_revoked_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_revoked_tokenFindFirstOrThrowArgs} args - Arguments to find a Tb_revoked_token
     * @example
     * // Get one Tb_revoked_token
     * const tb_revoked_token = await prisma.tb_revoked_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_revoked_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_revoked_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_revoked_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_revoked_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_revoked_tokens
     * const tb_revoked_tokens = await prisma.tb_revoked_token.findMany()
     * 
     * // Get first 10 Tb_revoked_tokens
     * const tb_revoked_tokens = await prisma.tb_revoked_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_revoked_tokenWithIdOnly = await prisma.tb_revoked_token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_revoked_tokenFindManyArgs>(args?: SelectSubset<T, tb_revoked_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_revoked_token.
     * @param {tb_revoked_tokenCreateArgs} args - Arguments to create a Tb_revoked_token.
     * @example
     * // Create one Tb_revoked_token
     * const Tb_revoked_token = await prisma.tb_revoked_token.create({
     *   data: {
     *     // ... data to create a Tb_revoked_token
     *   }
     * })
     * 
     */
    create<T extends tb_revoked_tokenCreateArgs>(args: SelectSubset<T, tb_revoked_tokenCreateArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_revoked_tokens.
     * @param {tb_revoked_tokenCreateManyArgs} args - Arguments to create many Tb_revoked_tokens.
     * @example
     * // Create many Tb_revoked_tokens
     * const tb_revoked_token = await prisma.tb_revoked_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_revoked_tokenCreateManyArgs>(args?: SelectSubset<T, tb_revoked_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_revoked_tokens and returns the data saved in the database.
     * @param {tb_revoked_tokenCreateManyAndReturnArgs} args - Arguments to create many Tb_revoked_tokens.
     * @example
     * // Create many Tb_revoked_tokens
     * const tb_revoked_token = await prisma.tb_revoked_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_revoked_tokens and only return the `id`
     * const tb_revoked_tokenWithIdOnly = await prisma.tb_revoked_token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_revoked_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_revoked_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_revoked_token.
     * @param {tb_revoked_tokenDeleteArgs} args - Arguments to delete one Tb_revoked_token.
     * @example
     * // Delete one Tb_revoked_token
     * const Tb_revoked_token = await prisma.tb_revoked_token.delete({
     *   where: {
     *     // ... filter to delete one Tb_revoked_token
     *   }
     * })
     * 
     */
    delete<T extends tb_revoked_tokenDeleteArgs>(args: SelectSubset<T, tb_revoked_tokenDeleteArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_revoked_token.
     * @param {tb_revoked_tokenUpdateArgs} args - Arguments to update one Tb_revoked_token.
     * @example
     * // Update one Tb_revoked_token
     * const tb_revoked_token = await prisma.tb_revoked_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_revoked_tokenUpdateArgs>(args: SelectSubset<T, tb_revoked_tokenUpdateArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_revoked_tokens.
     * @param {tb_revoked_tokenDeleteManyArgs} args - Arguments to filter Tb_revoked_tokens to delete.
     * @example
     * // Delete a few Tb_revoked_tokens
     * const { count } = await prisma.tb_revoked_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_revoked_tokenDeleteManyArgs>(args?: SelectSubset<T, tb_revoked_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_revoked_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_revoked_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_revoked_tokens
     * const tb_revoked_token = await prisma.tb_revoked_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_revoked_tokenUpdateManyArgs>(args: SelectSubset<T, tb_revoked_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_revoked_tokens and returns the data updated in the database.
     * @param {tb_revoked_tokenUpdateManyAndReturnArgs} args - Arguments to update many Tb_revoked_tokens.
     * @example
     * // Update many Tb_revoked_tokens
     * const tb_revoked_token = await prisma.tb_revoked_token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_revoked_tokens and only return the `id`
     * const tb_revoked_tokenWithIdOnly = await prisma.tb_revoked_token.updateManyAndReturn({
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
    updateManyAndReturn<T extends tb_revoked_tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_revoked_tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_revoked_token.
     * @param {tb_revoked_tokenUpsertArgs} args - Arguments to update or create a Tb_revoked_token.
     * @example
     * // Update or create a Tb_revoked_token
     * const tb_revoked_token = await prisma.tb_revoked_token.upsert({
     *   create: {
     *     // ... data to create a Tb_revoked_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_revoked_token we want to update
     *   }
     * })
     */
    upsert<T extends tb_revoked_tokenUpsertArgs>(args: SelectSubset<T, tb_revoked_tokenUpsertArgs<ExtArgs>>): Prisma__tb_revoked_tokenClient<$Result.GetResult<Prisma.$tb_revoked_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_revoked_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_revoked_tokenCountArgs} args - Arguments to filter Tb_revoked_tokens to count.
     * @example
     * // Count the number of Tb_revoked_tokens
     * const count = await prisma.tb_revoked_token.count({
     *   where: {
     *     // ... the filter for the Tb_revoked_tokens we want to count
     *   }
     * })
    **/
    count<T extends tb_revoked_tokenCountArgs>(
      args?: Subset<T, tb_revoked_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_revoked_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_revoked_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_revoked_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_revoked_tokenAggregateArgs>(args: Subset<T, Tb_revoked_tokenAggregateArgs>): Prisma.PrismaPromise<GetTb_revoked_tokenAggregateType<T>>

    /**
     * Group by Tb_revoked_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_revoked_tokenGroupByArgs} args - Group by arguments.
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
      T extends tb_revoked_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_revoked_tokenGroupByArgs['orderBy'] }
        : { orderBy?: tb_revoked_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_revoked_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_revoked_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_revoked_token model
   */
  readonly fields: tb_revoked_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_revoked_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_revoked_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_revoked_token model
   */
  interface tb_revoked_tokenFieldRefs {
    readonly id: FieldRef<"tb_revoked_token", 'BigInt'>
    readonly jti: FieldRef<"tb_revoked_token", 'String'>
    readonly expires_at: FieldRef<"tb_revoked_token", 'DateTime'>
    readonly created_at: FieldRef<"tb_revoked_token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_revoked_token findUnique
   */
  export type tb_revoked_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * Filter, which tb_revoked_token to fetch.
     */
    where: tb_revoked_tokenWhereUniqueInput
  }

  /**
   * tb_revoked_token findUniqueOrThrow
   */
  export type tb_revoked_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * Filter, which tb_revoked_token to fetch.
     */
    where: tb_revoked_tokenWhereUniqueInput
  }

  /**
   * tb_revoked_token findFirst
   */
  export type tb_revoked_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * Filter, which tb_revoked_token to fetch.
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_revoked_tokens to fetch.
     */
    orderBy?: tb_revoked_tokenOrderByWithRelationInput | tb_revoked_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_revoked_tokens.
     */
    cursor?: tb_revoked_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_revoked_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_revoked_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_revoked_tokens.
     */
    distinct?: Tb_revoked_tokenScalarFieldEnum | Tb_revoked_tokenScalarFieldEnum[]
  }

  /**
   * tb_revoked_token findFirstOrThrow
   */
  export type tb_revoked_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * Filter, which tb_revoked_token to fetch.
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_revoked_tokens to fetch.
     */
    orderBy?: tb_revoked_tokenOrderByWithRelationInput | tb_revoked_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_revoked_tokens.
     */
    cursor?: tb_revoked_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_revoked_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_revoked_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_revoked_tokens.
     */
    distinct?: Tb_revoked_tokenScalarFieldEnum | Tb_revoked_tokenScalarFieldEnum[]
  }

  /**
   * tb_revoked_token findMany
   */
  export type tb_revoked_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * Filter, which tb_revoked_tokens to fetch.
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_revoked_tokens to fetch.
     */
    orderBy?: tb_revoked_tokenOrderByWithRelationInput | tb_revoked_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_revoked_tokens.
     */
    cursor?: tb_revoked_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_revoked_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_revoked_tokens.
     */
    skip?: number
    distinct?: Tb_revoked_tokenScalarFieldEnum | Tb_revoked_tokenScalarFieldEnum[]
  }

  /**
   * tb_revoked_token create
   */
  export type tb_revoked_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_revoked_token.
     */
    data: XOR<tb_revoked_tokenCreateInput, tb_revoked_tokenUncheckedCreateInput>
  }

  /**
   * tb_revoked_token createMany
   */
  export type tb_revoked_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_revoked_tokens.
     */
    data: tb_revoked_tokenCreateManyInput | tb_revoked_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_revoked_token createManyAndReturn
   */
  export type tb_revoked_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * The data used to create many tb_revoked_tokens.
     */
    data: tb_revoked_tokenCreateManyInput | tb_revoked_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_revoked_token update
   */
  export type tb_revoked_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_revoked_token.
     */
    data: XOR<tb_revoked_tokenUpdateInput, tb_revoked_tokenUncheckedUpdateInput>
    /**
     * Choose, which tb_revoked_token to update.
     */
    where: tb_revoked_tokenWhereUniqueInput
  }

  /**
   * tb_revoked_token updateMany
   */
  export type tb_revoked_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_revoked_tokens.
     */
    data: XOR<tb_revoked_tokenUpdateManyMutationInput, tb_revoked_tokenUncheckedUpdateManyInput>
    /**
     * Filter which tb_revoked_tokens to update
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * Limit how many tb_revoked_tokens to update.
     */
    limit?: number
  }

  /**
   * tb_revoked_token updateManyAndReturn
   */
  export type tb_revoked_tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * The data used to update tb_revoked_tokens.
     */
    data: XOR<tb_revoked_tokenUpdateManyMutationInput, tb_revoked_tokenUncheckedUpdateManyInput>
    /**
     * Filter which tb_revoked_tokens to update
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * Limit how many tb_revoked_tokens to update.
     */
    limit?: number
  }

  /**
   * tb_revoked_token upsert
   */
  export type tb_revoked_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_revoked_token to update in case it exists.
     */
    where: tb_revoked_tokenWhereUniqueInput
    /**
     * In case the tb_revoked_token found by the `where` argument doesn't exist, create a new tb_revoked_token with this data.
     */
    create: XOR<tb_revoked_tokenCreateInput, tb_revoked_tokenUncheckedCreateInput>
    /**
     * In case the tb_revoked_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_revoked_tokenUpdateInput, tb_revoked_tokenUncheckedUpdateInput>
  }

  /**
   * tb_revoked_token delete
   */
  export type tb_revoked_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
    /**
     * Filter which tb_revoked_token to delete.
     */
    where: tb_revoked_tokenWhereUniqueInput
  }

  /**
   * tb_revoked_token deleteMany
   */
  export type tb_revoked_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_revoked_tokens to delete
     */
    where?: tb_revoked_tokenWhereInput
    /**
     * Limit how many tb_revoked_tokens to delete.
     */
    limit?: number
  }

  /**
   * tb_revoked_token without action
   */
  export type tb_revoked_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_revoked_token
     */
    select?: tb_revoked_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_revoked_token
     */
    omit?: tb_revoked_tokenOmit<ExtArgs> | null
  }


  /**
   * Model tb_user
   */

  export type AggregateTb_user = {
    _count: Tb_userCountAggregateOutputType | null
    _avg: Tb_userAvgAggregateOutputType | null
    _sum: Tb_userSumAggregateOutputType | null
    _min: Tb_userMinAggregateOutputType | null
    _max: Tb_userMaxAggregateOutputType | null
  }

  export type Tb_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_userSumAggregateOutputType = {
    id: bigint | null
  }

  export type Tb_userMinAggregateOutputType = {
    id: bigint | null
    full_name: string | null
    email: string | null
    password: string | null
  }

  export type Tb_userMaxAggregateOutputType = {
    id: bigint | null
    full_name: string | null
    email: string | null
    password: string | null
  }

  export type Tb_userCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    _all: number
  }


  export type Tb_userAvgAggregateInputType = {
    id?: true
  }

  export type Tb_userSumAggregateInputType = {
    id?: true
  }

  export type Tb_userMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
  }

  export type Tb_userMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
  }

  export type Tb_userCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type Tb_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_user to aggregate.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_users
    **/
    _count?: true | Tb_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_userMaxAggregateInputType
  }

  export type GetTb_userAggregateType<T extends Tb_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_user[P]>
      : GetScalarType<T[P], AggregateTb_user[P]>
  }




  export type tb_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_userWhereInput
    orderBy?: tb_userOrderByWithAggregationInput | tb_userOrderByWithAggregationInput[]
    by: Tb_userScalarFieldEnum[] | Tb_userScalarFieldEnum
    having?: tb_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_userCountAggregateInputType | true
    _avg?: Tb_userAvgAggregateInputType
    _sum?: Tb_userSumAggregateInputType
    _min?: Tb_userMinAggregateInputType
    _max?: Tb_userMaxAggregateInputType
  }

  export type Tb_userGroupByOutputType = {
    id: bigint
    full_name: string
    email: string
    password: string
    _count: Tb_userCountAggregateOutputType | null
    _avg: Tb_userAvgAggregateOutputType | null
    _sum: Tb_userSumAggregateOutputType | null
    _min: Tb_userMinAggregateOutputType | null
    _max: Tb_userMaxAggregateOutputType | null
  }

  type GetTb_userGroupByPayload<T extends tb_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_userGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_userGroupByOutputType[P]>
        }
      >
    >


  export type tb_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["tb_user"]>

  export type tb_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["tb_user"]>

  export type tb_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["tb_user"]>

  export type tb_userSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
  }

  export type tb_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password", ExtArgs["result"]["tb_user"]>

  export type $tb_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      full_name: string
      email: string
      password: string
    }, ExtArgs["result"]["tb_user"]>
    composites: {}
  }

  type tb_userGetPayload<S extends boolean | null | undefined | tb_userDefaultArgs> = $Result.GetResult<Prisma.$tb_userPayload, S>

  type tb_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_userCountAggregateInputType | true
    }

  export interface tb_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_user'], meta: { name: 'tb_user' } }
    /**
     * Find zero or one Tb_user that matches the filter.
     * @param {tb_userFindUniqueArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_userFindUniqueArgs>(args: SelectSubset<T, tb_userFindUniqueArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_userFindUniqueOrThrowArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_userFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userFindFirstArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_userFindFirstArgs>(args?: SelectSubset<T, tb_userFindFirstArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userFindFirstOrThrowArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_userFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_users
     * const tb_users = await prisma.tb_user.findMany()
     * 
     * // Get first 10 Tb_users
     * const tb_users = await prisma.tb_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_userWithIdOnly = await prisma.tb_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_userFindManyArgs>(args?: SelectSubset<T, tb_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_user.
     * @param {tb_userCreateArgs} args - Arguments to create a Tb_user.
     * @example
     * // Create one Tb_user
     * const Tb_user = await prisma.tb_user.create({
     *   data: {
     *     // ... data to create a Tb_user
     *   }
     * })
     * 
     */
    create<T extends tb_userCreateArgs>(args: SelectSubset<T, tb_userCreateArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_users.
     * @param {tb_userCreateManyArgs} args - Arguments to create many Tb_users.
     * @example
     * // Create many Tb_users
     * const tb_user = await prisma.tb_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_userCreateManyArgs>(args?: SelectSubset<T, tb_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_users and returns the data saved in the database.
     * @param {tb_userCreateManyAndReturnArgs} args - Arguments to create many Tb_users.
     * @example
     * // Create many Tb_users
     * const tb_user = await prisma.tb_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_users and only return the `id`
     * const tb_userWithIdOnly = await prisma.tb_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_userCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_user.
     * @param {tb_userDeleteArgs} args - Arguments to delete one Tb_user.
     * @example
     * // Delete one Tb_user
     * const Tb_user = await prisma.tb_user.delete({
     *   where: {
     *     // ... filter to delete one Tb_user
     *   }
     * })
     * 
     */
    delete<T extends tb_userDeleteArgs>(args: SelectSubset<T, tb_userDeleteArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_user.
     * @param {tb_userUpdateArgs} args - Arguments to update one Tb_user.
     * @example
     * // Update one Tb_user
     * const tb_user = await prisma.tb_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_userUpdateArgs>(args: SelectSubset<T, tb_userUpdateArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_users.
     * @param {tb_userDeleteManyArgs} args - Arguments to filter Tb_users to delete.
     * @example
     * // Delete a few Tb_users
     * const { count } = await prisma.tb_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_userDeleteManyArgs>(args?: SelectSubset<T, tb_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_users
     * const tb_user = await prisma.tb_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_userUpdateManyArgs>(args: SelectSubset<T, tb_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_users and returns the data updated in the database.
     * @param {tb_userUpdateManyAndReturnArgs} args - Arguments to update many Tb_users.
     * @example
     * // Update many Tb_users
     * const tb_user = await prisma.tb_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_users and only return the `id`
     * const tb_userWithIdOnly = await prisma.tb_user.updateManyAndReturn({
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
    updateManyAndReturn<T extends tb_userUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_user.
     * @param {tb_userUpsertArgs} args - Arguments to update or create a Tb_user.
     * @example
     * // Update or create a Tb_user
     * const tb_user = await prisma.tb_user.upsert({
     *   create: {
     *     // ... data to create a Tb_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_user we want to update
     *   }
     * })
     */
    upsert<T extends tb_userUpsertArgs>(args: SelectSubset<T, tb_userUpsertArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userCountArgs} args - Arguments to filter Tb_users to count.
     * @example
     * // Count the number of Tb_users
     * const count = await prisma.tb_user.count({
     *   where: {
     *     // ... the filter for the Tb_users we want to count
     *   }
     * })
    **/
    count<T extends tb_userCountArgs>(
      args?: Subset<T, tb_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_userAggregateArgs>(args: Subset<T, Tb_userAggregateArgs>): Prisma.PrismaPromise<GetTb_userAggregateType<T>>

    /**
     * Group by Tb_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userGroupByArgs} args - Group by arguments.
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
      T extends tb_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_userGroupByArgs['orderBy'] }
        : { orderBy?: tb_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_user model
   */
  readonly fields: tb_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_user model
   */
  interface tb_userFieldRefs {
    readonly id: FieldRef<"tb_user", 'BigInt'>
    readonly full_name: FieldRef<"tb_user", 'String'>
    readonly email: FieldRef<"tb_user", 'String'>
    readonly password: FieldRef<"tb_user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_user findUnique
   */
  export type tb_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user findUniqueOrThrow
   */
  export type tb_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user findFirst
   */
  export type tb_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_users.
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_users.
     */
    distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
  }

  /**
   * tb_user findFirstOrThrow
   */
  export type tb_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_users.
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_users.
     */
    distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
  }

  /**
   * tb_user findMany
   */
  export type tb_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Filter, which tb_users to fetch.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_users.
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
  }

  /**
   * tb_user create
   */
  export type tb_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_user.
     */
    data: XOR<tb_userCreateInput, tb_userUncheckedCreateInput>
  }

  /**
   * tb_user createMany
   */
  export type tb_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_users.
     */
    data: tb_userCreateManyInput | tb_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_user createManyAndReturn
   */
  export type tb_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * The data used to create many tb_users.
     */
    data: tb_userCreateManyInput | tb_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_user update
   */
  export type tb_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_user.
     */
    data: XOR<tb_userUpdateInput, tb_userUncheckedUpdateInput>
    /**
     * Choose, which tb_user to update.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user updateMany
   */
  export type tb_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_users.
     */
    data: XOR<tb_userUpdateManyMutationInput, tb_userUncheckedUpdateManyInput>
    /**
     * Filter which tb_users to update
     */
    where?: tb_userWhereInput
    /**
     * Limit how many tb_users to update.
     */
    limit?: number
  }

  /**
   * tb_user updateManyAndReturn
   */
  export type tb_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * The data used to update tb_users.
     */
    data: XOR<tb_userUpdateManyMutationInput, tb_userUncheckedUpdateManyInput>
    /**
     * Filter which tb_users to update
     */
    where?: tb_userWhereInput
    /**
     * Limit how many tb_users to update.
     */
    limit?: number
  }

  /**
   * tb_user upsert
   */
  export type tb_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_user to update in case it exists.
     */
    where: tb_userWhereUniqueInput
    /**
     * In case the tb_user found by the `where` argument doesn't exist, create a new tb_user with this data.
     */
    create: XOR<tb_userCreateInput, tb_userUncheckedCreateInput>
    /**
     * In case the tb_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_userUpdateInput, tb_userUncheckedUpdateInput>
  }

  /**
   * tb_user delete
   */
  export type tb_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Filter which tb_user to delete.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user deleteMany
   */
  export type tb_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_users to delete
     */
    where?: tb_userWhereInput
    /**
     * Limit how many tb_users to delete.
     */
    limit?: number
  }

  /**
   * tb_user without action
   */
  export type tb_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
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


  export const Tb_revoked_tokenScalarFieldEnum: {
    id: 'id',
    jti: 'jti',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Tb_revoked_tokenScalarFieldEnum = (typeof Tb_revoked_tokenScalarFieldEnum)[keyof typeof Tb_revoked_tokenScalarFieldEnum]


  export const Tb_userScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password'
  };

  export type Tb_userScalarFieldEnum = (typeof Tb_userScalarFieldEnum)[keyof typeof Tb_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type tb_revoked_tokenWhereInput = {
    AND?: tb_revoked_tokenWhereInput | tb_revoked_tokenWhereInput[]
    OR?: tb_revoked_tokenWhereInput[]
    NOT?: tb_revoked_tokenWhereInput | tb_revoked_tokenWhereInput[]
    id?: BigIntFilter<"tb_revoked_token"> | bigint | number
    jti?: StringFilter<"tb_revoked_token"> | string
    expires_at?: DateTimeFilter<"tb_revoked_token"> | Date | string
    created_at?: DateTimeFilter<"tb_revoked_token"> | Date | string
  }

  export type tb_revoked_tokenOrderByWithRelationInput = {
    id?: SortOrder
    jti?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type tb_revoked_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    jti?: string
    AND?: tb_revoked_tokenWhereInput | tb_revoked_tokenWhereInput[]
    OR?: tb_revoked_tokenWhereInput[]
    NOT?: tb_revoked_tokenWhereInput | tb_revoked_tokenWhereInput[]
    expires_at?: DateTimeFilter<"tb_revoked_token"> | Date | string
    created_at?: DateTimeFilter<"tb_revoked_token"> | Date | string
  }, "id" | "jti">

  export type tb_revoked_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    jti?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: tb_revoked_tokenCountOrderByAggregateInput
    _avg?: tb_revoked_tokenAvgOrderByAggregateInput
    _max?: tb_revoked_tokenMaxOrderByAggregateInput
    _min?: tb_revoked_tokenMinOrderByAggregateInput
    _sum?: tb_revoked_tokenSumOrderByAggregateInput
  }

  export type tb_revoked_tokenScalarWhereWithAggregatesInput = {
    AND?: tb_revoked_tokenScalarWhereWithAggregatesInput | tb_revoked_tokenScalarWhereWithAggregatesInput[]
    OR?: tb_revoked_tokenScalarWhereWithAggregatesInput[]
    NOT?: tb_revoked_tokenScalarWhereWithAggregatesInput | tb_revoked_tokenScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tb_revoked_token"> | bigint | number
    jti?: StringWithAggregatesFilter<"tb_revoked_token"> | string
    expires_at?: DateTimeWithAggregatesFilter<"tb_revoked_token"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"tb_revoked_token"> | Date | string
  }

  export type tb_userWhereInput = {
    AND?: tb_userWhereInput | tb_userWhereInput[]
    OR?: tb_userWhereInput[]
    NOT?: tb_userWhereInput | tb_userWhereInput[]
    id?: BigIntFilter<"tb_user"> | bigint | number
    full_name?: StringFilter<"tb_user"> | string
    email?: StringFilter<"tb_user"> | string
    password?: StringFilter<"tb_user"> | string
  }

  export type tb_userOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type tb_userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: tb_userWhereInput | tb_userWhereInput[]
    OR?: tb_userWhereInput[]
    NOT?: tb_userWhereInput | tb_userWhereInput[]
    full_name?: StringFilter<"tb_user"> | string
    password?: StringFilter<"tb_user"> | string
  }, "id" | "email">

  export type tb_userOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: tb_userCountOrderByAggregateInput
    _avg?: tb_userAvgOrderByAggregateInput
    _max?: tb_userMaxOrderByAggregateInput
    _min?: tb_userMinOrderByAggregateInput
    _sum?: tb_userSumOrderByAggregateInput
  }

  export type tb_userScalarWhereWithAggregatesInput = {
    AND?: tb_userScalarWhereWithAggregatesInput | tb_userScalarWhereWithAggregatesInput[]
    OR?: tb_userScalarWhereWithAggregatesInput[]
    NOT?: tb_userScalarWhereWithAggregatesInput | tb_userScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tb_user"> | bigint | number
    full_name?: StringWithAggregatesFilter<"tb_user"> | string
    email?: StringWithAggregatesFilter<"tb_user"> | string
    password?: StringWithAggregatesFilter<"tb_user"> | string
  }

  export type tb_revoked_tokenCreateInput = {
    id?: bigint | number
    jti: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type tb_revoked_tokenUncheckedCreateInput = {
    id?: bigint | number
    jti: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type tb_revoked_tokenUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jti?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_revoked_tokenUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jti?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_revoked_tokenCreateManyInput = {
    id?: bigint | number
    jti: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type tb_revoked_tokenUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jti?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_revoked_tokenUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jti?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_userCreateInput = {
    id?: bigint | number
    full_name: string
    email: string
    password: string
  }

  export type tb_userUncheckedCreateInput = {
    id?: bigint | number
    full_name: string
    email: string
    password: string
  }

  export type tb_userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tb_userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tb_userCreateManyInput = {
    id?: bigint | number
    full_name: string
    email: string
    password: string
  }

  export type tb_userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tb_userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type tb_revoked_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    jti?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type tb_revoked_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_revoked_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    jti?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type tb_revoked_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    jti?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type tb_revoked_tokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type tb_userCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type tb_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_userMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type tb_userMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type tb_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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