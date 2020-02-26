import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { GnomsListComponent } from './components/gnoms-list/gnoms-list.component';
import { GnomProfileComponent } from './components/gnom-profile/gnom-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FilterPipe,
    GnomsListComponent,
    GnomProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
