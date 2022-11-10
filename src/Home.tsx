import React from 'react';

import routes from './routes';

export default () => {
	return (
		<>
			<h1>さんぷる</h1>
			<ol>
				<li><a href={routes.childToParent.path()}>子から親</a></li>
				<li><a href={routes.lazyHooks.path()}>呼んだり呼ばなかったり</a></li>
				<li>もげた</li>
			</ol>
		</>
	);
};
