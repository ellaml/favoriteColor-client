
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from './color';

@Injectable({providedIn: 'root'})
export class ColorService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(`${this.apiServerUrl}/color/all`);
  }

  public incrementColor(colorId: string): Observable<Color> {
    return this.http.post<Color>(`${this.apiServerUrl}/color/${encodeURIComponent(colorId)}/increment-vote`, {});
  }

}
