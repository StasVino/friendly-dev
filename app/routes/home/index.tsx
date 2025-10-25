import { useEffect } from 'react';
import type { Route } from './+types/index';
import Hero from '~/components/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Fiendly Dev' },
    { name: 'description', content: 'Custom wesite development!' },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
