import {Protagonist} from '@shared/models/protagonist';

export interface Game {
  id: string;
  name: string;
  price: number;
  releaseDate: any;
  directorId: string;
  producerId: string;
  technologyId: string;
  protagonists: Protagonist[];
}
