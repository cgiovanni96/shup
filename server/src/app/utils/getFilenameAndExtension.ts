import path from 'path'
const getFilenameAndExtension = (filename: string): [String, String] => {
	return [path.parse(filename).name, path.parse(filename).ext]
}

export default getFilenameAndExtension
