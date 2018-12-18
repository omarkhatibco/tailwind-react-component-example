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
	display: ['flex'],
	type: 'div'
};

export default Box;
