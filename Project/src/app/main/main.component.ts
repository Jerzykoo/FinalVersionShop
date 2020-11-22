import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from '../people/basket.service';
import { PeopleService } from '../people/people.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private readonly peopleService: PeopleService, private readonly basketService: BasketService) { }

  menSub: Subscription;
  tab = [];

  addToBasket(item): void{
    item.amount=1;
    this.basketService.addItem(item);
    console.log(item);
      }

  ngOnInit(): void {
    this.menSub = this.peopleService.getItems().subscribe( (men: any) => {
      this.tab = men;
      // console.log(this.tab);
    });
  }

  ngOnDestroy(): void {
    this.menSub.unsubscribe();
  }
}
