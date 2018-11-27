import { Component, OnInit } from '@angular/core';
import { Drink } from '../_services/drink/drink';
import { DrinkService } from '../_services/drink/drink.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  drinks: Drink[];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(){
    return this.drinkService.getDrinks()
            .subscribe(
              drinks => {
                this.drinks=drinks
              }
            );
  }

}
