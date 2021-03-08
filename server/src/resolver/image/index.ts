import { createWriteStream } from 'fs'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import createImageName from '../../app/utils/createImageName'
import Image from '../../database/entity/Image'

@Resolver()
export default class ImageResolver {
	@Query()
	getImage(): string {
		console.log('DIR', `${__dirname}../../..`)
		console.log('now', Date.now())
		return 'image'
	}

	@Mutation(() => Image, { nullable: true })
	async addImage(
		@Arg('file', () => GraphQLUpload)
		{ filename, createReadStream }: FileUpload
	): Promise<Image | undefined> {
		return new Promise(async (resolve, reject) => {
			const imageName = createImageName(filename)
			const writeStream = createWriteStream(
				`${__dirname}/../../../images/${imageName}`,
				{ autoClose: true }
			)
			createReadStream()
				.pipe(writeStream)
				.on('error', () => reject(undefined))
				.on('finish', async () => {
					const newImage = await Image.create({ path: imageName })
					resolve(newImage.save())
				})
		})
	}
}
