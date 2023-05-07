import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './models/restaurant.model';
import { Restaurants } from './models/restaurants.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private RESTAURANT_API = 'http://localhost:3000/restaurant';
  private WINNER = '/winner';

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<Restaurants> {
    return this.http.get<Restaurants>(`${this.RESTAURANT_API}`);
  }

  pickWinner(): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.RESTAURANT_API}${this.WINNER}`);
  }
}
