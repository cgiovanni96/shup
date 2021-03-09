import DataLoader from 'dataloader'
import Category from '../entity/Category'

const categoryLoader = () =>
	new DataLoader<string, Category>(async (categoryIds) => {
		const categories = await Category.findByIds(categoryIds as string[])
		const categoriesArray: Record<string, Category> = {}
		categories.forEach((category) => {
			categoriesArray[category.id] = category
		})

		return categoryIds.map((id) => categoriesArray[id])
	})

export default categoryLoader
