import { createWriteStream } from 'fs'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'

@Resolver()
export default class ImageResolver {
	@Query()
	getImage(): string {
		console.log('DIR', `${__dirname}../../..`)
		return 'image'
	}

	@Mutation(() => Boolean)
	async addImage(
		@Arg('file', () => GraphQLUpload)
		{ filename, createReadStream }: FileUpload
	): Promise<boolean> {
		return new Promise(async (resolve, reject) => {
			const writeStream = createWriteStream(
				`${__dirname}/../../../images/${filename}`,
				{ autoClose: true }
			)
			createReadStream()
				.pipe(writeStream)
				.on('finish', () => resolve(true))
				.on('error', () => reject(false))
		})
	}
}
