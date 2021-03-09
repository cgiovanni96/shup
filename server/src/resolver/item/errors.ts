import ItemResponse from '../../database/schema/response/ItemResponse'

export const ItemAlreadyExists: ItemResponse = {
	errors: [
		{
			field: 'item/name',
			message: 'An item with this name already exists'
		}
	]
}

export const GenericError: ItemResponse = {
	errors: [
		{
			field: 'item',
			message: 'Something went wrong'
		}
	]
}
