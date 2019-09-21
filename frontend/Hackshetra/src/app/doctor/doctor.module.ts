import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { DoctorRoutingModule } from "./doctor-routing.module";
import { AuthComponent } from "./auth/auth.component";
import { DoctorComponent } from "./doctor.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

@NgModule({
  declarations: [
    AuthComponent,
    DoctorComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [CommonModule, DoctorRoutingModule, ReactiveFormsModule]
})
export class DoctorModule {}
