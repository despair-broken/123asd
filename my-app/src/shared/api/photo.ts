import type { Photo } from "../types/photo";

export const getPhotos = async (signal?: AbortSignal): Promise<Photo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3', { signal });
    if (!response.ok) {
        throw new Error('Failed to fetch photos');
    }
    const data: Photo[] = await response.json();
    return data;
};