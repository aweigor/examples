import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag: React.FC<HtagProps> = ({ tag, children }): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>;
		case 'h2':
			return <h2>{children}</h2>;
		case 'h3':
			return <h3>{children}</h3>;
		default:
			return <></>;
	}
};