import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder, NgModel } from '@angular/forms';
import { WebService } from '../../services/web.service';
declare var $;
@Component({
  selector: 'app-only-admin',
  templateUrl: './only-admin.component.html',
  styleUrls: ['./only-admin.component.css']
})
export class OnlyAdminComponent implements OnInit {
  registerForm: FormGroup;
  email: string;
  password: string;
  rol: any;
  roles: Array<string>;
  constructor(private fb: FormBuilder,private webService:WebService) {
    this.rol = "";
    this.roles = ["Admin", "Usuario común"];
    $(document).ready(function () {
      $('select').material_select();
    });

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: new FormControl(this.email, [Validators.required, Validators.maxLength(30), Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.maxLength(50)]),
    });
  }
  saveUser() {
    this.rol = $("#usertype option:selected" ).text();
    let data = {
      email: this.registerForm.get("email").value,
      password: this.registerForm.get("password").value,
      rol: this.rol,
      photo: "default.jpg",
      jwt: localStorage.getItem("token")
    };
    this.webService.postWithJWT(data,"http://localhost/api2Parcial/apirest/user/add").then(data=>console.log(data));
  }

}
