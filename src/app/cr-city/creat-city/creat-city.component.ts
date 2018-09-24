import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-creat-city',
  templateUrl: './creat-city.component.html',
  styleUrls: ['./creat-city.component.css']
})
export class CreatCityComponent implements OnInit {
  arr: any[]

  
  constructor( 
    private mainservice:MainService
  ) { }

  ngOnInit() {
  }
  show(citynm: any){
    this.mainservice.arr.push(citynm.value)
    // console.log(citynm.value);
}
  // randomadd(){
  //   this.array=['mumbai']
  //   console.log(this.array)
  // }
}
