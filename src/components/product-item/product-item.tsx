import classNames from 'classnames';
import styles from './product-item.module.scss';

export interface ProductItemProps {
    className?: string;
    title: string;
    price: number;
    imageUrl: string;
    color: string;
}

export const ProductItem = ({ className, title, price, imageUrl, color }: ProductItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.price}>${price.toFixed(2)} USD</span>
            </div>
            <div className={styles.image} style={{backgroundImage: `url("${imageUrl}")`, backgroundColor: `${color}`}} />
        </div>
    );
};
