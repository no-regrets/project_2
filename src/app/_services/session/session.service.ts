import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from './session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionsUrl = '/api/sessions';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getSessions (): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionsUrl)
  }

  getSession(id: number): Observable<Session> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.get<Session>(url);
  }

  addSession (session: Session): Observable<Session> {
    return this.http.post<Session>(this.sessionsUrl, session, httpOptions);
  }

  deleteSession (session: Session | number): Observable<Session> {
    const id = typeof session === 'number' ? session : session.id;
    const url = `${this.sessionsUrl}/${id}`;

    return this.http.delete<Session>(url, httpOptions);
  }

  updateSession (session: Session): Observable<any> {
    return this.http.put(this.sessionsUrl, session, httpOptions);
  }
}