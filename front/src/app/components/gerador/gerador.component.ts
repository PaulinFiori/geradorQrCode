import { Component } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss']
})
export class GeradorComponent {
  public value: any;
  public isLoading: boolean;
  public hasError: boolean;
  public qrcode: any;

  constructor(
    private crudService: CrudService
  ) {}

  public busca(form: NgForm) {
    this.crudService.post("generator/qr-code", this.value).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        console.log(response);
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.qrcode = event.target.result;
        };
        reader.readAsDataURL(response);
      },
      error: (err: any) => {
        this.isLoading = false;
        this.hasError = true;
        alert('There was an error in retrieving data from the server');
      }
    });
    console.log("teste");
  }

}
