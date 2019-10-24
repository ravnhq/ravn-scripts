/* eslint-disable valid-jsdoc, @typescript-eslint/array-type, @typescript-eslint/prefer-interface, graphql/template-strings */

import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export enum ModelMutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

/** Meta information about the query. */
export interface QueryMeta {
  __typename?: '_QueryMeta'
  count: Scalars['Int']
}

export interface AddToFilmPlanetsPayload {
  __typename?: 'AddToFilmPlanetsPayload'
  filmsFilm?: Maybe<Film>
  planetsPlanet?: Maybe<Planet>
}

export interface AddToFilmSpeciesPayload {
  __typename?: 'AddToFilmSpeciesPayload'
  filmsFilm?: Maybe<Film>
  speciesSpecies?: Maybe<Species>
}

export interface AddToFilmStarshipsPayload {
  __typename?: 'AddToFilmStarshipsPayload'
  filmsFilm?: Maybe<Film>
  starshipsStarship?: Maybe<Starship>
}

export interface AddToFilmVehiclesPayload {
  __typename?: 'AddToFilmVehiclesPayload'
  filmsFilm?: Maybe<Film>
  vehiclesVehicle?: Maybe<Vehicle>
}

export interface AddToPeopleFilmPayload {
  __typename?: 'AddToPeopleFilmPayload'
  charactersPerson?: Maybe<Person>
  filmsFilm?: Maybe<Film>
}

export interface AddToPeoplePlanetPayload {
  __typename?: 'AddToPeoplePlanetPayload'
  residentsPerson?: Maybe<Person>
  homeworldPlanet?: Maybe<Planet>
}

export interface AddToPeopleSpeciesPayload {
  __typename?: 'AddToPeopleSpeciesPayload'
  peoplePerson?: Maybe<Person>
  speciesSpecies?: Maybe<Species>
}

export interface AddToPeopleStarshipsPayload {
  __typename?: 'AddToPeopleStarshipsPayload'
  pilotsPerson?: Maybe<Person>
  starshipsStarship?: Maybe<Starship>
}

export interface AddToPeopleVehiclesPayload {
  __typename?: 'AddToPeopleVehiclesPayload'
  pilotsPerson?: Maybe<Person>
  vehiclesVehicle?: Maybe<Vehicle>
}

/** System model for Assets */
export interface Asset extends Node {
  __typename?: 'Asset'
  createdAt: Scalars['DateTime']
  /** Original File Name */
  fileName: Scalars['String']
  /** The File Handle */
  handle: Scalars['String']
  /** The height of the file in case it is an image */
  height?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** The Mime Type */
  mimeType?: Maybe<Scalars['String']>
  /** The Size Of The File */
  size: Scalars['Float']
  updatedAt: Scalars['DateTime']
  /** The Url Of The Asset */
  url: Scalars['String']
  /** The width of the file in case it is an image */
  width?: Maybe<Scalars['Float']>
}

export interface AssetFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetFilter>>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  fileName?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  mimeType?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
}

export enum AssetOrderBy {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  FILENAME_ASC = 'fileName_ASC',
  FILENAME_DESC = 'fileName_DESC',
  HANDLE_ASC = 'handle_ASC',
  HANDLE_DESC = 'handle_DESC',
  HEIGHT_ASC = 'height_ASC',
  HEIGHT_DESC = 'height_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  MIMETYPE_ASC = 'mimeType_ASC',
  MIMETYPE_DESC = 'mimeType_DESC',
  SIZE_ASC = 'size_ASC',
  SIZE_DESC = 'size_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC',
  WIDTH_ASC = 'width_ASC',
  WIDTH_DESC = 'width_DESC',
}

export interface AssetPreviousValues {
  __typename?: 'AssetPreviousValues'
  createdAt: Scalars['DateTime']
  /** Original File Name */
  fileName: Scalars['String']
  /** The File Handle */
  handle: Scalars['String']
  /** The height of the file in case it is an image */
  height?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** The Mime Type */
  mimeType?: Maybe<Scalars['String']>
  /** The Size Of The File */
  size: Scalars['Float']
  updatedAt: Scalars['DateTime']
  /** The Url Of The Asset */
  url: Scalars['String']
  /** The width of the file in case it is an image */
  width?: Maybe<Scalars['Float']>
}

export interface AssetSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<AssetSubscriptionFilterNode>
}

export interface AssetSubscriptionFilterNode {
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  fileName?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  mimeType?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
}

export interface AssetSubscriptionPayload {
  __typename?: 'AssetSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Asset>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<AssetPreviousValues>
}

export interface CreateAsset {
  /** Original File Name */
  fileName: Scalars['String']
  /** The File Handle */
  handle: Scalars['String']
  /** The height of the file in case it is an image */
  height?: Maybe<Scalars['Float']>
  /** The Mime Type */
  mimeType?: Maybe<Scalars['String']>
  /** The Size Of The File */
  size: Scalars['Float']
  /** The Url Of The Asset */
  url: Scalars['String']
  /** The width of the file in case it is an image */
  width?: Maybe<Scalars['Float']>
}

export interface CreateFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface CreatePerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface CreatePlanet {
  /** The climate of this planet. */
  climate?: Maybe<Array<Scalars['String']>>
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1
   * standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   **/
  gravity?: Maybe<Scalars['String']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The name of the planet */
  name: Scalars['String']
  /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotationPeriod?: Maybe<Scalars['Int']>
  /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  surfaceWater?: Maybe<Scalars['Float']>
  /** The terrain of this planet. */
  terrain?: Maybe<Array<Scalars['String']>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PlanetfilmsFilm>>
  residentsIds?: Maybe<Array<Scalars['ID']>>
  residents?: Maybe<Array<PlanetresidentsPerson>>
}

export interface CreateSpecies {
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Int']>
  /** The average lifespan of this species in years. */
  averageLifespan?: Maybe<Scalars['Int']>
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>
  /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  hairColor?: Maybe<Array<SpeciesHairColor>>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>
  /** The name of this species. */
  name: Scalars['String']
  /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<SpeciesfilmsFilm>>
  peopleIds?: Maybe<Array<Scalars['ID']>>
  people?: Maybe<Array<SpeciespeoplePerson>>
}

export interface CreateStarship {
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>
  /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /**  The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['Int']>
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this starship. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /**  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe.
   **/
  mglt?: Maybe<Scalars['Int']>
  /** The name of this starship. The common name, such as "Death Star". */
  name: Scalars['String']
  /**  The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<StarshipfilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<StarshippilotsPerson>>
}

export interface CreateVehicle {
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Int']>
  /**  The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Int']>
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /**  The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this vehicle. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /** The maximum speed of this vehicle in the atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  model?: Maybe<Scalars['String']>
  /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  name: Scalars['String']
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<VehiclefilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<VehiclepilotsPerson>>
}

/** A Film is a single film. */
export interface Film extends Node {
  __typename?: 'Film'
  characters?: Maybe<Array<Person>>
  createdAt: Scalars['DateTime']
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  planets?: Maybe<Array<Planet>>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  species?: Maybe<Array<Species>>
  starships?: Maybe<Array<Starship>>
  /** The title of this film */
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  vehicles?: Maybe<Array<Vehicle>>
  /** Meta information about the query. */
  _charactersMeta: QueryMeta
  /** Meta information about the query. */
  _planetsMeta: QueryMeta
  /** Meta information about the query. */
  _speciesMeta: QueryMeta
  /** Meta information about the query. */
  _starshipsMeta: QueryMeta
  /** Meta information about the query. */
  _vehiclesMeta: QueryMeta
}

/** A Film is a single film. */
export interface FilmCharactersArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmPlanetsArgs {
  filter?: Maybe<PlanetFilter>
  orderBy?: Maybe<PlanetOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmSpeciesArgs {
  filter?: Maybe<SpeciesFilter>
  orderBy?: Maybe<SpeciesOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmStarshipsArgs {
  filter?: Maybe<StarshipFilter>
  orderBy?: Maybe<StarshipOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmVehiclesArgs {
  filter?: Maybe<VehicleFilter>
  orderBy?: Maybe<VehicleOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmCharactersMetaArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmPlanetsMetaArgs {
  filter?: Maybe<PlanetFilter>
  orderBy?: Maybe<PlanetOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmSpeciesMetaArgs {
  filter?: Maybe<SpeciesFilter>
  orderBy?: Maybe<SpeciesOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmStarshipsMetaArgs {
  filter?: Maybe<StarshipFilter>
  orderBy?: Maybe<StarshipOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Film is a single film. */
export interface FilmVehiclesMetaArgs {
  filter?: Maybe<VehicleFilter>
  orderBy?: Maybe<VehicleOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface FilmcharactersPerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface FilmFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FilmFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FilmFilter>>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  director?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  director_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  director_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  director_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  director_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  director_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  director_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  director_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  director_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  director_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  director_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  director_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  director_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  director_not_ends_with?: Maybe<Scalars['String']>
  episodeId?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  episodeId_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  episodeId_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  episodeId_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  episodeId_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  episodeId_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  episodeId_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  episodeId_gte?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  openingCrawl?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  openingCrawl_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  openingCrawl_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  openingCrawl_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  openingCrawl_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  openingCrawl_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  openingCrawl_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  openingCrawl_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  openingCrawl_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  openingCrawl_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  openingCrawl_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  openingCrawl_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  openingCrawl_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  openingCrawl_not_ends_with?: Maybe<Scalars['String']>
  releaseDate?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseDate_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseDate_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  releaseDate_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  releaseDate_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseDate_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseDate_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseDate_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  characters_every?: Maybe<PersonFilter>
  characters_some?: Maybe<PersonFilter>
  characters_none?: Maybe<PersonFilter>
  planets_every?: Maybe<PlanetFilter>
  planets_some?: Maybe<PlanetFilter>
  planets_none?: Maybe<PlanetFilter>
  species_every?: Maybe<SpeciesFilter>
  species_some?: Maybe<SpeciesFilter>
  species_none?: Maybe<SpeciesFilter>
  starships_every?: Maybe<StarshipFilter>
  starships_some?: Maybe<StarshipFilter>
  starships_none?: Maybe<StarshipFilter>
  vehicles_every?: Maybe<VehicleFilter>
  vehicles_some?: Maybe<VehicleFilter>
  vehicles_none?: Maybe<VehicleFilter>
}

export enum FilmOrderBy {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  DIRECTOR_ASC = 'director_ASC',
  DIRECTOR_DESC = 'director_DESC',
  EPISODEID_ASC = 'episodeId_ASC',
  EPISODEID_DESC = 'episodeId_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISPUBLISHED_ASC = 'isPublished_ASC',
  ISPUBLISHED_DESC = 'isPublished_DESC',
  OPENINGCRAWL_ASC = 'openingCrawl_ASC',
  OPENINGCRAWL_DESC = 'openingCrawl_DESC',
  RELEASEDATE_ASC = 'releaseDate_ASC',
  RELEASEDATE_DESC = 'releaseDate_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
}

export interface FilmplanetsPlanet {
  /** The climate of this planet. */
  climate?: Maybe<Array<Scalars['String']>>
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1
   * standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   **/
  gravity?: Maybe<Scalars['String']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The name of the planet */
  name: Scalars['String']
  /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotationPeriod?: Maybe<Scalars['Int']>
  /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  surfaceWater?: Maybe<Scalars['Float']>
  /** The terrain of this planet. */
  terrain?: Maybe<Array<Scalars['String']>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PlanetfilmsFilm>>
  residentsIds?: Maybe<Array<Scalars['ID']>>
  residents?: Maybe<Array<PlanetresidentsPerson>>
}

export interface FilmPreviousValues {
  __typename?: 'FilmPreviousValues'
  createdAt: Scalars['DateTime']
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export interface FilmspeciesSpecies {
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Int']>
  /** The average lifespan of this species in years. */
  averageLifespan?: Maybe<Scalars['Int']>
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>
  /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  hairColor?: Maybe<Array<SpeciesHairColor>>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>
  /** The name of this species. */
  name: Scalars['String']
  /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<SpeciesfilmsFilm>>
  peopleIds?: Maybe<Array<Scalars['ID']>>
  people?: Maybe<Array<SpeciespeoplePerson>>
}

export interface FilmstarshipsStarship {
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>
  /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /**  The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['Int']>
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this starship. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /**  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe.
   **/
  mglt?: Maybe<Scalars['Int']>
  /** The name of this starship. The common name, such as "Death Star". */
  name: Scalars['String']
  /**  The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<StarshipfilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<StarshippilotsPerson>>
}

export interface FilmSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FilmSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FilmSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<FilmSubscriptionFilterNode>
}

export interface FilmSubscriptionFilterNode {
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  director?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  director_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  director_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  director_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  director_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  director_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  director_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  director_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  director_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  director_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  director_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  director_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  director_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  director_not_ends_with?: Maybe<Scalars['String']>
  episodeId?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  episodeId_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  episodeId_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  episodeId_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  episodeId_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  episodeId_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  episodeId_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  episodeId_gte?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  openingCrawl?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  openingCrawl_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  openingCrawl_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  openingCrawl_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  openingCrawl_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  openingCrawl_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  openingCrawl_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  openingCrawl_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  openingCrawl_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  openingCrawl_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  openingCrawl_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  openingCrawl_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  openingCrawl_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  openingCrawl_not_ends_with?: Maybe<Scalars['String']>
  releaseDate?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseDate_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseDate_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  releaseDate_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  releaseDate_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseDate_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseDate_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseDate_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  characters_every?: Maybe<PersonFilter>
  characters_some?: Maybe<PersonFilter>
  characters_none?: Maybe<PersonFilter>
  planets_every?: Maybe<PlanetFilter>
  planets_some?: Maybe<PlanetFilter>
  planets_none?: Maybe<PlanetFilter>
  species_every?: Maybe<SpeciesFilter>
  species_some?: Maybe<SpeciesFilter>
  species_none?: Maybe<SpeciesFilter>
  starships_every?: Maybe<StarshipFilter>
  starships_some?: Maybe<StarshipFilter>
  starships_none?: Maybe<StarshipFilter>
  vehicles_every?: Maybe<VehicleFilter>
  vehicles_some?: Maybe<VehicleFilter>
  vehicles_none?: Maybe<VehicleFilter>
}

export interface FilmSubscriptionPayload {
  __typename?: 'FilmSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Film>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<FilmPreviousValues>
}

export interface FilmvehiclesVehicle {
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Int']>
  /**  The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Int']>
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /**  The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this vehicle. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /** The maximum speed of this vehicle in the atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  model?: Maybe<Scalars['String']>
  /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  name: Scalars['String']
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<VehiclefilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<VehiclepilotsPerson>>
}

export interface InvokeFunctionInput {
  name: Scalars['String']
  input: Scalars['String']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface InvokeFunctionPayload {
  __typename?: 'InvokeFunctionPayload'
  result: Scalars['String']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface Mutation {
  __typename?: 'Mutation'
  createAsset?: Maybe<Asset>
  createFilm?: Maybe<Film>
  createPerson?: Maybe<Person>
  createPlanet?: Maybe<Planet>
  createSpecies?: Maybe<Species>
  createStarship?: Maybe<Starship>
  createVehicle?: Maybe<Vehicle>
  updateAsset?: Maybe<Asset>
  updateFilm?: Maybe<Film>
  updatePerson?: Maybe<Person>
  updatePlanet?: Maybe<Planet>
  updateSpecies?: Maybe<Species>
  updateStarship?: Maybe<Starship>
  updateVehicle?: Maybe<Vehicle>
  updateOrCreateAsset?: Maybe<Asset>
  updateOrCreateFilm?: Maybe<Film>
  updateOrCreatePerson?: Maybe<Person>
  updateOrCreatePlanet?: Maybe<Planet>
  updateOrCreateSpecies?: Maybe<Species>
  updateOrCreateStarship?: Maybe<Starship>
  updateOrCreateVehicle?: Maybe<Vehicle>
  deleteAsset?: Maybe<Asset>
  deleteFilm?: Maybe<Film>
  deletePerson?: Maybe<Person>
  deletePlanet?: Maybe<Planet>
  deleteSpecies?: Maybe<Species>
  deleteStarship?: Maybe<Starship>
  deleteVehicle?: Maybe<Vehicle>
  addToFilmPlanets?: Maybe<AddToFilmPlanetsPayload>
  addToFilmSpecies?: Maybe<AddToFilmSpeciesPayload>
  addToFilmStarships?: Maybe<AddToFilmStarshipsPayload>
  addToFilmVehicles?: Maybe<AddToFilmVehiclesPayload>
  addToPeopleFilm?: Maybe<AddToPeopleFilmPayload>
  addToPeoplePlanet?: Maybe<AddToPeoplePlanetPayload>
  addToPeopleSpecies?: Maybe<AddToPeopleSpeciesPayload>
  addToPeopleStarships?: Maybe<AddToPeopleStarshipsPayload>
  addToPeopleVehicles?: Maybe<AddToPeopleVehiclesPayload>
  removeFromFilmPlanets?: Maybe<RemoveFromFilmPlanetsPayload>
  removeFromFilmSpecies?: Maybe<RemoveFromFilmSpeciesPayload>
  removeFromFilmStarships?: Maybe<RemoveFromFilmStarshipsPayload>
  removeFromFilmVehicles?: Maybe<RemoveFromFilmVehiclesPayload>
  removeFromPeopleFilm?: Maybe<RemoveFromPeopleFilmPayload>
  removeFromPeoplePlanet?: Maybe<RemoveFromPeoplePlanetPayload>
  removeFromPeopleSpecies?: Maybe<RemoveFromPeopleSpeciesPayload>
  removeFromPeopleStarships?: Maybe<RemoveFromPeopleStarshipsPayload>
  removeFromPeopleVehicles?: Maybe<RemoveFromPeopleVehiclesPayload>
  invokeFunction?: Maybe<InvokeFunctionPayload>
}

export interface MutationCreateAssetArgs {
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size: Scalars['Float']
  url: Scalars['String']
  width?: Maybe<Scalars['Float']>
}

export interface MutationCreateFilmArgs {
  director?: Maybe<Scalars['String']>
  episodeId: Scalars['Int']
  isPublished?: Maybe<Scalars['Boolean']>
  openingCrawl?: Maybe<Scalars['String']>
  producers?: Maybe<Array<Scalars['String']>>
  releaseDate?: Maybe<Scalars['DateTime']>
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface MutationCreatePersonArgs {
  birthYear?: Maybe<Scalars['String']>
  eyeColor?: Maybe<Array<PersonEyeColor>>
  gender?: Maybe<PersonGender>
  hairColor?: Maybe<Array<PersonHairColor>>
  height?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  mass?: Maybe<Scalars['Float']>
  name: Scalars['String']
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface MutationCreatePlanetArgs {
  climate?: Maybe<Array<Scalars['String']>>
  diameter?: Maybe<Scalars['Int']>
  gravity?: Maybe<Scalars['String']>
  isPublished?: Maybe<Scalars['Boolean']>
  name: Scalars['String']
  orbitalPeriod?: Maybe<Scalars['Int']>
  population?: Maybe<Scalars['Float']>
  rotationPeriod?: Maybe<Scalars['Int']>
  surfaceWater?: Maybe<Scalars['Float']>
  terrain?: Maybe<Array<Scalars['String']>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PlanetfilmsFilm>>
  residentsIds?: Maybe<Array<Scalars['ID']>>
  residents?: Maybe<Array<PlanetresidentsPerson>>
}

export interface MutationCreateSpeciesArgs {
  averageHeight?: Maybe<Scalars['Int']>
  averageLifespan?: Maybe<Scalars['Int']>
  classification?: Maybe<Scalars['String']>
  designation?: Maybe<Scalars['String']>
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  hairColor?: Maybe<Array<SpeciesHairColor>>
  isPublished?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  name: Scalars['String']
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<SpeciesfilmsFilm>>
  peopleIds?: Maybe<Array<Scalars['ID']>>
  people?: Maybe<Array<SpeciespeoplePerson>>
}

export interface MutationCreateStarshipArgs {
  cargoCapacity?: Maybe<Scalars['Float']>
  class?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Float']>
  crew?: Maybe<Scalars['Int']>
  hyperdriveRating?: Maybe<Scalars['Float']>
  isPublished?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  mglt?: Maybe<Scalars['Int']>
  name: Scalars['String']
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<StarshipfilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<StarshippilotsPerson>>
}

export interface MutationCreateVehicleArgs {
  cargoCapacity?: Maybe<Scalars['Int']>
  class?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Int']>
  crew?: Maybe<Scalars['Int']>
  isPublished?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  model?: Maybe<Scalars['String']>
  name: Scalars['String']
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<VehiclefilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<VehiclepilotsPerson>>
}

export interface MutationUpdateAssetArgs {
  fileName?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
}

export interface MutationUpdateFilmArgs {
  director?: Maybe<Scalars['String']>
  episodeId?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  isPublished?: Maybe<Scalars['Boolean']>
  openingCrawl?: Maybe<Scalars['String']>
  producers?: Maybe<Array<Scalars['String']>>
  releaseDate?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface MutationUpdatePersonArgs {
  birthYear?: Maybe<Scalars['String']>
  eyeColor?: Maybe<Array<PersonEyeColor>>
  gender?: Maybe<PersonGender>
  hairColor?: Maybe<Array<PersonHairColor>>
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  isPublished?: Maybe<Scalars['Boolean']>
  mass?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface MutationUpdatePlanetArgs {
  climate?: Maybe<Array<Scalars['String']>>
  diameter?: Maybe<Scalars['Int']>
  gravity?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isPublished?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  orbitalPeriod?: Maybe<Scalars['Int']>
  population?: Maybe<Scalars['Float']>
  rotationPeriod?: Maybe<Scalars['Int']>
  surfaceWater?: Maybe<Scalars['Float']>
  terrain?: Maybe<Array<Scalars['String']>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PlanetfilmsFilm>>
  residentsIds?: Maybe<Array<Scalars['ID']>>
  residents?: Maybe<Array<PlanetresidentsPerson>>
}

export interface MutationUpdateSpeciesArgs {
  averageHeight?: Maybe<Scalars['Int']>
  averageLifespan?: Maybe<Scalars['Int']>
  classification?: Maybe<Scalars['String']>
  designation?: Maybe<Scalars['String']>
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  hairColor?: Maybe<Array<SpeciesHairColor>>
  id: Scalars['ID']
  isPublished?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<SpeciesfilmsFilm>>
  peopleIds?: Maybe<Array<Scalars['ID']>>
  people?: Maybe<Array<SpeciespeoplePerson>>
}

export interface MutationUpdateStarshipArgs {
  cargoCapacity?: Maybe<Scalars['Float']>
  class?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Float']>
  crew?: Maybe<Scalars['Int']>
  hyperdriveRating?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  isPublished?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  mglt?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<StarshipfilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<StarshippilotsPerson>>
}

export interface MutationUpdateVehicleArgs {
  cargoCapacity?: Maybe<Scalars['Int']>
  class?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Int']>
  crew?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  isPublished?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  manufacturer?: Maybe<Array<Scalars['String']>>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  model?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<VehiclefilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<VehiclepilotsPerson>>
}

export interface MutationUpdateOrCreateAssetArgs {
  update: UpdateAsset
  create: CreateAsset
}

export interface MutationUpdateOrCreateFilmArgs {
  update: UpdateFilm
  create: CreateFilm
}

export interface MutationUpdateOrCreatePersonArgs {
  update: UpdatePerson
  create: CreatePerson
}

export interface MutationUpdateOrCreatePlanetArgs {
  update: UpdatePlanet
  create: CreatePlanet
}

export interface MutationUpdateOrCreateSpeciesArgs {
  update: UpdateSpecies
  create: CreateSpecies
}

export interface MutationUpdateOrCreateStarshipArgs {
  update: UpdateStarship
  create: CreateStarship
}

export interface MutationUpdateOrCreateVehicleArgs {
  update: UpdateVehicle
  create: CreateVehicle
}

export interface MutationDeleteAssetArgs {
  id: Scalars['ID']
}

export interface MutationDeleteFilmArgs {
  id: Scalars['ID']
}

export interface MutationDeletePersonArgs {
  id: Scalars['ID']
}

export interface MutationDeletePlanetArgs {
  id: Scalars['ID']
}

export interface MutationDeleteSpeciesArgs {
  id: Scalars['ID']
}

export interface MutationDeleteStarshipArgs {
  id: Scalars['ID']
}

export interface MutationDeleteVehicleArgs {
  id: Scalars['ID']
}

export interface MutationAddToFilmPlanetsArgs {
  planetsPlanetId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationAddToFilmSpeciesArgs {
  speciesSpeciesId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationAddToFilmStarshipsArgs {
  starshipsStarshipId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationAddToFilmVehiclesArgs {
  vehiclesVehicleId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationAddToPeopleFilmArgs {
  filmsFilmId: Scalars['ID']
  charactersPersonId: Scalars['ID']
}

export interface MutationAddToPeoplePlanetArgs {
  homeworldPlanetId: Scalars['ID']
  residentsPersonId: Scalars['ID']
}

export interface MutationAddToPeopleSpeciesArgs {
  speciesSpeciesId: Scalars['ID']
  peoplePersonId: Scalars['ID']
}

export interface MutationAddToPeopleStarshipsArgs {
  starshipsStarshipId: Scalars['ID']
  pilotsPersonId: Scalars['ID']
}

export interface MutationAddToPeopleVehiclesArgs {
  vehiclesVehicleId: Scalars['ID']
  pilotsPersonId: Scalars['ID']
}

export interface MutationRemoveFromFilmPlanetsArgs {
  planetsPlanetId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationRemoveFromFilmSpeciesArgs {
  speciesSpeciesId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationRemoveFromFilmStarshipsArgs {
  starshipsStarshipId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationRemoveFromFilmVehiclesArgs {
  vehiclesVehicleId: Scalars['ID']
  filmsFilmId: Scalars['ID']
}

export interface MutationRemoveFromPeopleFilmArgs {
  filmsFilmId: Scalars['ID']
  charactersPersonId: Scalars['ID']
}

export interface MutationRemoveFromPeoplePlanetArgs {
  homeworldPlanetId: Scalars['ID']
  residentsPersonId: Scalars['ID']
}

export interface MutationRemoveFromPeopleSpeciesArgs {
  speciesSpeciesId: Scalars['ID']
  peoplePersonId: Scalars['ID']
}

export interface MutationRemoveFromPeopleStarshipsArgs {
  starshipsStarshipId: Scalars['ID']
  pilotsPersonId: Scalars['ID']
}

export interface MutationRemoveFromPeopleVehiclesArgs {
  vehiclesVehicleId: Scalars['ID']
  pilotsPersonId: Scalars['ID']
}

export interface MutationInvokeFunctionArgs {
  input: InvokeFunctionInput
}

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: Scalars['ID']
}

/** A Person is an individual person or character within the Star Wars universe */
export interface Person extends Node {
  __typename?: 'Person'
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  films?: Maybe<Array<Film>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  homeworld?: Maybe<Planet>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  species?: Maybe<Array<Species>>
  starships?: Maybe<Array<Starship>>
  updatedAt: Scalars['DateTime']
  vehicles?: Maybe<Array<Vehicle>>
  /** Meta information about the query. */
  _filmsMeta: QueryMeta
  /** Meta information about the query. */
  _speciesMeta: QueryMeta
  /** Meta information about the query. */
  _starshipsMeta: QueryMeta
  /** Meta information about the query. */
  _vehiclesMeta: QueryMeta
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonFilmsArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonHomeworldArgs {
  filter?: Maybe<PlanetFilter>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonSpeciesArgs {
  filter?: Maybe<SpeciesFilter>
  orderBy?: Maybe<SpeciesOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonStarshipsArgs {
  filter?: Maybe<StarshipFilter>
  orderBy?: Maybe<StarshipOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonVehiclesArgs {
  filter?: Maybe<VehicleFilter>
  orderBy?: Maybe<VehicleOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonFilmsMetaArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonSpeciesMetaArgs {
  filter?: Maybe<SpeciesFilter>
  orderBy?: Maybe<SpeciesOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonStarshipsMetaArgs {
  filter?: Maybe<StarshipFilter>
  orderBy?: Maybe<StarshipOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Person is an individual person or character within the Star Wars universe */
export interface PersonVehiclesMetaArgs {
  filter?: Maybe<VehicleFilter>
  orderBy?: Maybe<VehicleOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
export enum PersonEyeColor {
  UNKNOWN = 'UNKNOWN',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  RED = 'RED',
  BROWN = 'BROWN',
  BLUEGREY = 'BLUEGREY',
  BLACK = 'BLACK',
  ORANGE = 'ORANGE',
  HAZEL = 'HAZEL',
  PINK = 'PINK',
  GOLD = 'GOLD',
  GREEN = 'GREEN',
  WHITE = 'WHITE',
  DARK = 'DARK',
}

/**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
export enum PersonGender {
  UNKNOWN = 'UNKNOWN',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  HERMAPHRODITE = 'HERMAPHRODITE',
}

/** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
export enum PersonHairColor {
  AUBURN = 'AUBURN',
  BLACK = 'BLACK',
  BLONDE = 'BLONDE',
  BROWN = 'BROWN',
  GREY = 'GREY',
  UNKNOWN = 'UNKNOWN',
  WHITE = 'WHITE',
}

/** The skin color of this person. */
export enum PersonSkinColor {
  UNKNOWN = 'UNKNOWN',
  FAIR = 'FAIR',
  GOLD = 'GOLD',
  WHITE = 'WHITE',
  LIGHT = 'LIGHT',
  GREEN = 'GREEN',
  GREENTAN = 'GREENTAN',
  PALE = 'PALE',
  METAL = 'METAL',
  DARK = 'DARK',
  BROWNMOTTLE = 'BROWNMOTTLE',
  BROWN = 'BROWN',
  GREY = 'GREY',
  MOTTLEDGREEN = 'MOTTLEDGREEN',
  ORANGE = 'ORANGE',
  BLUE = 'BLUE',
  RED = 'RED',
  YELLOW = 'YELLOW',
  TAN = 'TAN',
  SILVER = 'SILVER',
}

export interface PersonfilmsFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface PersonFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonFilter>>
  birthYear?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  birthYear_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  birthYear_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  birthYear_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  birthYear_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  birthYear_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  birthYear_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  birthYear_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  birthYear_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  birthYear_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  birthYear_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  birthYear_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  birthYear_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  birthYear_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  gender?: Maybe<PersonGender>
  /** All values that are not equal to given value. */
  gender_not?: Maybe<PersonGender>
  /** All values that are contained in given list. */
  gender_in?: Maybe<Array<PersonGender>>
  /** All values that are not contained in given list. */
  gender_not_in?: Maybe<Array<PersonGender>>
  height?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  mass?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  mass_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  mass_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  mass_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  mass_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  mass_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  mass_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  mass_gte?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  homeworld?: Maybe<PlanetFilter>
  species_every?: Maybe<SpeciesFilter>
  species_some?: Maybe<SpeciesFilter>
  species_none?: Maybe<SpeciesFilter>
  starships_every?: Maybe<StarshipFilter>
  starships_some?: Maybe<StarshipFilter>
  starships_none?: Maybe<StarshipFilter>
  vehicles_every?: Maybe<VehicleFilter>
  vehicles_some?: Maybe<VehicleFilter>
  vehicles_none?: Maybe<VehicleFilter>
}

export interface PersonhomeworldPlanet {
  /** The climate of this planet. */
  climate?: Maybe<Array<Scalars['String']>>
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1
   * standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   **/
  gravity?: Maybe<Scalars['String']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The name of the planet */
  name: Scalars['String']
  /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotationPeriod?: Maybe<Scalars['Int']>
  /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  surfaceWater?: Maybe<Scalars['Float']>
  /** The terrain of this planet. */
  terrain?: Maybe<Array<Scalars['String']>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PlanetfilmsFilm>>
  residentsIds?: Maybe<Array<Scalars['ID']>>
  residents?: Maybe<Array<PlanetresidentsPerson>>
}

export enum PersonOrderBy {
  BIRTHYEAR_ASC = 'birthYear_ASC',
  BIRTHYEAR_DESC = 'birthYear_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  GENDER_ASC = 'gender_ASC',
  GENDER_DESC = 'gender_DESC',
  HEIGHT_ASC = 'height_ASC',
  HEIGHT_DESC = 'height_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISPUBLISHED_ASC = 'isPublished_ASC',
  ISPUBLISHED_DESC = 'isPublished_DESC',
  MASS_ASC = 'mass_ASC',
  MASS_DESC = 'mass_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
}

export interface PersonPreviousValues {
  __typename?: 'PersonPreviousValues'
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  updatedAt: Scalars['DateTime']
}

export interface PersonspeciesSpecies {
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Int']>
  /** The average lifespan of this species in years. */
  averageLifespan?: Maybe<Scalars['Int']>
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>
  /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  hairColor?: Maybe<Array<SpeciesHairColor>>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>
  /** The name of this species. */
  name: Scalars['String']
  /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<SpeciesfilmsFilm>>
  peopleIds?: Maybe<Array<Scalars['ID']>>
  people?: Maybe<Array<SpeciespeoplePerson>>
}

export interface PersonstarshipsStarship {
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>
  /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /**  The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['Int']>
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this starship. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /**  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe.
   **/
  mglt?: Maybe<Scalars['Int']>
  /** The name of this starship. The common name, such as "Death Star". */
  name: Scalars['String']
  /**  The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<StarshipfilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<StarshippilotsPerson>>
}

export interface PersonSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<PersonSubscriptionFilterNode>
}

export interface PersonSubscriptionFilterNode {
  birthYear?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  birthYear_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  birthYear_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  birthYear_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  birthYear_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  birthYear_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  birthYear_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  birthYear_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  birthYear_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  birthYear_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  birthYear_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  birthYear_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  birthYear_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  birthYear_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  gender?: Maybe<PersonGender>
  /** All values that are not equal to given value. */
  gender_not?: Maybe<PersonGender>
  /** All values that are contained in given list. */
  gender_in?: Maybe<Array<PersonGender>>
  /** All values that are not contained in given list. */
  gender_not_in?: Maybe<Array<PersonGender>>
  height?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  mass?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  mass_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  mass_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  mass_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  mass_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  mass_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  mass_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  mass_gte?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  homeworld?: Maybe<PlanetFilter>
  species_every?: Maybe<SpeciesFilter>
  species_some?: Maybe<SpeciesFilter>
  species_none?: Maybe<SpeciesFilter>
  starships_every?: Maybe<StarshipFilter>
  starships_some?: Maybe<StarshipFilter>
  starships_none?: Maybe<StarshipFilter>
  vehicles_every?: Maybe<VehicleFilter>
  vehicles_some?: Maybe<VehicleFilter>
  vehicles_none?: Maybe<VehicleFilter>
}

export interface PersonSubscriptionPayload {
  __typename?: 'PersonSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Person>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<PersonPreviousValues>
}

export interface PersonvehiclesVehicle {
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Int']>
  /**  The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Int']>
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /**  The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this vehicle. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /** The maximum speed of this vehicle in the atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  model?: Maybe<Scalars['String']>
  /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  name: Scalars['String']
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<VehiclefilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<VehiclepilotsPerson>>
}

/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface Planet extends Node {
  __typename?: 'Planet'
  /** The climate of this planet. */
  climate?: Maybe<Array<Scalars['String']>>
  createdAt: Scalars['DateTime']
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>
  films?: Maybe<Array<Film>>
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1
   * standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   **/
  gravity?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The name of the planet */
  name: Scalars['String']
  /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>
  residents?: Maybe<Array<Person>>
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotationPeriod?: Maybe<Scalars['Int']>
  /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  surfaceWater?: Maybe<Scalars['Float']>
  /** The terrain of this planet. */
  terrain?: Maybe<Array<Scalars['String']>>
  updatedAt: Scalars['DateTime']
  /** Meta information about the query. */
  _filmsMeta: QueryMeta
  /** Meta information about the query. */
  _residentsMeta: QueryMeta
}

/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface PlanetFilmsArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface PlanetResidentsArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface PlanetFilmsMetaArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY. */
export interface PlanetResidentsMetaArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface PlanetfilmsFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface PlanetFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlanetFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlanetFilter>>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  diameter?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  diameter_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  diameter_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  diameter_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  diameter_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  diameter_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  diameter_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  diameter_gte?: Maybe<Scalars['Int']>
  gravity?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  gravity_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  gravity_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  gravity_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  gravity_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  gravity_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  gravity_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  gravity_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  gravity_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  gravity_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  gravity_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  gravity_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  gravity_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  gravity_not_ends_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  orbitalPeriod_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  orbitalPeriod_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  orbitalPeriod_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  orbitalPeriod_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  orbitalPeriod_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  orbitalPeriod_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  orbitalPeriod_gte?: Maybe<Scalars['Int']>
  population?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  population_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  population_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  population_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  population_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  population_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  population_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  population_gte?: Maybe<Scalars['Float']>
  rotationPeriod?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  rotationPeriod_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  rotationPeriod_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  rotationPeriod_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  rotationPeriod_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  rotationPeriod_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  rotationPeriod_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  rotationPeriod_gte?: Maybe<Scalars['Int']>
  surfaceWater?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  surfaceWater_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  surfaceWater_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  surfaceWater_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  surfaceWater_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  surfaceWater_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  surfaceWater_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  surfaceWater_gte?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  residents_every?: Maybe<PersonFilter>
  residents_some?: Maybe<PersonFilter>
  residents_none?: Maybe<PersonFilter>
}

export enum PlanetOrderBy {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  DIAMETER_ASC = 'diameter_ASC',
  DIAMETER_DESC = 'diameter_DESC',
  GRAVITY_ASC = 'gravity_ASC',
  GRAVITY_DESC = 'gravity_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISPUBLISHED_ASC = 'isPublished_ASC',
  ISPUBLISHED_DESC = 'isPublished_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  ORBITALPERIOD_ASC = 'orbitalPeriod_ASC',
  ORBITALPERIOD_DESC = 'orbitalPeriod_DESC',
  POPULATION_ASC = 'population_ASC',
  POPULATION_DESC = 'population_DESC',
  ROTATIONPERIOD_ASC = 'rotationPeriod_ASC',
  ROTATIONPERIOD_DESC = 'rotationPeriod_DESC',
  SURFACEWATER_ASC = 'surfaceWater_ASC',
  SURFACEWATER_DESC = 'surfaceWater_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
}

export interface PlanetPreviousValues {
  __typename?: 'PlanetPreviousValues'
  /** The climate of this planet. */
  climate?: Maybe<Array<Scalars['String']>>
  createdAt: Scalars['DateTime']
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1
   * standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   **/
  gravity?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The name of the planet */
  name: Scalars['String']
  /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotationPeriod?: Maybe<Scalars['Int']>
  /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  surfaceWater?: Maybe<Scalars['Float']>
  /** The terrain of this planet. */
  terrain?: Maybe<Array<Scalars['String']>>
  updatedAt: Scalars['DateTime']
}

export interface PlanetresidentsPerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface PlanetSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlanetSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlanetSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<PlanetSubscriptionFilterNode>
}

export interface PlanetSubscriptionFilterNode {
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  diameter?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  diameter_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  diameter_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  diameter_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  diameter_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  diameter_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  diameter_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  diameter_gte?: Maybe<Scalars['Int']>
  gravity?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  gravity_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  gravity_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  gravity_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  gravity_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  gravity_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  gravity_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  gravity_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  gravity_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  gravity_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  gravity_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  gravity_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  gravity_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  gravity_not_ends_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  orbitalPeriod_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  orbitalPeriod_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  orbitalPeriod_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  orbitalPeriod_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  orbitalPeriod_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  orbitalPeriod_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  orbitalPeriod_gte?: Maybe<Scalars['Int']>
  population?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  population_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  population_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  population_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  population_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  population_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  population_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  population_gte?: Maybe<Scalars['Float']>
  rotationPeriod?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  rotationPeriod_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  rotationPeriod_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  rotationPeriod_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  rotationPeriod_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  rotationPeriod_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  rotationPeriod_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  rotationPeriod_gte?: Maybe<Scalars['Int']>
  surfaceWater?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  surfaceWater_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  surfaceWater_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  surfaceWater_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  surfaceWater_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  surfaceWater_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  surfaceWater_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  surfaceWater_gte?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  residents_every?: Maybe<PersonFilter>
  residents_some?: Maybe<PersonFilter>
  residents_none?: Maybe<PersonFilter>
}

export interface PlanetSubscriptionPayload {
  __typename?: 'PlanetSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Planet>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<PlanetPreviousValues>
}

export interface Query {
  __typename?: 'Query'
  allAssets: Array<Asset>
  allFilms: Array<Film>
  allPersons: Array<Person>
  allPlanets: Array<Planet>
  allSpecies: Array<Species>
  allStarships: Array<Starship>
  allVehicles: Array<Vehicle>
  _allAssetsMeta: QueryMeta
  _allFilmsMeta: QueryMeta
  _allPersonsMeta: QueryMeta
  _allPlanetsMeta: QueryMeta
  _allSpeciesMeta: QueryMeta
  _allStarshipsMeta: QueryMeta
  _allVehiclesMeta: QueryMeta
  Asset?: Maybe<Asset>
  Film?: Maybe<Film>
  Person?: Maybe<Person>
  Planet?: Maybe<Planet>
  Species?: Maybe<Species>
  Starship?: Maybe<Starship>
  Vehicle?: Maybe<Vehicle>
  /** Fetches an object given its ID */
  node?: Maybe<Node>
}

export interface QueryAllAssetsArgs {
  filter?: Maybe<AssetFilter>
  orderBy?: Maybe<AssetOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllFilmsArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllPersonsArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllPlanetsArgs {
  filter?: Maybe<PlanetFilter>
  orderBy?: Maybe<PlanetOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllSpeciesArgs {
  filter?: Maybe<SpeciesFilter>
  orderBy?: Maybe<SpeciesOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllStarshipsArgs {
  filter?: Maybe<StarshipFilter>
  orderBy?: Maybe<StarshipOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllVehiclesArgs {
  filter?: Maybe<VehicleFilter>
  orderBy?: Maybe<VehicleOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllAssetsMetaArgs {
  filter?: Maybe<AssetFilter>
  orderBy?: Maybe<AssetOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllFilmsMetaArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllPersonsMetaArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllPlanetsMetaArgs {
  filter?: Maybe<PlanetFilter>
  orderBy?: Maybe<PlanetOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllSpeciesMetaArgs {
  filter?: Maybe<SpeciesFilter>
  orderBy?: Maybe<SpeciesOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllStarshipsMetaArgs {
  filter?: Maybe<StarshipFilter>
  orderBy?: Maybe<StarshipOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAllVehiclesMetaArgs {
  filter?: Maybe<VehicleFilter>
  orderBy?: Maybe<VehicleOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface QueryAssetArgs {
  id?: Maybe<Scalars['ID']>
}

export interface QueryFilmArgs {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export interface QueryPersonArgs {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface QueryPlanetArgs {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface QuerySpeciesArgs {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface QueryStarshipArgs {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface QueryVehicleArgs {
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export interface QueryNodeArgs {
  id: Scalars['ID']
}

export interface RemoveFromFilmPlanetsPayload {
  __typename?: 'RemoveFromFilmPlanetsPayload'
  filmsFilm?: Maybe<Film>
  planetsPlanet?: Maybe<Planet>
}

export interface RemoveFromFilmSpeciesPayload {
  __typename?: 'RemoveFromFilmSpeciesPayload'
  filmsFilm?: Maybe<Film>
  speciesSpecies?: Maybe<Species>
}

export interface RemoveFromFilmStarshipsPayload {
  __typename?: 'RemoveFromFilmStarshipsPayload'
  filmsFilm?: Maybe<Film>
  starshipsStarship?: Maybe<Starship>
}

export interface RemoveFromFilmVehiclesPayload {
  __typename?: 'RemoveFromFilmVehiclesPayload'
  filmsFilm?: Maybe<Film>
  vehiclesVehicle?: Maybe<Vehicle>
}

export interface RemoveFromPeopleFilmPayload {
  __typename?: 'RemoveFromPeopleFilmPayload'
  charactersPerson?: Maybe<Person>
  filmsFilm?: Maybe<Film>
}

export interface RemoveFromPeoplePlanetPayload {
  __typename?: 'RemoveFromPeoplePlanetPayload'
  residentsPerson?: Maybe<Person>
  homeworldPlanet?: Maybe<Planet>
}

export interface RemoveFromPeopleSpeciesPayload {
  __typename?: 'RemoveFromPeopleSpeciesPayload'
  peoplePerson?: Maybe<Person>
  speciesSpecies?: Maybe<Species>
}

export interface RemoveFromPeopleStarshipsPayload {
  __typename?: 'RemoveFromPeopleStarshipsPayload'
  pilotsPerson?: Maybe<Person>
  starshipsStarship?: Maybe<Starship>
}

export interface RemoveFromPeopleVehiclesPayload {
  __typename?: 'RemoveFromPeopleVehiclesPayload'
  pilotsPerson?: Maybe<Person>
  vehiclesVehicle?: Maybe<Vehicle>
}

/** A Species is a type of person or character within the Star Wars Universe. */
export interface Species extends Node {
  __typename?: 'Species'
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Int']>
  /** The average lifespan of this species in years. */
  averageLifespan?: Maybe<Scalars['Int']>
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>
  /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  films?: Maybe<Array<Film>>
  /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  hairColor?: Maybe<Array<SpeciesHairColor>>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>
  /** The name of this species. */
  name: Scalars['String']
  people?: Maybe<Array<Person>>
  /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  updatedAt: Scalars['DateTime']
  /** Meta information about the query. */
  _filmsMeta: QueryMeta
  /** Meta information about the query. */
  _peopleMeta: QueryMeta
}

/** A Species is a type of person or character within the Star Wars Universe. */
export interface SpeciesFilmsArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Species is a type of person or character within the Star Wars Universe. */
export interface SpeciesPeopleArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Species is a type of person or character within the Star Wars Universe. */
export interface SpeciesFilmsMetaArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Species is a type of person or character within the Star Wars Universe. */
export interface SpeciesPeopleMetaArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
export enum SpeciesEyeColor {
  AMBER = 'AMBER',
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  BROWN = 'BROWN',
  GOLD = 'GOLD',
  GREEN = 'GREEN',
  GREY = 'GREY',
  HAZEL = 'HAZEL',
  INDIGO = 'INDIGO',
  ORANGE = 'ORANGE',
  PINK = 'PINK',
  RED = 'RED',
  SILVER = 'SILVER',
  UNKNOWN = 'UNKNOWN',
  YELLOW = 'YELLOW',
  GOLDEN = 'GOLDEN',
}

/** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
export enum SpeciesHairColor {
  UNKNOWN = 'UNKNOWN',
  BROWN = 'BROWN',
  WHITE = 'WHITE',
  RED = 'RED',
  BLACK = 'BLACK',
  BLONDE = 'BLONDE',
}

/** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
export enum SpeciesSkinColor {
  BLUE = 'BLUE',
  BROWN = 'BROWN',
  CAUCASIAN = 'CAUCASIAN',
  DARK = 'DARK',
  GREEN = 'GREEN',
  GREY = 'GREY',
  MAGENTA = 'MAGENTA',
  ORANGE = 'ORANGE',
  PALE = 'PALE',
  PALEPINK = 'PALEPINK',
  PEACH = 'PEACH',
  PINK = 'PINK',
  PURPLE = 'PURPLE',
  RED = 'RED',
  TAN = 'TAN',
  UNKNOWN = 'UNKNOWN',
  WHITE = 'WHITE',
  YELLOW = 'YELLOW',
  BLACK = 'BLACK',
  ASIAN = 'ASIAN',
  HISPANIC = 'HISPANIC',
}

export interface SpeciesfilmsFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface SpeciesFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeciesFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeciesFilter>>
  averageHeight?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  averageHeight_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  averageHeight_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  averageHeight_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  averageHeight_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  averageHeight_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  averageHeight_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  averageHeight_gte?: Maybe<Scalars['Int']>
  averageLifespan?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  averageLifespan_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  averageLifespan_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  averageLifespan_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  averageLifespan_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  averageLifespan_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  averageLifespan_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  averageLifespan_gte?: Maybe<Scalars['Int']>
  classification?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  classification_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  classification_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  classification_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  classification_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  classification_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  classification_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  classification_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  classification_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  classification_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  classification_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  classification_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  classification_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  classification_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  designation?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  designation_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  designation_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  designation_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  designation_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  designation_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  designation_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  designation_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  designation_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  designation_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  designation_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  designation_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  designation_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  designation_not_ends_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  language_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  language_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  language_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  language_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  language_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  language_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  language_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  language_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  language_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  language_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  language_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  language_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  language_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  people_every?: Maybe<PersonFilter>
  people_some?: Maybe<PersonFilter>
  people_none?: Maybe<PersonFilter>
}

export enum SpeciesOrderBy {
  AVERAGEHEIGHT_ASC = 'averageHeight_ASC',
  AVERAGEHEIGHT_DESC = 'averageHeight_DESC',
  AVERAGELIFESPAN_ASC = 'averageLifespan_ASC',
  AVERAGELIFESPAN_DESC = 'averageLifespan_DESC',
  CLASSIFICATION_ASC = 'classification_ASC',
  CLASSIFICATION_DESC = 'classification_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  DESIGNATION_ASC = 'designation_ASC',
  DESIGNATION_DESC = 'designation_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISPUBLISHED_ASC = 'isPublished_ASC',
  ISPUBLISHED_DESC = 'isPublished_DESC',
  LANGUAGE_ASC = 'language_ASC',
  LANGUAGE_DESC = 'language_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
}

export interface SpeciespeoplePerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface SpeciesPreviousValues {
  __typename?: 'SpeciesPreviousValues'
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Int']>
  /** The average lifespan of this species in years. */
  averageLifespan?: Maybe<Scalars['Int']>
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>
  /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  hairColor?: Maybe<Array<SpeciesHairColor>>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>
  /** The name of this species. */
  name: Scalars['String']
  /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  updatedAt: Scalars['DateTime']
}

export interface SpeciesSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeciesSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeciesSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<SpeciesSubscriptionFilterNode>
}

export interface SpeciesSubscriptionFilterNode {
  averageHeight?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  averageHeight_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  averageHeight_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  averageHeight_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  averageHeight_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  averageHeight_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  averageHeight_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  averageHeight_gte?: Maybe<Scalars['Int']>
  averageLifespan?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  averageLifespan_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  averageLifespan_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  averageLifespan_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  averageLifespan_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  averageLifespan_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  averageLifespan_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  averageLifespan_gte?: Maybe<Scalars['Int']>
  classification?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  classification_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  classification_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  classification_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  classification_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  classification_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  classification_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  classification_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  classification_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  classification_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  classification_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  classification_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  classification_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  classification_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  designation?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  designation_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  designation_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  designation_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  designation_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  designation_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  designation_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  designation_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  designation_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  designation_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  designation_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  designation_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  designation_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  designation_not_ends_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  language_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  language_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  language_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  language_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  language_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  language_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  language_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  language_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  language_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  language_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  language_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  language_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  language_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  people_every?: Maybe<PersonFilter>
  people_some?: Maybe<PersonFilter>
  people_none?: Maybe<PersonFilter>
}

export interface SpeciesSubscriptionPayload {
  __typename?: 'SpeciesSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Species>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<SpeciesPreviousValues>
}

/** A Starship is a single transport craft that has hyperdrive capability. */
export interface Starship extends Node {
  __typename?: 'Starship'
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>
  /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /**  The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['Int']>
  films?: Maybe<Array<Film>>
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this starship. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /**  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe.
   **/
  mglt?: Maybe<Scalars['Int']>
  /** The name of this starship. The common name, such as "Death Star". */
  name: Scalars['String']
  /**  The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['Int']>
  pilots?: Maybe<Array<Person>>
  updatedAt: Scalars['DateTime']
  /** Meta information about the query. */
  _filmsMeta: QueryMeta
  /** Meta information about the query. */
  _pilotsMeta: QueryMeta
}

/** A Starship is a single transport craft that has hyperdrive capability. */
export interface StarshipFilmsArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Starship is a single transport craft that has hyperdrive capability. */
export interface StarshipPilotsArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Starship is a single transport craft that has hyperdrive capability. */
export interface StarshipFilmsMetaArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Starship is a single transport craft that has hyperdrive capability. */
export interface StarshipPilotsMetaArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface StarshipfilmsFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface StarshipFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StarshipFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StarshipFilter>>
  cargoCapacity?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  cargoCapacity_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  cargoCapacity_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  cargoCapacity_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  cargoCapacity_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  cargoCapacity_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  cargoCapacity_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  cargoCapacity_gte?: Maybe<Scalars['Float']>
  class?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  class_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  class_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  class_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  class_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  class_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  class_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  class_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  class_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  class_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  class_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  class_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  class_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  class_not_ends_with?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  consumables_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  consumables_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  consumables_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  consumables_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  consumables_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  consumables_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  consumables_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  consumables_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  consumables_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  consumables_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  consumables_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  consumables_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  consumables_not_ends_with?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  costInCredits_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  costInCredits_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  costInCredits_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  costInCredits_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  costInCredits_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  costInCredits_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  costInCredits_gte?: Maybe<Scalars['Float']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  crew?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  crew_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  crew_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  crew_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  crew_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  crew_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  crew_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  crew_gte?: Maybe<Scalars['Int']>
  hyperdriveRating?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  hyperdriveRating_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  hyperdriveRating_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  hyperdriveRating_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  hyperdriveRating_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  hyperdriveRating_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  hyperdriveRating_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  hyperdriveRating_gte?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  length_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  length_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  length_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  length_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  length_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  length_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  length_gte?: Maybe<Scalars['Float']>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>
  mglt?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  mglt_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  mglt_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  mglt_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  mglt_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  mglt_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  mglt_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  mglt_gte?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  passengers?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  passengers_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  passengers_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  passengers_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  passengers_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  passengers_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  passengers_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  passengers_gte?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  pilots_every?: Maybe<PersonFilter>
  pilots_some?: Maybe<PersonFilter>
  pilots_none?: Maybe<PersonFilter>
}

export enum StarshipOrderBy {
  CARGOCAPACITY_ASC = 'cargoCapacity_ASC',
  CARGOCAPACITY_DESC = 'cargoCapacity_DESC',
  CLASS_ASC = 'class_ASC',
  CLASS_DESC = 'class_DESC',
  CONSUMABLES_ASC = 'consumables_ASC',
  CONSUMABLES_DESC = 'consumables_DESC',
  COSTINCREDITS_ASC = 'costInCredits_ASC',
  COSTINCREDITS_DESC = 'costInCredits_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  CREW_ASC = 'crew_ASC',
  CREW_DESC = 'crew_DESC',
  HYPERDRIVERATING_ASC = 'hyperdriveRating_ASC',
  HYPERDRIVERATING_DESC = 'hyperdriveRating_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISPUBLISHED_ASC = 'isPublished_ASC',
  ISPUBLISHED_DESC = 'isPublished_DESC',
  LENGTH_ASC = 'length_ASC',
  LENGTH_DESC = 'length_DESC',
  MAXATMOSPHERINGSPEED_ASC = 'maxAtmospheringSpeed_ASC',
  MAXATMOSPHERINGSPEED_DESC = 'maxAtmospheringSpeed_DESC',
  MGLT_ASC = 'mglt_ASC',
  MGLT_DESC = 'mglt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PASSENGERS_ASC = 'passengers_ASC',
  PASSENGERS_DESC = 'passengers_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
}

export interface StarshippilotsPerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface StarshipPreviousValues {
  __typename?: 'StarshipPreviousValues'
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>
  /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /**  The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['Int']>
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this starship. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /**  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe.
   **/
  mglt?: Maybe<Scalars['Int']>
  /** The name of this starship. The common name, such as "Death Star". */
  name: Scalars['String']
  /**  The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['Int']>
  updatedAt: Scalars['DateTime']
}

export interface StarshipSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StarshipSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StarshipSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<StarshipSubscriptionFilterNode>
}

export interface StarshipSubscriptionFilterNode {
  cargoCapacity?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  cargoCapacity_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  cargoCapacity_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  cargoCapacity_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  cargoCapacity_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  cargoCapacity_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  cargoCapacity_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  cargoCapacity_gte?: Maybe<Scalars['Float']>
  class?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  class_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  class_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  class_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  class_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  class_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  class_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  class_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  class_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  class_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  class_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  class_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  class_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  class_not_ends_with?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  consumables_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  consumables_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  consumables_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  consumables_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  consumables_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  consumables_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  consumables_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  consumables_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  consumables_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  consumables_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  consumables_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  consumables_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  consumables_not_ends_with?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  costInCredits_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  costInCredits_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  costInCredits_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  costInCredits_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  costInCredits_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  costInCredits_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  costInCredits_gte?: Maybe<Scalars['Float']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  crew?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  crew_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  crew_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  crew_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  crew_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  crew_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  crew_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  crew_gte?: Maybe<Scalars['Int']>
  hyperdriveRating?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  hyperdriveRating_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  hyperdriveRating_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  hyperdriveRating_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  hyperdriveRating_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  hyperdriveRating_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  hyperdriveRating_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  hyperdriveRating_gte?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  length_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  length_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  length_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  length_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  length_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  length_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  length_gte?: Maybe<Scalars['Float']>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>
  mglt?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  mglt_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  mglt_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  mglt_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  mglt_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  mglt_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  mglt_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  mglt_gte?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  passengers?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  passengers_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  passengers_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  passengers_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  passengers_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  passengers_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  passengers_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  passengers_gte?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  pilots_every?: Maybe<PersonFilter>
  pilots_some?: Maybe<PersonFilter>
  pilots_none?: Maybe<PersonFilter>
}

export interface StarshipSubscriptionPayload {
  __typename?: 'StarshipSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Starship>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<StarshipPreviousValues>
}

export interface Subscription {
  __typename?: 'Subscription'
  Asset?: Maybe<AssetSubscriptionPayload>
  Film?: Maybe<FilmSubscriptionPayload>
  Person?: Maybe<PersonSubscriptionPayload>
  Planet?: Maybe<PlanetSubscriptionPayload>
  Species?: Maybe<SpeciesSubscriptionPayload>
  Starship?: Maybe<StarshipSubscriptionPayload>
  Vehicle?: Maybe<VehicleSubscriptionPayload>
}

export interface SubscriptionAssetArgs {
  filter?: Maybe<AssetSubscriptionFilter>
}

export interface SubscriptionFilmArgs {
  filter?: Maybe<FilmSubscriptionFilter>
}

export interface SubscriptionPersonArgs {
  filter?: Maybe<PersonSubscriptionFilter>
}

export interface SubscriptionPlanetArgs {
  filter?: Maybe<PlanetSubscriptionFilter>
}

export interface SubscriptionSpeciesArgs {
  filter?: Maybe<SpeciesSubscriptionFilter>
}

export interface SubscriptionStarshipArgs {
  filter?: Maybe<StarshipSubscriptionFilter>
}

export interface SubscriptionVehicleArgs {
  filter?: Maybe<VehicleSubscriptionFilter>
}

export interface UpdateAsset {
  /** Original File Name */
  fileName?: Maybe<Scalars['String']>
  /** The File Handle */
  handle?: Maybe<Scalars['String']>
  /** The height of the file in case it is an image */
  height?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** The Mime Type */
  mimeType?: Maybe<Scalars['String']>
  /** The Size Of The File */
  size?: Maybe<Scalars['Float']>
  /** The Url Of The Asset */
  url?: Maybe<Scalars['String']>
  /** The width of the file in case it is an image */
  width?: Maybe<Scalars['Float']>
}

export interface UpdateFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title?: Maybe<Scalars['String']>
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface UpdatePerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name?: Maybe<Scalars['String']>
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface UpdatePlanet {
  /** The climate of this planet. */
  climate?: Maybe<Array<Scalars['String']>>
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1
   * standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   **/
  gravity?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The name of the planet */
  name?: Maybe<Scalars['String']>
  /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
  orbitalPeriod?: Maybe<Scalars['Int']>
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotationPeriod?: Maybe<Scalars['Int']>
  /** The percentage of the planet surface that is naturally occurring water or bodies of water. */
  surfaceWater?: Maybe<Scalars['Float']>
  /** The terrain of this planet. */
  terrain?: Maybe<Array<Scalars['String']>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PlanetfilmsFilm>>
  residentsIds?: Maybe<Array<Scalars['ID']>>
  residents?: Maybe<Array<PlanetresidentsPerson>>
}

export interface UpdateSpecies {
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Int']>
  /** The average lifespan of this species in years. */
  averageLifespan?: Maybe<Scalars['Int']>
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>
  /** The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes. */
  eyeColor?: Maybe<Array<SpeciesEyeColor>>
  /** The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs. */
  hairColor?: Maybe<Array<SpeciesHairColor>>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>
  /** The name of this species. */
  name?: Maybe<Scalars['String']>
  /** The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin. */
  skinColor?: Maybe<Array<SpeciesSkinColor>>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<SpeciesfilmsFilm>>
  peopleIds?: Maybe<Array<Scalars['ID']>>
  people?: Maybe<Array<SpeciespeoplePerson>>
}

export interface UpdateStarship {
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>
  /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /**  The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['Int']>
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this starship. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /**  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe.
   **/
  mglt?: Maybe<Scalars['Int']>
  /** The name of this starship. The common name, such as "Death Star". */
  name?: Maybe<Scalars['String']>
  /**  The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<StarshipfilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<StarshippilotsPerson>>
}

export interface UpdateVehicle {
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Int']>
  /**  The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Int']>
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /**  The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this vehicle. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /** The maximum speed of this vehicle in the atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  model?: Maybe<Scalars['String']>
  /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  name?: Maybe<Scalars['String']>
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['Int']>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<VehiclefilmsFilm>>
  pilotsIds?: Maybe<Array<Scalars['ID']>>
  pilots?: Maybe<Array<VehiclepilotsPerson>>
}

/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface Vehicle extends Node {
  __typename?: 'Vehicle'
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Int']>
  /**  The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['Int']>
  films?: Maybe<Array<Film>>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /**  The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this vehicle. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /** The maximum speed of this vehicle in the atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  model?: Maybe<Scalars['String']>
  /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  name: Scalars['String']
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['Int']>
  pilots?: Maybe<Array<Person>>
  updatedAt: Scalars['DateTime']
  /** Meta information about the query. */
  _filmsMeta: QueryMeta
  /** Meta information about the query. */
  _pilotsMeta: QueryMeta
}

/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface VehicleFilmsArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface VehiclePilotsArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface VehicleFilmsMetaArgs {
  filter?: Maybe<FilmFilter>
  orderBy?: Maybe<FilmOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A Vehicle is a single transport craft that does not have hyperdrive capability. */
export interface VehiclePilotsMetaArgs {
  filter?: Maybe<PersonFilter>
  orderBy?: Maybe<PersonOrderBy>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export interface VehiclefilmsFilm {
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>
  /** The episode number of this film. */
  episodeId: Scalars['Int']
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>
  /** The names of the producers of this film. */
  producers?: Maybe<Array<Scalars['String']>>
  /**  The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['DateTime']>
  /** The title of this film */
  title: Scalars['String']
  charactersIds?: Maybe<Array<Scalars['ID']>>
  characters?: Maybe<Array<FilmcharactersPerson>>
  planetsIds?: Maybe<Array<Scalars['ID']>>
  planets?: Maybe<Array<FilmplanetsPlanet>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<FilmspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<FilmstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
}

export interface VehicleFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<VehicleFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<VehicleFilter>>
  cargoCapacity?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  cargoCapacity_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  cargoCapacity_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  cargoCapacity_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  cargoCapacity_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  cargoCapacity_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  cargoCapacity_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  cargoCapacity_gte?: Maybe<Scalars['Int']>
  class?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  class_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  class_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  class_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  class_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  class_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  class_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  class_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  class_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  class_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  class_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  class_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  class_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  class_not_ends_with?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  consumables_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  consumables_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  consumables_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  consumables_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  consumables_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  consumables_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  consumables_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  consumables_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  consumables_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  consumables_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  consumables_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  consumables_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  consumables_not_ends_with?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  costInCredits_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  costInCredits_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  costInCredits_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  costInCredits_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  costInCredits_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  costInCredits_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  costInCredits_gte?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  crew?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  crew_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  crew_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  crew_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  crew_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  crew_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  crew_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  crew_gte?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  length_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  length_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  length_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  length_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  length_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  length_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  length_gte?: Maybe<Scalars['Float']>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>
  model?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  model_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  model_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  model_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  model_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  model_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  model_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  model_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  model_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  model_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  model_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  model_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  model_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  model_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  passengers?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  passengers_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  passengers_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  passengers_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  passengers_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  passengers_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  passengers_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  passengers_gte?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  pilots_every?: Maybe<PersonFilter>
  pilots_some?: Maybe<PersonFilter>
  pilots_none?: Maybe<PersonFilter>
}

export enum VehicleOrderBy {
  CARGOCAPACITY_ASC = 'cargoCapacity_ASC',
  CARGOCAPACITY_DESC = 'cargoCapacity_DESC',
  CLASS_ASC = 'class_ASC',
  CLASS_DESC = 'class_DESC',
  CONSUMABLES_ASC = 'consumables_ASC',
  CONSUMABLES_DESC = 'consumables_DESC',
  COSTINCREDITS_ASC = 'costInCredits_ASC',
  COSTINCREDITS_DESC = 'costInCredits_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  CREW_ASC = 'crew_ASC',
  CREW_DESC = 'crew_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISPUBLISHED_ASC = 'isPublished_ASC',
  ISPUBLISHED_DESC = 'isPublished_DESC',
  LENGTH_ASC = 'length_ASC',
  LENGTH_DESC = 'length_DESC',
  MAXATMOSPHERINGSPEED_ASC = 'maxAtmospheringSpeed_ASC',
  MAXATMOSPHERINGSPEED_DESC = 'maxAtmospheringSpeed_DESC',
  MODEL_ASC = 'model_ASC',
  MODEL_DESC = 'model_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PASSENGERS_ASC = 'passengers_ASC',
  PASSENGERS_DESC = 'passengers_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
}

export interface VehiclepilotsPerson {
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   **/
  birthYear?: Maybe<Scalars['String']>
  /** The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye. */
  eyeColor?: Maybe<Array<PersonEyeColor>>
  /**  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender. */
  gender?: Maybe<PersonGender>
  /** The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair. */
  hairColor?: Maybe<Array<PersonHairColor>>
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>
  /** indicates if the record is published */
  isPublished?: Maybe<Scalars['Boolean']>
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>
  /** The name of this person. */
  name: Scalars['String']
  /** The skin color of this person. */
  skinColor?: Maybe<Array<PersonSkinColor>>
  homeworldId?: Maybe<Scalars['ID']>
  homeworld?: Maybe<PersonhomeworldPlanet>
  filmsIds?: Maybe<Array<Scalars['ID']>>
  films?: Maybe<Array<PersonfilmsFilm>>
  speciesIds?: Maybe<Array<Scalars['ID']>>
  species?: Maybe<Array<PersonspeciesSpecies>>
  starshipsIds?: Maybe<Array<Scalars['ID']>>
  starships?: Maybe<Array<PersonstarshipsStarship>>
  vehiclesIds?: Maybe<Array<Scalars['ID']>>
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
}

export interface VehiclePreviousValues {
  __typename?: 'VehiclePreviousValues'
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Int']>
  /**  The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  class?: Maybe<Scalars['String']>
  /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
  consumables?: Maybe<Scalars['String']>
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** indicates if the record is published */
  isPublished: Scalars['Boolean']
  /**  The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>
  /** The manufacturer of this vehicle. */
  manufacturer?: Maybe<Array<Scalars['String']>>
  /** The maximum speed of this vehicle in the atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
  model?: Maybe<Scalars['String']>
  /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
  name: Scalars['String']
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['Int']>
  updatedAt: Scalars['DateTime']
}

export interface VehicleSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<VehicleSubscriptionFilter>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<VehicleSubscriptionFilter>>
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<ModelMutationType>>
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>
  node?: Maybe<VehicleSubscriptionFilterNode>
}

export interface VehicleSubscriptionFilterNode {
  cargoCapacity?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  cargoCapacity_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  cargoCapacity_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  cargoCapacity_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  cargoCapacity_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  cargoCapacity_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  cargoCapacity_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  cargoCapacity_gte?: Maybe<Scalars['Int']>
  class?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  class_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  class_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  class_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  class_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  class_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  class_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  class_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  class_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  class_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  class_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  class_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  class_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  class_not_ends_with?: Maybe<Scalars['String']>
  consumables?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  consumables_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  consumables_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  consumables_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  consumables_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  consumables_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  consumables_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  consumables_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  consumables_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  consumables_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  consumables_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  consumables_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  consumables_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  consumables_not_ends_with?: Maybe<Scalars['String']>
  costInCredits?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  costInCredits_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  costInCredits_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  costInCredits_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  costInCredits_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  costInCredits_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  costInCredits_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  costInCredits_gte?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  crew?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  crew_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  crew_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  crew_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  crew_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  crew_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  crew_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  crew_gte?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  isPublished?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isPublished_not?: Maybe<Scalars['Boolean']>
  length?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  length_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  length_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  length_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  length_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  length_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  length_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  length_gte?: Maybe<Scalars['Float']>
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>
  model?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  model_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  model_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  model_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  model_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  model_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  model_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  model_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  model_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  model_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  model_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  model_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  model_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  model_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  passengers?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  passengers_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  passengers_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  passengers_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  passengers_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  passengers_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  passengers_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  passengers_gte?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  films_every?: Maybe<FilmFilter>
  films_some?: Maybe<FilmFilter>
  films_none?: Maybe<FilmFilter>
  pilots_every?: Maybe<PersonFilter>
  pilots_some?: Maybe<PersonFilter>
  pilots_none?: Maybe<PersonFilter>
}

export interface VehicleSubscriptionPayload {
  __typename?: 'VehicleSubscriptionPayload'
  mutation: ModelMutationType
  node?: Maybe<Vehicle>
  updatedFields?: Maybe<Array<Scalars['String']>>
  previousValues?: Maybe<VehiclePreviousValues>
}

export type StarWarsCharactersQueryVariables = {}

export type StarWarsCharactersQuery = { __typename?: 'Query' } & {
  allPersons: Array<
    { __typename?: 'Person' } & Pick<
      Person,
      | 'id'
      | 'name'
      | 'gender'
      | 'birthYear'
      | 'skinColor'
      | 'eyeColor'
      | 'hairColor'
    > & { films: Maybe<Array<{ __typename?: 'Film' } & Pick<Film, 'title'>>> }
  >
}

export const StarWarsCharactersDocument = gql`
  query StarWarsCharacters {
    allPersons {
      id
      name
      gender
      birthYear
      skinColor
      eyeColor
      hairColor
      films {
        title
      }
    }
  }
`
export type StarWarsCharactersComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables
  >,
  'query'
>

export const StarWarsCharactersComponent = (
  props: StarWarsCharactersComponentProps,
) => (
  <ApolloReactComponents.Query<
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables
  >
    query={StarWarsCharactersDocument}
    {...props}
  />
)

export type StarWarsCharactersProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  StarWarsCharactersQuery,
  StarWarsCharactersQueryVariables
> &
  TChildProps
export function withStarWarsCharacters<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables,
    StarWarsCharactersProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables,
    StarWarsCharactersProps<TChildProps>
  >(StarWarsCharactersDocument, {
    alias: 'starWarsCharacters',
    ...operationOptions,
  })
}

/**
 * __useStarWarsCharactersQuery__
 *
 * To run a query within a React component, call `useStarWarsCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useStarWarsCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStarWarsCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useStarWarsCharactersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables
  >(StarWarsCharactersDocument, baseOptions)
}
export function useStarWarsCharactersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    StarWarsCharactersQuery,
    StarWarsCharactersQueryVariables
  >(StarWarsCharactersDocument, baseOptions)
}
export type StarWarsCharactersQueryHookResult = ReturnType<
  typeof useStarWarsCharactersQuery
>
export type StarWarsCharactersLazyQueryHookResult = ReturnType<
  typeof useStarWarsCharactersLazyQuery
>
export type StarWarsCharactersQueryResult = ApolloReactCommon.QueryResult<
  StarWarsCharactersQuery,
  StarWarsCharactersQueryVariables
>
