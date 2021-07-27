import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-blockairline',
  templateUrl: './blockairline.component.html',
  styleUrls: ['./blockairline.component.css']
})
export class BlockairlineComponent implements OnInit {

  id:number=0;
  constructor(private route:ActivatedRoute,private flightservice:FlightdetailsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = Number(params.id);
      console.log(this.id);
    });
  }
  blockairline(){
    this.flightservice.blockairlines(this.id)
    .subscribe((data: {}) => {
      console.log(data);
      this.router.navigate(['/manageairlines']);
    },
    error => {
      console.log("Block Airline ERROR : ", error);
    });
  }

}
