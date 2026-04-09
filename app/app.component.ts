import { Component } from '@angular/core';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Exercice1Component, Exercice2Component, Exercice3Component],
  templateUrl: './app.component.html',
})
export class AppComponent {}
