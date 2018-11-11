export function encodeAsURL(file) {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();
		reader.onloadend = () => {
			var k = reader.result
			var i = k.indexOf(';') + 8
			k = k.substring(i);
			resolve(k)
		}
		reader.readAsDataURL(file);
	})

}