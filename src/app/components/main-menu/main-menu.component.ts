import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from '../../services/web.service';
declare var $;
declare var Materialize;
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  correo: string;
  pass: string;
  webService: WebService;

  constructor(private fb: FormBuilder, private router: Router, private ws: WebService) {
    this.webService = ws;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl(this.correo, [Validators.required, Validators.maxLength(30), Validators.email]),
      password: new FormControl(this.pass, [Validators.required, Validators.maxLength(50)])
    });
  }

  ngAfterViewInit(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    $(document).ready(function () {
      $('.modal').modal();
    });
  }

  setDefaultData() {
    this.loginForm.get("email").setValue("admin@admin.com");
    this.loginForm.get("password").setValue("123456");
    this.loginForm["_status"] = true;
  }

  validateUser() {
    let email = this.loginForm.get("email").value;
    let password = this.loginForm.get("password").value;
    this.webService.post({ email: email, password: password }, "http://localhost/api2Parcial/apirest/login/signin")
      .then((data) =>{
        if(data.jwt != null){
          localStorage.setItem("token",data.jwt);
          $('#modal1').modal('close');
          this.loginForm.reset();
          this.router.navigateByUrl("/registered-user");
        }
      });
  }

  registerUser(){
    let email = this.loginForm.get("email").value;
    let password = this.loginForm.get("password").value;
    let rol = "Usuario comun";
    let photo = "";
    this.webService.post({ email: email, password: password , rol: rol, photo: photo}, "http://localhost/api2Parcial/apirest/login/signup")
      .then((data) =>{
        if(data.jwt != null){
          console.log(data);
          localStorage.setItem("token",data.jwt);
          $('#modal1').modal('close');
          this.loginForm.reset();
          this.router.navigateByUrl("/registered-user");
        }
      });
  }
}
