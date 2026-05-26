import type { User } from "../types/user";

export const getUsers = async (signal?: AbortSignal): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data: User[] = await response.json();
    return data;
}; 
