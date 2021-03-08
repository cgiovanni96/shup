import { NonEmptyArray } from 'type-graphql'
import BaseResolver from '../../resolver/base'
import ItemResolver from '../../resolver/item'

type ResolverArray = NonEmptyArray<Function> | NonEmptyArray<string>

export default [BaseResolver, ItemResolver] as ResolverArray
