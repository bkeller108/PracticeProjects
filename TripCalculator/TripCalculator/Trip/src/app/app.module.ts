import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamGridComponent } from './team-grid/team-grid.component';
import { AddorUpdateTeamExpenseComponent } from './addor-update-team-expense/addor-update-team-expense.component';
import { RouterModule, Routes } from '@angular/router';

import { TripCalService } from './trip-cal.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamGridComponent,
    AddorUpdateTeamExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TripCalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
