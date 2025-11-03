import { useEffect } from 'react';
import type { Route } from './+types/index';
import FeaturedProjects from '~/components/FeaturedProjects';
import type { Project } from '~/types';
import { promiseHooks } from 'v8';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom wesite development!' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} coute={2} />
    </>
  );
};

export default HomePage;
