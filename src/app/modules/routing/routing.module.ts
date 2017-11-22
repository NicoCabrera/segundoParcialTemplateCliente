import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { HttpModule } from '@angular/http';
import { RegisteredUserComponent } from '../../components/registered-user/registered-user.component';
import { AuthService } from '../../services/auth.service';
import { VerifyJwtService } from '../../services/verify-jwt.service';
import { GridComponent } from '../../components/grid/grid.component';
import { OnlyAdminComponent } from '../../components/only-admin/only-admin.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MainMenuComponent
  },
  {
    path: "registered-user",
    component: RegisteredUserComponent,
    canActivate: [VerifyJwtService],
    children: [
      {
        path:"grid",
        component:GridComponent
      },
      {
        path:"only-admin",
        component:OnlyAdminComponent,
        canActivate: [VerifyJwtService]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    MainMenuComponent,
    RegisteredUserComponent,
    GridComponent,
    OnlyAdminComponent
  ],
  providers: [AuthService, VerifyJwtService]
})
export class RoutingModule { }
