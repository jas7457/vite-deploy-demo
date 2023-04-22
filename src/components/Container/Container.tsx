import React from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={clsx(styles.container, className)}>{children}</div>;
}
