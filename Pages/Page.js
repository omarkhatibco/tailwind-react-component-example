import React, { Component } from 'react';

import Box from '../Components/Box';

class Page extends Component {
	render() {
		return (
			<Box
				w={['full', 'md:1/2']}
				nmt={['12', 'md:6']}
				display={['flex', 'md:inline-flex']}
				h="full"
				type="header"
				bg={['orange-darkest', 'md:orange']}
				text={['5xl', 'red']}
				font={['serif', 'bold']}
				underline
				container={['md', 'lg']}
				className="omar"
			>
				<p>hello</p>
			</Box>
		);
	}
}

export default Page;
