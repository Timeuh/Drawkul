/**
 * ARTIST RELATED TYPES
 */

// artist from database
export type Artist = {
  id: number;
  name: string;
}

// artist payload for creation
export type ArtistCreationPayload = Omit<Artist, 'id'>;