import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { HomeComponent } from "src/app/components/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from "@agm/core";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { HomeEsComponent } from 'src/app/components/home-es/home-es.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeEsComponent],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA619vHQhJ9Xty_hGicowPyhl8zgiqbNAk"
    }),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
