import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import Category from '../../database/entity/Category'

@Resolver()
export default class CategoryResolver {
	@Query(() => [Category])
	async getCategories(): Promise<Category[]> {
		return Category.find()
	}

	@Mutation(() => Category, { nullable: true })
	async addCategory(@Arg('name') name: string): Promise<Category | undefined> {
		try {
			const newCategory = await Category.create({ name })
			return newCategory.save()
		} catch (e) {
			return undefined
		}
	}
}
