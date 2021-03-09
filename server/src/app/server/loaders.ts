import categoryLoader from '../../model/loader/categoryLoader'

export type Loaders = {
	categoryLoader: ReturnType<typeof categoryLoader>
}

export const loaders: Loaders = {
	categoryLoader: categoryLoader()
}

export default Loaders
