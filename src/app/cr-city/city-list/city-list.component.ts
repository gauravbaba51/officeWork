import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  
  array1: string[] =[]
  
  constructor(
    private mainservice: MainService
  ) { }

  ngOnInit(i=0) {
    this.array1=this.mainservice.arr;
    for(i=0; i<this.array1.length;i++)
    {
      console.log(this.array1[i])
    }
    
  }

}
