import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { BasketComponent } from './people/basket/basket.component';
import { MenComponent } from './people/men/men.component';
import { WomenComponent } from './people/women/women.component';

const routes: Routes = [
  {
    path: 'men',
    pathMatch: 'full',
    component: MenComponent
  },
  {
    path: 'women',
    pathMatch: 'full',
    component: WomenComponent
  },
  {
    path: 'basket',
    pathMatch: 'full',
    component: BasketComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
