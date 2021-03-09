import {
	Arg,
	Ctx,
	FieldResolver,
	Mutation,
	Query,
	Resolver,
	Root
} from 'type-graphql'
import Context from '../../app/server/context'
import { NOT_UNIQUE_NAME } from '../../app/utils/constants'
import Category from '../../model/entity/Category'
import Image from '../../model/entity/Image'
import Item from '../../model/entity/Item'
import ItemResponse from '../../model/schema/response/ItemResponse'
import { GenericError } from '../errors'
import { ItemAlreadyExists } from './errors'
import CreateIteamInputType from './types/AddItemInputType'

@Resolver(Item)
export default class ItemResolver {
	@FieldResolver(() => Category)
	category(@Root() item: Item, @Ctx() { loaders }: Context) {
		return loaders.categoryLoader.load(item.categoryId)
	}

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

	@Mutation(() => Boolean)
	async deleteItem(@Arg('id') id: string): Promise<boolean> {
		try {
			await Item.delete({ id })
			return true
		} catch {
			return false
		}
	}
}
