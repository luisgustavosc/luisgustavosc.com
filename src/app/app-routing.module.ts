import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Componentes
import { HomeComponent } from "src/app/components/home/home.component";
import { HomeEsComponent } from "src/app/components/home-es/home-es.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ES", component: HomeEsComponent },
  { path: "es", component: HomeEsComponent },
  {
    path: "assets/CV/Curriculum-vitae-es.pdf",
    redirectTo: "assets/CV/Curriculum-vitae-es.pdf"
  },
  {
    path: "assets/CV/Curriculum-vitae-en.pdf",
    redirectTo: "assets/CV/Curriculum-vitae-en.pdf"
  },
  { path: "*", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
