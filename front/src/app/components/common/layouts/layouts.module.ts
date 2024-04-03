import { NgModule } from "@angular/core";
import { BasicLayoutComponent } from "./basicLayout.component";
import { BlankLayoutComponent } from "./blankLayout.component";
import { TopNavigationLayoutComponent } from "./top-navigation-layout.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    TopNavigationLayoutComponent
  ],
  exports: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    TopNavigationLayoutComponent
  ],
  providers: []
})
export class LayoutsModule {}
