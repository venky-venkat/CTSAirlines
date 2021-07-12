import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  eAddairlineForm:FormGroup = new FormGroup({});
  constructor(private builder:FormBuilder,private flightservice : FlightdetailsService, private router:Router) { }

  ngOnInit(): void {
    this.eAddairlineForm = this.builder.group({
      airline: ['',Validators.required],
      contactno: ['',Validators.required],
      contactaddress: ['',[Validators.required]],
      logoavatar:[]
    });
  }

  AddAirline(){
    console.log("Venky");
    this.flightservice.addairlinedetails(this.eAddairlineForm.value);
    console.log(this.eAddairlineForm.value);
    sessionStorage.setItem('loggedUser',"");
    this.router.navigate(['manageairlines']);

  }

}
