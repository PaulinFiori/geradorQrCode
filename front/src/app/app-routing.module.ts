import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './components/common/layouts/basicLayout.component';
import { GeradorComponent } from './components/gerador/gerador.component';

const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "",
    component: BasicLayoutComponent,
    children: [
    { path: 'index', component: GeradorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
