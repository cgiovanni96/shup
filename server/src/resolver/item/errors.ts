import ItemResponse from '../../model/schema/response/ItemResponse'

export const ItemAlreadyExists: ItemResponse = {
	errors: [
		{
			field: 'item/name',
			message: 'An item with this name already exists'
		}
	]
}
