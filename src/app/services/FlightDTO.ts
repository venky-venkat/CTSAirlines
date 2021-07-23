

export class FlightDTO{
    FlightID?:number=0;
    Airline:string="";
    Flightno:string="";
    From:string=""
    To:string="";
    Takeoff:string="";
    Landing:string="";
    Noofbusinessseats?:number;
    Noofnonbusinessseats?:number;
    Noofrows?:number;
    Scheduleddays:string="";
    Totalprice?:number;
    Discountcode:string="";
    Discountamount?:number;
    Meals:string="";
    Status:string="ON TIME";

    constructor(
        flightID:number,
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
        discountcode:string,
        discountamount:number,
        meals:string,
        status:string
    )
    {
        this.FlightID=flightID,
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
this.Discountcode = discountcode,
this.Discountamount = discountamount,
this.Meals = meals,
this.Status = status
    }
}