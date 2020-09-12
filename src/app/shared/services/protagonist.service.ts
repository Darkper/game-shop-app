import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Director} from '@shared/models/director';
import {Protagonist} from '@shared/models/protagonist';

@Injectable({
  providedIn: 'root'
})
export class ProtagonistService {
  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Protagonist[]> {
    return await this.httpClient.get<Director[]>('api/protagonists').toPromise();
  }

  async save(protagonist: Protagonist): Promise<void> {
    await this.httpClient.post<Protagonist>('api/protagonists', protagonist).toPromise();
  }

  async update(protagonist: Protagonist): Promise<void> {
    await this.httpClient.put<Protagonist>('api/protagonists', protagonist).toPromise();
  }

  async delete(protagonist: Protagonist): Promise<void> {
    await this.httpClient.request<Protagonist>('DELETE', 'api/protagonists', {body: protagonist}).toPromise();
  }
}
