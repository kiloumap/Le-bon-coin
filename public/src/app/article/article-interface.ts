export interface Article {
  _id?: string;
  title: string;
  description: string;
  localisation: number;
  price: string;
  image: string;
  user: any[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ArticleState {
  readonly articles: Article[];
}
