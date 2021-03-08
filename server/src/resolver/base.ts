import { Query, Resolver } from 'type-graphql'

@Resolver()
export default class BaseResolver {
	@Query()
	hello(): string {
		console.log('DIR', __dirname)
		return 'Hello world'
	}
}
