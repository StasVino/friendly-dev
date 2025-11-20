export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Post = {
  id: string;
  body: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StarpiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type StarpiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;

  date: string;
  body: string;
  featured: boolean;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};
