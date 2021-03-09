import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import Image from '../../database/entity/Image'
import Item from '../../database/entity/Item'
import CreateIteamInputType from './types/AddItemInputType'

@Resolver()
export default class ItemResolver {
	@Query(() => [Item], { nullable: true })
	async getItems(): Promise<Item[] | undefined> {
		return Item.find()
	}

	@Query(() => Item, { nullable: true })
	async getItem(@Arg('id') id: string): Promise<Item | undefined> {
		const item = await Item.findOne(id, { relations: ['image'] })
		if (!item) return undefined
		return item
	}

	@Mutation(() => Item, { nullable: true })
	async addItem(
		@Arg('data') { name, categoryId, note, imageId }: CreateIteamInputType
	): Promise<Item | undefined> {
		try {
			let image: Image | undefined
			if (imageId) image = await Image.findOne(imageId)
			const newItem = await Item.create({ name, categoryId, note, image })
			return newItem.save()
		} catch {
			return undefined
		}
	}
}
