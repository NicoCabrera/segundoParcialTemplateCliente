import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/");
  }

}
