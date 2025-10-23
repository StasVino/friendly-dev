import { useEffect } from 'react';
import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Fiendly Dev' },
    { name: 'description', content: 'Custom wesite development!' },
  ];
}

export default function Home() {
  return <section>"My App"</section>;
}
