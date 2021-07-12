

export class FlightDTO{
    Airline:string="";
    Flightno:string="";
    From:string=""
    To:string="";
    Takeoff:string="";
    Landing:string="";
    Noofbusinessseats?:number;
    Noofnonbusinessseats?:number;
    Noofrows?:number;
    Scheduleddays:string=""
    Totalprice?:number;
    Meals:string=""

    constructor(
        airline:string,
        flightno:string,
        from:string,
        to:string,
        takeoff:string,
        landing:string,
        noofbusinessseats:number,
        noofnonbusinessseats:number,
        noofrows:number,
        scheduleddays:string,
        totalprice:number,
        meals:string
    )
    {
this.Airline = airline,
this.Flightno=flightno,
this.From=from,
this.To=to,
this.Takeoff=takeoff,
this.Landing=landing,
this.Noofnonbusinessseats=noofnonbusinessseats,
this.Noofbusinessseats=noofbusinessseats,
this.Noofrows=noofrows,
this.Scheduleddays = scheduleddays,
this.Totalprice = totalprice,
this.Meals =meals
    }
}