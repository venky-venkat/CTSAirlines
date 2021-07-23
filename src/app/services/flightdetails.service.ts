import { Injectable } from '@angular/core';
import { AirlineDTO } from './AirlineDTO';
import { FlightDTO } from './FlightDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BookingDTO } from './BookingDTO';

@Injectable({
  providedIn: 'root'
})
export class FlightdetailsService {

  baseurl = 'http://localhost:52487';
  addairline: AirlineDTO[] = [];
  addflight: FlightDTO[] = [];
  addbooking: BookingDTO[]=[];
  constructor(private http: HttpClient) {

   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
 
  GetairlineDetails(): Observable<AirlineDTO> {
    return this.http.get<any>(this.baseurl + '/ListAllAirlines',this.httpOptions)
  }

  addairlinedetails(obj: any){
    var postobj={
      AirlineName:String=obj.airline,
      Logopath:String = obj.logoavatar,
      Contactnumber:String = obj.contactno,
      Contactaddress:String=obj.contactaddress     
    }
   return this.http.post<any>(this.baseurl + '/airline/operations',postobj,this.httpOptions)
  }

  addbookingflight(obj:any){
    return this.http.post<any>(this.baseurl + '/booking/operations',obj,this.httpOptions)
  }
  getflightDetails(): Observable<FlightDTO> {
    return this.http.get<any>(this.baseurl + '/listallflights',this.httpOptions)
  }

  getflightDetailsbyID(id:number): Observable<FlightDTO> {
    return this.http.get<any>(this.baseurl + '/getflight/'+id,this.httpOptions)
  }

  addflightdetails(obj: any){
    var postobj={
      AirlineID : Number(obj.Airline),
      Flightname:String = obj.Flightno,
      From:String = obj.From,
      To:String=obj.To,
      Takeoff:String=obj.Takeoff,
      Landing:String=obj.Landing,
      Numberofbusinessseats:Number(obj.Noofbusinessseats),
      Numberofnonbusinessseats:Number(obj.Noofnonbusinessseats),
      Numberofrows:Number(obj.Noofrows),
      Scheduling:String = obj.Scheduleddays,
      Totalcost:Number(obj.Totalprice),
      DiscountCode:String=obj.Discountcode,
      Discountamount:Number(obj.Discountamount),
      Meals:String=obj.Meals,
    }
   return this.http.post<any>(this.baseurl + '/flight/operations',postobj,this.httpOptions)
  }
   

  searchflight(obj:any):Observable<any> {
    return this.http.get<any>(this.baseurl + '/searchflights/' + obj.from + '/' + obj.to,this.httpOptions)
  }

  errorHandl(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
