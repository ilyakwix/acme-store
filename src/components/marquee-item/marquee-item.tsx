import classNames from 'classnames';
import styles from './marquee-item.module.scss';

export interface MarqueeItemProps {
    className?: string;
    title: string;
    imageUrl: string;
}

export const MarqueeItem = ({ className, title, imageUrl }: MarqueeItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.image} style={{ backgroundImage: `url("${imageUrl}")` }} />
        </div>
    );
};
