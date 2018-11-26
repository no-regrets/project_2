import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Drink } from '../_services/drink/drink';
import { DrinkService } from '../_services/drink/drink.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.scss']
})
export class AddDrinkComponent {

  drink = new Drink();
  submitted = false;

  constructor(private drinkService: DrinkService,
    private location: Location) { }

    newDrink(): void {
      this.submitted = false;
      this.drink = new Drink();
    }
    
 addDrink() {
  this.submitted = true;
  this.save();
}

 goBack(): void {
   this.location.back();
 }

 private save(): void {
   console.log(this.drink);
   this.drinkService.addDrink(this.drink)
       .subscribe();
 }
}