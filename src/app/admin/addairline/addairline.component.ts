import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  eAddairlineForm:FormGroup = new FormGroup({});
  constructor(private builder:FormBuilder) { }

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
    console.log(this.eAddairlineForm);
  }

}
