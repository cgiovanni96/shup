import { ObjectType, Field } from 'type-graphql'
import Item from '../../entity/Item'
import FieldError from '../FieldError'

@ObjectType()
export default class ItemResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]

	@Field(() => Item, { nullable: true })
	item?: Item
}
