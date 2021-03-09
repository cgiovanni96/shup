import { ObjectType, Field } from 'type-graphql'
import Category from '../../entity/Category'
import FieldError from '../FieldError'

@ObjectType()
export default class CategoryResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]

	@Field(() => Category, { nullable: true })
	category?: Category
}
