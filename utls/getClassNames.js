import classnames from 'classnames';
export const getClassNames = (reactProps, prefix = ':') => {
	const TailwindStaticClasses = [
		'container',
		'clearfix',
		'listReset',
		'italic',
		'roman',
		'uppercase',
		'lowercase',
		'capitalize',
		'normalCase',
		'underline',
		'lineThrough',
		'noUnderline',
		'antialiased',
		'subpixelAntialiased',
		'truncate'
	];

	const TailwindSpecialClasses = ['display', 'position', 'visibility'];
	const TailwindClasses = [
		'float',
		'overflow',
		'scrolling',
		'pin',
		'z',
		'text',
		'font',
		'tracking',
		'leading',
		'align',
		'whitespace',
		'break',
		'bg',
		'border',
		'rounded',
		'flex',
		'items',
		'content',
		'self',
		'justify',
		'p',
		'px',
		'py',
		'pt',
		'pr',
		'pb',
		'pl',
		'm',
		'mx',
		'my',
		'mt',
		'mr',
		'mb',
		'ml',
		'nm',
		'nmx',
		'nmy',
		'nmt',
		'nmr',
		'nmb',
		'nml',
		'w',
		'min-w',
		'max-w',
		'h',
		'min-h',
		'max-h',
		'table',
		'cursor',
		'pointer-events',
		'resize',
		'select',
		'appearance',
		'shadow',
		'object',
		'opacity',
		'outline',
		'fill',
		'stroke'
	];

	const classNamesArray = Object.keys(reactProps).map(key => {
		const value = reactProps[key];
		const type = typeof reactProps[key];

		if (TailwindStaticClasses.includes(key)) {
			if (type === 'boolean') {
				return `${key}`;
			}
			if (type === 'string') {
				return `${value}${prefix}${key}`;
			}
			if (type === 'object') {
				return (
					Array.isArray(value) &&
					value.map(val => {
						return `${val}${prefix}${key}`;
					})
				);
			}
		}
		if (TailwindSpecialClasses.includes(key)) {
			if (type === 'string') {
				return value;
			}
			if (type === 'object') {
				return (
					Array.isArray(value) &&
					value.map(val => {
						const str = val.split(prefix);
						return str.length === 2 ? `${str[0]}${prefix}${str[1]}` : `${str}`;
					})
				);
			}
		}

		if (TailwindClasses.includes(key)) {
			console.log(key.includes('nm'));
			const editedKey = key.includes('nm') ? key.replace('n', '-') : key;
			if (type === 'boolean') {
				return `${editedKey}`;
			}
			if (type === 'string') {
				return `${editedKey}-${value}`;
			}
			if (type === 'object') {
				return (
					Array.isArray(value) &&
					value.map(val => {
						if (val === editedKey) {
							return key;
						}
						const str = val.split(prefix);
						return str.length === 2 ? `${str[0]}${prefix}${editedKey}-${str[1]}` : `${editedKey}-${str}`;
					})
				);
			}
		}
	});
	const { className } = reactProps;
	return classnames(classNamesArray, className);
};
