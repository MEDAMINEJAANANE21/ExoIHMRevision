import { Component, input, output } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 4 — ENFANT  compteur-enfant.component.ts               ║
  ║  Combiner input() et output() : composant pur                    ║
  ║                                                                  ║
  ║  Un composant est dit PUR si son état ne dépend que de ses       ║
  ║  inputs. Il ne modifie PAS son état lui-même : il reçoit une     ║
  ║  valeur via input() et émet des demandes de modification         ║
  ║  via output(). C'est le PARENT qui décide de modifier l'état.   ║
  ║                                                                  ║
  ║  Schéma d'un composant pur :                                     ║
  ║    PARENT ──[valeur]──► ENFANT (affiche)                         ║
  ║    PARENT ◄──(incrementer)── ENFANT (demande)                    ║
  ║    PARENT ◄──(decrementer)── ENFANT (demande)                    ║
  ║    PARENT ◄──(reset)──────── ENFANT (demande)                    ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Déclare un input "valeur" requis de type number              ║
  ║  2. Déclare un input "min" optionnel (défaut : 0)                ║
  ║  3. Déclare un input "max" optionnel (défaut : 10)               ║
  ║  4. Déclare un output "incrementer" qui n'émet rien (void)       ║
  ║     → output<void>()                                             ║
  ║  5. Déclare un output "decrementer" qui n'émet rien (void)       ║
  ║  6. Déclare un output "reset" qui n'émet rien (void)             ║
  ║  7. Dans le template :                                           ║
  ║     - Affiche valeur()                                           ║
  ║     - Bouton "+" → émet incrementer (désactivé si valeur>=max)   ║
  ║     - Bouton "−" → émet decrementer (désactivé si valeur<=min)   ║
  ║     - Bouton "Reset" → émet reset                                ║
  ║  8. Crée les méthodes demanderInc(), demanderDec(), demanderReset()
  ║     qui appellent this.incrementer.emit(), etc.                  ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-compteur-enfant',
  standalone: true,
  template: `
    <div style="border: 2px solid #3f51b5; padding: 12px; border-radius: 8px; display: inline-block;">
      <small style="color: gray">[ CompteurEnfant ]</small>

      <!-- TODO 7 : Boutons et affichage de valeur() -->
      <!-- [disabled] sur le "+" si valeur() >= max() -->
      <!-- [disabled] sur le "−" si valeur() <= min() -->
      <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
        <button>−</button>
        <strong>...</strong>
        <button>+</button>
        <button>Reset</button>
      </div>
    </div>
  `
})
export class CompteurEnfantComponent {
  // TODO 1 : valeur = input.required<number>()
  // valeur = ???

  // TODO 2 : min = input optionnel (défaut: 0)
  // min = ???

  // TODO 3 : max = input optionnel (défaut: 10)
  // max = ???

  // TODO 4 : output incrementer (void)
  // incrementer = ???

  // TODO 5 : output decrementer (void)
  // decrementer = ???

  // TODO 6 : output reset (void)
  // reset = ???

  // TODO 8 : Méthodes qui émettent via les outputs
  demanderInc(): void {

  }

  demanderDec(): void {

  }

  demanderReset(): void {

  }
}
