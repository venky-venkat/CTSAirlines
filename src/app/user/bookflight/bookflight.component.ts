import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  searchdata:any=[];
  eSearchForm:FormGroup = new FormGroup({});
  constructor(private builder:FormBuilder,private service: FlightdetailsService) { }

  ngOnInit(): void {
    this.eSearchForm = this.builder.group({
      from: [],
      to: [],
      dtoneway:[]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.eSearchForm.controls;
  }
  SearchFlight(){
   
    return this.service.searchflight(this.eSearchForm.value).subscribe(
      (data: {}) => {
        this.searchdata = data;
        console.log(data);
        console.log(this.eSearchForm.value);
      },
      (error) => {
        console.log('Search Flight Error : ', error);
      }
    );
  }

}
