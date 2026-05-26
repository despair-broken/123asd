import { UserList } from "../entities/user/ui/UserList";
import { useEffect, useState } from "react";
import type { User } from "../shared/types/user";
import { getUsers } from "../shared/api/users";
import styles from "./App.module.scss";
import { Card } from '../shared/ui/Card';
import { getPhotos } from "../shared/api/photo";
import type { Photo } from "../shared/types/photo";

/** @format */
const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const usersResponse = await getUsers(controller.signal);
        const photosResponse = await getPhotos(controller.signal);
        setUsers(usersResponse);
        setPhotos(photosResponse);
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }
        setError('Failed to fetch data');
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Dashboard
        </h1>

        {error && (
          <p className={styles.error}>
            {error}
          </p>
        )}

        <div className={styles.cards}>
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              photo={photo}
              variant={
                index === 0
                  ? 'primary'
                  : index === 1
                    ? 'secondary'
                    : 'success'
              }
            />
          ))}
        </div>

        <UserList users={users} />
      </div>
    </div>
  );
};
export default App;
