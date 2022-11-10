import React, { useState } from 'react';

import Divider from '@components/Divider';

import Child from './Child';

export default () => {
	const [name, setName] = useState('');

	return <>
		<div>子から親に(見かけ上は)値が渡るやつ</div>
		<Divider />
		<Child setName={setName} />
		<Divider />
		<div>名前: {name}</div>
	</>;
};
