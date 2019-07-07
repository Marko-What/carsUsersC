import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from "@angular/router";

import {NgForm} from '@angular/forms';
import { ServiceCarsService } from './../service-cars.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';



import { CarUser } from './../carUser';
import { CarRow } from './../carRow';

@Component({
  selector: 'app-single-car-details-component',
  templateUrl: './single-car-details-component.component.html',
  styleUrls: ['./single-car-details-component.component.css']
})

export class SingleCarDetailsComponentComponent implements OnInit {

  constructor(private _ServiceCarsService: ServiceCarsService, private router: Router) { }

		@ViewChild('carEditInputs',{static:false}) formValues; // Added this
	
		public cars: any = [];
		/*public rowDataa:CarRow = [];
		public clonedCars:CarRow = [];*/
		public rowDataa:any = [];
		public clonedCars:any = [];
		msgs: Message[] = [];


  ngOnInit() {
		this.cars[0] = this._ServiceCarsService.currentCar;	
		
			this.rowDataa = { ...this.cars[0] };	

			/*	refresh car detail page */
				let curr = JSON.parse(localStorage.getItem("currnetCar"));
				this.rowDataa = curr;
			
	  } /* end of ngOnInit */



	
	showSuccessChanged() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'car user successfully changed'});

    }/* end of showSuccessRemoved */



	 onRowEditInit() {
        this.clonedCars = this.cars[0];				
	   }




    onRowEditSave() {
			let carUser: CarUser = {...this.rowDataa };
				this._ServiceCarsService.updateCars(carUser).subscribe(data => { 
						if(data['data'] == 'user was updated') {
						this.showSuccessChanged();
					} else {
							console.log('something went wrong');
					}
			});
			
    }


			

 onRowdelete() {
	let carUser: CarUser = { ...this.rowDataa }
        this._ServiceCarsService.deleteCars(carUser).subscribe(data => { 
				if(data['data'] == 'user was successfully deleted') {
					this._ServiceCarsService.userDeleted();
				} else {
					
				}
		});

					this.router.navigate(['/carstable']);	
	   }




    onRowEditCancel() {
			this.rowDataa = { ...this.clonedCars }
    }


		backCarsTable(){
			this.router.navigate(['/carstable']);
		} /* end of backCarsTable */


}
