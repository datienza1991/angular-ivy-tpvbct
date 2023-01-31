export interface TechnicalRequestModel {
  id?: string;
  name: string;
  selected?: boolean;
  articles: Article[];
}

export interface Article {
  id?: string;
  name?: string;
  quantity?: number;
  selected?: boolean;
}
