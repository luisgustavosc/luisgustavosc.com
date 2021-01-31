import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import * as AOS from "aos";
import { format } from 'url';

declare var $: any;
@Component({
  selector: "app-home-es",
  templateUrl: "./home-es.component.html",
  styleUrls: ["../home/home.component.css"]
})
export class HomeEsComponent implements OnInit {
  public emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public lat: number = 28.538336;
  public lng: number = -81.379234;
  public sendCorrect: boolean = false;
  public lazyloader: boolean = false;
  constructor() {}

  contactoForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z ]*")
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    message: new FormControl("", [Validators.required, Validators.minLength(5)])
  });
  contact(form) {
    //console.log(this.contactoForm.value);
    this.sendCorrect = true;
    this.lazyloader = true;
    setTimeout(() => {
      this.lazyloader = false;
    }, 1200);
    setTimeout(() => {
      form.reset();
      this.sendCorrect = false;
    }, 40000);
  }
  ngOnInit() {
    AOS.init({
      once: true
    });
    $(".hamburger").click(function() {
      $(this).toggleClass("open");
    });
    $(".navegacion").click(function() {
      $("#menu-btn").prop("checked", false);
      $(".hamburger").toggleClass("open");
    });
    //!Barra de navegacion fixed
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $(".header").addClass("activeFixed");
      } else {
        $(".header").removeClass("activeFixed");
        $(".menuCompu").css("background", "transparent");
      }
    });
  }
}
