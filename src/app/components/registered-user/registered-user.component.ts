import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
  }
  viewJwtData(){
    console.log(this.authService.getToken());
  }

}
