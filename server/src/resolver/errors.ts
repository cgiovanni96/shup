import ItemResponse from '../database/schema/response/ItemResponse'

export const GenericError: ItemResponse = {
	errors: [
		{
			field: 'item',
			message: 'Something went wrong'
		}
	]
}
