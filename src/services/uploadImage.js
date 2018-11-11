export function encodeAsURL(file) {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();
		reader.onloadend = () => resolve(reader.result)
		reader.readAsDataURL(file);
	})

}