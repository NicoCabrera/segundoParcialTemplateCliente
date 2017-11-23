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
    let header = { userid : userid, jwt: localStorage.getItem("token")};
    this.webService.post(header,"http://localhost/api2Parcial/apirest/user/delete")
    .then((data)=>console.log(data));
  }

}
