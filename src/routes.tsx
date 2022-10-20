import React from 'react';

import ChildToParent from '@/examples/ChildToParent';
import Home from '@/Home';

type routes = {
	path: () => string;
	component: JSX.Element;
}

type pages = 'home' | 'childToParent';

const routes: {
	[key in pages]: routes;
} =
	{
		home: {
			path: () => '/',
			component: <Home />
		},
		childToParent: {
			path: () => '/examples/child-to-parent',
			component: <ChildToParent />
		}
	};

export default routes;
