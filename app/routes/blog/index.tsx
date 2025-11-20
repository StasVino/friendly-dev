import { useState } from 'react';
import type { Route } from './+types/index';
import type { Post, StrapiResponse, StarpiPost } from '~/types';
import PostCard from '~/components/PostCard';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const json: StrapiResponse<StarpiPost> = await res.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    date: item.date,
    body: item.body,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/image/no-image.png',
  }));

  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 2;

  const { posts } = loaderData;

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLocaleLowerCase();
    return (
      post.title.toLocaleLowerCase().includes(query) ||
      post.excerpt.toLocaleLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(posts.length / postPerPage);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-white text-3xl font-bold shadow">My Blog</h2>
      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      <div className="space-y-8">
        {currentPosts.length === 0 ? (
          <p className="text-gray-400 text-center ">No Posts Found</p>
        ) : (
          currentPosts.map((post) => <PostCard post={post} key={post.slug} />)
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BlogPage;
