import { Field, InputType } from 'type-graphql'

@InputType()
export default class AddIteamInputType {
	@Field()
	name: string

	@Field()
	categoryId: string

	@Field({ nullable: true })
	note?: string

	@Field({ nullable: true })
	imageId?: string
}
