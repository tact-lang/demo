export interface Post {
  url: string;
  title: string;
  abstract: string;
  date: Date;
}

export type Posts = ReadonlyArray<Post>;
