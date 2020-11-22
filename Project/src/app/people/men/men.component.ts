import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { BasketService } from '../basket.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit, OnDestroy {

  constructor(private readonly peopleService: PeopleService, private readonly basketService: BasketService) { }

  tab = [];
number = 0;
  menSub: Subscription;

  addToBasket(item): void{
    if(item.amount <= 0){
      console.log('nie da sie');
    }else{
      this.basketService.addItem(item);
          }

console.log(item);
  }

  onInputChange(e,item): void{
    // this.number = e.target.value;
    item.amount = e.target.value;

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
