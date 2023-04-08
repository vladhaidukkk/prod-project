import { type Viewer } from 'entities/auth';

export const enum ArticleType {
  IT = 'IT',
  Science = 'SCIENCE',
  Economics = 'ECONOMICS',
}

export const enum ArticleBlockType {
  Text = 'TEXT',
  Image = 'IMAGE',
  Code = 'CODE',
}

type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
};

export type ArticleTextBlock = ArticleBlockBase & {
  type: ArticleBlockType.Text;
  paragraphs: string[];
  title?: string;
};

export type ArticleImageBlock = ArticleBlockBase & {
  type: ArticleBlockType.Image;
  src: string;
  title?: string;
};

export type ArticleCodeBlock = ArticleBlockBase & {
  type: ArticleBlockType.Code;
  code: string;
};

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  user: Viewer;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
};

export type ArticleDetailsSchema = {
  data?: Article;
  loading: boolean;
  error?: string;
};

export type ArticleView = 'list' | 'tile';
