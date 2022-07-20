import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssetsService {
  private readonly assetsBaseUrl = '/assets';

  constructor(private httpClient: HttpClient) {}

  public loadFile$<T>(fileUrl: string): Observable<T> {
    return this.httpClient.get<T>(`${this.assetsBaseUrl}/${fileUrl}`);
  }
}
