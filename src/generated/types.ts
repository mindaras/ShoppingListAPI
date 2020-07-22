import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'src/context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ShoppingList = {
  __typename?: 'ShoppingList';
  id: Scalars['ID'];
  name: Scalars['String'];
  items: Array<Maybe<ShoppingListItem>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  shoppingList: ShoppingList;
  shoppingListItem: ShoppingListItem;
  shoppingListItems: Array<Maybe<ShoppingListItem>>;
};


export type QueryShoppingListArgs = {
  id: Scalars['ID'];
};


export type QueryShoppingListItemArgs = {
  id: Scalars['ID'];
};


export type QueryShoppingListItemsArgs = {
  listId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createShoppingList: ShoppingList;
  createShoppingListItem: ShoppingListItem;
  removeShoppingList?: Maybe<Scalars['Int']>;
  removeShoppingListItem?: Maybe<Scalars['Int']>;
  updateShoppingListItem: ShoppingListItem;
};


export type MutationCreateShoppingListArgs = {
  name: Scalars['String'];
};


export type MutationCreateShoppingListItemArgs = {
  listId: Scalars['ID'];
  author: Scalars['String'];
  input: ShoppingListItemInput;
};


export type MutationRemoveShoppingListArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveShoppingListItemArgs = {
  id: Scalars['ID'];
  listId: Scalars['ID'];
};


export type MutationUpdateShoppingListItemArgs = {
  id: Scalars['ID'];
  updatedBy: Scalars['String'];
  input: ShoppingListItemInput;
};

export enum ShoppingListItemStatus {
  Pending = 'PENDING',
  Bought = 'BOUGHT',
  Removed = 'REMOVED'
}

export type ShoppingListItem = {
  __typename?: 'ShoppingListItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  status: ShoppingListItemStatus;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  list: ShoppingList;
};

export type ShoppingListItemInput = {
  name: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  status?: Maybe<ShoppingListItemStatus>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ShoppingList: ResolverTypeWrapper<ShoppingList>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ShoppingListItemStatus: ShoppingListItemStatus;
  ShoppingListItem: ResolverTypeWrapper<ShoppingListItem>;
  ShoppingListItemInput: ShoppingListItemInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ShoppingList: ShoppingList;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Query: {};
  Mutation: {};
  Int: Scalars['Int'];
  ShoppingListItem: ShoppingListItem;
  ShoppingListItemInput: ShoppingListItemInput;
  Boolean: Scalars['Boolean'];
};

export type ShoppingListResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShoppingList'] = ResolversParentTypes['ShoppingList']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ShoppingListItem']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  shoppingList?: Resolver<ResolversTypes['ShoppingList'], ParentType, ContextType, RequireFields<QueryShoppingListArgs, 'id'>>;
  shoppingListItem?: Resolver<ResolversTypes['ShoppingListItem'], ParentType, ContextType, RequireFields<QueryShoppingListItemArgs, 'id'>>;
  shoppingListItems?: Resolver<Array<Maybe<ResolversTypes['ShoppingListItem']>>, ParentType, ContextType, RequireFields<QueryShoppingListItemsArgs, 'listId'>>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createShoppingList?: Resolver<ResolversTypes['ShoppingList'], ParentType, ContextType, RequireFields<MutationCreateShoppingListArgs, 'name'>>;
  createShoppingListItem?: Resolver<ResolversTypes['ShoppingListItem'], ParentType, ContextType, RequireFields<MutationCreateShoppingListItemArgs, 'listId' | 'author' | 'input'>>;
  removeShoppingList?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationRemoveShoppingListArgs, 'id'>>;
  removeShoppingListItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationRemoveShoppingListItemArgs, 'id' | 'listId'>>;
  updateShoppingListItem?: Resolver<ResolversTypes['ShoppingListItem'], ParentType, ContextType, RequireFields<MutationUpdateShoppingListItemArgs, 'id' | 'updatedBy' | 'input'>>;
};

export type ShoppingListItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShoppingListItem'] = ResolversParentTypes['ShoppingListItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ShoppingListItemStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['ShoppingList'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = Context> = {
  ShoppingList?: ShoppingListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ShoppingListItem?: ShoppingListItemResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
