import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import Item from '../../database/entity/Item'
import CreateIteamInputType from './types/CreateItemInputType'

@Resolver()
export default class ItemResolver {
	@Query(() => [Item], { nullable: true })
	async getItems(): Promise<Item[] | undefined> {
		return Item.find()
	}

	@Query(() => Item, { nullable: true })
	async getItem(@Arg('id') id: string): Promise<Item | undefined> {
		const item = await Item.findOne(id)
		if (!item) return undefined
		return item
	}

	@Mutation(() => Item, { nullable: true })
	async createItem(
		@Arg('data') { name, category, image, note }: CreateIteamInputType
	): Promise<Item | undefined> {
		try {
			const newItem = await Item.create({ name, category, image, note })
			return newItem.save()
		} catch {
			return undefined
		}
	}
}
