import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '@shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Client[]> {
    return await this.httpClient.get<Client[]>('api/clients').toPromise();
  }

  async save(client: Client): Promise<void> {
    await this.httpClient.post<Client>('api/clients', client).toPromise();
  }

  async update(client: Client): Promise<void> {
    await this.httpClient.put<Client>('api/clients', client).toPromise();
  }

  async delete(client: Client): Promise<void> {
    await this.httpClient.request<Client>('DELETE', 'api/clients', {body: client}).toPromise();
  }
}
