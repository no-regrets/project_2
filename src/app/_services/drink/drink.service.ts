import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from './drink';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinksUrl = '/api/drinks';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getDrinks (): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinksUrl)
  }

  getDrink(id: number): Observable<Drink> {
    const url = `${this.drinksUrl}/${id}`;
    return this.http.get<Drink>(url);
  }

  addDrink (drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(this.drinksUrl, drink, httpOptions);
  }

  deleteDrink (drink: Drink | number): Observable<Drink> {
    const id = typeof drink === 'number' ? drink : drink.id;
    const url = `${this.drinksUrl}/${id}`;

    return this.http.delete<Drink>(url, httpOptions);
  }

  updateDrink (drink: Drink): Observable<any> {
    return this.http.put(this.drinksUrl, drink, httpOptions);
  }
}