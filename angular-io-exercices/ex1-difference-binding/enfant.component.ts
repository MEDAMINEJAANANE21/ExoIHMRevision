import { Component, input } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 1 — ENFANT  (enfant.component.ts)                      ║
  ║  Comprendre : input() vs Property Binding natif                  ║
  ║                                                                  ║
  ║  La DIFFÉRENCE fondamentale :                                    ║
  ║                                                                  ║
  ║  Property Binding classique (ce que tu connaissais) :            ║
  ║    <img [src]="url" />   ← [src] est une prop native du DOM      ║
  ║    Angular n'a rien à déclarer côté composant, c'est du HTML.    ║
  ║                                                                  ║
  ║  Input Signal (communication parent → enfant) :                  ║
  ║    <app-enfant [message]="texte()" />                            ║
  ║    [message] N'EST PAS une propriété HTML native.                ║
  ║    Angular intercepte cet attribut et le transmet au signal      ║
  ║    input() déclaré dans ce composant enfant.                     ║
  ║    → Tu DOIS déclarer l'input dans la classe enfant.             ║
  ║    → C'est un InputSignal<T> : tu peux LIRE mais pas ÉCRIRE.     ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Déclare un input signal "message" de type string             ║
  ║     avec la valeur par défaut '(aucun message)'                  ║
  ║  2. Déclare un input signal "couleur" de type string             ║
  ║     avec la valeur par défaut 'black'                            ║
  ║  3. Dans le template, affiche message() avec la couleur          ║
  ║     via un style inline : [style.color]="couleur()"              ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-enfant-ex1',
  standalone: true,
  template: `
    <div style="border: 2px dashed #aaa; padding: 12px; margin: 8px 0;">
      <small style="color: gray">[ Composant Enfant ]</small>

      <!-- TODO 3 : Affiche message() avec [style.color]="couleur()" -->
      <p>...</p>
    </div>
  `
})
export class EnfantEx1Component {
  // TODO 1 : Déclare message = input<string>('(aucun message)')
  // message = ???

  // TODO 2 : Déclare couleur = input<string>('black')
  // couleur = ???
}
