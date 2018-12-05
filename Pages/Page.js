import React, { Component } from 'react';

import Box from '../Components/Box';

class Page extends Component {
	render() {
		return (
			<Box w='1/2' h='full' justify='center' items='center' type="header" bg={['orange-darkest', 'md:orange']} text={['5xl', 'red']} font={['serif', 'bold']} className="uppercase" >
				<p>hello</p>
			</Box>
		);
	}
}

export default Page;
