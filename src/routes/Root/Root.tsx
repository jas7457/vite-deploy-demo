import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Root.module.scss';

export function Root() {
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{[
						{ to: '/', children: 'Home' },
						{ to: '/about', children: 'About' },
						{ to: '/instructions', children: 'Instructions' },
					].map((link) => (
						<li key={link.to}>
							<NavLink to={link.to} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>
								{link.children}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}
