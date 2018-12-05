import React from 'react';
import PropTypes from 'prop-types';

import { getClassNames } from '../utls/getClassNames';

const Box = ({ children, justify,items, w, h, bg, text, font, type, className }) => {
	const Tag = type;
	const background = getClassNames(bg, 'bg-');
	const texts = getClassNames(text, 'text-');
	const fonts = getClassNames(font, 'font-');
	const classNames =`w-${w} ` +  `h-${h} ` +   'flex ' + `justify-${justify} ` + `items-${items} `   + background + texts + fonts + className;
	return <Tag className={classNames}>{children}</Tag>;
};

Box.propTypes = {
	justify: PropTypes.string,
	items: PropTypes.string,
	w: PropTypes.string,
	h: PropTypes.string,
	bg: PropTypes.arrayOf(PropTypes.string),
	text: PropTypes.arrayOf(PropTypes.string),
	font: PropTypes.arrayOf(PropTypes.string),
	type: PropTypes.oneOf(['article', 'footer', 'header', 'nav', 'div', 'section']),
	children: PropTypes.any
};

Box.defaultProps = {	
	justify: 'start',
	items: 'start',
	w: 'auto',
	h: 'auto',
	bg: ['primary'],
	text: ['white'],
	font: ['normal'],
	type: 'div'
};

export default Box;
