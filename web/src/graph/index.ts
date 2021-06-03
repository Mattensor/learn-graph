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
  relocateTree: Tree
}

export type MutationRelocateTreeArgs = {
  id: Scalars['ID']
  location: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  _base?: Maybe<Scalars['String']>
  fetchTree?: Maybe<Tree>
}

export type QueryFetchTreeArgs = {
  id: Scalars['ID']
}

export type Tree = {
  __typename?: 'Tree'
  size: Scalars['String']
  leaves?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
}

export type FetchTreeQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type FetchTreeQuery = { __typename?: 'Query' } & {
  fetchTree?: Maybe<{ __typename?: 'Tree' } & Pick<Tree, 'size' | 'leaves' | 'location'>>
}

export const FetchTreeDocument = gql`
  query FetchTree($id: ID!) {
    fetchTree(id: $id) {
      size
      leaves
      location
    }
  }
`

/**
 * __useFetchTreeQuery__
 *
 * To run a query within a React component, call `useFetchTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTreeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchTreeQuery(
  baseOptions: Apollo.QueryHookOptions<FetchTreeQuery, FetchTreeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FetchTreeQuery, FetchTreeQueryVariables>(FetchTreeDocument, options)
}
export function useFetchTreeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchTreeQuery, FetchTreeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FetchTreeQuery, FetchTreeQueryVariables>(FetchTreeDocument, options)
}
export type FetchTreeQueryHookResult = ReturnType<typeof useFetchTreeQuery>
export type FetchTreeLazyQueryHookResult = ReturnType<typeof useFetchTreeLazyQuery>
export type FetchTreeQueryResult = Apollo.QueryResult<FetchTreeQuery, FetchTreeQueryVariables>
