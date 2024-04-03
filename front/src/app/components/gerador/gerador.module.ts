import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeradorComponent } from "./gerador.component";
import { FormsModule } from '@angular/forms';
import { CrudService } from "src/app/crud.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [GeradorComponent],
  providers: [CrudService]
})
export class GeradorModule {}
