import { Field, InputType } from 'type-graphql'

@InputType()
export default class CreateIteamInputType {
	@Field()
	name: string

	@Field()
	category: string

	@Field({ nullable: true })
	note?: string

	@Field({ nullable: true })
	imageId?: string
}
