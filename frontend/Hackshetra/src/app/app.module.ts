import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WikiCardComponent } from "./customer/wiki-card/wiki-card.component";
import { DoctorAppointComponent } from "./customer/doctor-appoint/doctor-appoint.component";
import { DoctorCardComponent } from "./customer/doctor-appoint/doctor-card/doctor-card.component";
import { DoctorAppointService } from "./customer/services/doctor-appoint.service";
import { CustomerComponent } from "./customer/customer.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DoctorModule } from "./doctor/doctor.module";

@NgModule({
  declarations: [
    AppComponent,
    WikiCardComponent,
    DoctorAppointComponent,
    DoctorCardComponent,
    CustomerComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, DoctorModule],
  providers: [DoctorAppointService],
  bootstrap: [AppComponent]
})
export class AppModule {}
