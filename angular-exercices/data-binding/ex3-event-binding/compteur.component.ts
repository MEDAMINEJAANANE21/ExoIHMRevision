import { Component } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 3 — Event Binding  (événement)="méthode()"    ║
  ║                                                          ║
  ║  Objectif : Réagir aux actions utilisateur               ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Lie (click) sur le bouton "+" → incrementer()        ║
  ║  2. Lie (click) sur le bouton "−" → decrementer()        ║
  ║  3. Lie (click) sur le bouton "Reset" → reset()          ║
  ║  4. Affiche un message si compteur > MAX (utilise @if)   ║
  ║  5. Complète les 3 méthodes dans la classe               ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-compteur',
  standalone: true,
  template: `
    <h2>Compteur : {{ compteur }}</h2>

    <!-- TODO 1 : Ajoute (click) sur chaque bouton -->
    <button>−</button>
    <button>Reset</button>
    <button>+</button>

    <!-- TODO 2 : Affiche "⚠️ Maximum atteint !" si compteur > MAX -->

  `
})
export class CompteurComponent {
  compteur = 0;
  MAX      = 10;

  // TODO 3 : Incrémente compteur de 1
  incrementer(): void {

  }

  // TODO 4 : Décrémente compteur de 1 (min : 0)
  decrementer(): void {

  }

  // TODO 5 : Remet compteur à 0
  reset(): void {

  }
}
