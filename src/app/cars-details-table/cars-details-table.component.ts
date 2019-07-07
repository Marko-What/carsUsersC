import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceCarsService } from './../service-cars.service';
import {NgForm} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {TableModule} from 'primeng/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


//import carsVars.ts;

@Component({
  selector: 'app-cars-details-table',
  templateUrl: './cars-details-table.component.html',
  styleUrls: ['./cars-details-table.component.css']
})
export class CarsDetailsTableComponent implements OnInit {	

 	// @ViewChild(TableModule) dt: TableModule;
	  @ViewChild('dt',{static:true}) dt: TableModule;
	 @ViewChild('carUserInputs',{static:false}) formValues; // Added this


		    messages: any[] = [];
	      subscription: Subscription;


  constructor(private _ServiceCarsService: ServiceCarsService, private router: Router) {

		 this.subscription = this._ServiceCarsService.getMessage().subscribe(message => {
					/*console.log(message);*/
					this.showSuccessRemoved();
        });

	} /* end of constructor function */

		

	  

		public cars: any = [];
		public userInsert: any = [];
		display: boolean =false;
		cols: any[];
		msgs: Message[] = [];
		columns: any[];
		totalRecords:string;
		SortEvent: any[];


 	 ngOnInit() {

		//this.totalRecords = 10;
		
		this.cars = this._ServiceCarsService.getUserCarsdata();

		this.populateTablePaginatorWithScore();

		this.userInsert.avto = "volvo";
	
	this.columns =[
            { field: 'ime', header: 'Ime' },
            { field: 'avto', header: 'Avtomobil' },
        ];


	}/* end of ngOnInit */


	populateTablePaginatorWithScore(){
			this._ServiceCarsService.numberOfUsers();
		  this.totalRecords = localStorage.getItem("counter");
	}/* end of ngOnInit */


	newCarUser(){
		 this.display = true;
	}/* end of newCarUser */


	selectCar(avto){
		this.userInsert.avto = avto;
	}/* end of selectCar */



	singleCarDetails(car){
	
		this._ServiceCarsService.currentCar = car;
			let cc =JSON.stringify(car);
			localStorage.setItem("currnetCar", cc);
		
		this.router.navigate(['/cardetail']);	 	
	} /* end of singleCarDetails */






	showSuccessInserted() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'car user successfully added'});	
	
    }/* end of showSuccessInserted */


	showSomethingwentwrong() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Something went wrong'});	
	
    }/* end of showSuccessInserted */




	showSuccessRemoved() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'car user successfully removed'});

    }/* end of showSuccessRemoved */

	
	showMessageClear() {
	this.msgs = [];
	 
    }/* end of showSuccessRemoved */





	confirmNewCarUser(){
				this._ServiceCarsService.createNewCarUser(this.userInsert)
						.subscribe(data => {  if(data['data'] == "saved"){
								this.showSuccessInserted();
						} else {
								this.showSomethingwentwrong();
					}

	});
				this.cars = this._ServiceCarsService.getUserCarsdata();
			
				this.formValues.resetForm();	
					this.display = false;
					this.userInsert.avto = "volvo";
		
			
	
setTimeout(function(){ 
	var event = document.createEvent("HTMLEvents");
	event.initEvent("click", true, true);
	var button = document.querySelectorAll('#svasta')[0];
	button.dispatchEvent(event);
 }, 500);


 //setTimeout(function(){ document.querySelectorAll("#svasta")[0].click(); }, 500);

	} /* end of a confirmNewCarUser */


	



	cancelNewCarUser(){
		this.formValues.resetForm();
			 this.display = false;
	} /* end of a newCarUser */



		/* SortEvent --> any*/
 customSort(event: any) {
        event.data.sort((data1, data2) => {
            let value1 = data1[event.field];
            let value2 = data2[event.field];
            let result = null;

            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

            return (event.order * result);
        });
    }
	

	



}
