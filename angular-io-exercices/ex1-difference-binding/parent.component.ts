import { Component, signal } from '@angular/core';
import { EnfantEx1Component } from './enfant.component';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 1 — PARENT  (parent.component.ts)                      ║
  ║                                                                  ║
  ║  Ici tu vas transmettre des données au composant enfant          ║
  ║  via des input signals, en utilisant la même syntaxe             ║
  ║  [attribut]="valeur" que le Property Binding — mais cette fois   ║
  ║  la cible est un INPUT SIGNAL défini dans l'enfant.              ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Dans le template, utilise <app-enfant-ex1> 3 fois            ║
  ║     avec des valeurs différentes pour [message] et [couleur]     ║
  ║                                                                  ║
  ║  2. Ajoute un 4ème <app-enfant-ex1> sans aucun attribut          ║
  ║     → observe que les valeurs par défaut s'affichent             ║
  ║                                                                  ║
  ║  3. Ajoute un bouton qui change texteActuel via le signal        ║
  ║     et lie-le à un 5ème enfant avec [message]="texteActuel()"    ║
  ║     → observe la réactivité : l'enfant se met à jour             ║
  ║       automatiquement quand le signal change dans le parent      ║
  ║                                                                  ║
  ║  ⚠️  Rappel important :                                           ║
  ║  Lorsque tu passes colorA() (avec les parenthèses), tu passes    ║
  ║  la VALEUR du signal au moment de l'évaluation.                  ║
  ║  Angular se charge de re-évaluer à chaque changement du signal.  ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-parent-ex1',
  standalone: true,
  imports: [EnfantEx1Component],
  template: `
    <h2>Exercice 1 — Input Signal vs Property Binding</h2>
    <p style="background:#fffde7; padding:8px; border-left: 4px solid orange">
      <strong>Rappel :</strong>
      <code>[src]="url"</code> → prop native HTML |
      <code>[message]="txt()"</code> → input signal d'un composant Angular
    </p>

    <!-- TODO 1 : Instancie 3 fois <app-enfant-ex1> avec [message] et [couleur] différents -->
    <app-enfant-ex1 [message]="'Bonjour depuis le parent'" [couleur]="'crimson'"></app-enfant-ex1>
    <app-enfant-ex1 [message]="'Deuxieme message'" [couleur]="'royalblue'"></app-enfant-ex1>
    <app-enfant-ex1 [message]="'Troisieme message'" [couleur]="'seagreen'"></app-enfant-ex1>

    <!-- TODO 2 : Instancie 1 fois sans aucun attribut (valeurs par défaut) -->
    <app-enfant-ex1></app-enfant-ex1>


    <!-- TODO 3 : Bouton qui modifie texteActuel + enfant lié à texteActuel() -->
    <button (click)="changerTexte()">Changer le message</button>
    <app-enfant-ex1 [message]="texteActuel()" [couleur]="'darkorange'"></app-enfant-ex1>

  `
})
export class ParentEx1Component {
  texteActuel = signal('Message initial');
  index = signal(0);

  messages = [
    'Message initial',
    'Deuxième message !',
    'Angular, c\'est génial 🚀',
    'Les signals aussi ✨'
  ];

  // TODO : Complète changerTexte() pour cycler dans le tableau messages[]
  // Utilise index.update() et texteActuel.set()
  changerTexte(): void {
    this.index.update((i: number) => (i + 1) % this.messages.length);
    this.texteActuel.set(this.messages[this.index()]);
  }
}
