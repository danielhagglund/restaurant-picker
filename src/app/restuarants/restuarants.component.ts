import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurants } from '../models/restaurants.model';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restuarants',
  templateUrl: './restuarants.component.html',
  styleUrls: ['./restuarants.component.css']
})
export class RestuarantsComponent {
  constructor(private restaurantService: RestaurantService) { }

  restaurant_list: Restaurants = new Restaurants();

  winner: Restaurant = new Restaurant();

  getRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe({
      next: (restaurants) => {
        this.restaurant_list = restaurants;
      },
      error: (err) => {
        console.error('An error occured', err);
      },
      complete: () => {
        console.log('Successfully fetched list of restaurants');
      }
    });
  }

  pickWinner() {
    this.restaurantService.pickWinner().subscribe({
      next: (restaurant) => {
        this.winner = restaurant;
      },
      error: (err) => {
        console.error('An error occured', err);
      },
      complete: () => {
        console.log('Successfully picked the winner');
      }
    });
  }

  ngOnInit() {
    this.getRestaurants();
    this.pickWinner();
  }
}
