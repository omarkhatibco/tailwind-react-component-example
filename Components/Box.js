import React from 'react';
import PropTypes from 'prop-types';

import { getClassNames } from '../utls/getClassNames';

const Box = props => {
	const { type, children } = props;
	const Tag = type;

	const className = getClassNames(props);
	return <Tag className={className}>{children}</Tag>;
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
