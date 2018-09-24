import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CrCityComponent } from './cr-city/cr-city.component';
import { MFormComponent } from './m-form/m-form.component';
import { CreatCityComponent } from './cr-city/creat-city/creat-city.component';
import { CityListComponent } from './cr-city/city-list/city-list.component';
import { MainService } from './main.service';


@NgModule({
  declarations: [
    AppComponent,
    CrCityComponent,
    MFormComponent,
    CreatCityComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
