
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
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Produit
 * 
 */
export type Produit = $Result.DefaultSelection<Prisma.$ProduitPayload>
/**
 * Model Produit_Panier
 * 
 */
export type Produit_Panier = $Result.DefaultSelection<Prisma.$Produit_PanierPayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Produit_Categorie
 * 
 */
export type Produit_Categorie = $Result.DefaultSelection<Prisma.$Produit_CategoriePayload>
/**
 * Model Panier
 * 
 */
export type Panier = $Result.DefaultSelection<Prisma.$PanierPayload>
/**
 * Model Commande
 * 
 */
export type Commande = $Result.DefaultSelection<Prisma.$CommandePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
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
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **Produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.ProduitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit_Panier`: Exposes CRUD operations for the **Produit_Panier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produit_Paniers
    * const produit_Paniers = await prisma.produit_Panier.findMany()
    * ```
    */
  get produit_Panier(): Prisma.Produit_PanierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit_Categorie`: Exposes CRUD operations for the **Produit_Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produit_Categories
    * const produit_Categories = await prisma.produit_Categorie.findMany()
    * ```
    */
  get produit_Categorie(): Prisma.Produit_CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panier`: Exposes CRUD operations for the **Panier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paniers
    * const paniers = await prisma.panier.findMany()
    * ```
    */
  get panier(): Prisma.PanierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Client: 'Client',
    Session: 'Session',
    Admin: 'Admin',
    Produit: 'Produit',
    Produit_Panier: 'Produit_Panier',
    Categorie: 'Categorie',
    Produit_Categorie: 'Produit_Categorie',
    Panier: 'Panier',
    Commande: 'Commande'
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
      modelProps: "client" | "session" | "admin" | "produit" | "produit_Panier" | "categorie" | "produit_Categorie" | "panier" | "commande"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Produit: {
        payload: Prisma.$ProduitPayload<ExtArgs>
        fields: Prisma.ProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findFirst: {
            args: Prisma.ProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findMany: {
            args: Prisma.ProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          create: {
            args: Prisma.ProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          createMany: {
            args: Prisma.ProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          delete: {
            args: Prisma.ProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          update: {
            args: Prisma.ProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          deleteMany: {
            args: Prisma.ProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          upsert: {
            args: Prisma.ProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          aggregate: {
            args: Prisma.ProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit>
          }
          groupBy: {
            args: Prisma.ProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduitCountArgs<ExtArgs>
            result: $Utils.Optional<ProduitCountAggregateOutputType> | number
          }
        }
      }
      Produit_Panier: {
        payload: Prisma.$Produit_PanierPayload<ExtArgs>
        fields: Prisma.Produit_PanierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Produit_PanierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Produit_PanierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>
          }
          findFirst: {
            args: Prisma.Produit_PanierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Produit_PanierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>
          }
          findMany: {
            args: Prisma.Produit_PanierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>[]
          }
          create: {
            args: Prisma.Produit_PanierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>
          }
          createMany: {
            args: Prisma.Produit_PanierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Produit_PanierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>[]
          }
          delete: {
            args: Prisma.Produit_PanierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>
          }
          update: {
            args: Prisma.Produit_PanierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>
          }
          deleteMany: {
            args: Prisma.Produit_PanierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Produit_PanierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Produit_PanierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>[]
          }
          upsert: {
            args: Prisma.Produit_PanierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_PanierPayload>
          }
          aggregate: {
            args: Prisma.Produit_PanierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit_Panier>
          }
          groupBy: {
            args: Prisma.Produit_PanierGroupByArgs<ExtArgs>
            result: $Utils.Optional<Produit_PanierGroupByOutputType>[]
          }
          count: {
            args: Prisma.Produit_PanierCountArgs<ExtArgs>
            result: $Utils.Optional<Produit_PanierCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Produit_Categorie: {
        payload: Prisma.$Produit_CategoriePayload<ExtArgs>
        fields: Prisma.Produit_CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Produit_CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Produit_CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>
          }
          findFirst: {
            args: Prisma.Produit_CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Produit_CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>
          }
          findMany: {
            args: Prisma.Produit_CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>[]
          }
          create: {
            args: Prisma.Produit_CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>
          }
          createMany: {
            args: Prisma.Produit_CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Produit_CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>[]
          }
          delete: {
            args: Prisma.Produit_CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>
          }
          update: {
            args: Prisma.Produit_CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>
          }
          deleteMany: {
            args: Prisma.Produit_CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Produit_CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Produit_CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>[]
          }
          upsert: {
            args: Prisma.Produit_CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Produit_CategoriePayload>
          }
          aggregate: {
            args: Prisma.Produit_CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit_Categorie>
          }
          groupBy: {
            args: Prisma.Produit_CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<Produit_CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.Produit_CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<Produit_CategorieCountAggregateOutputType> | number
          }
        }
      }
      Panier: {
        payload: Prisma.$PanierPayload<ExtArgs>
        fields: Prisma.PanierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>
          }
          findFirst: {
            args: Prisma.PanierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>
          }
          findMany: {
            args: Prisma.PanierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>[]
          }
          create: {
            args: Prisma.PanierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>
          }
          createMany: {
            args: Prisma.PanierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PanierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>[]
          }
          delete: {
            args: Prisma.PanierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>
          }
          update: {
            args: Prisma.PanierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>
          }
          deleteMany: {
            args: Prisma.PanierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PanierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>[]
          }
          upsert: {
            args: Prisma.PanierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierPayload>
          }
          aggregate: {
            args: Prisma.PanierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanier>
          }
          groupBy: {
            args: Prisma.PanierGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanierGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanierCountArgs<ExtArgs>
            result: $Utils.Optional<PanierCountAggregateOutputType> | number
          }
        }
      }
      Commande: {
        payload: Prisma.$CommandePayload<ExtArgs>
        fields: Prisma.CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findFirst: {
            args: Prisma.CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findMany: {
            args: Prisma.CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          create: {
            args: Prisma.CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          createMany: {
            args: Prisma.CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          delete: {
            args: Prisma.CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          update: {
            args: Prisma.CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          deleteMany: {
            args: Prisma.CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          upsert: {
            args: Prisma.CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
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
    client?: ClientOmit
    session?: SessionOmit
    admin?: AdminOmit
    produit?: ProduitOmit
    produit_Panier?: Produit_PanierOmit
    categorie?: CategorieOmit
    produit_Categorie?: Produit_CategorieOmit
    panier?: PanierOmit
    commande?: CommandeOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    sessions: number
    paniers: number
    commandes: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | ClientCountOutputTypeCountSessionsArgs
    paniers?: boolean | ClientCountOutputTypeCountPaniersArgs
    commandes?: boolean | ClientCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPaniersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanierWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    sessions: number
    commandes: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AdminCountOutputTypeCountSessionsArgs
    commandes?: boolean | AdminCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type ProduitCountOutputType
   */

  export type ProduitCountOutputType = {
    produit_paniers: number
    produit_categories: number
  }

  export type ProduitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit_paniers?: boolean | ProduitCountOutputTypeCountProduit_paniersArgs
    produit_categories?: boolean | ProduitCountOutputTypeCountProduit_categoriesArgs
  }

  // Custom InputTypes
  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     */
    select?: ProduitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountProduit_paniersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produit_PanierWhereInput
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountProduit_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produit_CategorieWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    produit_categories: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit_categories?: boolean | CategorieCountOutputTypeCountProduit_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountProduit_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produit_CategorieWhereInput
  }


  /**
   * Count Type PanierCountOutputType
   */

  export type PanierCountOutputType = {
    produit_paniers: number
  }

  export type PanierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit_paniers?: boolean | PanierCountOutputTypeCountProduit_paniersArgs
  }

  // Custom InputTypes
  /**
   * PanierCountOutputType without action
   */
  export type PanierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierCountOutputType
     */
    select?: PanierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PanierCountOutputType without action
   */
  export type PanierCountOutputTypeCountProduit_paniersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produit_PanierWhereInput
  }


  /**
   * Count Type CommandeCountOutputType
   */

  export type CommandeCountOutputType = {
    produits: number
  }

  export type CommandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | CommandeCountOutputTypeCountProduitsArgs
  }

  // Custom InputTypes
  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: CommandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id_client: number | null
  }

  export type ClientSumAggregateOutputType = {
    id_client: number | null
  }

  export type ClientMinAggregateOutputType = {
    id_client: number | null
    mail: string | null
    mdp_hash: string | null
    role: string | null
    prenom: string | null
    nom: string | null
    adresse_livraison: string | null
    cp_livraison: string | null
    ville_livraison: string | null
    telephone: string | null
    date_creation: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id_client: number | null
    mail: string | null
    mdp_hash: string | null
    role: string | null
    prenom: string | null
    nom: string | null
    adresse_livraison: string | null
    cp_livraison: string | null
    ville_livraison: string | null
    telephone: string | null
    date_creation: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id_client: number
    mail: number
    mdp_hash: number
    role: number
    prenom: number
    nom: number
    adresse_livraison: number
    cp_livraison: number
    ville_livraison: number
    telephone: number
    date_creation: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id_client?: true
  }

  export type ClientSumAggregateInputType = {
    id_client?: true
  }

  export type ClientMinAggregateInputType = {
    id_client?: true
    mail?: true
    mdp_hash?: true
    role?: true
    prenom?: true
    nom?: true
    adresse_livraison?: true
    cp_livraison?: true
    ville_livraison?: true
    telephone?: true
    date_creation?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id_client?: true
    mail?: true
    mdp_hash?: true
    role?: true
    prenom?: true
    nom?: true
    adresse_livraison?: true
    cp_livraison?: true
    ville_livraison?: true
    telephone?: true
    date_creation?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id_client?: true
    mail?: true
    mdp_hash?: true
    role?: true
    prenom?: true
    nom?: true
    adresse_livraison?: true
    cp_livraison?: true
    ville_livraison?: true
    telephone?: true
    date_creation?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id_client: number
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_client?: boolean
    mail?: boolean
    mdp_hash?: boolean
    role?: boolean
    prenom?: boolean
    nom?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    telephone?: boolean
    date_creation?: boolean
    updatedAt?: boolean
    sessions?: boolean | Client$sessionsArgs<ExtArgs>
    paniers?: boolean | Client$paniersArgs<ExtArgs>
    commandes?: boolean | Client$commandesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_client?: boolean
    mail?: boolean
    mdp_hash?: boolean
    role?: boolean
    prenom?: boolean
    nom?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    telephone?: boolean
    date_creation?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_client?: boolean
    mail?: boolean
    mdp_hash?: boolean
    role?: boolean
    prenom?: boolean
    nom?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    telephone?: boolean
    date_creation?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id_client?: boolean
    mail?: boolean
    mdp_hash?: boolean
    role?: boolean
    prenom?: boolean
    nom?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    telephone?: boolean
    date_creation?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_client" | "mail" | "mdp_hash" | "role" | "prenom" | "nom" | "adresse_livraison" | "cp_livraison" | "ville_livraison" | "telephone" | "date_creation" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Client$sessionsArgs<ExtArgs>
    paniers?: boolean | Client$paniersArgs<ExtArgs>
    commandes?: boolean | Client$commandesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      paniers: Prisma.$PanierPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_client: number
      mail: string
      mdp_hash: string
      role: string
      prenom: string
      nom: string
      adresse_livraison: string
      cp_livraison: string
      ville_livraison: string
      telephone: string
      date_creation: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id_client`
     * const clientWithId_clientOnly = await prisma.client.findMany({ select: { id_client: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id_client`
     * const clientWithId_clientOnly = await prisma.client.createManyAndReturn({
     *   select: { id_client: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id_client`
     * const clientWithId_clientOnly = await prisma.client.updateManyAndReturn({
     *   select: { id_client: true },
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Client$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Client$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paniers<T extends Client$paniersArgs<ExtArgs> = {}>(args?: Subset<T, Client$paniersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends Client$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Client$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id_client: FieldRef<"Client", 'Int'>
    readonly mail: FieldRef<"Client", 'String'>
    readonly mdp_hash: FieldRef<"Client", 'String'>
    readonly role: FieldRef<"Client", 'String'>
    readonly prenom: FieldRef<"Client", 'String'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly adresse_livraison: FieldRef<"Client", 'String'>
    readonly cp_livraison: FieldRef<"Client", 'String'>
    readonly ville_livraison: FieldRef<"Client", 'String'>
    readonly telephone: FieldRef<"Client", 'String'>
    readonly date_creation: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.sessions
   */
  export type Client$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Client.paniers
   */
  export type Client$paniersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    where?: PanierWhereInput
    orderBy?: PanierOrderByWithRelationInput | PanierOrderByWithRelationInput[]
    cursor?: PanierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanierScalarFieldEnum | PanierScalarFieldEnum[]
  }

  /**
   * Client.commandes
   */
  export type Client$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id_session: number | null
    id_client: number | null
    id_admin: number | null
  }

  export type SessionSumAggregateOutputType = {
    id_session: number | null
    id_client: number | null
    id_admin: number | null
  }

  export type SessionMinAggregateOutputType = {
    id_session: number | null
    token: string | null
    date_connexion: Date | null
    date_deconnexion: Date | null
    is_active: boolean | null
    date_creation: Date | null
    id_client: number | null
    id_admin: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id_session: number | null
    token: string | null
    date_connexion: Date | null
    date_deconnexion: Date | null
    is_active: boolean | null
    date_creation: Date | null
    id_client: number | null
    id_admin: number | null
  }

  export type SessionCountAggregateOutputType = {
    id_session: number
    token: number
    date_connexion: number
    date_deconnexion: number
    is_active: number
    date_creation: number
    id_client: number
    id_admin: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id_session?: true
    id_client?: true
    id_admin?: true
  }

  export type SessionSumAggregateInputType = {
    id_session?: true
    id_client?: true
    id_admin?: true
  }

  export type SessionMinAggregateInputType = {
    id_session?: true
    token?: true
    date_connexion?: true
    date_deconnexion?: true
    is_active?: true
    date_creation?: true
    id_client?: true
    id_admin?: true
  }

  export type SessionMaxAggregateInputType = {
    id_session?: true
    token?: true
    date_connexion?: true
    date_deconnexion?: true
    is_active?: true
    date_creation?: true
    id_client?: true
    id_admin?: true
  }

  export type SessionCountAggregateInputType = {
    id_session?: true
    token?: true
    date_connexion?: true
    date_deconnexion?: true
    is_active?: true
    date_creation?: true
    id_client?: true
    id_admin?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id_session: number
    token: string
    date_connexion: Date
    date_deconnexion: Date | null
    is_active: boolean
    date_creation: Date
    id_client: number
    id_admin: number | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_session?: boolean
    token?: boolean
    date_connexion?: boolean
    date_deconnexion?: boolean
    is_active?: boolean
    date_creation?: boolean
    id_client?: boolean
    id_admin?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Session$adminArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_session?: boolean
    token?: boolean
    date_connexion?: boolean
    date_deconnexion?: boolean
    is_active?: boolean
    date_creation?: boolean
    id_client?: boolean
    id_admin?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Session$adminArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_session?: boolean
    token?: boolean
    date_connexion?: boolean
    date_deconnexion?: boolean
    is_active?: boolean
    date_creation?: boolean
    id_client?: boolean
    id_admin?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Session$adminArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id_session?: boolean
    token?: boolean
    date_connexion?: boolean
    date_deconnexion?: boolean
    is_active?: boolean
    date_creation?: boolean
    id_client?: boolean
    id_admin?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_session" | "token" | "date_connexion" | "date_deconnexion" | "is_active" | "date_creation" | "id_client" | "id_admin", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Session$adminArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Session$adminArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Session$adminArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_session: number
      token: string
      date_connexion: Date
      date_deconnexion: Date | null
      is_active: boolean
      date_creation: Date
      id_client: number
      id_admin: number | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id_session`
     * const sessionWithId_sessionOnly = await prisma.session.findMany({ select: { id_session: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id_session`
     * const sessionWithId_sessionOnly = await prisma.session.createManyAndReturn({
     *   select: { id_session: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id_session`
     * const sessionWithId_sessionOnly = await prisma.session.updateManyAndReturn({
     *   select: { id_session: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends Session$adminArgs<ExtArgs> = {}>(args?: Subset<T, Session$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id_session: FieldRef<"Session", 'Int'>
    readonly token: FieldRef<"Session", 'String'>
    readonly date_connexion: FieldRef<"Session", 'DateTime'>
    readonly date_deconnexion: FieldRef<"Session", 'DateTime'>
    readonly is_active: FieldRef<"Session", 'Boolean'>
    readonly date_creation: FieldRef<"Session", 'DateTime'>
    readonly id_client: FieldRef<"Session", 'Int'>
    readonly id_admin: FieldRef<"Session", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.admin
   */
  export type Session$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id_admin: number | null
  }

  export type AdminSumAggregateOutputType = {
    id_admin: number | null
  }

  export type AdminMinAggregateOutputType = {
    id_admin: number | null
    mail: string | null
    nom: string | null
    prenom: string | null
    mdp_hash: string | null
    role: string | null
    dernier_login: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id_admin: number | null
    mail: string | null
    nom: string | null
    prenom: string | null
    mdp_hash: string | null
    role: string | null
    dernier_login: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id_admin: number
    mail: number
    nom: number
    prenom: number
    mdp_hash: number
    role: number
    dernier_login: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id_admin?: true
  }

  export type AdminSumAggregateInputType = {
    id_admin?: true
  }

  export type AdminMinAggregateInputType = {
    id_admin?: true
    mail?: true
    nom?: true
    prenom?: true
    mdp_hash?: true
    role?: true
    dernier_login?: true
  }

  export type AdminMaxAggregateInputType = {
    id_admin?: true
    mail?: true
    nom?: true
    prenom?: true
    mdp_hash?: true
    role?: true
    dernier_login?: true
  }

  export type AdminCountAggregateInputType = {
    id_admin?: true
    mail?: true
    nom?: true
    prenom?: true
    mdp_hash?: true
    role?: true
    dernier_login?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id_admin: number
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    mail?: boolean
    nom?: boolean
    prenom?: boolean
    mdp_hash?: boolean
    role?: boolean
    dernier_login?: boolean
    sessions?: boolean | Admin$sessionsArgs<ExtArgs>
    commandes?: boolean | Admin$commandesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    mail?: boolean
    nom?: boolean
    prenom?: boolean
    mdp_hash?: boolean
    role?: boolean
    dernier_login?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    mail?: boolean
    nom?: boolean
    prenom?: boolean
    mdp_hash?: boolean
    role?: boolean
    dernier_login?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id_admin?: boolean
    mail?: boolean
    nom?: boolean
    prenom?: boolean
    mdp_hash?: boolean
    role?: boolean
    dernier_login?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_admin" | "mail" | "nom" | "prenom" | "mdp_hash" | "role" | "dernier_login", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Admin$sessionsArgs<ExtArgs>
    commandes?: boolean | Admin$commandesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_admin: number
      mail: string
      nom: string
      prenom: string
      mdp_hash: string
      role: string
      dernier_login: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.findMany({ select: { id_admin: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.createManyAndReturn({
     *   select: { id_admin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id_admin`
     * const adminWithId_adminOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id_admin: true },
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Admin$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends Admin$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id_admin: FieldRef<"Admin", 'Int'>
    readonly mail: FieldRef<"Admin", 'String'>
    readonly nom: FieldRef<"Admin", 'String'>
    readonly prenom: FieldRef<"Admin", 'String'>
    readonly mdp_hash: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly dernier_login: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.sessions
   */
  export type Admin$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Admin.commandes
   */
  export type Admin$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Produit
   */

  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitAvgAggregateOutputType = {
    id_produit: number | null
    prix: Decimal | null
    id_commande: number | null
  }

  export type ProduitSumAggregateOutputType = {
    id_produit: number | null
    prix: Decimal | null
    id_commande: number | null
  }

  export type ProduitMinAggregateOutputType = {
    id_produit: number | null
    nom: string | null
    description: string | null
    prix: Decimal | null
    image: string | null
    date_creation: Date | null
    is_active: boolean | null
    id_commande: number | null
  }

  export type ProduitMaxAggregateOutputType = {
    id_produit: number | null
    nom: string | null
    description: string | null
    prix: Decimal | null
    image: string | null
    date_creation: Date | null
    is_active: boolean | null
    id_commande: number | null
  }

  export type ProduitCountAggregateOutputType = {
    id_produit: number
    nom: number
    description: number
    prix: number
    image: number
    date_creation: number
    is_active: number
    id_commande: number
    _all: number
  }


  export type ProduitAvgAggregateInputType = {
    id_produit?: true
    prix?: true
    id_commande?: true
  }

  export type ProduitSumAggregateInputType = {
    id_produit?: true
    prix?: true
    id_commande?: true
  }

  export type ProduitMinAggregateInputType = {
    id_produit?: true
    nom?: true
    description?: true
    prix?: true
    image?: true
    date_creation?: true
    is_active?: true
    id_commande?: true
  }

  export type ProduitMaxAggregateInputType = {
    id_produit?: true
    nom?: true
    description?: true
    prix?: true
    image?: true
    date_creation?: true
    is_active?: true
    id_commande?: true
  }

  export type ProduitCountAggregateInputType = {
    id_produit?: true
    nom?: true
    description?: true
    prix?: true
    image?: true
    date_creation?: true
    is_active?: true
    id_commande?: true
    _all?: true
  }

  export type ProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit to aggregate.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type ProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithAggregationInput | ProduitOrderByWithAggregationInput[]
    by: ProduitScalarFieldEnum[] | ProduitScalarFieldEnum
    having?: ProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _avg?: ProduitAvgAggregateInputType
    _sum?: ProduitSumAggregateInputType
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }

  export type ProduitGroupByOutputType = {
    id_produit: number
    nom: string
    description: string
    prix: Decimal
    image: string
    date_creation: Date
    is_active: boolean
    id_commande: number | null
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type ProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
    date_creation?: boolean
    is_active?: boolean
    id_commande?: boolean
    commande?: boolean | Produit$commandeArgs<ExtArgs>
    produit_paniers?: boolean | Produit$produit_paniersArgs<ExtArgs>
    produit_categories?: boolean | Produit$produit_categoriesArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
    date_creation?: boolean
    is_active?: boolean
    id_commande?: boolean
    commande?: boolean | Produit$commandeArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
    date_creation?: boolean
    is_active?: boolean
    id_commande?: boolean
    commande?: boolean | Produit$commandeArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectScalar = {
    id_produit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
    date_creation?: boolean
    is_active?: boolean
    id_commande?: boolean
  }

  export type ProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produit" | "nom" | "description" | "prix" | "image" | "date_creation" | "is_active" | "id_commande", ExtArgs["result"]["produit"]>
  export type ProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | Produit$commandeArgs<ExtArgs>
    produit_paniers?: boolean | Produit$produit_paniersArgs<ExtArgs>
    produit_categories?: boolean | Produit$produit_categoriesArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | Produit$commandeArgs<ExtArgs>
  }
  export type ProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | Produit$commandeArgs<ExtArgs>
  }

  export type $ProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs> | null
      produit_paniers: Prisma.$Produit_PanierPayload<ExtArgs>[]
      produit_categories: Prisma.$Produit_CategoriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produit: number
      nom: string
      description: string
      prix: Prisma.Decimal
      image: string
      date_creation: Date
      is_active: boolean
      id_commande: number | null
    }, ExtArgs["result"]["produit"]>
    composites: {}
  }

  type ProduitGetPayload<S extends boolean | null | undefined | ProduitDefaultArgs> = $Result.GetResult<Prisma.$ProduitPayload, S>

  type ProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduitCountAggregateInputType | true
    }

  export interface ProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit'], meta: { name: 'Produit' } }
    /**
     * Find zero or one Produit that matches the filter.
     * @param {ProduitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduitFindUniqueArgs>(args: SelectSubset<T, ProduitFindUniqueArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduitFindUniqueOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduitFindFirstArgs>(args?: SelectSubset<T, ProduitFindFirstArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `id_produit`
     * const produitWithId_produitOnly = await prisma.produit.findMany({ select: { id_produit: true } })
     * 
     */
    findMany<T extends ProduitFindManyArgs>(args?: SelectSubset<T, ProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit.
     * @param {ProduitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
     */
    create<T extends ProduitCreateArgs>(args: SelectSubset<T, ProduitCreateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produits.
     * @param {ProduitCreateManyArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduitCreateManyArgs>(args?: SelectSubset<T, ProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produits and returns the data saved in the database.
     * @param {ProduitCreateManyAndReturnArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produits and only return the `id_produit`
     * const produitWithId_produitOnly = await prisma.produit.createManyAndReturn({
     *   select: { id_produit: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit.
     * @param {ProduitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
     */
    delete<T extends ProduitDeleteArgs>(args: SelectSubset<T, ProduitDeleteArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit.
     * @param {ProduitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduitUpdateArgs>(args: SelectSubset<T, ProduitUpdateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produits.
     * @param {ProduitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduitDeleteManyArgs>(args?: SelectSubset<T, ProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduitUpdateManyArgs>(args: SelectSubset<T, ProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits and returns the data updated in the database.
     * @param {ProduitUpdateManyAndReturnArgs} args - Arguments to update many Produits.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produits and only return the `id_produit`
     * const produitWithId_produitOnly = await prisma.produit.updateManyAndReturn({
     *   select: { id_produit: true },
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
    updateManyAndReturn<T extends ProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit.
     * @param {ProduitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
     */
    upsert<T extends ProduitUpsertArgs>(args: SelectSubset<T, ProduitUpsertArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends ProduitCountArgs>(
      args?: Subset<T, ProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitGroupByArgs} args - Group by arguments.
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
      T extends ProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduitGroupByArgs['orderBy'] }
        : { orderBy?: ProduitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit model
   */
  readonly fields: ProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends Produit$commandeArgs<ExtArgs> = {}>(args?: Subset<T, Produit$commandeArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produit_paniers<T extends Produit$produit_paniersArgs<ExtArgs> = {}>(args?: Subset<T, Produit$produit_paniersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produit_categories<T extends Produit$produit_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Produit$produit_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produit model
   */
  interface ProduitFieldRefs {
    readonly id_produit: FieldRef<"Produit", 'Int'>
    readonly nom: FieldRef<"Produit", 'String'>
    readonly description: FieldRef<"Produit", 'String'>
    readonly prix: FieldRef<"Produit", 'Decimal'>
    readonly image: FieldRef<"Produit", 'String'>
    readonly date_creation: FieldRef<"Produit", 'DateTime'>
    readonly is_active: FieldRef<"Produit", 'Boolean'>
    readonly id_commande: FieldRef<"Produit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produit findUnique
   */
  export type ProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findUniqueOrThrow
   */
  export type ProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findFirst
   */
  export type ProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findFirstOrThrow
   */
  export type ProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findMany
   */
  export type ProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produits to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit create
   */
  export type ProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit.
     */
    data: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
  }

  /**
   * Produit createMany
   */
  export type ProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produit createManyAndReturn
   */
  export type ProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit update
   */
  export type ProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit.
     */
    data: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
    /**
     * Choose, which Produit to update.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit updateMany
   */
  export type ProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
  }

  /**
   * Produit updateManyAndReturn
   */
  export type ProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit upsert
   */
  export type ProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit to update in case it exists.
     */
    where: ProduitWhereUniqueInput
    /**
     * In case the Produit found by the `where` argument doesn't exist, create a new Produit with this data.
     */
    create: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
    /**
     * In case the Produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
  }

  /**
   * Produit delete
   */
  export type ProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter which Produit to delete.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit deleteMany
   */
  export type ProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produits to delete
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to delete.
     */
    limit?: number
  }

  /**
   * Produit.commande
   */
  export type Produit$commandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
  }

  /**
   * Produit.produit_paniers
   */
  export type Produit$produit_paniersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    where?: Produit_PanierWhereInput
    orderBy?: Produit_PanierOrderByWithRelationInput | Produit_PanierOrderByWithRelationInput[]
    cursor?: Produit_PanierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produit_PanierScalarFieldEnum | Produit_PanierScalarFieldEnum[]
  }

  /**
   * Produit.produit_categories
   */
  export type Produit$produit_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    where?: Produit_CategorieWhereInput
    orderBy?: Produit_CategorieOrderByWithRelationInput | Produit_CategorieOrderByWithRelationInput[]
    cursor?: Produit_CategorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produit_CategorieScalarFieldEnum | Produit_CategorieScalarFieldEnum[]
  }

  /**
   * Produit without action
   */
  export type ProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
  }


  /**
   * Model Produit_Panier
   */

  export type AggregateProduit_Panier = {
    _count: Produit_PanierCountAggregateOutputType | null
    _avg: Produit_PanierAvgAggregateOutputType | null
    _sum: Produit_PanierSumAggregateOutputType | null
    _min: Produit_PanierMinAggregateOutputType | null
    _max: Produit_PanierMaxAggregateOutputType | null
  }

  export type Produit_PanierAvgAggregateOutputType = {
    id_produit_panier: number | null
    id_panier: number | null
    id_produit: number | null
  }

  export type Produit_PanierSumAggregateOutputType = {
    id_produit_panier: number | null
    id_panier: number | null
    id_produit: number | null
  }

  export type Produit_PanierMinAggregateOutputType = {
    id_produit_panier: number | null
    id_panier: number | null
    id_produit: number | null
  }

  export type Produit_PanierMaxAggregateOutputType = {
    id_produit_panier: number | null
    id_panier: number | null
    id_produit: number | null
  }

  export type Produit_PanierCountAggregateOutputType = {
    id_produit_panier: number
    id_panier: number
    id_produit: number
    _all: number
  }


  export type Produit_PanierAvgAggregateInputType = {
    id_produit_panier?: true
    id_panier?: true
    id_produit?: true
  }

  export type Produit_PanierSumAggregateInputType = {
    id_produit_panier?: true
    id_panier?: true
    id_produit?: true
  }

  export type Produit_PanierMinAggregateInputType = {
    id_produit_panier?: true
    id_panier?: true
    id_produit?: true
  }

  export type Produit_PanierMaxAggregateInputType = {
    id_produit_panier?: true
    id_panier?: true
    id_produit?: true
  }

  export type Produit_PanierCountAggregateInputType = {
    id_produit_panier?: true
    id_panier?: true
    id_produit?: true
    _all?: true
  }

  export type Produit_PanierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit_Panier to aggregate.
     */
    where?: Produit_PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Paniers to fetch.
     */
    orderBy?: Produit_PanierOrderByWithRelationInput | Produit_PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Produit_PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Paniers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produit_Paniers
    **/
    _count?: true | Produit_PanierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Produit_PanierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Produit_PanierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Produit_PanierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Produit_PanierMaxAggregateInputType
  }

  export type GetProduit_PanierAggregateType<T extends Produit_PanierAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit_Panier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit_Panier[P]>
      : GetScalarType<T[P], AggregateProduit_Panier[P]>
  }




  export type Produit_PanierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produit_PanierWhereInput
    orderBy?: Produit_PanierOrderByWithAggregationInput | Produit_PanierOrderByWithAggregationInput[]
    by: Produit_PanierScalarFieldEnum[] | Produit_PanierScalarFieldEnum
    having?: Produit_PanierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Produit_PanierCountAggregateInputType | true
    _avg?: Produit_PanierAvgAggregateInputType
    _sum?: Produit_PanierSumAggregateInputType
    _min?: Produit_PanierMinAggregateInputType
    _max?: Produit_PanierMaxAggregateInputType
  }

  export type Produit_PanierGroupByOutputType = {
    id_produit_panier: number
    id_panier: number
    id_produit: number
    _count: Produit_PanierCountAggregateOutputType | null
    _avg: Produit_PanierAvgAggregateOutputType | null
    _sum: Produit_PanierSumAggregateOutputType | null
    _min: Produit_PanierMinAggregateOutputType | null
    _max: Produit_PanierMaxAggregateOutputType | null
  }

  type GetProduit_PanierGroupByPayload<T extends Produit_PanierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Produit_PanierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Produit_PanierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Produit_PanierGroupByOutputType[P]>
            : GetScalarType<T[P], Produit_PanierGroupByOutputType[P]>
        }
      >
    >


  export type Produit_PanierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit_panier?: boolean
    id_panier?: boolean
    id_produit?: boolean
    panier?: boolean | PanierDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit_Panier"]>

  export type Produit_PanierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit_panier?: boolean
    id_panier?: boolean
    id_produit?: boolean
    panier?: boolean | PanierDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit_Panier"]>

  export type Produit_PanierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit_panier?: boolean
    id_panier?: boolean
    id_produit?: boolean
    panier?: boolean | PanierDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit_Panier"]>

  export type Produit_PanierSelectScalar = {
    id_produit_panier?: boolean
    id_panier?: boolean
    id_produit?: boolean
  }

  export type Produit_PanierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produit_panier" | "id_panier" | "id_produit", ExtArgs["result"]["produit_Panier"]>
  export type Produit_PanierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panier?: boolean | PanierDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type Produit_PanierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panier?: boolean | PanierDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type Produit_PanierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panier?: boolean | PanierDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $Produit_PanierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit_Panier"
    objects: {
      panier: Prisma.$PanierPayload<ExtArgs>
      produit: Prisma.$ProduitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produit_panier: number
      id_panier: number
      id_produit: number
    }, ExtArgs["result"]["produit_Panier"]>
    composites: {}
  }

  type Produit_PanierGetPayload<S extends boolean | null | undefined | Produit_PanierDefaultArgs> = $Result.GetResult<Prisma.$Produit_PanierPayload, S>

  type Produit_PanierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Produit_PanierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Produit_PanierCountAggregateInputType | true
    }

  export interface Produit_PanierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit_Panier'], meta: { name: 'Produit_Panier' } }
    /**
     * Find zero or one Produit_Panier that matches the filter.
     * @param {Produit_PanierFindUniqueArgs} args - Arguments to find a Produit_Panier
     * @example
     * // Get one Produit_Panier
     * const produit_Panier = await prisma.produit_Panier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Produit_PanierFindUniqueArgs>(args: SelectSubset<T, Produit_PanierFindUniqueArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit_Panier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Produit_PanierFindUniqueOrThrowArgs} args - Arguments to find a Produit_Panier
     * @example
     * // Get one Produit_Panier
     * const produit_Panier = await prisma.produit_Panier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Produit_PanierFindUniqueOrThrowArgs>(args: SelectSubset<T, Produit_PanierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit_Panier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierFindFirstArgs} args - Arguments to find a Produit_Panier
     * @example
     * // Get one Produit_Panier
     * const produit_Panier = await prisma.produit_Panier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Produit_PanierFindFirstArgs>(args?: SelectSubset<T, Produit_PanierFindFirstArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit_Panier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierFindFirstOrThrowArgs} args - Arguments to find a Produit_Panier
     * @example
     * // Get one Produit_Panier
     * const produit_Panier = await prisma.produit_Panier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Produit_PanierFindFirstOrThrowArgs>(args?: SelectSubset<T, Produit_PanierFindFirstOrThrowArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produit_Paniers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produit_Paniers
     * const produit_Paniers = await prisma.produit_Panier.findMany()
     * 
     * // Get first 10 Produit_Paniers
     * const produit_Paniers = await prisma.produit_Panier.findMany({ take: 10 })
     * 
     * // Only select the `id_produit_panier`
     * const produit_PanierWithId_produit_panierOnly = await prisma.produit_Panier.findMany({ select: { id_produit_panier: true } })
     * 
     */
    findMany<T extends Produit_PanierFindManyArgs>(args?: SelectSubset<T, Produit_PanierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit_Panier.
     * @param {Produit_PanierCreateArgs} args - Arguments to create a Produit_Panier.
     * @example
     * // Create one Produit_Panier
     * const Produit_Panier = await prisma.produit_Panier.create({
     *   data: {
     *     // ... data to create a Produit_Panier
     *   }
     * })
     * 
     */
    create<T extends Produit_PanierCreateArgs>(args: SelectSubset<T, Produit_PanierCreateArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produit_Paniers.
     * @param {Produit_PanierCreateManyArgs} args - Arguments to create many Produit_Paniers.
     * @example
     * // Create many Produit_Paniers
     * const produit_Panier = await prisma.produit_Panier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Produit_PanierCreateManyArgs>(args?: SelectSubset<T, Produit_PanierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produit_Paniers and returns the data saved in the database.
     * @param {Produit_PanierCreateManyAndReturnArgs} args - Arguments to create many Produit_Paniers.
     * @example
     * // Create many Produit_Paniers
     * const produit_Panier = await prisma.produit_Panier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produit_Paniers and only return the `id_produit_panier`
     * const produit_PanierWithId_produit_panierOnly = await prisma.produit_Panier.createManyAndReturn({
     *   select: { id_produit_panier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Produit_PanierCreateManyAndReturnArgs>(args?: SelectSubset<T, Produit_PanierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit_Panier.
     * @param {Produit_PanierDeleteArgs} args - Arguments to delete one Produit_Panier.
     * @example
     * // Delete one Produit_Panier
     * const Produit_Panier = await prisma.produit_Panier.delete({
     *   where: {
     *     // ... filter to delete one Produit_Panier
     *   }
     * })
     * 
     */
    delete<T extends Produit_PanierDeleteArgs>(args: SelectSubset<T, Produit_PanierDeleteArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit_Panier.
     * @param {Produit_PanierUpdateArgs} args - Arguments to update one Produit_Panier.
     * @example
     * // Update one Produit_Panier
     * const produit_Panier = await prisma.produit_Panier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Produit_PanierUpdateArgs>(args: SelectSubset<T, Produit_PanierUpdateArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produit_Paniers.
     * @param {Produit_PanierDeleteManyArgs} args - Arguments to filter Produit_Paniers to delete.
     * @example
     * // Delete a few Produit_Paniers
     * const { count } = await prisma.produit_Panier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Produit_PanierDeleteManyArgs>(args?: SelectSubset<T, Produit_PanierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produit_Paniers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produit_Paniers
     * const produit_Panier = await prisma.produit_Panier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Produit_PanierUpdateManyArgs>(args: SelectSubset<T, Produit_PanierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produit_Paniers and returns the data updated in the database.
     * @param {Produit_PanierUpdateManyAndReturnArgs} args - Arguments to update many Produit_Paniers.
     * @example
     * // Update many Produit_Paniers
     * const produit_Panier = await prisma.produit_Panier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produit_Paniers and only return the `id_produit_panier`
     * const produit_PanierWithId_produit_panierOnly = await prisma.produit_Panier.updateManyAndReturn({
     *   select: { id_produit_panier: true },
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
    updateManyAndReturn<T extends Produit_PanierUpdateManyAndReturnArgs>(args: SelectSubset<T, Produit_PanierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit_Panier.
     * @param {Produit_PanierUpsertArgs} args - Arguments to update or create a Produit_Panier.
     * @example
     * // Update or create a Produit_Panier
     * const produit_Panier = await prisma.produit_Panier.upsert({
     *   create: {
     *     // ... data to create a Produit_Panier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit_Panier we want to update
     *   }
     * })
     */
    upsert<T extends Produit_PanierUpsertArgs>(args: SelectSubset<T, Produit_PanierUpsertArgs<ExtArgs>>): Prisma__Produit_PanierClient<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produit_Paniers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierCountArgs} args - Arguments to filter Produit_Paniers to count.
     * @example
     * // Count the number of Produit_Paniers
     * const count = await prisma.produit_Panier.count({
     *   where: {
     *     // ... the filter for the Produit_Paniers we want to count
     *   }
     * })
    **/
    count<T extends Produit_PanierCountArgs>(
      args?: Subset<T, Produit_PanierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Produit_PanierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit_Panier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Produit_PanierAggregateArgs>(args: Subset<T, Produit_PanierAggregateArgs>): Prisma.PrismaPromise<GetProduit_PanierAggregateType<T>>

    /**
     * Group by Produit_Panier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_PanierGroupByArgs} args - Group by arguments.
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
      T extends Produit_PanierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Produit_PanierGroupByArgs['orderBy'] }
        : { orderBy?: Produit_PanierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Produit_PanierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduit_PanierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit_Panier model
   */
  readonly fields: Produit_PanierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit_Panier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Produit_PanierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panier<T extends PanierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PanierDefaultArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Produit_Panier model
   */
  interface Produit_PanierFieldRefs {
    readonly id_produit_panier: FieldRef<"Produit_Panier", 'Int'>
    readonly id_panier: FieldRef<"Produit_Panier", 'Int'>
    readonly id_produit: FieldRef<"Produit_Panier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produit_Panier findUnique
   */
  export type Produit_PanierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Panier to fetch.
     */
    where: Produit_PanierWhereUniqueInput
  }

  /**
   * Produit_Panier findUniqueOrThrow
   */
  export type Produit_PanierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Panier to fetch.
     */
    where: Produit_PanierWhereUniqueInput
  }

  /**
   * Produit_Panier findFirst
   */
  export type Produit_PanierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Panier to fetch.
     */
    where?: Produit_PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Paniers to fetch.
     */
    orderBy?: Produit_PanierOrderByWithRelationInput | Produit_PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produit_Paniers.
     */
    cursor?: Produit_PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Paniers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produit_Paniers.
     */
    distinct?: Produit_PanierScalarFieldEnum | Produit_PanierScalarFieldEnum[]
  }

  /**
   * Produit_Panier findFirstOrThrow
   */
  export type Produit_PanierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Panier to fetch.
     */
    where?: Produit_PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Paniers to fetch.
     */
    orderBy?: Produit_PanierOrderByWithRelationInput | Produit_PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produit_Paniers.
     */
    cursor?: Produit_PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Paniers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produit_Paniers.
     */
    distinct?: Produit_PanierScalarFieldEnum | Produit_PanierScalarFieldEnum[]
  }

  /**
   * Produit_Panier findMany
   */
  export type Produit_PanierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Paniers to fetch.
     */
    where?: Produit_PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Paniers to fetch.
     */
    orderBy?: Produit_PanierOrderByWithRelationInput | Produit_PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produit_Paniers.
     */
    cursor?: Produit_PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Paniers.
     */
    skip?: number
    distinct?: Produit_PanierScalarFieldEnum | Produit_PanierScalarFieldEnum[]
  }

  /**
   * Produit_Panier create
   */
  export type Produit_PanierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit_Panier.
     */
    data: XOR<Produit_PanierCreateInput, Produit_PanierUncheckedCreateInput>
  }

  /**
   * Produit_Panier createMany
   */
  export type Produit_PanierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produit_Paniers.
     */
    data: Produit_PanierCreateManyInput | Produit_PanierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produit_Panier createManyAndReturn
   */
  export type Produit_PanierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * The data used to create many Produit_Paniers.
     */
    data: Produit_PanierCreateManyInput | Produit_PanierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit_Panier update
   */
  export type Produit_PanierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit_Panier.
     */
    data: XOR<Produit_PanierUpdateInput, Produit_PanierUncheckedUpdateInput>
    /**
     * Choose, which Produit_Panier to update.
     */
    where: Produit_PanierWhereUniqueInput
  }

  /**
   * Produit_Panier updateMany
   */
  export type Produit_PanierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produit_Paniers.
     */
    data: XOR<Produit_PanierUpdateManyMutationInput, Produit_PanierUncheckedUpdateManyInput>
    /**
     * Filter which Produit_Paniers to update
     */
    where?: Produit_PanierWhereInput
    /**
     * Limit how many Produit_Paniers to update.
     */
    limit?: number
  }

  /**
   * Produit_Panier updateManyAndReturn
   */
  export type Produit_PanierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * The data used to update Produit_Paniers.
     */
    data: XOR<Produit_PanierUpdateManyMutationInput, Produit_PanierUncheckedUpdateManyInput>
    /**
     * Filter which Produit_Paniers to update
     */
    where?: Produit_PanierWhereInput
    /**
     * Limit how many Produit_Paniers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit_Panier upsert
   */
  export type Produit_PanierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit_Panier to update in case it exists.
     */
    where: Produit_PanierWhereUniqueInput
    /**
     * In case the Produit_Panier found by the `where` argument doesn't exist, create a new Produit_Panier with this data.
     */
    create: XOR<Produit_PanierCreateInput, Produit_PanierUncheckedCreateInput>
    /**
     * In case the Produit_Panier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Produit_PanierUpdateInput, Produit_PanierUncheckedUpdateInput>
  }

  /**
   * Produit_Panier delete
   */
  export type Produit_PanierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    /**
     * Filter which Produit_Panier to delete.
     */
    where: Produit_PanierWhereUniqueInput
  }

  /**
   * Produit_Panier deleteMany
   */
  export type Produit_PanierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit_Paniers to delete
     */
    where?: Produit_PanierWhereInput
    /**
     * Limit how many Produit_Paniers to delete.
     */
    limit?: number
  }

  /**
   * Produit_Panier without action
   */
  export type Produit_PanierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id_categorie: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id_categorie: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id_categorie: number | null
    nom: string | null
    date_creation: Date | null
  }

  export type CategorieMaxAggregateOutputType = {
    id_categorie: number | null
    nom: string | null
    date_creation: Date | null
  }

  export type CategorieCountAggregateOutputType = {
    id_categorie: number
    nom: number
    date_creation: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id_categorie?: true
  }

  export type CategorieSumAggregateInputType = {
    id_categorie?: true
  }

  export type CategorieMinAggregateInputType = {
    id_categorie?: true
    nom?: true
    date_creation?: true
  }

  export type CategorieMaxAggregateInputType = {
    id_categorie?: true
    nom?: true
    date_creation?: true
  }

  export type CategorieCountAggregateInputType = {
    id_categorie?: true
    nom?: true
    date_creation?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id_categorie: number
    nom: string
    date_creation: Date
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categorie?: boolean
    nom?: boolean
    date_creation?: boolean
    produit_categories?: boolean | Categorie$produit_categoriesArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categorie?: boolean
    nom?: boolean
    date_creation?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categorie?: boolean
    nom?: boolean
    date_creation?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id_categorie?: boolean
    nom?: boolean
    date_creation?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categorie" | "nom" | "date_creation", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit_categories?: boolean | Categorie$produit_categoriesArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      produit_categories: Prisma.$Produit_CategoriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categorie: number
      nom: string
      date_creation: Date
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.findMany({ select: { id_categorie: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id_categorie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id_categorie: true },
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
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
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
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produit_categories<T extends Categorie$produit_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$produit_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id_categorie: FieldRef<"Categorie", 'Int'>
    readonly nom: FieldRef<"Categorie", 'String'>
    readonly date_creation: FieldRef<"Categorie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.produit_categories
   */
  export type Categorie$produit_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    where?: Produit_CategorieWhereInput
    orderBy?: Produit_CategorieOrderByWithRelationInput | Produit_CategorieOrderByWithRelationInput[]
    cursor?: Produit_CategorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produit_CategorieScalarFieldEnum | Produit_CategorieScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Produit_Categorie
   */

  export type AggregateProduit_Categorie = {
    _count: Produit_CategorieCountAggregateOutputType | null
    _avg: Produit_CategorieAvgAggregateOutputType | null
    _sum: Produit_CategorieSumAggregateOutputType | null
    _min: Produit_CategorieMinAggregateOutputType | null
    _max: Produit_CategorieMaxAggregateOutputType | null
  }

  export type Produit_CategorieAvgAggregateOutputType = {
    id_produit_categorie: number | null
    id_categorie: number | null
    id_produit: number | null
  }

  export type Produit_CategorieSumAggregateOutputType = {
    id_produit_categorie: number | null
    id_categorie: number | null
    id_produit: number | null
  }

  export type Produit_CategorieMinAggregateOutputType = {
    id_produit_categorie: number | null
    id_categorie: number | null
    id_produit: number | null
  }

  export type Produit_CategorieMaxAggregateOutputType = {
    id_produit_categorie: number | null
    id_categorie: number | null
    id_produit: number | null
  }

  export type Produit_CategorieCountAggregateOutputType = {
    id_produit_categorie: number
    id_categorie: number
    id_produit: number
    _all: number
  }


  export type Produit_CategorieAvgAggregateInputType = {
    id_produit_categorie?: true
    id_categorie?: true
    id_produit?: true
  }

  export type Produit_CategorieSumAggregateInputType = {
    id_produit_categorie?: true
    id_categorie?: true
    id_produit?: true
  }

  export type Produit_CategorieMinAggregateInputType = {
    id_produit_categorie?: true
    id_categorie?: true
    id_produit?: true
  }

  export type Produit_CategorieMaxAggregateInputType = {
    id_produit_categorie?: true
    id_categorie?: true
    id_produit?: true
  }

  export type Produit_CategorieCountAggregateInputType = {
    id_produit_categorie?: true
    id_categorie?: true
    id_produit?: true
    _all?: true
  }

  export type Produit_CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit_Categorie to aggregate.
     */
    where?: Produit_CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Categories to fetch.
     */
    orderBy?: Produit_CategorieOrderByWithRelationInput | Produit_CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Produit_CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produit_Categories
    **/
    _count?: true | Produit_CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Produit_CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Produit_CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Produit_CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Produit_CategorieMaxAggregateInputType
  }

  export type GetProduit_CategorieAggregateType<T extends Produit_CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit_Categorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit_Categorie[P]>
      : GetScalarType<T[P], AggregateProduit_Categorie[P]>
  }




  export type Produit_CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produit_CategorieWhereInput
    orderBy?: Produit_CategorieOrderByWithAggregationInput | Produit_CategorieOrderByWithAggregationInput[]
    by: Produit_CategorieScalarFieldEnum[] | Produit_CategorieScalarFieldEnum
    having?: Produit_CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Produit_CategorieCountAggregateInputType | true
    _avg?: Produit_CategorieAvgAggregateInputType
    _sum?: Produit_CategorieSumAggregateInputType
    _min?: Produit_CategorieMinAggregateInputType
    _max?: Produit_CategorieMaxAggregateInputType
  }

  export type Produit_CategorieGroupByOutputType = {
    id_produit_categorie: number
    id_categorie: number
    id_produit: number
    _count: Produit_CategorieCountAggregateOutputType | null
    _avg: Produit_CategorieAvgAggregateOutputType | null
    _sum: Produit_CategorieSumAggregateOutputType | null
    _min: Produit_CategorieMinAggregateOutputType | null
    _max: Produit_CategorieMaxAggregateOutputType | null
  }

  type GetProduit_CategorieGroupByPayload<T extends Produit_CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Produit_CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Produit_CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Produit_CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], Produit_CategorieGroupByOutputType[P]>
        }
      >
    >


  export type Produit_CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit_categorie?: boolean
    id_categorie?: boolean
    id_produit?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit_Categorie"]>

  export type Produit_CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit_categorie?: boolean
    id_categorie?: boolean
    id_produit?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit_Categorie"]>

  export type Produit_CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produit_categorie?: boolean
    id_categorie?: boolean
    id_produit?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit_Categorie"]>

  export type Produit_CategorieSelectScalar = {
    id_produit_categorie?: boolean
    id_categorie?: boolean
    id_produit?: boolean
  }

  export type Produit_CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produit_categorie" | "id_categorie" | "id_produit", ExtArgs["result"]["produit_Categorie"]>
  export type Produit_CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type Produit_CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type Produit_CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $Produit_CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit_Categorie"
    objects: {
      categorie: Prisma.$CategoriePayload<ExtArgs>
      produit: Prisma.$ProduitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produit_categorie: number
      id_categorie: number
      id_produit: number
    }, ExtArgs["result"]["produit_Categorie"]>
    composites: {}
  }

  type Produit_CategorieGetPayload<S extends boolean | null | undefined | Produit_CategorieDefaultArgs> = $Result.GetResult<Prisma.$Produit_CategoriePayload, S>

  type Produit_CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Produit_CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Produit_CategorieCountAggregateInputType | true
    }

  export interface Produit_CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit_Categorie'], meta: { name: 'Produit_Categorie' } }
    /**
     * Find zero or one Produit_Categorie that matches the filter.
     * @param {Produit_CategorieFindUniqueArgs} args - Arguments to find a Produit_Categorie
     * @example
     * // Get one Produit_Categorie
     * const produit_Categorie = await prisma.produit_Categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Produit_CategorieFindUniqueArgs>(args: SelectSubset<T, Produit_CategorieFindUniqueArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit_Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Produit_CategorieFindUniqueOrThrowArgs} args - Arguments to find a Produit_Categorie
     * @example
     * // Get one Produit_Categorie
     * const produit_Categorie = await prisma.produit_Categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Produit_CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, Produit_CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit_Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieFindFirstArgs} args - Arguments to find a Produit_Categorie
     * @example
     * // Get one Produit_Categorie
     * const produit_Categorie = await prisma.produit_Categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Produit_CategorieFindFirstArgs>(args?: SelectSubset<T, Produit_CategorieFindFirstArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit_Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieFindFirstOrThrowArgs} args - Arguments to find a Produit_Categorie
     * @example
     * // Get one Produit_Categorie
     * const produit_Categorie = await prisma.produit_Categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Produit_CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, Produit_CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produit_Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produit_Categories
     * const produit_Categories = await prisma.produit_Categorie.findMany()
     * 
     * // Get first 10 Produit_Categories
     * const produit_Categories = await prisma.produit_Categorie.findMany({ take: 10 })
     * 
     * // Only select the `id_produit_categorie`
     * const produit_CategorieWithId_produit_categorieOnly = await prisma.produit_Categorie.findMany({ select: { id_produit_categorie: true } })
     * 
     */
    findMany<T extends Produit_CategorieFindManyArgs>(args?: SelectSubset<T, Produit_CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit_Categorie.
     * @param {Produit_CategorieCreateArgs} args - Arguments to create a Produit_Categorie.
     * @example
     * // Create one Produit_Categorie
     * const Produit_Categorie = await prisma.produit_Categorie.create({
     *   data: {
     *     // ... data to create a Produit_Categorie
     *   }
     * })
     * 
     */
    create<T extends Produit_CategorieCreateArgs>(args: SelectSubset<T, Produit_CategorieCreateArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produit_Categories.
     * @param {Produit_CategorieCreateManyArgs} args - Arguments to create many Produit_Categories.
     * @example
     * // Create many Produit_Categories
     * const produit_Categorie = await prisma.produit_Categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Produit_CategorieCreateManyArgs>(args?: SelectSubset<T, Produit_CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produit_Categories and returns the data saved in the database.
     * @param {Produit_CategorieCreateManyAndReturnArgs} args - Arguments to create many Produit_Categories.
     * @example
     * // Create many Produit_Categories
     * const produit_Categorie = await prisma.produit_Categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produit_Categories and only return the `id_produit_categorie`
     * const produit_CategorieWithId_produit_categorieOnly = await prisma.produit_Categorie.createManyAndReturn({
     *   select: { id_produit_categorie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Produit_CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, Produit_CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit_Categorie.
     * @param {Produit_CategorieDeleteArgs} args - Arguments to delete one Produit_Categorie.
     * @example
     * // Delete one Produit_Categorie
     * const Produit_Categorie = await prisma.produit_Categorie.delete({
     *   where: {
     *     // ... filter to delete one Produit_Categorie
     *   }
     * })
     * 
     */
    delete<T extends Produit_CategorieDeleteArgs>(args: SelectSubset<T, Produit_CategorieDeleteArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit_Categorie.
     * @param {Produit_CategorieUpdateArgs} args - Arguments to update one Produit_Categorie.
     * @example
     * // Update one Produit_Categorie
     * const produit_Categorie = await prisma.produit_Categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Produit_CategorieUpdateArgs>(args: SelectSubset<T, Produit_CategorieUpdateArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produit_Categories.
     * @param {Produit_CategorieDeleteManyArgs} args - Arguments to filter Produit_Categories to delete.
     * @example
     * // Delete a few Produit_Categories
     * const { count } = await prisma.produit_Categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Produit_CategorieDeleteManyArgs>(args?: SelectSubset<T, Produit_CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produit_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produit_Categories
     * const produit_Categorie = await prisma.produit_Categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Produit_CategorieUpdateManyArgs>(args: SelectSubset<T, Produit_CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produit_Categories and returns the data updated in the database.
     * @param {Produit_CategorieUpdateManyAndReturnArgs} args - Arguments to update many Produit_Categories.
     * @example
     * // Update many Produit_Categories
     * const produit_Categorie = await prisma.produit_Categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produit_Categories and only return the `id_produit_categorie`
     * const produit_CategorieWithId_produit_categorieOnly = await prisma.produit_Categorie.updateManyAndReturn({
     *   select: { id_produit_categorie: true },
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
    updateManyAndReturn<T extends Produit_CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, Produit_CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit_Categorie.
     * @param {Produit_CategorieUpsertArgs} args - Arguments to update or create a Produit_Categorie.
     * @example
     * // Update or create a Produit_Categorie
     * const produit_Categorie = await prisma.produit_Categorie.upsert({
     *   create: {
     *     // ... data to create a Produit_Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit_Categorie we want to update
     *   }
     * })
     */
    upsert<T extends Produit_CategorieUpsertArgs>(args: SelectSubset<T, Produit_CategorieUpsertArgs<ExtArgs>>): Prisma__Produit_CategorieClient<$Result.GetResult<Prisma.$Produit_CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produit_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieCountArgs} args - Arguments to filter Produit_Categories to count.
     * @example
     * // Count the number of Produit_Categories
     * const count = await prisma.produit_Categorie.count({
     *   where: {
     *     // ... the filter for the Produit_Categories we want to count
     *   }
     * })
    **/
    count<T extends Produit_CategorieCountArgs>(
      args?: Subset<T, Produit_CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Produit_CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit_Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Produit_CategorieAggregateArgs>(args: Subset<T, Produit_CategorieAggregateArgs>): Prisma.PrismaPromise<GetProduit_CategorieAggregateType<T>>

    /**
     * Group by Produit_Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produit_CategorieGroupByArgs} args - Group by arguments.
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
      T extends Produit_CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Produit_CategorieGroupByArgs['orderBy'] }
        : { orderBy?: Produit_CategorieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Produit_CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduit_CategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit_Categorie model
   */
  readonly fields: Produit_CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit_Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Produit_CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Produit_Categorie model
   */
  interface Produit_CategorieFieldRefs {
    readonly id_produit_categorie: FieldRef<"Produit_Categorie", 'Int'>
    readonly id_categorie: FieldRef<"Produit_Categorie", 'Int'>
    readonly id_produit: FieldRef<"Produit_Categorie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produit_Categorie findUnique
   */
  export type Produit_CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Categorie to fetch.
     */
    where: Produit_CategorieWhereUniqueInput
  }

  /**
   * Produit_Categorie findUniqueOrThrow
   */
  export type Produit_CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Categorie to fetch.
     */
    where: Produit_CategorieWhereUniqueInput
  }

  /**
   * Produit_Categorie findFirst
   */
  export type Produit_CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Categorie to fetch.
     */
    where?: Produit_CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Categories to fetch.
     */
    orderBy?: Produit_CategorieOrderByWithRelationInput | Produit_CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produit_Categories.
     */
    cursor?: Produit_CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produit_Categories.
     */
    distinct?: Produit_CategorieScalarFieldEnum | Produit_CategorieScalarFieldEnum[]
  }

  /**
   * Produit_Categorie findFirstOrThrow
   */
  export type Produit_CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Categorie to fetch.
     */
    where?: Produit_CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Categories to fetch.
     */
    orderBy?: Produit_CategorieOrderByWithRelationInput | Produit_CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produit_Categories.
     */
    cursor?: Produit_CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produit_Categories.
     */
    distinct?: Produit_CategorieScalarFieldEnum | Produit_CategorieScalarFieldEnum[]
  }

  /**
   * Produit_Categorie findMany
   */
  export type Produit_CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Produit_Categories to fetch.
     */
    where?: Produit_CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produit_Categories to fetch.
     */
    orderBy?: Produit_CategorieOrderByWithRelationInput | Produit_CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produit_Categories.
     */
    cursor?: Produit_CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produit_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produit_Categories.
     */
    skip?: number
    distinct?: Produit_CategorieScalarFieldEnum | Produit_CategorieScalarFieldEnum[]
  }

  /**
   * Produit_Categorie create
   */
  export type Produit_CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit_Categorie.
     */
    data: XOR<Produit_CategorieCreateInput, Produit_CategorieUncheckedCreateInput>
  }

  /**
   * Produit_Categorie createMany
   */
  export type Produit_CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produit_Categories.
     */
    data: Produit_CategorieCreateManyInput | Produit_CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produit_Categorie createManyAndReturn
   */
  export type Produit_CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Produit_Categories.
     */
    data: Produit_CategorieCreateManyInput | Produit_CategorieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit_Categorie update
   */
  export type Produit_CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit_Categorie.
     */
    data: XOR<Produit_CategorieUpdateInput, Produit_CategorieUncheckedUpdateInput>
    /**
     * Choose, which Produit_Categorie to update.
     */
    where: Produit_CategorieWhereUniqueInput
  }

  /**
   * Produit_Categorie updateMany
   */
  export type Produit_CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produit_Categories.
     */
    data: XOR<Produit_CategorieUpdateManyMutationInput, Produit_CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Produit_Categories to update
     */
    where?: Produit_CategorieWhereInput
    /**
     * Limit how many Produit_Categories to update.
     */
    limit?: number
  }

  /**
   * Produit_Categorie updateManyAndReturn
   */
  export type Produit_CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Produit_Categories.
     */
    data: XOR<Produit_CategorieUpdateManyMutationInput, Produit_CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Produit_Categories to update
     */
    where?: Produit_CategorieWhereInput
    /**
     * Limit how many Produit_Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit_Categorie upsert
   */
  export type Produit_CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit_Categorie to update in case it exists.
     */
    where: Produit_CategorieWhereUniqueInput
    /**
     * In case the Produit_Categorie found by the `where` argument doesn't exist, create a new Produit_Categorie with this data.
     */
    create: XOR<Produit_CategorieCreateInput, Produit_CategorieUncheckedCreateInput>
    /**
     * In case the Produit_Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Produit_CategorieUpdateInput, Produit_CategorieUncheckedUpdateInput>
  }

  /**
   * Produit_Categorie delete
   */
  export type Produit_CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
    /**
     * Filter which Produit_Categorie to delete.
     */
    where: Produit_CategorieWhereUniqueInput
  }

  /**
   * Produit_Categorie deleteMany
   */
  export type Produit_CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit_Categories to delete
     */
    where?: Produit_CategorieWhereInput
    /**
     * Limit how many Produit_Categories to delete.
     */
    limit?: number
  }

  /**
   * Produit_Categorie without action
   */
  export type Produit_CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Categorie
     */
    select?: Produit_CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Categorie
     */
    omit?: Produit_CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Panier
   */

  export type AggregatePanier = {
    _count: PanierCountAggregateOutputType | null
    _avg: PanierAvgAggregateOutputType | null
    _sum: PanierSumAggregateOutputType | null
    _min: PanierMinAggregateOutputType | null
    _max: PanierMaxAggregateOutputType | null
  }

  export type PanierAvgAggregateOutputType = {
    id_panier: number | null
    id_client: number | null
  }

  export type PanierSumAggregateOutputType = {
    id_panier: number | null
    id_client: number | null
  }

  export type PanierMinAggregateOutputType = {
    id_panier: number | null
    date_creation: Date | null
    id_client: number | null
  }

  export type PanierMaxAggregateOutputType = {
    id_panier: number | null
    date_creation: Date | null
    id_client: number | null
  }

  export type PanierCountAggregateOutputType = {
    id_panier: number
    date_creation: number
    id_client: number
    _all: number
  }


  export type PanierAvgAggregateInputType = {
    id_panier?: true
    id_client?: true
  }

  export type PanierSumAggregateInputType = {
    id_panier?: true
    id_client?: true
  }

  export type PanierMinAggregateInputType = {
    id_panier?: true
    date_creation?: true
    id_client?: true
  }

  export type PanierMaxAggregateInputType = {
    id_panier?: true
    date_creation?: true
    id_client?: true
  }

  export type PanierCountAggregateInputType = {
    id_panier?: true
    date_creation?: true
    id_client?: true
    _all?: true
  }

  export type PanierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panier to aggregate.
     */
    where?: PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paniers to fetch.
     */
    orderBy?: PanierOrderByWithRelationInput | PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paniers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paniers
    **/
    _count?: true | PanierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanierMaxAggregateInputType
  }

  export type GetPanierAggregateType<T extends PanierAggregateArgs> = {
        [P in keyof T & keyof AggregatePanier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanier[P]>
      : GetScalarType<T[P], AggregatePanier[P]>
  }




  export type PanierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanierWhereInput
    orderBy?: PanierOrderByWithAggregationInput | PanierOrderByWithAggregationInput[]
    by: PanierScalarFieldEnum[] | PanierScalarFieldEnum
    having?: PanierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanierCountAggregateInputType | true
    _avg?: PanierAvgAggregateInputType
    _sum?: PanierSumAggregateInputType
    _min?: PanierMinAggregateInputType
    _max?: PanierMaxAggregateInputType
  }

  export type PanierGroupByOutputType = {
    id_panier: number
    date_creation: Date
    id_client: number
    _count: PanierCountAggregateOutputType | null
    _avg: PanierAvgAggregateOutputType | null
    _sum: PanierSumAggregateOutputType | null
    _min: PanierMinAggregateOutputType | null
    _max: PanierMaxAggregateOutputType | null
  }

  type GetPanierGroupByPayload<T extends PanierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanierGroupByOutputType[P]>
            : GetScalarType<T[P], PanierGroupByOutputType[P]>
        }
      >
    >


  export type PanierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_panier?: boolean
    date_creation?: boolean
    id_client?: boolean
    produit_paniers?: boolean | Panier$produit_paniersArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | PanierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panier"]>

  export type PanierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_panier?: boolean
    date_creation?: boolean
    id_client?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panier"]>

  export type PanierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_panier?: boolean
    date_creation?: boolean
    id_client?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panier"]>

  export type PanierSelectScalar = {
    id_panier?: boolean
    date_creation?: boolean
    id_client?: boolean
  }

  export type PanierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_panier" | "date_creation" | "id_client", ExtArgs["result"]["panier"]>
  export type PanierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit_paniers?: boolean | Panier$produit_paniersArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | PanierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PanierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type PanierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $PanierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Panier"
    objects: {
      produit_paniers: Prisma.$Produit_PanierPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_panier: number
      date_creation: Date
      id_client: number
    }, ExtArgs["result"]["panier"]>
    composites: {}
  }

  type PanierGetPayload<S extends boolean | null | undefined | PanierDefaultArgs> = $Result.GetResult<Prisma.$PanierPayload, S>

  type PanierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanierCountAggregateInputType | true
    }

  export interface PanierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Panier'], meta: { name: 'Panier' } }
    /**
     * Find zero or one Panier that matches the filter.
     * @param {PanierFindUniqueArgs} args - Arguments to find a Panier
     * @example
     * // Get one Panier
     * const panier = await prisma.panier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanierFindUniqueArgs>(args: SelectSubset<T, PanierFindUniqueArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Panier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanierFindUniqueOrThrowArgs} args - Arguments to find a Panier
     * @example
     * // Get one Panier
     * const panier = await prisma.panier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanierFindUniqueOrThrowArgs>(args: SelectSubset<T, PanierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierFindFirstArgs} args - Arguments to find a Panier
     * @example
     * // Get one Panier
     * const panier = await prisma.panier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanierFindFirstArgs>(args?: SelectSubset<T, PanierFindFirstArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierFindFirstOrThrowArgs} args - Arguments to find a Panier
     * @example
     * // Get one Panier
     * const panier = await prisma.panier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanierFindFirstOrThrowArgs>(args?: SelectSubset<T, PanierFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paniers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paniers
     * const paniers = await prisma.panier.findMany()
     * 
     * // Get first 10 Paniers
     * const paniers = await prisma.panier.findMany({ take: 10 })
     * 
     * // Only select the `id_panier`
     * const panierWithId_panierOnly = await prisma.panier.findMany({ select: { id_panier: true } })
     * 
     */
    findMany<T extends PanierFindManyArgs>(args?: SelectSubset<T, PanierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Panier.
     * @param {PanierCreateArgs} args - Arguments to create a Panier.
     * @example
     * // Create one Panier
     * const Panier = await prisma.panier.create({
     *   data: {
     *     // ... data to create a Panier
     *   }
     * })
     * 
     */
    create<T extends PanierCreateArgs>(args: SelectSubset<T, PanierCreateArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paniers.
     * @param {PanierCreateManyArgs} args - Arguments to create many Paniers.
     * @example
     * // Create many Paniers
     * const panier = await prisma.panier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanierCreateManyArgs>(args?: SelectSubset<T, PanierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paniers and returns the data saved in the database.
     * @param {PanierCreateManyAndReturnArgs} args - Arguments to create many Paniers.
     * @example
     * // Create many Paniers
     * const panier = await prisma.panier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paniers and only return the `id_panier`
     * const panierWithId_panierOnly = await prisma.panier.createManyAndReturn({
     *   select: { id_panier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PanierCreateManyAndReturnArgs>(args?: SelectSubset<T, PanierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Panier.
     * @param {PanierDeleteArgs} args - Arguments to delete one Panier.
     * @example
     * // Delete one Panier
     * const Panier = await prisma.panier.delete({
     *   where: {
     *     // ... filter to delete one Panier
     *   }
     * })
     * 
     */
    delete<T extends PanierDeleteArgs>(args: SelectSubset<T, PanierDeleteArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Panier.
     * @param {PanierUpdateArgs} args - Arguments to update one Panier.
     * @example
     * // Update one Panier
     * const panier = await prisma.panier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanierUpdateArgs>(args: SelectSubset<T, PanierUpdateArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paniers.
     * @param {PanierDeleteManyArgs} args - Arguments to filter Paniers to delete.
     * @example
     * // Delete a few Paniers
     * const { count } = await prisma.panier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanierDeleteManyArgs>(args?: SelectSubset<T, PanierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paniers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paniers
     * const panier = await prisma.panier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanierUpdateManyArgs>(args: SelectSubset<T, PanierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paniers and returns the data updated in the database.
     * @param {PanierUpdateManyAndReturnArgs} args - Arguments to update many Paniers.
     * @example
     * // Update many Paniers
     * const panier = await prisma.panier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paniers and only return the `id_panier`
     * const panierWithId_panierOnly = await prisma.panier.updateManyAndReturn({
     *   select: { id_panier: true },
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
    updateManyAndReturn<T extends PanierUpdateManyAndReturnArgs>(args: SelectSubset<T, PanierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Panier.
     * @param {PanierUpsertArgs} args - Arguments to update or create a Panier.
     * @example
     * // Update or create a Panier
     * const panier = await prisma.panier.upsert({
     *   create: {
     *     // ... data to create a Panier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Panier we want to update
     *   }
     * })
     */
    upsert<T extends PanierUpsertArgs>(args: SelectSubset<T, PanierUpsertArgs<ExtArgs>>): Prisma__PanierClient<$Result.GetResult<Prisma.$PanierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paniers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierCountArgs} args - Arguments to filter Paniers to count.
     * @example
     * // Count the number of Paniers
     * const count = await prisma.panier.count({
     *   where: {
     *     // ... the filter for the Paniers we want to count
     *   }
     * })
    **/
    count<T extends PanierCountArgs>(
      args?: Subset<T, PanierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Panier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PanierAggregateArgs>(args: Subset<T, PanierAggregateArgs>): Prisma.PrismaPromise<GetPanierAggregateType<T>>

    /**
     * Group by Panier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierGroupByArgs} args - Group by arguments.
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
      T extends PanierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanierGroupByArgs['orderBy'] }
        : { orderBy?: PanierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PanierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Panier model
   */
  readonly fields: PanierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Panier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produit_paniers<T extends Panier$produit_paniersArgs<ExtArgs> = {}>(args?: Subset<T, Panier$produit_paniersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produit_PanierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Panier model
   */
  interface PanierFieldRefs {
    readonly id_panier: FieldRef<"Panier", 'Int'>
    readonly date_creation: FieldRef<"Panier", 'DateTime'>
    readonly id_client: FieldRef<"Panier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Panier findUnique
   */
  export type PanierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * Filter, which Panier to fetch.
     */
    where: PanierWhereUniqueInput
  }

  /**
   * Panier findUniqueOrThrow
   */
  export type PanierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * Filter, which Panier to fetch.
     */
    where: PanierWhereUniqueInput
  }

  /**
   * Panier findFirst
   */
  export type PanierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * Filter, which Panier to fetch.
     */
    where?: PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paniers to fetch.
     */
    orderBy?: PanierOrderByWithRelationInput | PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paniers.
     */
    cursor?: PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paniers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paniers.
     */
    distinct?: PanierScalarFieldEnum | PanierScalarFieldEnum[]
  }

  /**
   * Panier findFirstOrThrow
   */
  export type PanierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * Filter, which Panier to fetch.
     */
    where?: PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paniers to fetch.
     */
    orderBy?: PanierOrderByWithRelationInput | PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paniers.
     */
    cursor?: PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paniers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paniers.
     */
    distinct?: PanierScalarFieldEnum | PanierScalarFieldEnum[]
  }

  /**
   * Panier findMany
   */
  export type PanierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * Filter, which Paniers to fetch.
     */
    where?: PanierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paniers to fetch.
     */
    orderBy?: PanierOrderByWithRelationInput | PanierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paniers.
     */
    cursor?: PanierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paniers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paniers.
     */
    skip?: number
    distinct?: PanierScalarFieldEnum | PanierScalarFieldEnum[]
  }

  /**
   * Panier create
   */
  export type PanierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * The data needed to create a Panier.
     */
    data: XOR<PanierCreateInput, PanierUncheckedCreateInput>
  }

  /**
   * Panier createMany
   */
  export type PanierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paniers.
     */
    data: PanierCreateManyInput | PanierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Panier createManyAndReturn
   */
  export type PanierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * The data used to create many Paniers.
     */
    data: PanierCreateManyInput | PanierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Panier update
   */
  export type PanierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * The data needed to update a Panier.
     */
    data: XOR<PanierUpdateInput, PanierUncheckedUpdateInput>
    /**
     * Choose, which Panier to update.
     */
    where: PanierWhereUniqueInput
  }

  /**
   * Panier updateMany
   */
  export type PanierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paniers.
     */
    data: XOR<PanierUpdateManyMutationInput, PanierUncheckedUpdateManyInput>
    /**
     * Filter which Paniers to update
     */
    where?: PanierWhereInput
    /**
     * Limit how many Paniers to update.
     */
    limit?: number
  }

  /**
   * Panier updateManyAndReturn
   */
  export type PanierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * The data used to update Paniers.
     */
    data: XOR<PanierUpdateManyMutationInput, PanierUncheckedUpdateManyInput>
    /**
     * Filter which Paniers to update
     */
    where?: PanierWhereInput
    /**
     * Limit how many Paniers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Panier upsert
   */
  export type PanierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * The filter to search for the Panier to update in case it exists.
     */
    where: PanierWhereUniqueInput
    /**
     * In case the Panier found by the `where` argument doesn't exist, create a new Panier with this data.
     */
    create: XOR<PanierCreateInput, PanierUncheckedCreateInput>
    /**
     * In case the Panier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanierUpdateInput, PanierUncheckedUpdateInput>
  }

  /**
   * Panier delete
   */
  export type PanierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
    /**
     * Filter which Panier to delete.
     */
    where: PanierWhereUniqueInput
  }

  /**
   * Panier deleteMany
   */
  export type PanierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paniers to delete
     */
    where?: PanierWhereInput
    /**
     * Limit how many Paniers to delete.
     */
    limit?: number
  }

  /**
   * Panier.produit_paniers
   */
  export type Panier$produit_paniersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit_Panier
     */
    select?: Produit_PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit_Panier
     */
    omit?: Produit_PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Produit_PanierInclude<ExtArgs> | null
    where?: Produit_PanierWhereInput
    orderBy?: Produit_PanierOrderByWithRelationInput | Produit_PanierOrderByWithRelationInput[]
    cursor?: Produit_PanierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produit_PanierScalarFieldEnum | Produit_PanierScalarFieldEnum[]
  }

  /**
   * Panier without action
   */
  export type PanierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panier
     */
    select?: PanierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panier
     */
    omit?: PanierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierInclude<ExtArgs> | null
  }


  /**
   * Model Commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    id_commande: number | null
    total: Decimal | null
    id_client: number | null
    id_admin: number | null
  }

  export type CommandeSumAggregateOutputType = {
    id_commande: number | null
    total: Decimal | null
    id_client: number | null
    id_admin: number | null
  }

  export type CommandeMinAggregateOutputType = {
    id_commande: number | null
    date_commande: Date | null
    statut: string | null
    total: Decimal | null
    moyen_paiement: string | null
    adresse_livraison: string | null
    cp_livraison: string | null
    ville_livraison: string | null
    id_client: number | null
    id_admin: number | null
  }

  export type CommandeMaxAggregateOutputType = {
    id_commande: number | null
    date_commande: Date | null
    statut: string | null
    total: Decimal | null
    moyen_paiement: string | null
    adresse_livraison: string | null
    cp_livraison: string | null
    ville_livraison: string | null
    id_client: number | null
    id_admin: number | null
  }

  export type CommandeCountAggregateOutputType = {
    id_commande: number
    date_commande: number
    statut: number
    total: number
    moyen_paiement: number
    adresse_livraison: number
    cp_livraison: number
    ville_livraison: number
    id_client: number
    id_admin: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    id_commande?: true
    total?: true
    id_client?: true
    id_admin?: true
  }

  export type CommandeSumAggregateInputType = {
    id_commande?: true
    total?: true
    id_client?: true
    id_admin?: true
  }

  export type CommandeMinAggregateInputType = {
    id_commande?: true
    date_commande?: true
    statut?: true
    total?: true
    moyen_paiement?: true
    adresse_livraison?: true
    cp_livraison?: true
    ville_livraison?: true
    id_client?: true
    id_admin?: true
  }

  export type CommandeMaxAggregateInputType = {
    id_commande?: true
    date_commande?: true
    statut?: true
    total?: true
    moyen_paiement?: true
    adresse_livraison?: true
    cp_livraison?: true
    ville_livraison?: true
    id_client?: true
    id_admin?: true
  }

  export type CommandeCountAggregateInputType = {
    id_commande?: true
    date_commande?: true
    statut?: true
    total?: true
    moyen_paiement?: true
    adresse_livraison?: true
    cp_livraison?: true
    ville_livraison?: true
    id_client?: true
    id_admin?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithAggregationInput | CommandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    id_commande: number
    date_commande: Date
    statut: string
    total: Decimal
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_client: number
    id_admin: number | null
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commande?: boolean
    date_commande?: boolean
    statut?: boolean
    total?: boolean
    moyen_paiement?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    id_client?: boolean
    id_admin?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Commande$adminArgs<ExtArgs>
    produits?: boolean | Commande$produitsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commande?: boolean
    date_commande?: boolean
    statut?: boolean
    total?: boolean
    moyen_paiement?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    id_client?: boolean
    id_admin?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Commande$adminArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commande?: boolean
    date_commande?: boolean
    statut?: boolean
    total?: boolean
    moyen_paiement?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    id_client?: boolean
    id_admin?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Commande$adminArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectScalar = {
    id_commande?: boolean
    date_commande?: boolean
    statut?: boolean
    total?: boolean
    moyen_paiement?: boolean
    adresse_livraison?: boolean
    cp_livraison?: boolean
    ville_livraison?: boolean
    id_client?: boolean
    id_admin?: boolean
  }

  export type CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_commande" | "date_commande" | "statut" | "total" | "moyen_paiement" | "adresse_livraison" | "cp_livraison" | "ville_livraison" | "id_client" | "id_admin", ExtArgs["result"]["commande"]>
  export type CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Commande$adminArgs<ExtArgs>
    produits?: boolean | Commande$produitsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Commande$adminArgs<ExtArgs>
  }
  export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    admin?: boolean | Commande$adminArgs<ExtArgs>
  }

  export type $CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commande"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
      produits: Prisma.$ProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_commande: number
      date_commande: Date
      statut: string
      total: Prisma.Decimal
      moyen_paiement: string
      adresse_livraison: string
      cp_livraison: string
      ville_livraison: string
      id_client: number
      id_admin: number | null
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = $Result.GetResult<Prisma.$CommandePayload, S>

  type CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commande'], meta: { name: 'Commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id_commande`
     * const commandeWithId_commandeOnly = await prisma.commande.findMany({ select: { id_commande: true } })
     * 
     */
    findMany<T extends CommandeFindManyArgs>(args?: SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends CommandeCreateArgs>(args: SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeCreateManyArgs>(args?: SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {CommandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commandes and only return the `id_commande`
     * const commandeWithId_commandeOnly = await prisma.commande.createManyAndReturn({
     *   select: { id_commande: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends CommandeDeleteArgs>(args: SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeUpdateArgs>(args: SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes and returns the data updated in the database.
     * @param {CommandeUpdateManyAndReturnArgs} args - Arguments to update many Commandes.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commandes and only return the `id_commande`
     * const commandeWithId_commandeOnly = await prisma.commande.updateManyAndReturn({
     *   select: { id_commande: true },
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
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
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
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commande model
   */
  readonly fields: CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends Commande$adminArgs<ExtArgs> = {}>(args?: Subset<T, Commande$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produits<T extends Commande$produitsArgs<ExtArgs> = {}>(args?: Subset<T, Commande$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Commande model
   */
  interface CommandeFieldRefs {
    readonly id_commande: FieldRef<"Commande", 'Int'>
    readonly date_commande: FieldRef<"Commande", 'DateTime'>
    readonly statut: FieldRef<"Commande", 'String'>
    readonly total: FieldRef<"Commande", 'Decimal'>
    readonly moyen_paiement: FieldRef<"Commande", 'String'>
    readonly adresse_livraison: FieldRef<"Commande", 'String'>
    readonly cp_livraison: FieldRef<"Commande", 'String'>
    readonly ville_livraison: FieldRef<"Commande", 'String'>
    readonly id_client: FieldRef<"Commande", 'Int'>
    readonly id_admin: FieldRef<"Commande", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findUniqueOrThrow
   */
  export type CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findFirstOrThrow
   */
  export type CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commandes to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande create
   */
  export type CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commande.
     */
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }

  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commande createManyAndReturn
   */
  export type CommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande update
   */
  export type CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commande.
     */
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
  }

  /**
   * Commande updateManyAndReturn
   */
  export type CommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }

  /**
   * Commande delete
   */
  export type CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter which Commande to delete.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number
  }

  /**
   * Commande.admin
   */
  export type Commande$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Commande.produits
   */
  export type Commande$produitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Commande without action
   */
  export type CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    id_client: 'id_client',
    mail: 'mail',
    mdp_hash: 'mdp_hash',
    role: 'role',
    prenom: 'prenom',
    nom: 'nom',
    adresse_livraison: 'adresse_livraison',
    cp_livraison: 'cp_livraison',
    ville_livraison: 'ville_livraison',
    telephone: 'telephone',
    date_creation: 'date_creation',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id_session: 'id_session',
    token: 'token',
    date_connexion: 'date_connexion',
    date_deconnexion: 'date_deconnexion',
    is_active: 'is_active',
    date_creation: 'date_creation',
    id_client: 'id_client',
    id_admin: 'id_admin'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id_admin: 'id_admin',
    mail: 'mail',
    nom: 'nom',
    prenom: 'prenom',
    mdp_hash: 'mdp_hash',
    role: 'role',
    dernier_login: 'dernier_login'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    id_produit: 'id_produit',
    nom: 'nom',
    description: 'description',
    prix: 'prix',
    image: 'image',
    date_creation: 'date_creation',
    is_active: 'is_active',
    id_commande: 'id_commande'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


  export const Produit_PanierScalarFieldEnum: {
    id_produit_panier: 'id_produit_panier',
    id_panier: 'id_panier',
    id_produit: 'id_produit'
  };

  export type Produit_PanierScalarFieldEnum = (typeof Produit_PanierScalarFieldEnum)[keyof typeof Produit_PanierScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id_categorie: 'id_categorie',
    nom: 'nom',
    date_creation: 'date_creation'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const Produit_CategorieScalarFieldEnum: {
    id_produit_categorie: 'id_produit_categorie',
    id_categorie: 'id_categorie',
    id_produit: 'id_produit'
  };

  export type Produit_CategorieScalarFieldEnum = (typeof Produit_CategorieScalarFieldEnum)[keyof typeof Produit_CategorieScalarFieldEnum]


  export const PanierScalarFieldEnum: {
    id_panier: 'id_panier',
    date_creation: 'date_creation',
    id_client: 'id_client'
  };

  export type PanierScalarFieldEnum = (typeof PanierScalarFieldEnum)[keyof typeof PanierScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id_commande: 'id_commande',
    date_commande: 'date_commande',
    statut: 'statut',
    total: 'total',
    moyen_paiement: 'moyen_paiement',
    adresse_livraison: 'adresse_livraison',
    cp_livraison: 'cp_livraison',
    ville_livraison: 'ville_livraison',
    id_client: 'id_client',
    id_admin: 'id_admin'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id_client?: IntFilter<"Client"> | number
    mail?: StringFilter<"Client"> | string
    mdp_hash?: StringFilter<"Client"> | string
    role?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    adresse_livraison?: StringFilter<"Client"> | string
    cp_livraison?: StringFilter<"Client"> | string
    ville_livraison?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    date_creation?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    sessions?: SessionListRelationFilter
    paniers?: PanierListRelationFilter
    commandes?: CommandeListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id_client?: SortOrder
    mail?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    telephone?: SortOrder
    date_creation?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    paniers?: PanierOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id_client?: number
    mail?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    mdp_hash?: StringFilter<"Client"> | string
    role?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    adresse_livraison?: StringFilter<"Client"> | string
    cp_livraison?: StringFilter<"Client"> | string
    ville_livraison?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    date_creation?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    sessions?: SessionListRelationFilter
    paniers?: PanierListRelationFilter
    commandes?: CommandeListRelationFilter
  }, "id_client" | "mail">

  export type ClientOrderByWithAggregationInput = {
    id_client?: SortOrder
    mail?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    telephone?: SortOrder
    date_creation?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id_client?: IntWithAggregatesFilter<"Client"> | number
    mail?: StringWithAggregatesFilter<"Client"> | string
    mdp_hash?: StringWithAggregatesFilter<"Client"> | string
    role?: StringWithAggregatesFilter<"Client"> | string
    prenom?: StringWithAggregatesFilter<"Client"> | string
    nom?: StringWithAggregatesFilter<"Client"> | string
    adresse_livraison?: StringWithAggregatesFilter<"Client"> | string
    cp_livraison?: StringWithAggregatesFilter<"Client"> | string
    ville_livraison?: StringWithAggregatesFilter<"Client"> | string
    telephone?: StringWithAggregatesFilter<"Client"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id_session?: IntFilter<"Session"> | number
    token?: StringFilter<"Session"> | string
    date_connexion?: DateTimeFilter<"Session"> | Date | string
    date_deconnexion?: DateTimeNullableFilter<"Session"> | Date | string | null
    is_active?: BoolFilter<"Session"> | boolean
    date_creation?: DateTimeFilter<"Session"> | Date | string
    id_client?: IntFilter<"Session"> | number
    id_admin?: IntNullableFilter<"Session"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id_session?: SortOrder
    token?: SortOrder
    date_connexion?: SortOrder
    date_deconnexion?: SortOrderInput | SortOrder
    is_active?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id_session?: number
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    date_connexion?: DateTimeFilter<"Session"> | Date | string
    date_deconnexion?: DateTimeNullableFilter<"Session"> | Date | string | null
    is_active?: BoolFilter<"Session"> | boolean
    date_creation?: DateTimeFilter<"Session"> | Date | string
    id_client?: IntFilter<"Session"> | number
    id_admin?: IntNullableFilter<"Session"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id_session" | "token">

  export type SessionOrderByWithAggregationInput = {
    id_session?: SortOrder
    token?: SortOrder
    date_connexion?: SortOrder
    date_deconnexion?: SortOrderInput | SortOrder
    is_active?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id_session?: IntWithAggregatesFilter<"Session"> | number
    token?: StringWithAggregatesFilter<"Session"> | string
    date_connexion?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    date_deconnexion?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    is_active?: BoolWithAggregatesFilter<"Session"> | boolean
    date_creation?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    id_client?: IntWithAggregatesFilter<"Session"> | number
    id_admin?: IntNullableWithAggregatesFilter<"Session"> | number | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id_admin?: IntFilter<"Admin"> | number
    mail?: StringFilter<"Admin"> | string
    nom?: StringFilter<"Admin"> | string
    prenom?: StringFilter<"Admin"> | string
    mdp_hash?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    dernier_login?: DateTimeFilter<"Admin"> | Date | string
    sessions?: SessionListRelationFilter
    commandes?: CommandeListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id_admin?: SortOrder
    mail?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    dernier_login?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id_admin?: number
    mail?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    nom?: StringFilter<"Admin"> | string
    prenom?: StringFilter<"Admin"> | string
    mdp_hash?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    dernier_login?: DateTimeFilter<"Admin"> | Date | string
    sessions?: SessionListRelationFilter
    commandes?: CommandeListRelationFilter
  }, "id_admin" | "mail">

  export type AdminOrderByWithAggregationInput = {
    id_admin?: SortOrder
    mail?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    dernier_login?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id_admin?: IntWithAggregatesFilter<"Admin"> | number
    mail?: StringWithAggregatesFilter<"Admin"> | string
    nom?: StringWithAggregatesFilter<"Admin"> | string
    prenom?: StringWithAggregatesFilter<"Admin"> | string
    mdp_hash?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    dernier_login?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ProduitWhereInput = {
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    id_produit?: IntFilter<"Produit"> | number
    nom?: StringFilter<"Produit"> | string
    description?: StringFilter<"Produit"> | string
    prix?: DecimalFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"Produit"> | string
    date_creation?: DateTimeFilter<"Produit"> | Date | string
    is_active?: BoolFilter<"Produit"> | boolean
    id_commande?: IntNullableFilter<"Produit"> | number | null
    commande?: XOR<CommandeNullableScalarRelationFilter, CommandeWhereInput> | null
    produit_paniers?: Produit_PanierListRelationFilter
    produit_categories?: Produit_CategorieListRelationFilter
  }

  export type ProduitOrderByWithRelationInput = {
    id_produit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    id_commande?: SortOrderInput | SortOrder
    commande?: CommandeOrderByWithRelationInput
    produit_paniers?: Produit_PanierOrderByRelationAggregateInput
    produit_categories?: Produit_CategorieOrderByRelationAggregateInput
  }

  export type ProduitWhereUniqueInput = Prisma.AtLeast<{
    id_produit?: number
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    nom?: StringFilter<"Produit"> | string
    description?: StringFilter<"Produit"> | string
    prix?: DecimalFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"Produit"> | string
    date_creation?: DateTimeFilter<"Produit"> | Date | string
    is_active?: BoolFilter<"Produit"> | boolean
    id_commande?: IntNullableFilter<"Produit"> | number | null
    commande?: XOR<CommandeNullableScalarRelationFilter, CommandeWhereInput> | null
    produit_paniers?: Produit_PanierListRelationFilter
    produit_categories?: Produit_CategorieListRelationFilter
  }, "id_produit">

  export type ProduitOrderByWithAggregationInput = {
    id_produit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    id_commande?: SortOrderInput | SortOrder
    _count?: ProduitCountOrderByAggregateInput
    _avg?: ProduitAvgOrderByAggregateInput
    _max?: ProduitMaxOrderByAggregateInput
    _min?: ProduitMinOrderByAggregateInput
    _sum?: ProduitSumOrderByAggregateInput
  }

  export type ProduitScalarWhereWithAggregatesInput = {
    AND?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    OR?: ProduitScalarWhereWithAggregatesInput[]
    NOT?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    id_produit?: IntWithAggregatesFilter<"Produit"> | number
    nom?: StringWithAggregatesFilter<"Produit"> | string
    description?: StringWithAggregatesFilter<"Produit"> | string
    prix?: DecimalWithAggregatesFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    image?: StringWithAggregatesFilter<"Produit"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Produit"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Produit"> | boolean
    id_commande?: IntNullableWithAggregatesFilter<"Produit"> | number | null
  }

  export type Produit_PanierWhereInput = {
    AND?: Produit_PanierWhereInput | Produit_PanierWhereInput[]
    OR?: Produit_PanierWhereInput[]
    NOT?: Produit_PanierWhereInput | Produit_PanierWhereInput[]
    id_produit_panier?: IntFilter<"Produit_Panier"> | number
    id_panier?: IntFilter<"Produit_Panier"> | number
    id_produit?: IntFilter<"Produit_Panier"> | number
    panier?: XOR<PanierScalarRelationFilter, PanierWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }

  export type Produit_PanierOrderByWithRelationInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
    panier?: PanierOrderByWithRelationInput
    produit?: ProduitOrderByWithRelationInput
  }

  export type Produit_PanierWhereUniqueInput = Prisma.AtLeast<{
    id_produit_panier?: number
    AND?: Produit_PanierWhereInput | Produit_PanierWhereInput[]
    OR?: Produit_PanierWhereInput[]
    NOT?: Produit_PanierWhereInput | Produit_PanierWhereInput[]
    id_panier?: IntFilter<"Produit_Panier"> | number
    id_produit?: IntFilter<"Produit_Panier"> | number
    panier?: XOR<PanierScalarRelationFilter, PanierWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }, "id_produit_panier">

  export type Produit_PanierOrderByWithAggregationInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
    _count?: Produit_PanierCountOrderByAggregateInput
    _avg?: Produit_PanierAvgOrderByAggregateInput
    _max?: Produit_PanierMaxOrderByAggregateInput
    _min?: Produit_PanierMinOrderByAggregateInput
    _sum?: Produit_PanierSumOrderByAggregateInput
  }

  export type Produit_PanierScalarWhereWithAggregatesInput = {
    AND?: Produit_PanierScalarWhereWithAggregatesInput | Produit_PanierScalarWhereWithAggregatesInput[]
    OR?: Produit_PanierScalarWhereWithAggregatesInput[]
    NOT?: Produit_PanierScalarWhereWithAggregatesInput | Produit_PanierScalarWhereWithAggregatesInput[]
    id_produit_panier?: IntWithAggregatesFilter<"Produit_Panier"> | number
    id_panier?: IntWithAggregatesFilter<"Produit_Panier"> | number
    id_produit?: IntWithAggregatesFilter<"Produit_Panier"> | number
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id_categorie?: IntFilter<"Categorie"> | number
    nom?: StringFilter<"Categorie"> | string
    date_creation?: DateTimeFilter<"Categorie"> | Date | string
    produit_categories?: Produit_CategorieListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id_categorie?: SortOrder
    nom?: SortOrder
    date_creation?: SortOrder
    produit_categories?: Produit_CategorieOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id_categorie?: number
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    nom?: StringFilter<"Categorie"> | string
    date_creation?: DateTimeFilter<"Categorie"> | Date | string
    produit_categories?: Produit_CategorieListRelationFilter
  }, "id_categorie">

  export type CategorieOrderByWithAggregationInput = {
    id_categorie?: SortOrder
    nom?: SortOrder
    date_creation?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _avg?: CategorieAvgOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
    _sum?: CategorieSumOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id_categorie?: IntWithAggregatesFilter<"Categorie"> | number
    nom?: StringWithAggregatesFilter<"Categorie"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
  }

  export type Produit_CategorieWhereInput = {
    AND?: Produit_CategorieWhereInput | Produit_CategorieWhereInput[]
    OR?: Produit_CategorieWhereInput[]
    NOT?: Produit_CategorieWhereInput | Produit_CategorieWhereInput[]
    id_produit_categorie?: IntFilter<"Produit_Categorie"> | number
    id_categorie?: IntFilter<"Produit_Categorie"> | number
    id_produit?: IntFilter<"Produit_Categorie"> | number
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }

  export type Produit_CategorieOrderByWithRelationInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
    categorie?: CategorieOrderByWithRelationInput
    produit?: ProduitOrderByWithRelationInput
  }

  export type Produit_CategorieWhereUniqueInput = Prisma.AtLeast<{
    id_produit_categorie?: number
    AND?: Produit_CategorieWhereInput | Produit_CategorieWhereInput[]
    OR?: Produit_CategorieWhereInput[]
    NOT?: Produit_CategorieWhereInput | Produit_CategorieWhereInput[]
    id_categorie?: IntFilter<"Produit_Categorie"> | number
    id_produit?: IntFilter<"Produit_Categorie"> | number
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }, "id_produit_categorie">

  export type Produit_CategorieOrderByWithAggregationInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
    _count?: Produit_CategorieCountOrderByAggregateInput
    _avg?: Produit_CategorieAvgOrderByAggregateInput
    _max?: Produit_CategorieMaxOrderByAggregateInput
    _min?: Produit_CategorieMinOrderByAggregateInput
    _sum?: Produit_CategorieSumOrderByAggregateInput
  }

  export type Produit_CategorieScalarWhereWithAggregatesInput = {
    AND?: Produit_CategorieScalarWhereWithAggregatesInput | Produit_CategorieScalarWhereWithAggregatesInput[]
    OR?: Produit_CategorieScalarWhereWithAggregatesInput[]
    NOT?: Produit_CategorieScalarWhereWithAggregatesInput | Produit_CategorieScalarWhereWithAggregatesInput[]
    id_produit_categorie?: IntWithAggregatesFilter<"Produit_Categorie"> | number
    id_categorie?: IntWithAggregatesFilter<"Produit_Categorie"> | number
    id_produit?: IntWithAggregatesFilter<"Produit_Categorie"> | number
  }

  export type PanierWhereInput = {
    AND?: PanierWhereInput | PanierWhereInput[]
    OR?: PanierWhereInput[]
    NOT?: PanierWhereInput | PanierWhereInput[]
    id_panier?: IntFilter<"Panier"> | number
    date_creation?: DateTimeFilter<"Panier"> | Date | string
    id_client?: IntFilter<"Panier"> | number
    produit_paniers?: Produit_PanierListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type PanierOrderByWithRelationInput = {
    id_panier?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    produit_paniers?: Produit_PanierOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type PanierWhereUniqueInput = Prisma.AtLeast<{
    id_panier?: number
    AND?: PanierWhereInput | PanierWhereInput[]
    OR?: PanierWhereInput[]
    NOT?: PanierWhereInput | PanierWhereInput[]
    date_creation?: DateTimeFilter<"Panier"> | Date | string
    id_client?: IntFilter<"Panier"> | number
    produit_paniers?: Produit_PanierListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id_panier">

  export type PanierOrderByWithAggregationInput = {
    id_panier?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    _count?: PanierCountOrderByAggregateInput
    _avg?: PanierAvgOrderByAggregateInput
    _max?: PanierMaxOrderByAggregateInput
    _min?: PanierMinOrderByAggregateInput
    _sum?: PanierSumOrderByAggregateInput
  }

  export type PanierScalarWhereWithAggregatesInput = {
    AND?: PanierScalarWhereWithAggregatesInput | PanierScalarWhereWithAggregatesInput[]
    OR?: PanierScalarWhereWithAggregatesInput[]
    NOT?: PanierScalarWhereWithAggregatesInput | PanierScalarWhereWithAggregatesInput[]
    id_panier?: IntWithAggregatesFilter<"Panier"> | number
    date_creation?: DateTimeWithAggregatesFilter<"Panier"> | Date | string
    id_client?: IntWithAggregatesFilter<"Panier"> | number
  }

  export type CommandeWhereInput = {
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    id_commande?: IntFilter<"Commande"> | number
    date_commande?: DateTimeFilter<"Commande"> | Date | string
    statut?: StringFilter<"Commande"> | string
    total?: DecimalFilter<"Commande"> | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFilter<"Commande"> | string
    adresse_livraison?: StringFilter<"Commande"> | string
    cp_livraison?: StringFilter<"Commande"> | string
    ville_livraison?: StringFilter<"Commande"> | string
    id_client?: IntFilter<"Commande"> | number
    id_admin?: IntNullableFilter<"Commande"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    produits?: ProduitListRelationFilter
  }

  export type CommandeOrderByWithRelationInput = {
    id_commande?: SortOrder
    date_commande?: SortOrder
    statut?: SortOrder
    total?: SortOrder
    moyen_paiement?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    produits?: ProduitOrderByRelationAggregateInput
  }

  export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id_commande?: number
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    date_commande?: DateTimeFilter<"Commande"> | Date | string
    statut?: StringFilter<"Commande"> | string
    total?: DecimalFilter<"Commande"> | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFilter<"Commande"> | string
    adresse_livraison?: StringFilter<"Commande"> | string
    cp_livraison?: StringFilter<"Commande"> | string
    ville_livraison?: StringFilter<"Commande"> | string
    id_client?: IntFilter<"Commande"> | number
    id_admin?: IntNullableFilter<"Commande"> | number | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    produits?: ProduitListRelationFilter
  }, "id_commande">

  export type CommandeOrderByWithAggregationInput = {
    id_commande?: SortOrder
    date_commande?: SortOrder
    statut?: SortOrder
    total?: SortOrder
    moyen_paiement?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrderInput | SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _avg?: CommandeAvgOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
    _sum?: CommandeSumOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    OR?: CommandeScalarWhereWithAggregatesInput[]
    NOT?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    id_commande?: IntWithAggregatesFilter<"Commande"> | number
    date_commande?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    statut?: StringWithAggregatesFilter<"Commande"> | string
    total?: DecimalWithAggregatesFilter<"Commande"> | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringWithAggregatesFilter<"Commande"> | string
    adresse_livraison?: StringWithAggregatesFilter<"Commande"> | string
    cp_livraison?: StringWithAggregatesFilter<"Commande"> | string
    ville_livraison?: StringWithAggregatesFilter<"Commande"> | string
    id_client?: IntWithAggregatesFilter<"Commande"> | number
    id_admin?: IntNullableWithAggregatesFilter<"Commande"> | number | null
  }

  export type ClientCreateInput = {
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutClientInput
    paniers?: PanierCreateNestedManyWithoutClientInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id_client?: number
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutClientInput
    paniers?: PanierUncheckedCreateNestedManyWithoutClientInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutClientNestedInput
    paniers?: PanierUpdateManyWithoutClientNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutClientNestedInput
    paniers?: PanierUncheckedUpdateManyWithoutClientNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id_client?: number
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    client: ClientCreateNestedOneWithoutSessionsInput
    admin?: AdminCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id_session?: number
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    id_client: number
    id_admin?: number | null
  }

  export type SessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSessionsNestedInput
    admin?: AdminUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id_session?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateManyInput = {
    id_session?: number
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    id_client: number
    id_admin?: number | null
  }

  export type SessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id_session?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminCreateInput = {
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
    sessions?: SessionCreateNestedManyWithoutAdminInput
    commandes?: CommandeCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id_admin?: number
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAdminInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutAdminNestedInput
    commandes?: CommandeUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAdminNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id_admin?: number
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitCreateInput = {
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    commande?: CommandeCreateNestedOneWithoutProduitsInput
    produit_paniers?: Produit_PanierCreateNestedManyWithoutProduitInput
    produit_categories?: Produit_CategorieCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateInput = {
    id_produit?: number
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    id_commande?: number | null
    produit_paniers?: Produit_PanierUncheckedCreateNestedManyWithoutProduitInput
    produit_categories?: Produit_CategorieUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    commande?: CommandeUpdateOneWithoutProduitsNestedInput
    produit_paniers?: Produit_PanierUpdateManyWithoutProduitNestedInput
    produit_categories?: Produit_CategorieUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateInput = {
    id_produit?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    id_commande?: NullableIntFieldUpdateOperationsInput | number | null
    produit_paniers?: Produit_PanierUncheckedUpdateManyWithoutProduitNestedInput
    produit_categories?: Produit_CategorieUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitCreateManyInput = {
    id_produit?: number
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    id_commande?: number | null
  }

  export type ProduitUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProduitUncheckedUpdateManyInput = {
    id_produit?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    id_commande?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Produit_PanierCreateInput = {
    panier: PanierCreateNestedOneWithoutProduit_paniersInput
    produit: ProduitCreateNestedOneWithoutProduit_paniersInput
  }

  export type Produit_PanierUncheckedCreateInput = {
    id_produit_panier?: number
    id_panier: number
    id_produit: number
  }

  export type Produit_PanierUpdateInput = {
    panier?: PanierUpdateOneRequiredWithoutProduit_paniersNestedInput
    produit?: ProduitUpdateOneRequiredWithoutProduit_paniersNestedInput
  }

  export type Produit_PanierUncheckedUpdateInput = {
    id_produit_panier?: IntFieldUpdateOperationsInput | number
    id_panier?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_PanierCreateManyInput = {
    id_produit_panier?: number
    id_panier: number
    id_produit: number
  }

  export type Produit_PanierUpdateManyMutationInput = {

  }

  export type Produit_PanierUncheckedUpdateManyInput = {
    id_produit_panier?: IntFieldUpdateOperationsInput | number
    id_panier?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type CategorieCreateInput = {
    nom: string
    date_creation?: Date | string
    produit_categories?: Produit_CategorieCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id_categorie?: number
    nom: string
    date_creation?: Date | string
    produit_categories?: Produit_CategorieUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    produit_categories?: Produit_CategorieUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    produit_categories?: Produit_CategorieUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id_categorie?: number
    nom: string
    date_creation?: Date | string
  }

  export type CategorieUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Produit_CategorieCreateInput = {
    categorie: CategorieCreateNestedOneWithoutProduit_categoriesInput
    produit: ProduitCreateNestedOneWithoutProduit_categoriesInput
  }

  export type Produit_CategorieUncheckedCreateInput = {
    id_produit_categorie?: number
    id_categorie: number
    id_produit: number
  }

  export type Produit_CategorieUpdateInput = {
    categorie?: CategorieUpdateOneRequiredWithoutProduit_categoriesNestedInput
    produit?: ProduitUpdateOneRequiredWithoutProduit_categoriesNestedInput
  }

  export type Produit_CategorieUncheckedUpdateInput = {
    id_produit_categorie?: IntFieldUpdateOperationsInput | number
    id_categorie?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_CategorieCreateManyInput = {
    id_produit_categorie?: number
    id_categorie: number
    id_produit: number
  }

  export type Produit_CategorieUpdateManyMutationInput = {

  }

  export type Produit_CategorieUncheckedUpdateManyInput = {
    id_produit_categorie?: IntFieldUpdateOperationsInput | number
    id_categorie?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type PanierCreateInput = {
    date_creation?: Date | string
    produit_paniers?: Produit_PanierCreateNestedManyWithoutPanierInput
    client: ClientCreateNestedOneWithoutPaniersInput
  }

  export type PanierUncheckedCreateInput = {
    id_panier?: number
    date_creation?: Date | string
    id_client: number
    produit_paniers?: Produit_PanierUncheckedCreateNestedManyWithoutPanierInput
  }

  export type PanierUpdateInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    produit_paniers?: Produit_PanierUpdateManyWithoutPanierNestedInput
    client?: ClientUpdateOneRequiredWithoutPaniersNestedInput
  }

  export type PanierUncheckedUpdateInput = {
    id_panier?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
    produit_paniers?: Produit_PanierUncheckedUpdateManyWithoutPanierNestedInput
  }

  export type PanierCreateManyInput = {
    id_panier?: number
    date_creation?: Date | string
    id_client: number
  }

  export type PanierUpdateManyMutationInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanierUncheckedUpdateManyInput = {
    id_panier?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type CommandeCreateInput = {
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    client: ClientCreateNestedOneWithoutCommandesInput
    admin?: AdminCreateNestedOneWithoutCommandesInput
    produits?: ProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_client: number
    id_admin?: number | null
    produits?: ProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUpdateInput = {
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    admin?: AdminUpdateOneWithoutCommandesNestedInput
    produits?: ProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    produits?: ProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeCreateManyInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_client: number
    id_admin?: number | null
  }

  export type CommandeUpdateManyMutationInput = {
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeUncheckedUpdateManyInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PanierListRelationFilter = {
    every?: PanierWhereInput
    some?: PanierWhereInput
    none?: PanierWhereInput
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id_client?: SortOrder
    mail?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    telephone?: SortOrder
    date_creation?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id_client?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id_client?: SortOrder
    mail?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    telephone?: SortOrder
    date_creation?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id_client?: SortOrder
    mail?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    telephone?: SortOrder
    date_creation?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id_client?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id_session?: SortOrder
    token?: SortOrder
    date_connexion?: SortOrder
    date_deconnexion?: SortOrder
    is_active?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id_session?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id_session?: SortOrder
    token?: SortOrder
    date_connexion?: SortOrder
    date_deconnexion?: SortOrder
    is_active?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id_session?: SortOrder
    token?: SortOrder
    date_connexion?: SortOrder
    date_deconnexion?: SortOrder
    is_active?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id_session?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AdminCountOrderByAggregateInput = {
    id_admin?: SortOrder
    mail?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    dernier_login?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id_admin?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id_admin?: SortOrder
    mail?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    dernier_login?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id_admin?: SortOrder
    mail?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mdp_hash?: SortOrder
    role?: SortOrder
    dernier_login?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id_admin?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CommandeNullableScalarRelationFilter = {
    is?: CommandeWhereInput | null
    isNot?: CommandeWhereInput | null
  }

  export type Produit_PanierListRelationFilter = {
    every?: Produit_PanierWhereInput
    some?: Produit_PanierWhereInput
    none?: Produit_PanierWhereInput
  }

  export type Produit_CategorieListRelationFilter = {
    every?: Produit_CategorieWhereInput
    some?: Produit_CategorieWhereInput
    none?: Produit_CategorieWhereInput
  }

  export type Produit_PanierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Produit_CategorieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduitCountOrderByAggregateInput = {
    id_produit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    id_commande?: SortOrder
  }

  export type ProduitAvgOrderByAggregateInput = {
    id_produit?: SortOrder
    prix?: SortOrder
    id_commande?: SortOrder
  }

  export type ProduitMaxOrderByAggregateInput = {
    id_produit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    id_commande?: SortOrder
  }

  export type ProduitMinOrderByAggregateInput = {
    id_produit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    id_commande?: SortOrder
  }

  export type ProduitSumOrderByAggregateInput = {
    id_produit?: SortOrder
    prix?: SortOrder
    id_commande?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PanierScalarRelationFilter = {
    is?: PanierWhereInput
    isNot?: PanierWhereInput
  }

  export type ProduitScalarRelationFilter = {
    is?: ProduitWhereInput
    isNot?: ProduitWhereInput
  }

  export type Produit_PanierCountOrderByAggregateInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_PanierAvgOrderByAggregateInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_PanierMaxOrderByAggregateInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_PanierMinOrderByAggregateInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_PanierSumOrderByAggregateInput = {
    id_produit_panier?: SortOrder
    id_panier?: SortOrder
    id_produit?: SortOrder
  }

  export type CategorieCountOrderByAggregateInput = {
    id_categorie?: SortOrder
    nom?: SortOrder
    date_creation?: SortOrder
  }

  export type CategorieAvgOrderByAggregateInput = {
    id_categorie?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id_categorie?: SortOrder
    nom?: SortOrder
    date_creation?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id_categorie?: SortOrder
    nom?: SortOrder
    date_creation?: SortOrder
  }

  export type CategorieSumOrderByAggregateInput = {
    id_categorie?: SortOrder
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type Produit_CategorieCountOrderByAggregateInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_CategorieAvgOrderByAggregateInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_CategorieMaxOrderByAggregateInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_CategorieMinOrderByAggregateInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
  }

  export type Produit_CategorieSumOrderByAggregateInput = {
    id_produit_categorie?: SortOrder
    id_categorie?: SortOrder
    id_produit?: SortOrder
  }

  export type PanierCountOrderByAggregateInput = {
    id_panier?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
  }

  export type PanierAvgOrderByAggregateInput = {
    id_panier?: SortOrder
    id_client?: SortOrder
  }

  export type PanierMaxOrderByAggregateInput = {
    id_panier?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
  }

  export type PanierMinOrderByAggregateInput = {
    id_panier?: SortOrder
    date_creation?: SortOrder
    id_client?: SortOrder
  }

  export type PanierSumOrderByAggregateInput = {
    id_panier?: SortOrder
    id_client?: SortOrder
  }

  export type ProduitListRelationFilter = {
    every?: ProduitWhereInput
    some?: ProduitWhereInput
    none?: ProduitWhereInput
  }

  export type ProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandeCountOrderByAggregateInput = {
    id_commande?: SortOrder
    date_commande?: SortOrder
    statut?: SortOrder
    total?: SortOrder
    moyen_paiement?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type CommandeAvgOrderByAggregateInput = {
    id_commande?: SortOrder
    total?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    id_commande?: SortOrder
    date_commande?: SortOrder
    statut?: SortOrder
    total?: SortOrder
    moyen_paiement?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    id_commande?: SortOrder
    date_commande?: SortOrder
    statut?: SortOrder
    total?: SortOrder
    moyen_paiement?: SortOrder
    adresse_livraison?: SortOrder
    cp_livraison?: SortOrder
    ville_livraison?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type CommandeSumOrderByAggregateInput = {
    id_commande?: SortOrder
    total?: SortOrder
    id_client?: SortOrder
    id_admin?: SortOrder
  }

  export type SessionCreateNestedManyWithoutClientInput = {
    create?: XOR<SessionCreateWithoutClientInput, SessionUncheckedCreateWithoutClientInput> | SessionCreateWithoutClientInput[] | SessionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClientInput | SessionCreateOrConnectWithoutClientInput[]
    createMany?: SessionCreateManyClientInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PanierCreateNestedManyWithoutClientInput = {
    create?: XOR<PanierCreateWithoutClientInput, PanierUncheckedCreateWithoutClientInput> | PanierCreateWithoutClientInput[] | PanierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PanierCreateOrConnectWithoutClientInput | PanierCreateOrConnectWithoutClientInput[]
    createMany?: PanierCreateManyClientInputEnvelope
    connect?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SessionCreateWithoutClientInput, SessionUncheckedCreateWithoutClientInput> | SessionCreateWithoutClientInput[] | SessionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClientInput | SessionCreateOrConnectWithoutClientInput[]
    createMany?: SessionCreateManyClientInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PanierUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PanierCreateWithoutClientInput, PanierUncheckedCreateWithoutClientInput> | PanierCreateWithoutClientInput[] | PanierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PanierCreateOrConnectWithoutClientInput | PanierCreateOrConnectWithoutClientInput[]
    createMany?: PanierCreateManyClientInputEnvelope
    connect?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutClientNestedInput = {
    create?: XOR<SessionCreateWithoutClientInput, SessionUncheckedCreateWithoutClientInput> | SessionCreateWithoutClientInput[] | SessionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClientInput | SessionCreateOrConnectWithoutClientInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutClientInput | SessionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SessionCreateManyClientInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutClientInput | SessionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutClientInput | SessionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PanierUpdateManyWithoutClientNestedInput = {
    create?: XOR<PanierCreateWithoutClientInput, PanierUncheckedCreateWithoutClientInput> | PanierCreateWithoutClientInput[] | PanierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PanierCreateOrConnectWithoutClientInput | PanierCreateOrConnectWithoutClientInput[]
    upsert?: PanierUpsertWithWhereUniqueWithoutClientInput | PanierUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PanierCreateManyClientInputEnvelope
    set?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    disconnect?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    delete?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    connect?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    update?: PanierUpdateWithWhereUniqueWithoutClientInput | PanierUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PanierUpdateManyWithWhereWithoutClientInput | PanierUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PanierScalarWhereInput | PanierScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SessionCreateWithoutClientInput, SessionUncheckedCreateWithoutClientInput> | SessionCreateWithoutClientInput[] | SessionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClientInput | SessionCreateOrConnectWithoutClientInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutClientInput | SessionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SessionCreateManyClientInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutClientInput | SessionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutClientInput | SessionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PanierUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PanierCreateWithoutClientInput, PanierUncheckedCreateWithoutClientInput> | PanierCreateWithoutClientInput[] | PanierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PanierCreateOrConnectWithoutClientInput | PanierCreateOrConnectWithoutClientInput[]
    upsert?: PanierUpsertWithWhereUniqueWithoutClientInput | PanierUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PanierCreateManyClientInputEnvelope
    set?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    disconnect?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    delete?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    connect?: PanierWhereUniqueInput | PanierWhereUniqueInput[]
    update?: PanierUpdateWithWhereUniqueWithoutClientInput | PanierUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PanierUpdateManyWithWhereWithoutClientInput | PanierUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PanierScalarWhereInput | PanierScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSessionsInput
    connect?: ClientWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AdminCreateWithoutSessionsInput, AdminUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSessionsInput
    connect?: AdminWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClientUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSessionsInput
    upsert?: ClientUpsertWithoutSessionsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSessionsInput, ClientUpdateWithoutSessionsInput>, ClientUncheckedUpdateWithoutSessionsInput>
  }

  export type AdminUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<AdminCreateWithoutSessionsInput, AdminUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSessionsInput
    upsert?: AdminUpsertWithoutSessionsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutSessionsInput, AdminUpdateWithoutSessionsInput>, AdminUncheckedUpdateWithoutSessionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionCreateNestedManyWithoutAdminInput = {
    create?: XOR<SessionCreateWithoutAdminInput, SessionUncheckedCreateWithoutAdminInput> | SessionCreateWithoutAdminInput[] | SessionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminInput | SessionCreateOrConnectWithoutAdminInput[]
    createMany?: SessionCreateManyAdminInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutAdminInput = {
    create?: XOR<CommandeCreateWithoutAdminInput, CommandeUncheckedCreateWithoutAdminInput> | CommandeCreateWithoutAdminInput[] | CommandeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutAdminInput | CommandeCreateOrConnectWithoutAdminInput[]
    createMany?: CommandeCreateManyAdminInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<SessionCreateWithoutAdminInput, SessionUncheckedCreateWithoutAdminInput> | SessionCreateWithoutAdminInput[] | SessionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminInput | SessionCreateOrConnectWithoutAdminInput[]
    createMany?: SessionCreateManyAdminInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<CommandeCreateWithoutAdminInput, CommandeUncheckedCreateWithoutAdminInput> | CommandeCreateWithoutAdminInput[] | CommandeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutAdminInput | CommandeCreateOrConnectWithoutAdminInput[]
    createMany?: CommandeCreateManyAdminInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SessionCreateWithoutAdminInput, SessionUncheckedCreateWithoutAdminInput> | SessionCreateWithoutAdminInput[] | SessionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminInput | SessionCreateOrConnectWithoutAdminInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutAdminInput | SessionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SessionCreateManyAdminInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutAdminInput | SessionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutAdminInput | SessionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CommandeCreateWithoutAdminInput, CommandeUncheckedCreateWithoutAdminInput> | CommandeCreateWithoutAdminInput[] | CommandeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutAdminInput | CommandeCreateOrConnectWithoutAdminInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutAdminInput | CommandeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CommandeCreateManyAdminInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutAdminInput | CommandeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutAdminInput | CommandeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SessionCreateWithoutAdminInput, SessionUncheckedCreateWithoutAdminInput> | SessionCreateWithoutAdminInput[] | SessionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAdminInput | SessionCreateOrConnectWithoutAdminInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutAdminInput | SessionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SessionCreateManyAdminInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutAdminInput | SessionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutAdminInput | SessionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CommandeCreateWithoutAdminInput, CommandeUncheckedCreateWithoutAdminInput> | CommandeCreateWithoutAdminInput[] | CommandeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutAdminInput | CommandeCreateOrConnectWithoutAdminInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutAdminInput | CommandeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CommandeCreateManyAdminInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutAdminInput | CommandeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutAdminInput | CommandeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type CommandeCreateNestedOneWithoutProduitsInput = {
    create?: XOR<CommandeCreateWithoutProduitsInput, CommandeUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutProduitsInput
    connect?: CommandeWhereUniqueInput
  }

  export type Produit_PanierCreateNestedManyWithoutProduitInput = {
    create?: XOR<Produit_PanierCreateWithoutProduitInput, Produit_PanierUncheckedCreateWithoutProduitInput> | Produit_PanierCreateWithoutProduitInput[] | Produit_PanierUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutProduitInput | Produit_PanierCreateOrConnectWithoutProduitInput[]
    createMany?: Produit_PanierCreateManyProduitInputEnvelope
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
  }

  export type Produit_CategorieCreateNestedManyWithoutProduitInput = {
    create?: XOR<Produit_CategorieCreateWithoutProduitInput, Produit_CategorieUncheckedCreateWithoutProduitInput> | Produit_CategorieCreateWithoutProduitInput[] | Produit_CategorieUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutProduitInput | Produit_CategorieCreateOrConnectWithoutProduitInput[]
    createMany?: Produit_CategorieCreateManyProduitInputEnvelope
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
  }

  export type Produit_PanierUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<Produit_PanierCreateWithoutProduitInput, Produit_PanierUncheckedCreateWithoutProduitInput> | Produit_PanierCreateWithoutProduitInput[] | Produit_PanierUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutProduitInput | Produit_PanierCreateOrConnectWithoutProduitInput[]
    createMany?: Produit_PanierCreateManyProduitInputEnvelope
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
  }

  export type Produit_CategorieUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<Produit_CategorieCreateWithoutProduitInput, Produit_CategorieUncheckedCreateWithoutProduitInput> | Produit_CategorieCreateWithoutProduitInput[] | Produit_CategorieUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutProduitInput | Produit_CategorieCreateOrConnectWithoutProduitInput[]
    createMany?: Produit_CategorieCreateManyProduitInputEnvelope
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CommandeUpdateOneWithoutProduitsNestedInput = {
    create?: XOR<CommandeCreateWithoutProduitsInput, CommandeUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutProduitsInput
    upsert?: CommandeUpsertWithoutProduitsInput
    disconnect?: CommandeWhereInput | boolean
    delete?: CommandeWhereInput | boolean
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutProduitsInput, CommandeUpdateWithoutProduitsInput>, CommandeUncheckedUpdateWithoutProduitsInput>
  }

  export type Produit_PanierUpdateManyWithoutProduitNestedInput = {
    create?: XOR<Produit_PanierCreateWithoutProduitInput, Produit_PanierUncheckedCreateWithoutProduitInput> | Produit_PanierCreateWithoutProduitInput[] | Produit_PanierUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutProduitInput | Produit_PanierCreateOrConnectWithoutProduitInput[]
    upsert?: Produit_PanierUpsertWithWhereUniqueWithoutProduitInput | Produit_PanierUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: Produit_PanierCreateManyProduitInputEnvelope
    set?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    disconnect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    delete?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    update?: Produit_PanierUpdateWithWhereUniqueWithoutProduitInput | Produit_PanierUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: Produit_PanierUpdateManyWithWhereWithoutProduitInput | Produit_PanierUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: Produit_PanierScalarWhereInput | Produit_PanierScalarWhereInput[]
  }

  export type Produit_CategorieUpdateManyWithoutProduitNestedInput = {
    create?: XOR<Produit_CategorieCreateWithoutProduitInput, Produit_CategorieUncheckedCreateWithoutProduitInput> | Produit_CategorieCreateWithoutProduitInput[] | Produit_CategorieUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutProduitInput | Produit_CategorieCreateOrConnectWithoutProduitInput[]
    upsert?: Produit_CategorieUpsertWithWhereUniqueWithoutProduitInput | Produit_CategorieUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: Produit_CategorieCreateManyProduitInputEnvelope
    set?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    disconnect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    delete?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    update?: Produit_CategorieUpdateWithWhereUniqueWithoutProduitInput | Produit_CategorieUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: Produit_CategorieUpdateManyWithWhereWithoutProduitInput | Produit_CategorieUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: Produit_CategorieScalarWhereInput | Produit_CategorieScalarWhereInput[]
  }

  export type Produit_PanierUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<Produit_PanierCreateWithoutProduitInput, Produit_PanierUncheckedCreateWithoutProduitInput> | Produit_PanierCreateWithoutProduitInput[] | Produit_PanierUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutProduitInput | Produit_PanierCreateOrConnectWithoutProduitInput[]
    upsert?: Produit_PanierUpsertWithWhereUniqueWithoutProduitInput | Produit_PanierUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: Produit_PanierCreateManyProduitInputEnvelope
    set?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    disconnect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    delete?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    update?: Produit_PanierUpdateWithWhereUniqueWithoutProduitInput | Produit_PanierUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: Produit_PanierUpdateManyWithWhereWithoutProduitInput | Produit_PanierUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: Produit_PanierScalarWhereInput | Produit_PanierScalarWhereInput[]
  }

  export type Produit_CategorieUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<Produit_CategorieCreateWithoutProduitInput, Produit_CategorieUncheckedCreateWithoutProduitInput> | Produit_CategorieCreateWithoutProduitInput[] | Produit_CategorieUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutProduitInput | Produit_CategorieCreateOrConnectWithoutProduitInput[]
    upsert?: Produit_CategorieUpsertWithWhereUniqueWithoutProduitInput | Produit_CategorieUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: Produit_CategorieCreateManyProduitInputEnvelope
    set?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    disconnect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    delete?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    update?: Produit_CategorieUpdateWithWhereUniqueWithoutProduitInput | Produit_CategorieUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: Produit_CategorieUpdateManyWithWhereWithoutProduitInput | Produit_CategorieUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: Produit_CategorieScalarWhereInput | Produit_CategorieScalarWhereInput[]
  }

  export type PanierCreateNestedOneWithoutProduit_paniersInput = {
    create?: XOR<PanierCreateWithoutProduit_paniersInput, PanierUncheckedCreateWithoutProduit_paniersInput>
    connectOrCreate?: PanierCreateOrConnectWithoutProduit_paniersInput
    connect?: PanierWhereUniqueInput
  }

  export type ProduitCreateNestedOneWithoutProduit_paniersInput = {
    create?: XOR<ProduitCreateWithoutProduit_paniersInput, ProduitUncheckedCreateWithoutProduit_paniersInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutProduit_paniersInput
    connect?: ProduitWhereUniqueInput
  }

  export type PanierUpdateOneRequiredWithoutProduit_paniersNestedInput = {
    create?: XOR<PanierCreateWithoutProduit_paniersInput, PanierUncheckedCreateWithoutProduit_paniersInput>
    connectOrCreate?: PanierCreateOrConnectWithoutProduit_paniersInput
    upsert?: PanierUpsertWithoutProduit_paniersInput
    connect?: PanierWhereUniqueInput
    update?: XOR<XOR<PanierUpdateToOneWithWhereWithoutProduit_paniersInput, PanierUpdateWithoutProduit_paniersInput>, PanierUncheckedUpdateWithoutProduit_paniersInput>
  }

  export type ProduitUpdateOneRequiredWithoutProduit_paniersNestedInput = {
    create?: XOR<ProduitCreateWithoutProduit_paniersInput, ProduitUncheckedCreateWithoutProduit_paniersInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutProduit_paniersInput
    upsert?: ProduitUpsertWithoutProduit_paniersInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutProduit_paniersInput, ProduitUpdateWithoutProduit_paniersInput>, ProduitUncheckedUpdateWithoutProduit_paniersInput>
  }

  export type Produit_CategorieCreateNestedManyWithoutCategorieInput = {
    create?: XOR<Produit_CategorieCreateWithoutCategorieInput, Produit_CategorieUncheckedCreateWithoutCategorieInput> | Produit_CategorieCreateWithoutCategorieInput[] | Produit_CategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutCategorieInput | Produit_CategorieCreateOrConnectWithoutCategorieInput[]
    createMany?: Produit_CategorieCreateManyCategorieInputEnvelope
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
  }

  export type Produit_CategorieUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<Produit_CategorieCreateWithoutCategorieInput, Produit_CategorieUncheckedCreateWithoutCategorieInput> | Produit_CategorieCreateWithoutCategorieInput[] | Produit_CategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutCategorieInput | Produit_CategorieCreateOrConnectWithoutCategorieInput[]
    createMany?: Produit_CategorieCreateManyCategorieInputEnvelope
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
  }

  export type Produit_CategorieUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<Produit_CategorieCreateWithoutCategorieInput, Produit_CategorieUncheckedCreateWithoutCategorieInput> | Produit_CategorieCreateWithoutCategorieInput[] | Produit_CategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutCategorieInput | Produit_CategorieCreateOrConnectWithoutCategorieInput[]
    upsert?: Produit_CategorieUpsertWithWhereUniqueWithoutCategorieInput | Produit_CategorieUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: Produit_CategorieCreateManyCategorieInputEnvelope
    set?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    disconnect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    delete?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    update?: Produit_CategorieUpdateWithWhereUniqueWithoutCategorieInput | Produit_CategorieUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: Produit_CategorieUpdateManyWithWhereWithoutCategorieInput | Produit_CategorieUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: Produit_CategorieScalarWhereInput | Produit_CategorieScalarWhereInput[]
  }

  export type Produit_CategorieUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<Produit_CategorieCreateWithoutCategorieInput, Produit_CategorieUncheckedCreateWithoutCategorieInput> | Produit_CategorieCreateWithoutCategorieInput[] | Produit_CategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: Produit_CategorieCreateOrConnectWithoutCategorieInput | Produit_CategorieCreateOrConnectWithoutCategorieInput[]
    upsert?: Produit_CategorieUpsertWithWhereUniqueWithoutCategorieInput | Produit_CategorieUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: Produit_CategorieCreateManyCategorieInputEnvelope
    set?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    disconnect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    delete?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    connect?: Produit_CategorieWhereUniqueInput | Produit_CategorieWhereUniqueInput[]
    update?: Produit_CategorieUpdateWithWhereUniqueWithoutCategorieInput | Produit_CategorieUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: Produit_CategorieUpdateManyWithWhereWithoutCategorieInput | Produit_CategorieUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: Produit_CategorieScalarWhereInput | Produit_CategorieScalarWhereInput[]
  }

  export type CategorieCreateNestedOneWithoutProduit_categoriesInput = {
    create?: XOR<CategorieCreateWithoutProduit_categoriesInput, CategorieUncheckedCreateWithoutProduit_categoriesInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProduit_categoriesInput
    connect?: CategorieWhereUniqueInput
  }

  export type ProduitCreateNestedOneWithoutProduit_categoriesInput = {
    create?: XOR<ProduitCreateWithoutProduit_categoriesInput, ProduitUncheckedCreateWithoutProduit_categoriesInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutProduit_categoriesInput
    connect?: ProduitWhereUniqueInput
  }

  export type CategorieUpdateOneRequiredWithoutProduit_categoriesNestedInput = {
    create?: XOR<CategorieCreateWithoutProduit_categoriesInput, CategorieUncheckedCreateWithoutProduit_categoriesInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProduit_categoriesInput
    upsert?: CategorieUpsertWithoutProduit_categoriesInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutProduit_categoriesInput, CategorieUpdateWithoutProduit_categoriesInput>, CategorieUncheckedUpdateWithoutProduit_categoriesInput>
  }

  export type ProduitUpdateOneRequiredWithoutProduit_categoriesNestedInput = {
    create?: XOR<ProduitCreateWithoutProduit_categoriesInput, ProduitUncheckedCreateWithoutProduit_categoriesInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutProduit_categoriesInput
    upsert?: ProduitUpsertWithoutProduit_categoriesInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutProduit_categoriesInput, ProduitUpdateWithoutProduit_categoriesInput>, ProduitUncheckedUpdateWithoutProduit_categoriesInput>
  }

  export type Produit_PanierCreateNestedManyWithoutPanierInput = {
    create?: XOR<Produit_PanierCreateWithoutPanierInput, Produit_PanierUncheckedCreateWithoutPanierInput> | Produit_PanierCreateWithoutPanierInput[] | Produit_PanierUncheckedCreateWithoutPanierInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutPanierInput | Produit_PanierCreateOrConnectWithoutPanierInput[]
    createMany?: Produit_PanierCreateManyPanierInputEnvelope
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutPaniersInput = {
    create?: XOR<ClientCreateWithoutPaniersInput, ClientUncheckedCreateWithoutPaniersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPaniersInput
    connect?: ClientWhereUniqueInput
  }

  export type Produit_PanierUncheckedCreateNestedManyWithoutPanierInput = {
    create?: XOR<Produit_PanierCreateWithoutPanierInput, Produit_PanierUncheckedCreateWithoutPanierInput> | Produit_PanierCreateWithoutPanierInput[] | Produit_PanierUncheckedCreateWithoutPanierInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutPanierInput | Produit_PanierCreateOrConnectWithoutPanierInput[]
    createMany?: Produit_PanierCreateManyPanierInputEnvelope
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
  }

  export type Produit_PanierUpdateManyWithoutPanierNestedInput = {
    create?: XOR<Produit_PanierCreateWithoutPanierInput, Produit_PanierUncheckedCreateWithoutPanierInput> | Produit_PanierCreateWithoutPanierInput[] | Produit_PanierUncheckedCreateWithoutPanierInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutPanierInput | Produit_PanierCreateOrConnectWithoutPanierInput[]
    upsert?: Produit_PanierUpsertWithWhereUniqueWithoutPanierInput | Produit_PanierUpsertWithWhereUniqueWithoutPanierInput[]
    createMany?: Produit_PanierCreateManyPanierInputEnvelope
    set?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    disconnect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    delete?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    update?: Produit_PanierUpdateWithWhereUniqueWithoutPanierInput | Produit_PanierUpdateWithWhereUniqueWithoutPanierInput[]
    updateMany?: Produit_PanierUpdateManyWithWhereWithoutPanierInput | Produit_PanierUpdateManyWithWhereWithoutPanierInput[]
    deleteMany?: Produit_PanierScalarWhereInput | Produit_PanierScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutPaniersNestedInput = {
    create?: XOR<ClientCreateWithoutPaniersInput, ClientUncheckedCreateWithoutPaniersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPaniersInput
    upsert?: ClientUpsertWithoutPaniersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPaniersInput, ClientUpdateWithoutPaniersInput>, ClientUncheckedUpdateWithoutPaniersInput>
  }

  export type Produit_PanierUncheckedUpdateManyWithoutPanierNestedInput = {
    create?: XOR<Produit_PanierCreateWithoutPanierInput, Produit_PanierUncheckedCreateWithoutPanierInput> | Produit_PanierCreateWithoutPanierInput[] | Produit_PanierUncheckedCreateWithoutPanierInput[]
    connectOrCreate?: Produit_PanierCreateOrConnectWithoutPanierInput | Produit_PanierCreateOrConnectWithoutPanierInput[]
    upsert?: Produit_PanierUpsertWithWhereUniqueWithoutPanierInput | Produit_PanierUpsertWithWhereUniqueWithoutPanierInput[]
    createMany?: Produit_PanierCreateManyPanierInputEnvelope
    set?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    disconnect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    delete?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    connect?: Produit_PanierWhereUniqueInput | Produit_PanierWhereUniqueInput[]
    update?: Produit_PanierUpdateWithWhereUniqueWithoutPanierInput | Produit_PanierUpdateWithWhereUniqueWithoutPanierInput[]
    updateMany?: Produit_PanierUpdateManyWithWhereWithoutPanierInput | Produit_PanierUpdateManyWithWhereWithoutPanierInput[]
    deleteMany?: Produit_PanierScalarWhereInput | Produit_PanierScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutCommandesInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    connect?: ClientWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutCommandesInput = {
    create?: XOR<AdminCreateWithoutCommandesInput, AdminUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCommandesInput
    connect?: AdminWhereUniqueInput
  }

  export type ProduitCreateNestedManyWithoutCommandeInput = {
    create?: XOR<ProduitCreateWithoutCommandeInput, ProduitUncheckedCreateWithoutCommandeInput> | ProduitCreateWithoutCommandeInput[] | ProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCommandeInput | ProduitCreateOrConnectWithoutCommandeInput[]
    createMany?: ProduitCreateManyCommandeInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<ProduitCreateWithoutCommandeInput, ProduitUncheckedCreateWithoutCommandeInput> | ProduitCreateWithoutCommandeInput[] | ProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCommandeInput | ProduitCreateOrConnectWithoutCommandeInput[]
    createMany?: ProduitCreateManyCommandeInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    upsert?: ClientUpsertWithoutCommandesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCommandesInput, ClientUpdateWithoutCommandesInput>, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type AdminUpdateOneWithoutCommandesNestedInput = {
    create?: XOR<AdminCreateWithoutCommandesInput, AdminUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCommandesInput
    upsert?: AdminUpsertWithoutCommandesInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCommandesInput, AdminUpdateWithoutCommandesInput>, AdminUncheckedUpdateWithoutCommandesInput>
  }

  export type ProduitUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<ProduitCreateWithoutCommandeInput, ProduitUncheckedCreateWithoutCommandeInput> | ProduitCreateWithoutCommandeInput[] | ProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCommandeInput | ProduitCreateOrConnectWithoutCommandeInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutCommandeInput | ProduitUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: ProduitCreateManyCommandeInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutCommandeInput | ProduitUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutCommandeInput | ProduitUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<ProduitCreateWithoutCommandeInput, ProduitUncheckedCreateWithoutCommandeInput> | ProduitCreateWithoutCommandeInput[] | ProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCommandeInput | ProduitCreateOrConnectWithoutCommandeInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutCommandeInput | ProduitUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: ProduitCreateManyCommandeInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutCommandeInput | ProduitUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutCommandeInput | ProduitUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SessionCreateWithoutClientInput = {
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    admin?: AdminCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutClientInput = {
    id_session?: number
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    id_admin?: number | null
  }

  export type SessionCreateOrConnectWithoutClientInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutClientInput, SessionUncheckedCreateWithoutClientInput>
  }

  export type SessionCreateManyClientInputEnvelope = {
    data: SessionCreateManyClientInput | SessionCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PanierCreateWithoutClientInput = {
    date_creation?: Date | string
    produit_paniers?: Produit_PanierCreateNestedManyWithoutPanierInput
  }

  export type PanierUncheckedCreateWithoutClientInput = {
    id_panier?: number
    date_creation?: Date | string
    produit_paniers?: Produit_PanierUncheckedCreateNestedManyWithoutPanierInput
  }

  export type PanierCreateOrConnectWithoutClientInput = {
    where: PanierWhereUniqueInput
    create: XOR<PanierCreateWithoutClientInput, PanierUncheckedCreateWithoutClientInput>
  }

  export type PanierCreateManyClientInputEnvelope = {
    data: PanierCreateManyClientInput | PanierCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CommandeCreateWithoutClientInput = {
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    admin?: AdminCreateNestedOneWithoutCommandesInput
    produits?: ProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutClientInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_admin?: number | null
    produits?: ProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutClientInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeCreateManyClientInputEnvelope = {
    data: CommandeCreateManyClientInput | CommandeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutClientInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutClientInput, SessionUncheckedUpdateWithoutClientInput>
    create: XOR<SessionCreateWithoutClientInput, SessionUncheckedCreateWithoutClientInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutClientInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutClientInput, SessionUncheckedUpdateWithoutClientInput>
  }

  export type SessionUpdateManyWithWhereWithoutClientInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutClientInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id_session?: IntFilter<"Session"> | number
    token?: StringFilter<"Session"> | string
    date_connexion?: DateTimeFilter<"Session"> | Date | string
    date_deconnexion?: DateTimeNullableFilter<"Session"> | Date | string | null
    is_active?: BoolFilter<"Session"> | boolean
    date_creation?: DateTimeFilter<"Session"> | Date | string
    id_client?: IntFilter<"Session"> | number
    id_admin?: IntNullableFilter<"Session"> | number | null
  }

  export type PanierUpsertWithWhereUniqueWithoutClientInput = {
    where: PanierWhereUniqueInput
    update: XOR<PanierUpdateWithoutClientInput, PanierUncheckedUpdateWithoutClientInput>
    create: XOR<PanierCreateWithoutClientInput, PanierUncheckedCreateWithoutClientInput>
  }

  export type PanierUpdateWithWhereUniqueWithoutClientInput = {
    where: PanierWhereUniqueInput
    data: XOR<PanierUpdateWithoutClientInput, PanierUncheckedUpdateWithoutClientInput>
  }

  export type PanierUpdateManyWithWhereWithoutClientInput = {
    where: PanierScalarWhereInput
    data: XOR<PanierUpdateManyMutationInput, PanierUncheckedUpdateManyWithoutClientInput>
  }

  export type PanierScalarWhereInput = {
    AND?: PanierScalarWhereInput | PanierScalarWhereInput[]
    OR?: PanierScalarWhereInput[]
    NOT?: PanierScalarWhereInput | PanierScalarWhereInput[]
    id_panier?: IntFilter<"Panier"> | number
    date_creation?: DateTimeFilter<"Panier"> | Date | string
    id_client?: IntFilter<"Panier"> | number
  }

  export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
  }

  export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutClientInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    OR?: CommandeScalarWhereInput[]
    NOT?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    id_commande?: IntFilter<"Commande"> | number
    date_commande?: DateTimeFilter<"Commande"> | Date | string
    statut?: StringFilter<"Commande"> | string
    total?: DecimalFilter<"Commande"> | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFilter<"Commande"> | string
    adresse_livraison?: StringFilter<"Commande"> | string
    cp_livraison?: StringFilter<"Commande"> | string
    ville_livraison?: StringFilter<"Commande"> | string
    id_client?: IntFilter<"Commande"> | number
    id_admin?: IntNullableFilter<"Commande"> | number | null
  }

  export type ClientCreateWithoutSessionsInput = {
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    paniers?: PanierCreateNestedManyWithoutClientInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSessionsInput = {
    id_client?: number
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    paniers?: PanierUncheckedCreateNestedManyWithoutClientInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSessionsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
  }

  export type AdminCreateWithoutSessionsInput = {
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
    commandes?: CommandeCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutSessionsInput = {
    id_admin?: number
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutSessionsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutSessionsInput, AdminUncheckedCreateWithoutSessionsInput>
  }

  export type ClientUpsertWithoutSessionsInput = {
    update: XOR<ClientUpdateWithoutSessionsInput, ClientUncheckedUpdateWithoutSessionsInput>
    create: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSessionsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSessionsInput, ClientUncheckedUpdateWithoutSessionsInput>
  }

  export type ClientUpdateWithoutSessionsInput = {
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paniers?: PanierUpdateManyWithoutClientNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSessionsInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paniers?: PanierUncheckedUpdateManyWithoutClientNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AdminUpsertWithoutSessionsInput = {
    update: XOR<AdminUpdateWithoutSessionsInput, AdminUncheckedUpdateWithoutSessionsInput>
    create: XOR<AdminCreateWithoutSessionsInput, AdminUncheckedCreateWithoutSessionsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutSessionsInput, AdminUncheckedUpdateWithoutSessionsInput>
  }

  export type AdminUpdateWithoutSessionsInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutSessionsInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type SessionCreateWithoutAdminInput = {
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    client: ClientCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutAdminInput = {
    id_session?: number
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    id_client: number
  }

  export type SessionCreateOrConnectWithoutAdminInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAdminInput, SessionUncheckedCreateWithoutAdminInput>
  }

  export type SessionCreateManyAdminInputEnvelope = {
    data: SessionCreateManyAdminInput | SessionCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type CommandeCreateWithoutAdminInput = {
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    client: ClientCreateNestedOneWithoutCommandesInput
    produits?: ProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutAdminInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_client: number
    produits?: ProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutAdminInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutAdminInput, CommandeUncheckedCreateWithoutAdminInput>
  }

  export type CommandeCreateManyAdminInputEnvelope = {
    data: CommandeCreateManyAdminInput | CommandeCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutAdminInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutAdminInput, SessionUncheckedUpdateWithoutAdminInput>
    create: XOR<SessionCreateWithoutAdminInput, SessionUncheckedCreateWithoutAdminInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutAdminInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutAdminInput, SessionUncheckedUpdateWithoutAdminInput>
  }

  export type SessionUpdateManyWithWhereWithoutAdminInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutAdminInput>
  }

  export type CommandeUpsertWithWhereUniqueWithoutAdminInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutAdminInput, CommandeUncheckedUpdateWithoutAdminInput>
    create: XOR<CommandeCreateWithoutAdminInput, CommandeUncheckedCreateWithoutAdminInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutAdminInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutAdminInput, CommandeUncheckedUpdateWithoutAdminInput>
  }

  export type CommandeUpdateManyWithWhereWithoutAdminInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutAdminInput>
  }

  export type CommandeCreateWithoutProduitsInput = {
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    client: ClientCreateNestedOneWithoutCommandesInput
    admin?: AdminCreateNestedOneWithoutCommandesInput
  }

  export type CommandeUncheckedCreateWithoutProduitsInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_client: number
    id_admin?: number | null
  }

  export type CommandeCreateOrConnectWithoutProduitsInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutProduitsInput, CommandeUncheckedCreateWithoutProduitsInput>
  }

  export type Produit_PanierCreateWithoutProduitInput = {
    panier: PanierCreateNestedOneWithoutProduit_paniersInput
  }

  export type Produit_PanierUncheckedCreateWithoutProduitInput = {
    id_produit_panier?: number
    id_panier: number
  }

  export type Produit_PanierCreateOrConnectWithoutProduitInput = {
    where: Produit_PanierWhereUniqueInput
    create: XOR<Produit_PanierCreateWithoutProduitInput, Produit_PanierUncheckedCreateWithoutProduitInput>
  }

  export type Produit_PanierCreateManyProduitInputEnvelope = {
    data: Produit_PanierCreateManyProduitInput | Produit_PanierCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type Produit_CategorieCreateWithoutProduitInput = {
    categorie: CategorieCreateNestedOneWithoutProduit_categoriesInput
  }

  export type Produit_CategorieUncheckedCreateWithoutProduitInput = {
    id_produit_categorie?: number
    id_categorie: number
  }

  export type Produit_CategorieCreateOrConnectWithoutProduitInput = {
    where: Produit_CategorieWhereUniqueInput
    create: XOR<Produit_CategorieCreateWithoutProduitInput, Produit_CategorieUncheckedCreateWithoutProduitInput>
  }

  export type Produit_CategorieCreateManyProduitInputEnvelope = {
    data: Produit_CategorieCreateManyProduitInput | Produit_CategorieCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type CommandeUpsertWithoutProduitsInput = {
    update: XOR<CommandeUpdateWithoutProduitsInput, CommandeUncheckedUpdateWithoutProduitsInput>
    create: XOR<CommandeCreateWithoutProduitsInput, CommandeUncheckedCreateWithoutProduitsInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutProduitsInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutProduitsInput, CommandeUncheckedUpdateWithoutProduitsInput>
  }

  export type CommandeUpdateWithoutProduitsInput = {
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    admin?: AdminUpdateOneWithoutCommandesNestedInput
  }

  export type CommandeUncheckedUpdateWithoutProduitsInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Produit_PanierUpsertWithWhereUniqueWithoutProduitInput = {
    where: Produit_PanierWhereUniqueInput
    update: XOR<Produit_PanierUpdateWithoutProduitInput, Produit_PanierUncheckedUpdateWithoutProduitInput>
    create: XOR<Produit_PanierCreateWithoutProduitInput, Produit_PanierUncheckedCreateWithoutProduitInput>
  }

  export type Produit_PanierUpdateWithWhereUniqueWithoutProduitInput = {
    where: Produit_PanierWhereUniqueInput
    data: XOR<Produit_PanierUpdateWithoutProduitInput, Produit_PanierUncheckedUpdateWithoutProduitInput>
  }

  export type Produit_PanierUpdateManyWithWhereWithoutProduitInput = {
    where: Produit_PanierScalarWhereInput
    data: XOR<Produit_PanierUpdateManyMutationInput, Produit_PanierUncheckedUpdateManyWithoutProduitInput>
  }

  export type Produit_PanierScalarWhereInput = {
    AND?: Produit_PanierScalarWhereInput | Produit_PanierScalarWhereInput[]
    OR?: Produit_PanierScalarWhereInput[]
    NOT?: Produit_PanierScalarWhereInput | Produit_PanierScalarWhereInput[]
    id_produit_panier?: IntFilter<"Produit_Panier"> | number
    id_panier?: IntFilter<"Produit_Panier"> | number
    id_produit?: IntFilter<"Produit_Panier"> | number
  }

  export type Produit_CategorieUpsertWithWhereUniqueWithoutProduitInput = {
    where: Produit_CategorieWhereUniqueInput
    update: XOR<Produit_CategorieUpdateWithoutProduitInput, Produit_CategorieUncheckedUpdateWithoutProduitInput>
    create: XOR<Produit_CategorieCreateWithoutProduitInput, Produit_CategorieUncheckedCreateWithoutProduitInput>
  }

  export type Produit_CategorieUpdateWithWhereUniqueWithoutProduitInput = {
    where: Produit_CategorieWhereUniqueInput
    data: XOR<Produit_CategorieUpdateWithoutProduitInput, Produit_CategorieUncheckedUpdateWithoutProduitInput>
  }

  export type Produit_CategorieUpdateManyWithWhereWithoutProduitInput = {
    where: Produit_CategorieScalarWhereInput
    data: XOR<Produit_CategorieUpdateManyMutationInput, Produit_CategorieUncheckedUpdateManyWithoutProduitInput>
  }

  export type Produit_CategorieScalarWhereInput = {
    AND?: Produit_CategorieScalarWhereInput | Produit_CategorieScalarWhereInput[]
    OR?: Produit_CategorieScalarWhereInput[]
    NOT?: Produit_CategorieScalarWhereInput | Produit_CategorieScalarWhereInput[]
    id_produit_categorie?: IntFilter<"Produit_Categorie"> | number
    id_categorie?: IntFilter<"Produit_Categorie"> | number
    id_produit?: IntFilter<"Produit_Categorie"> | number
  }

  export type PanierCreateWithoutProduit_paniersInput = {
    date_creation?: Date | string
    client: ClientCreateNestedOneWithoutPaniersInput
  }

  export type PanierUncheckedCreateWithoutProduit_paniersInput = {
    id_panier?: number
    date_creation?: Date | string
    id_client: number
  }

  export type PanierCreateOrConnectWithoutProduit_paniersInput = {
    where: PanierWhereUniqueInput
    create: XOR<PanierCreateWithoutProduit_paniersInput, PanierUncheckedCreateWithoutProduit_paniersInput>
  }

  export type ProduitCreateWithoutProduit_paniersInput = {
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    commande?: CommandeCreateNestedOneWithoutProduitsInput
    produit_categories?: Produit_CategorieCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutProduit_paniersInput = {
    id_produit?: number
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    id_commande?: number | null
    produit_categories?: Produit_CategorieUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutProduit_paniersInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutProduit_paniersInput, ProduitUncheckedCreateWithoutProduit_paniersInput>
  }

  export type PanierUpsertWithoutProduit_paniersInput = {
    update: XOR<PanierUpdateWithoutProduit_paniersInput, PanierUncheckedUpdateWithoutProduit_paniersInput>
    create: XOR<PanierCreateWithoutProduit_paniersInput, PanierUncheckedCreateWithoutProduit_paniersInput>
    where?: PanierWhereInput
  }

  export type PanierUpdateToOneWithWhereWithoutProduit_paniersInput = {
    where?: PanierWhereInput
    data: XOR<PanierUpdateWithoutProduit_paniersInput, PanierUncheckedUpdateWithoutProduit_paniersInput>
  }

  export type PanierUpdateWithoutProduit_paniersInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutPaniersNestedInput
  }

  export type PanierUncheckedUpdateWithoutProduit_paniersInput = {
    id_panier?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type ProduitUpsertWithoutProduit_paniersInput = {
    update: XOR<ProduitUpdateWithoutProduit_paniersInput, ProduitUncheckedUpdateWithoutProduit_paniersInput>
    create: XOR<ProduitCreateWithoutProduit_paniersInput, ProduitUncheckedCreateWithoutProduit_paniersInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutProduit_paniersInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutProduit_paniersInput, ProduitUncheckedUpdateWithoutProduit_paniersInput>
  }

  export type ProduitUpdateWithoutProduit_paniersInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    commande?: CommandeUpdateOneWithoutProduitsNestedInput
    produit_categories?: Produit_CategorieUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutProduit_paniersInput = {
    id_produit?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    id_commande?: NullableIntFieldUpdateOperationsInput | number | null
    produit_categories?: Produit_CategorieUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type Produit_CategorieCreateWithoutCategorieInput = {
    produit: ProduitCreateNestedOneWithoutProduit_categoriesInput
  }

  export type Produit_CategorieUncheckedCreateWithoutCategorieInput = {
    id_produit_categorie?: number
    id_produit: number
  }

  export type Produit_CategorieCreateOrConnectWithoutCategorieInput = {
    where: Produit_CategorieWhereUniqueInput
    create: XOR<Produit_CategorieCreateWithoutCategorieInput, Produit_CategorieUncheckedCreateWithoutCategorieInput>
  }

  export type Produit_CategorieCreateManyCategorieInputEnvelope = {
    data: Produit_CategorieCreateManyCategorieInput | Produit_CategorieCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type Produit_CategorieUpsertWithWhereUniqueWithoutCategorieInput = {
    where: Produit_CategorieWhereUniqueInput
    update: XOR<Produit_CategorieUpdateWithoutCategorieInput, Produit_CategorieUncheckedUpdateWithoutCategorieInput>
    create: XOR<Produit_CategorieCreateWithoutCategorieInput, Produit_CategorieUncheckedCreateWithoutCategorieInput>
  }

  export type Produit_CategorieUpdateWithWhereUniqueWithoutCategorieInput = {
    where: Produit_CategorieWhereUniqueInput
    data: XOR<Produit_CategorieUpdateWithoutCategorieInput, Produit_CategorieUncheckedUpdateWithoutCategorieInput>
  }

  export type Produit_CategorieUpdateManyWithWhereWithoutCategorieInput = {
    where: Produit_CategorieScalarWhereInput
    data: XOR<Produit_CategorieUpdateManyMutationInput, Produit_CategorieUncheckedUpdateManyWithoutCategorieInput>
  }

  export type CategorieCreateWithoutProduit_categoriesInput = {
    nom: string
    date_creation?: Date | string
  }

  export type CategorieUncheckedCreateWithoutProduit_categoriesInput = {
    id_categorie?: number
    nom: string
    date_creation?: Date | string
  }

  export type CategorieCreateOrConnectWithoutProduit_categoriesInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutProduit_categoriesInput, CategorieUncheckedCreateWithoutProduit_categoriesInput>
  }

  export type ProduitCreateWithoutProduit_categoriesInput = {
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    commande?: CommandeCreateNestedOneWithoutProduitsInput
    produit_paniers?: Produit_PanierCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutProduit_categoriesInput = {
    id_produit?: number
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    id_commande?: number | null
    produit_paniers?: Produit_PanierUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutProduit_categoriesInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutProduit_categoriesInput, ProduitUncheckedCreateWithoutProduit_categoriesInput>
  }

  export type CategorieUpsertWithoutProduit_categoriesInput = {
    update: XOR<CategorieUpdateWithoutProduit_categoriesInput, CategorieUncheckedUpdateWithoutProduit_categoriesInput>
    create: XOR<CategorieCreateWithoutProduit_categoriesInput, CategorieUncheckedCreateWithoutProduit_categoriesInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutProduit_categoriesInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutProduit_categoriesInput, CategorieUncheckedUpdateWithoutProduit_categoriesInput>
  }

  export type CategorieUpdateWithoutProduit_categoriesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUncheckedUpdateWithoutProduit_categoriesInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitUpsertWithoutProduit_categoriesInput = {
    update: XOR<ProduitUpdateWithoutProduit_categoriesInput, ProduitUncheckedUpdateWithoutProduit_categoriesInput>
    create: XOR<ProduitCreateWithoutProduit_categoriesInput, ProduitUncheckedCreateWithoutProduit_categoriesInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutProduit_categoriesInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutProduit_categoriesInput, ProduitUncheckedUpdateWithoutProduit_categoriesInput>
  }

  export type ProduitUpdateWithoutProduit_categoriesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    commande?: CommandeUpdateOneWithoutProduitsNestedInput
    produit_paniers?: Produit_PanierUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutProduit_categoriesInput = {
    id_produit?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    id_commande?: NullableIntFieldUpdateOperationsInput | number | null
    produit_paniers?: Produit_PanierUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type Produit_PanierCreateWithoutPanierInput = {
    produit: ProduitCreateNestedOneWithoutProduit_paniersInput
  }

  export type Produit_PanierUncheckedCreateWithoutPanierInput = {
    id_produit_panier?: number
    id_produit: number
  }

  export type Produit_PanierCreateOrConnectWithoutPanierInput = {
    where: Produit_PanierWhereUniqueInput
    create: XOR<Produit_PanierCreateWithoutPanierInput, Produit_PanierUncheckedCreateWithoutPanierInput>
  }

  export type Produit_PanierCreateManyPanierInputEnvelope = {
    data: Produit_PanierCreateManyPanierInput | Produit_PanierCreateManyPanierInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutPaniersInput = {
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutClientInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPaniersInput = {
    id_client?: number
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutClientInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPaniersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPaniersInput, ClientUncheckedCreateWithoutPaniersInput>
  }

  export type Produit_PanierUpsertWithWhereUniqueWithoutPanierInput = {
    where: Produit_PanierWhereUniqueInput
    update: XOR<Produit_PanierUpdateWithoutPanierInput, Produit_PanierUncheckedUpdateWithoutPanierInput>
    create: XOR<Produit_PanierCreateWithoutPanierInput, Produit_PanierUncheckedCreateWithoutPanierInput>
  }

  export type Produit_PanierUpdateWithWhereUniqueWithoutPanierInput = {
    where: Produit_PanierWhereUniqueInput
    data: XOR<Produit_PanierUpdateWithoutPanierInput, Produit_PanierUncheckedUpdateWithoutPanierInput>
  }

  export type Produit_PanierUpdateManyWithWhereWithoutPanierInput = {
    where: Produit_PanierScalarWhereInput
    data: XOR<Produit_PanierUpdateManyMutationInput, Produit_PanierUncheckedUpdateManyWithoutPanierInput>
  }

  export type ClientUpsertWithoutPaniersInput = {
    update: XOR<ClientUpdateWithoutPaniersInput, ClientUncheckedUpdateWithoutPaniersInput>
    create: XOR<ClientCreateWithoutPaniersInput, ClientUncheckedCreateWithoutPaniersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPaniersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPaniersInput, ClientUncheckedUpdateWithoutPaniersInput>
  }

  export type ClientUpdateWithoutPaniersInput = {
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutClientNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPaniersInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutClientNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutCommandesInput = {
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutClientInput
    paniers?: PanierCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCommandesInput = {
    id_client?: number
    mail: string
    mdp_hash: string
    role: string
    prenom: string
    nom: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    telephone: string
    date_creation?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutClientInput
    paniers?: PanierUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCommandesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
  }

  export type AdminCreateWithoutCommandesInput = {
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
    sessions?: SessionCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutCommandesInput = {
    id_admin?: number
    mail: string
    nom: string
    prenom: string
    mdp_hash: string
    role: string
    dernier_login: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutCommandesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCommandesInput, AdminUncheckedCreateWithoutCommandesInput>
  }

  export type ProduitCreateWithoutCommandeInput = {
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    produit_paniers?: Produit_PanierCreateNestedManyWithoutProduitInput
    produit_categories?: Produit_CategorieCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutCommandeInput = {
    id_produit?: number
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
    produit_paniers?: Produit_PanierUncheckedCreateNestedManyWithoutProduitInput
    produit_categories?: Produit_CategorieUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutCommandeInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutCommandeInput, ProduitUncheckedCreateWithoutCommandeInput>
  }

  export type ProduitCreateManyCommandeInputEnvelope = {
    data: ProduitCreateManyCommandeInput | ProduitCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutCommandesInput = {
    update: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCommandesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type ClientUpdateWithoutCommandesInput = {
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutClientNestedInput
    paniers?: PanierUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCommandesInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutClientNestedInput
    paniers?: PanierUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AdminUpsertWithoutCommandesInput = {
    update: XOR<AdminUpdateWithoutCommandesInput, AdminUncheckedUpdateWithoutCommandesInput>
    create: XOR<AdminCreateWithoutCommandesInput, AdminUncheckedCreateWithoutCommandesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutCommandesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutCommandesInput, AdminUncheckedUpdateWithoutCommandesInput>
  }

  export type AdminUpdateWithoutCommandesInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutCommandesInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mdp_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dernier_login?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProduitUpsertWithWhereUniqueWithoutCommandeInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutCommandeInput, ProduitUncheckedUpdateWithoutCommandeInput>
    create: XOR<ProduitCreateWithoutCommandeInput, ProduitUncheckedCreateWithoutCommandeInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutCommandeInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutCommandeInput, ProduitUncheckedUpdateWithoutCommandeInput>
  }

  export type ProduitUpdateManyWithWhereWithoutCommandeInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutCommandeInput>
  }

  export type ProduitScalarWhereInput = {
    AND?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    OR?: ProduitScalarWhereInput[]
    NOT?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    id_produit?: IntFilter<"Produit"> | number
    nom?: StringFilter<"Produit"> | string
    description?: StringFilter<"Produit"> | string
    prix?: DecimalFilter<"Produit"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"Produit"> | string
    date_creation?: DateTimeFilter<"Produit"> | Date | string
    is_active?: BoolFilter<"Produit"> | boolean
    id_commande?: IntNullableFilter<"Produit"> | number | null
  }

  export type SessionCreateManyClientInput = {
    id_session?: number
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    id_admin?: number | null
  }

  export type PanierCreateManyClientInput = {
    id_panier?: number
    date_creation?: Date | string
  }

  export type CommandeCreateManyClientInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_admin?: number | null
  }

  export type SessionUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutClientInput = {
    id_session?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUncheckedUpdateManyWithoutClientInput = {
    id_session?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PanierUpdateWithoutClientInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    produit_paniers?: Produit_PanierUpdateManyWithoutPanierNestedInput
  }

  export type PanierUncheckedUpdateWithoutClientInput = {
    id_panier?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    produit_paniers?: Produit_PanierUncheckedUpdateManyWithoutPanierNestedInput
  }

  export type PanierUncheckedUpdateManyWithoutClientInput = {
    id_panier?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeUpdateWithoutClientInput = {
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneWithoutCommandesNestedInput
    produits?: ProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutClientInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
    produits?: ProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutClientInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateManyAdminInput = {
    id_session?: number
    token: string
    date_connexion?: Date | string
    date_deconnexion?: Date | string | null
    is_active: boolean
    date_creation?: Date | string
    id_client: number
  }

  export type CommandeCreateManyAdminInput = {
    id_commande?: number
    date_commande?: Date | string
    statut: string
    total: Decimal | DecimalJsLike | number | string
    moyen_paiement: string
    adresse_livraison: string
    cp_livraison: string
    ville_livraison: string
    id_client: number
  }

  export type SessionUpdateWithoutAdminInput = {
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutAdminInput = {
    id_session?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type SessionUncheckedUpdateManyWithoutAdminInput = {
    id_session?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    date_connexion?: DateTimeFieldUpdateOperationsInput | Date | string
    date_deconnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type CommandeUpdateWithoutAdminInput = {
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    produits?: ProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutAdminInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    produits?: ProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutAdminInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_commande?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moyen_paiement?: StringFieldUpdateOperationsInput | string
    adresse_livraison?: StringFieldUpdateOperationsInput | string
    cp_livraison?: StringFieldUpdateOperationsInput | string
    ville_livraison?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_PanierCreateManyProduitInput = {
    id_produit_panier?: number
    id_panier: number
  }

  export type Produit_CategorieCreateManyProduitInput = {
    id_produit_categorie?: number
    id_categorie: number
  }

  export type Produit_PanierUpdateWithoutProduitInput = {
    panier?: PanierUpdateOneRequiredWithoutProduit_paniersNestedInput
  }

  export type Produit_PanierUncheckedUpdateWithoutProduitInput = {
    id_produit_panier?: IntFieldUpdateOperationsInput | number
    id_panier?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_PanierUncheckedUpdateManyWithoutProduitInput = {
    id_produit_panier?: IntFieldUpdateOperationsInput | number
    id_panier?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_CategorieUpdateWithoutProduitInput = {
    categorie?: CategorieUpdateOneRequiredWithoutProduit_categoriesNestedInput
  }

  export type Produit_CategorieUncheckedUpdateWithoutProduitInput = {
    id_produit_categorie?: IntFieldUpdateOperationsInput | number
    id_categorie?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_CategorieUncheckedUpdateManyWithoutProduitInput = {
    id_produit_categorie?: IntFieldUpdateOperationsInput | number
    id_categorie?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_CategorieCreateManyCategorieInput = {
    id_produit_categorie?: number
    id_produit: number
  }

  export type Produit_CategorieUpdateWithoutCategorieInput = {
    produit?: ProduitUpdateOneRequiredWithoutProduit_categoriesNestedInput
  }

  export type Produit_CategorieUncheckedUpdateWithoutCategorieInput = {
    id_produit_categorie?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_CategorieUncheckedUpdateManyWithoutCategorieInput = {
    id_produit_categorie?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_PanierCreateManyPanierInput = {
    id_produit_panier?: number
    id_produit: number
  }

  export type Produit_PanierUpdateWithoutPanierInput = {
    produit?: ProduitUpdateOneRequiredWithoutProduit_paniersNestedInput
  }

  export type Produit_PanierUncheckedUpdateWithoutPanierInput = {
    id_produit_panier?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type Produit_PanierUncheckedUpdateManyWithoutPanierInput = {
    id_produit_panier?: IntFieldUpdateOperationsInput | number
    id_produit?: IntFieldUpdateOperationsInput | number
  }

  export type ProduitCreateManyCommandeInput = {
    id_produit?: number
    nom: string
    description: string
    prix: Decimal | DecimalJsLike | number | string
    image: string
    date_creation?: Date | string
    is_active: boolean
  }

  export type ProduitUpdateWithoutCommandeInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    produit_paniers?: Produit_PanierUpdateManyWithoutProduitNestedInput
    produit_categories?: Produit_CategorieUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutCommandeInput = {
    id_produit?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    produit_paniers?: Produit_PanierUncheckedUpdateManyWithoutProduitNestedInput
    produit_categories?: Produit_CategorieUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutCommandeInput = {
    id_produit?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
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