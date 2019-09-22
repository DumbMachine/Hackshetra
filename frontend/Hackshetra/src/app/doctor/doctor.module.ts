import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { DoctorRoutingModule } from "./doctor-routing.module";
import { AuthComponent } from "./auth/auth.component";
import { DoctorComponent } from "./doctor.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './dashboard/info/info.component';
import { ChatComponent } from './dashboard/chat/chat.component';

@NgModule({
  declarations: [
    AuthComponent,
    DoctorComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InfoComponent,
    ChatComponent
  ],
  imports: [CommonModule, DoctorRoutingModule, ReactiveFormsModule]
})
export class DoctorModule {}
