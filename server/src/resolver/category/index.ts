import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { NOT_UNIQUE_NAME } from '../../app/utils/constants'
import Category from '../../database/entity/Category'
import CategoryResponse from '../../database/schema/response/CategoryResponse'
import { GenericError } from '../errors'
import { CategoryAlreadyExists } from './errors'
import AddCategoryInputType from './types/AddCategoryInputType'

@Resolver()
export default class CategoryResolver {
	@Query(() => [Category])
	async getCategories(): Promise<Category[]> {
		return Category.find()
	}

	@Mutation(() => CategoryResponse, { nullable: true })
	async addCategory(
		@Arg('data') { name }: AddCategoryInputType
	): Promise<CategoryResponse> {
		try {
			const category = await Category.create({ name }).save()
			return { category }
		} catch (e) {
			if ((e.code = NOT_UNIQUE_NAME)) return CategoryAlreadyExists
			return GenericError
		}
	}
}
