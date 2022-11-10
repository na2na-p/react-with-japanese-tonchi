import React from 'react';

import ChildToParent from '@/examples/ChildToParent';
import Home from '@/Home';
import LazyHooks from '@/examples/LazyHooks';

type routes = {
	path: () => string;
	component: JSX.Element;
}

type pages = 'home' | 'childToParent' | 'lazyHooks';
const routes: {
	[P in pages]: routes;
} =
	{
		home: {
			path: () => '/',
			component: <Home />
		},
		childToParent: {
			path: () => '/examples/child-to-parent',
			component: <ChildToParent />
		},
		lazyHooks: {
			path: () => '/examples/lazy-hooks',
			component: <LazyHooks />
		}
	};

export default routes;
