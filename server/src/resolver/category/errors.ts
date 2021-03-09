import CategoryResponse from '../../database/schema/response/CategoryResponse'

export const CategoryAlreadyExists: CategoryResponse = {
	errors: [
		{
			field: 'category/name',
			message: 'A category with the same name already exists'
		}
	]
}
