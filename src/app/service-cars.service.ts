import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';



import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { CarUser } from './carUser';


@Injectable({
  providedIn: 'root'
})
export class ServiceCarsService {
	 baseurl: string = "http://localhost:3155/";
		//public dataA: any = [];
		public cars:any = [];
		public carsingle:any = [];
		public currentCar:any = {};
	 	public counting:number;
/*http://localhost:4206/carstable*/

  constructor(private httpClient: HttpClient) {

		} /* end of constructor */




	 private subject = new Subject<any>();
		
    userDeleted() {
        this.subject.next({ text: "user Deleted" });
    }

		 getMessage(): Observable<any> {
        return this.subject.asObservable();
    }





/* debugging */
	numberOfUsers(){
	
			this.httpClient.get(this.baseurl + 'carusers').subscribe((data:any) => {
							let a = data.length + 1;
					localStorage.setItem("counter", a);
							 console.log(a);
				});	
	}
/* debugging */


	getUserCarsdata(){
		this.cars = [];
		
	this.httpClient.get(this.baseurl + 'carusers').subscribe((data:any) => {
							let i;
							for (i = 0; i < data.length; i++) {
									this.cars.push(data[i]);
				}
				}, error => {
				  console.log("something went wrong");
				});
						 
		return this.cars;
		
	 } /* end of getUserCarsdata */

	


	readSingleCar(id=null){
			
		this.httpClient.get(this.baseurl + 'carusers/single?id='+id).subscribe((data:any) => {
			this.carsingle = data;
    }, error => {
   		console.log('something went wrong'+ error);
		});
		
		return this.carsingle;

	}/* end of readSingleCars */




	updateCars(car:CarUser){
		let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');   
        let options = {
            headers: httpHeaders
        }; 
		return this.httpClient.put(this.baseurl + 'carusers/update', car, options);

		}/* end of updateCars */
		




	createNewCarUser(car:CarUser){
   
	let  carUserA = { ...car };

    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        }; 
		    return this.httpClient.post(this.baseurl + 'carusers', carUserA, options);
	
	}/* end of createCar */





	deleteCars(carU:CarUser){

		const httpOptions = {
				headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: carU
		};
	
   return this.httpClient.delete(this.baseurl + 'carusers/delete', httpOptions);       
            
	}/* end of deleteCars */







}
