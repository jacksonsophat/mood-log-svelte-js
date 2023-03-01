// const { radomBytes } = await import('node:crypto')

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
};

export const generateUsername = (name) => {
    const id = Math.floor(Math.random() * (500))
    return `${name.slice(0, 5)}${id}`
}


export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    return `http://127.0.0.1:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}



export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};