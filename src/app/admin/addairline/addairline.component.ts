import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  eAddairlineForm:FormGroup = new FormGroup({});
  submitted = false;
  constructor(private builder:FormBuilder,private flightservice : FlightdetailsService, private router:Router) { }

  ngOnInit(): void {
    this.eAddairlineForm = this.builder.group({
      airline: ['',Validators.required],
      contactno: ['',
      Validators.required,
      Validators.maxLength(12),
      Validators.minLength(10)
    ],
      contactaddress: ['',[Validators.required]],
      logoavatar:[]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.eAddairlineForm.controls;
  }

  AddAirline(){
    this.submitted = true;
    if (this.eAddairlineForm.invalid) {
      return;
    }
    this.flightservice.addairlinedetails(this.eAddairlineForm.value)
    .subscribe((data: {}) => {
      console.log(data);
    },
    error => {
      console.log("Airline Add ERROR : ", error);
    });
    
    //sessionStorage.setItem('loggedUser',"");
   // this.router.navigate(['manageairlines']);

  }

}
