export const getClassNames = (list, prefix) => {
	let str = '';
	list.forEach(item => {
		const string = item.split(':');
		if (string.length === 2) {
			str += string[0] + ':' + prefix + string[1] + ' ';
		} else {
			str += prefix + item + ' ';
		}
	});
	return str;
};
