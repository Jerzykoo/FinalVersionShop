import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BasketService } from '../basket.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private readonly basketService: BasketService) { }
sum=0;
  basketTab = [];

  basketSub: Subscription;
  onInputChange(e, i, id, item): void{
    this.basketTab[i].amount = e.target.value;
    this.basketService.updateItem(item, id)
  }

  ngOnInit(): void {
    this.basketSub = this.basketService.getItems().subscribe( (basket: any) => {
      this.basketTab = basket;
    });
  }

  onDeleteItem(itemId): void{
    this.basketService.removeItem(itemId);
  }
  onBuyClick(): void{
    // console.log(this.basketTab);
    this.basketTab.forEach(element => {
      this.sum+= (+element.amount);
    });
    this.basketTab.forEach(element => {
      this.basketService.removeItem(element.id);
    });
    this.basketTab = [];

    if(this.sum>0){
      window.alert(`Dziękujemy za zakup ${this.sum} koszulek`);
      this.sum=0;
    }

    console.log(this.sum);

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.basketSub.unsubscribe();
  }
}
