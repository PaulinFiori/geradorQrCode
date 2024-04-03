import { Component, ViewChild } from '@angular/core';
import { GeradorComponent } from './components/gerador/gerador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("gerador", { static: true })
  gerador: GeradorComponent;

  constructor() {}
}
