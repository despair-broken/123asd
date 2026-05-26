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
            />

            <img
                className={styles.image}
                src={photo.url}
                alt={photo.title}
            />

            <div className={styles.content}>
                <p className={styles.id}>
                    #{photo.id}
                </p>

                <h3 className={styles.title}>
                    {photo.title}
                </h3>

                <p className={styles.album}>
                    Album: {photo.albumId}
                </p>
            </div>
        </div>
    );
};