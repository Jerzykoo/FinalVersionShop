import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BasketComponent } from './basket/basket.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';


@NgModule({
  declarations: [MenComponent, WomenComponent, BasketComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PeopleModule { }
