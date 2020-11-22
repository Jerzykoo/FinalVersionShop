import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WomenComponent } from './people/women/women.component';
import { MenComponent } from './people/men/men.component';
import { environment } from 'src/environments/environment';
import { BasketComponent } from './people/basket/basket.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenComponent,
    WomenComponent,
    BasketComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireDatabaseModule
