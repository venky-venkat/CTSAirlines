import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-pnrstatus',
  templateUrl: './pnrstatus.component.html',
  styleUrls: ['./pnrstatus.component.css']
})
export class PnrstatusComponent implements OnInit {
  ePnrform:FormGroup = new FormGroup({});
  pnrdetails:any=[];
  constructor(private builder:FormBuilder, private flightservice : FlightdetailsService) { }

  ngOnInit(): void {
    this.ePnrform = this.builder.group({
      Pnr: ['',Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ePnrform.controls;
  }

  pnrstatus(){
    console.log(this.ePnrform.value);
    return (this.pnrdetails = this.flightservice.pnrstatus(this.ePnrform.value.Pnr).subscribe(
      (data: {}) => {
        this.pnrdetails = data;
        console.log(data);
      },
      (error:any) => {
        console.log('PNR Status ERROR : ', error);
      }
    ));
  }
}
