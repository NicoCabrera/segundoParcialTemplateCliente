import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  users:Array<any>;

  constructor(private webService:WebService) { 
    this.users = [];
  }

  ngOnInit() {
    this.webService.get({},"http://localhost/api2Parcial/apirest/user/").then(
      (data) =>{
        console.log(data);
        this.users = data;
      }
    );
  }

  delete(userid){
    console.log("Zen o sama dice.. POM!");
  }

}
