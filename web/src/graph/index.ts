/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  _base?: Maybe<Scalars['String']>
  feedSardine?: Maybe<Sardine>
}

export type MutationFeedSardineArgs = {
  id: Scalars['ID']
}

export type Query = {
  __typename?: 'Query'
  _base?: Maybe<Scalars['String']>
  getSardine?: Maybe<Sardine>
  sardines?: Maybe<Array<Maybe<Sardine>>>
}

export type QueryGetSardineArgs = {
  id: Scalars['ID']
}

export type Sardine = {
  __typename?: 'Sardine'
  id: Scalars['ID']
  name: Scalars['String']
  potency?: Maybe<Scalars['String']>
  age?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
}

export type AllTheSardinesQueryVariables = Exact<{ [key: string]: never }>

export type AllTheSardinesQuery = { __typename?: 'Query' } & {
  sardines?: Maybe<Array<Maybe<{ __typename?: 'Sardine' } & Pick<Sardine, 'id' | 'name'>>>>
}

export type GetSardineQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetSardineQuery = { __typename?: 'Query' } & {
  getSardine?: Maybe<
    { __typename?: 'Sardine' } & Pick<Sardine, 'id' | 'name' | 'potency' | 'age' | 'source'>
  >
}

export const AllTheSardinesDocument = gql`
  query AllTheSardines {
    sardines {
      id
      name
    }
  }
`

/**
 * __useAllTheSardinesQuery__
 *
 * To run a query within a React component, call `useAllTheSardinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTheSardinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTheSardinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTheSardinesQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTheSardinesQuery, AllTheSardinesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllTheSardinesQuery, AllTheSardinesQueryVariables>(
    AllTheSardinesDocument,
    options
  )
}
export function useAllTheSardinesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllTheSardinesQuery, AllTheSardinesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllTheSardinesQuery, AllTheSardinesQueryVariables>(
    AllTheSardinesDocument,
    options
  )
}
export type AllTheSardinesQueryHookResult = ReturnType<typeof useAllTheSardinesQuery>
export type AllTheSardinesLazyQueryHookResult = ReturnType<typeof useAllTheSardinesLazyQuery>
export type AllTheSardinesQueryResult = Apollo.QueryResult<
  AllTheSardinesQuery,
  AllTheSardinesQueryVariables
>
export const GetSardineDocument = gql`
  query GetSardine($id: ID!) {
    getSardine(id: $id) {
      id
      name
      potency
      age
      source
    }
  }
`

/**
 * __useGetSardineQuery__
 *
 * To run a query within a React component, call `useGetSardineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSardineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSardineQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSardineQuery(
  baseOptions: Apollo.QueryHookOptions<GetSardineQuery, GetSardineQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSardineQuery, GetSardineQueryVariables>(GetSardineDocument, options)
}
export function useGetSardineLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSardineQuery, GetSardineQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSardineQuery, GetSardineQueryVariables>(GetSardineDocument, options)
}
export type GetSardineQueryHookResult = ReturnType<typeof useGetSardineQuery>
export type GetSardineLazyQueryHookResult = ReturnType<typeof useGetSardineLazyQuery>
export type GetSardineQueryResult = Apollo.QueryResult<GetSardineQuery, GetSardineQueryVariables>
