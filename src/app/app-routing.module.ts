import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCarDetailsComponentComponent } from './single-car-details-component/single-car-details-component.component';
import { CarsDetailsTableComponent } from './cars-details-table/cars-details-table.component';


const routes: Routes = [
	 { path: 'cardetail', component: SingleCarDetailsComponentComponent },
	 { path: 'carstable', component: CarsDetailsTableComponent },
	 { path: '**', component: CarsDetailsTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
