import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  standalone: true,
  templateUrl: './exercice3.component.html',
  styles: [`
    .zone-clic {
      width: 300px;
      height: 300px;
      background-color: lightblue;
      cursor: crosshair;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class Exercice3Component {

  // TODO : Déclare deux signaux "x" et "y" initialisés à 0


  // TODO : Méthode "setCoordonnes(event: MouseEvent)" qui met à jour x et y
  //         avec event.offsetX et event.offsetY

}
