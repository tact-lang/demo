import { Posts } from '@features/blog/models/post';

export type GroupedPosts = ReadonlyArray<{ year: number; posts: Posts }>;
