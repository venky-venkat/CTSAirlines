export interface BookingDTO {
  Id: number;
  AirlinesName:string;
  FlightName: string;
  PassengerName: string;
  Gender:string;
  Age:number;
  EmailId: string;
  Phone: string;
  SeatNumber: string;
  From:string;
  To:string;
  TakeoffTime:string;
  Landingtime:string;
  Bookingtime:string;
  TotalCost:number;
  UserName:string|null;
  PNR:string;
  Coupencode:string;
  DiscountAmount:number;
  FlightStatus:string;
  BookingStatus:string;
  JourneyStatus:string;
  RefundStatus:string;
}
