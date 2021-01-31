import { Component, OnInit } from "@angular/core";
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";
import * as AOS from "aos";
import { ProjectsService } from 'src/app/services/projects/projects.service'
declare var $: any;

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private lat: number = 28.538336;
    private lng: number = -81.379234;
    private sendCorrect: boolean = false;
    private lazyloader: boolean = false;
    private projects = null
    private contactoForm = new FormGroup({
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

    constructor(private projectsService: ProjectsService) { }

    ngOnInit() {
        AOS.init({
            once: true
        });
        const mq = window.matchMedia("(max-width: 900px)");

        $(".hamburger").click(function () {
            $(this).toggleClass("open");
        });
        $(".navegacion").click(function () {
            if (mq.matches) {
                $("#menu-btn").prop("checked", false);
                $(".hamburger").toggleClass("open");
            }
        });

        //!Barra de navegacion fixed
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $(".header").addClass("activeFixed");
            } else {
                $(".header").removeClass("activeFixed");
                $(".menuCompu").css("background", "transparent");
            }
        });

        this.getProjects();
    }

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

    getProjects() {
        this.projectsService.fetchProjects().subscribe((projects: any) => {
            this.projects = projects
            console.log(this.projects);
        }, err => {
            console.error(err);
        })
    }
}
