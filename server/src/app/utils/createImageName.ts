import getFilenameAndExtension from './getFilenameAndExtension'

const createImageName = (filename: string) => {
	const [name, extension] = getFilenameAndExtension(filename)
	const uuid = Date.now()
	return `${name}-${uuid}${extension}`
}

export default createImageName
