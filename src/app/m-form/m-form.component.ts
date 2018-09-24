import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-m-form',
  templateUrl: './m-form.component.html',
  styleUrls: ['./m-form.component.css']
})
export class MFormComponent implements OnInit {

  constructor(
    private city: MainService
  ) { }

  ngOnInit() {
  }

}
