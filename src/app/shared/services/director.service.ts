import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Director} from '@shared/models/director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Director[]> {
    return await this.httpClient.get<Director[]>('api/directors').toPromise();
  }

  async save(director: Director): Promise<void> {
    await this.httpClient.post<Director>('api/directors', director).toPromise();
  }

  async update(director: Director): Promise<void> {
    await this.httpClient.put<Director>('api/directors', director).toPromise();
  }

  async delete(director: Director): Promise<void> {
    await this.httpClient.request<Director>('DELETE', 'api/directors', {body: director}).toPromise();
  }
}
