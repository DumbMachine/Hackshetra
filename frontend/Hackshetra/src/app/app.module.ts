import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WikiCardComponent } from "./wiki-card/wiki-card.component";
import { DoctorAppointComponent } from "./doctor-appoint/doctor-appoint.component";
import { DoctorCardComponent } from "./doctor-appoint/doctor-card/doctor-card.component";
import { DoctorAppointService } from "./services/doctor-appoint.service";
import { WikiCardService } from "./services/wiki-card.service";

@NgModule({
  declarations: [
    AppComponent,
    WikiCardComponent,
    DoctorAppointComponent,
    DoctorCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DoctorAppointService, WikiCardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
