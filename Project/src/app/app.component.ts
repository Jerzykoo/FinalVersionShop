import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from './people/basket.service';
// import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private readonly basketService: BasketService) { }

numbers = 0;

  basketNumbersSub: Subscription;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.basketNumbersSub = this.basketService.getItems().subscribe( (basket: any) => {
      this.numbers = basket.length;
      if(this.numbers> 0){
      document.getElementById("basketNumbers").style.color = "green";
      }else{
        document.getElementById("basketNumbers").style.color = "red";
      }
    });
  }

  ngOnDestroy(): void {
    this.basketNumbersSub.unsubscribe();
  }
  // numbers = this.userData.basketService[0].amount;
}

