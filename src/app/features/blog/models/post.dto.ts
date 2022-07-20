import { Post } from '@features/blog/models/post';

export type PostDto = Omit<Post, 'date'> & { date: number };
