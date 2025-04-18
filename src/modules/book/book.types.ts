// Define the structure for a BookDocument in the database and Typesense
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

// Define the structure for the Typesense search result
export interface TypesenseSearchResult<T> {
  hits: TypesenseHit<T>[];
  found: number;
  out_of: number;
  facet_counts: unknown[]; 
  search_time_ms: number;
}

// Define the structure for the book input data when creating a new book
export interface CreateBookInput {
  title: string;
  author: string;
  summary: string;
  genre: string;
  rating: number;
  userId: string;
}
