import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { NOT_UNIQUE_NAME } from '../../app/utils/constants'
import Image from '../../database/entity/Image'
import Item from '../../database/entity/Item'
import ItemResponse from '../../database/schema/response/ItemResponse'
import { GenericError } from '../errors'
import { ItemAlreadyExists } from './errors'
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

	@Mutation(() => ItemResponse)
	async addItem(
		@Arg('data') { name, categoryId, note, imageId }: CreateIteamInputType
	): Promise<ItemResponse> {
		try {
			let image: Image | undefined
			if (imageId) image = await Image.findOne(imageId)
			const item = await Item.create({
				name,
				categoryId,
				note,
				image
			}).save()
			return { item }
		} catch (e) {
			if (e.code === NOT_UNIQUE_NAME) return ItemAlreadyExists
			return GenericError
		}
	}
}
