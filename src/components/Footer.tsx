import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>© {new Date().getFullYear()} React Attack. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
