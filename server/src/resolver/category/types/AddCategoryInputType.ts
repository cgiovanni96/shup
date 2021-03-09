import { Field, InputType } from 'type-graphql'

@InputType()
export default class AddCategoryInputType {
	@Field()
	name: string
}
