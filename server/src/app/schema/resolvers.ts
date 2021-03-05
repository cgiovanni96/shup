import { NonEmptyArray } from 'type-graphql'
import BaseResolver from '../../resolver/base'

type ResolverArray = NonEmptyArray<Function> | NonEmptyArray<string>

export default [BaseResolver] as ResolverArray
