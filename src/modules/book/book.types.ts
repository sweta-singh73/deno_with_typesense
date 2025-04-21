
export interface BookDocument {
  id: string;
  title: string;
  author: string;
  summary: string;
  genre: string;
  rating: number;
  userId: string;
}


export interface TypesenseHit<T> {
  document: T;
}


export interface FacetCount {
  field_name: string;
  counts: {
    count: number;
    value: string;
  }[];
  stats: Record<string, unknown>; 
}


export interface TypesenseSearchResult<T> {
  hits: TypesenseHit<T>[];
  found: number;
  out_of: number;
  facet_counts: FacetCount[];
  search_time_ms: number;
}

export interface CreateBookInput {
  title: string;
  author: string;
  summary: string;
  genre: string;
  rating: number;
  userId: string;
}
