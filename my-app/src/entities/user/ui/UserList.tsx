import type { User } from '../../../shared/types/user';
import styles from './UserList.module.scss';

interface UserListProps {
    users: User[];
}

export const UserList = ({ users }: UserListProps) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>User List</h2>

            <ul className={styles.list}>
                {users.map((user) => (
                    <li key={user.id} className={styles.item}>
                        <p className={styles.name}>
                            {user.name}
                        </p>

                        <p className={styles.info}>
                            Город: {user.address.city}
                        </p>

                        <p className={styles.info}>
                            Компания: {user.company.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};