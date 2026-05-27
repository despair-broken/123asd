import type { Photo } from "../../types/photo.ts";
import styles from "./Card.module.scss";
type CardVariant = 'primary' | 'secondary' | 'success';
interface CardProps {
    photo: Photo;
    variant?: CardVariant;
}
export const Card = ({ photo, variant = 'primary' }: CardProps) => {
    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <img
                className={styles.thumbnail}
                src={photo.thumbnailUrl}
                alt={photo.title}
                onError={(e) => {
                    e.currentTarget.src =
                        `https://picsum.photos/600/400?random=${photo.id}`
                }}
            />
            <img
                className={styles.image}
                src={photo.url}
                alt={photo.title}
                onError={(e) => {
                    e.currentTarget.src =
                        `https://picsum.photos/80/80?random=${photo.id}`
                }}
            />
            <div className={styles.content}>
                <p className={styles.id}>
                    #{photo.id}
                </p>

                <h3 className={styles.title}>
                    {photo.title}
                </h3>
            </div>
        </div>
    );
};