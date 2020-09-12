import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '@shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Game[]> {
    return await this.httpClient.get<Game[]>('api/games').toPromise();
  }

  async getMoreRented(): Promise<Game> {
    return await this.httpClient.get<Game>('api/games/more-rented').toPromise();
  }

  async save(game: Game): Promise<void> {
    await this.httpClient.post<Game>('api/games', game).toPromise();
  }

  async update(game: Game): Promise<void> {
    await this.httpClient.put<Game>('api/games', game).toPromise();
  }

  async delete(game: Game): Promise<void> {
    await this.httpClient.request<Game>('DELETE', 'api/games', {body: game}).toPromise();
  }
}
