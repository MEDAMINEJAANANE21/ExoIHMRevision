import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 4 — Two-Way Binding  [(ngModel)]="variable"    ║
  ║                                                          ║
  ║  Objectif : Synchroniser template et composant           ║
  ║  en temps réel dans les deux sens                        ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Ajoute [(ngModel)]="nom" sur le 1er input            ║
  ║  2. Ajoute [(ngModel)]="email" sur le 2ème input         ║
  ║  3. Affiche l'aperçu en temps réel via interpolation     ║
  ║  4. Lie (click) du bouton "Effacer" → effacer()          ║
  ║  5. Complète la méthode effacer()                        ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-formulaire-simple',
  standalone: true,
  imports: [FormsModule],  // ← FormsModule est déjà importé pour ngModel
  template: `
    <h2>Formulaire</h2>

    <!-- TODO 1 : Ajoute [(ngModel)]="nom" -->
    <input type="text" placeholder="Votre nom" [(ngModel)]="nom" />

    <!-- TODO 2 : Ajoute [(ngModel)]="email" -->
    <input type="email" placeholder="Votre email" [(ngModel)]="email"/>

    <!-- TODO 3 : Affiche nom et email en temps réel -->
    <p>Aperçu : {{nom + "" +email}}</p>

    <!-- TODO 4 : Lie le bouton à effacer() -->
    <button (click)="effacer()">Effacer</button>
  `
})
export class FormulaireSimpleComponent {
  nom   = '';
  email = '';

  // TODO 5 : Remet nom et email à ''
  effacer(): void {
    this.nom   = '';
    this.email = '';
  }
}
