import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rent} from '@shared/models/rent';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Rent[]> {
    return await this.httpClient.get<Rent[]>('api/rents').toPromise();
  }

  async getAllCurrentDay(): Promise<Rent[]> {
    return await this.httpClient.get<Rent[]>(`api/rents/date/${moment(moment.now()).format(moment.HTML5_FMT.DATE)}`).toPromise();
  }

  async save(game: Rent): Promise<void> {
    await this.httpClient.post<Rent>('api/rents', game).toPromise();
  }

  async update(game: Rent): Promise<void> {
    await this.httpClient.put<Rent>('api/rents', game).toPromise();
  }

  async delete(game: Rent): Promise<void> {
    await this.httpClient.request<Rent>('DELETE', 'api/rents', {body: game}).toPromise();
  }
}
