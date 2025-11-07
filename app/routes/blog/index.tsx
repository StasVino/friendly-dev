import type { Route } from './+types/index';
import { Link } from 'react-router';
import type { PostMeta } from '~/types';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);

  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  return <h1 className="text-white text-3xl font-bold">My Blog</h1>;
};

export default BlogPage;
