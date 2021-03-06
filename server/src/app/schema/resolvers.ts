import { NonEmptyArray } from 'type-graphql'
import BaseResolver from '../../resolver/base'
import CategoryResolver from '../../resolver/category'
import ImageResolver from '../../resolver/image'
import ItemResolver from '../../resolver/item'

type ResolverArray = NonEmptyArray<Function> | NonEmptyArray<string>

export default [
	BaseResolver,
	ItemResolver,
	ImageResolver,
	CategoryResolver
] as ResolverArray
