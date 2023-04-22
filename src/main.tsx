import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Root, About } from './routes';
import './index.css';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Root />,
		},
		{
			path: '/about',
			element: <About />,
		},
	],
	{ basename: '/vite-deploy-demo/' }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
