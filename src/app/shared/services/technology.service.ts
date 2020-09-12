import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Technology} from '@shared/models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Technology[]> {
    return await this.httpClient.get<Technology[]>('api/technologies').toPromise();
  }

  async save(technology: Technology): Promise<void> {
    await this.httpClient.post<Technology>('api/technologies', technology).toPromise();
  }

  async update(technology: Technology): Promise<void> {
    await this.httpClient.put<Technology>('api/technologies', technology).toPromise();
  }

  async delete(technology: Technology): Promise<void> {
    await this.httpClient.request<Technology>('DELETE', 'api/technologies', {body: technology}).toPromise();
  }
}
