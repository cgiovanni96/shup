import CategoryResponse from '../../model/schema/response/CategoryResponse'

export const CategoryAlreadyExists: CategoryResponse = {
	errors: [
		{
			field: 'category/name',
			message: 'A category with the same name already exists'
		}
	]
}
