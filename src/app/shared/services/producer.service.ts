import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Director} from '../models/director';
import {Producer} from '@shared/models/producer';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Producer[]> {
    return await this.httpClient.get<Director[]>('api/producers').toPromise();
  }

  async save(producer: Producer): Promise<void> {
    await this.httpClient.post<Producer>('api/producers', producer).toPromise();
  }

  async update(producer: Producer): Promise<void> {
    await this.httpClient.put<Producer>('api/producers', producer).toPromise();
  }

  async delete(producer: Producer): Promise<void> {
    await this.httpClient.request<Producer>('DELETE', 'api/producers', {body: producer}).toPromise();
  }
}
