import { Component, signal } from '@angular/core';
import { CompteurEnfantComponent } from './compteur-enfant.component';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 4 — PARENT  parent.component.ts                        ║
  ║  Le parent gère l'état, l'enfant est un composant PUR            ║
  ║                                                                  ║
  ║  L'enfant NE modifie PAS de signal lui-même.                     ║
  ║  Il émet des outputs → le parent réagit et met à jour les        ║
  ║  signaux → Angular retransmet les nouvelles valeurs à l'enfant.  ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Dans le template, instancie <app-compteur-enfant>            ║
  ║     - Lie [valeur]="compteurA()"                                 ║
  ║     - Lie [max]="20"                                             ║
  ║     - Écoute (incrementer) → appelle inc('A')                    ║
  ║     - Écoute (decrementer) → appelle dec('A')                    ║
  ║     - Écoute (reset)       → appelle raz('A')                    ║
  ║                                                                  ║
  ║  2. Instancie un 2ème <app-compteur-enfant>                      ║
  ║     - Lie [valeur]="compteurB()"                                 ║
  ║     - Lie [min]="-5"  et [max]="5"                               ║
  ║     - Écoute les 3 outputs → appelle les méthodes pour 'B'       ║
  ║                                                                  ║
  ║  3. Affiche la somme des deux compteurs via total()              ║
  ║                                                                  ║
  ║  4. Complète inc(id), dec(id), raz(id) pour modifier le bon      ║
  ║     signal selon que id === 'A' ou id === 'B'                    ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-parent-ex4',
  standalone: true,
  imports: [CompteurEnfantComponent],
  template: `
    <h2>Exercice 4 — input + output : composant pur</h2>

    <h3>Compteur A (max: 20)</h3>
    <!-- TODO 1 : Instancie app-compteur-enfant pour A -->


    <h3>Compteur B (min: -5, max: 5)</h3>
    <!-- TODO 2 : Instancie app-compteur-enfant pour B -->


    <!-- TODO 3 : Affiche total() -->
    <p><strong>Somme A + B = ...</strong></p>
  `
})
export class ParentEx4Component {
  compteurA = signal(0);
  compteurB = signal(0);

  // TODO 3 : Déclare total = computed(() => compteurA() + compteurB())
  // total = ???

  // TODO 4 : Modifie compteurA ou compteurB selon id
  inc(id: 'A' | 'B'): void {

  }

  dec(id: 'A' | 'B'): void {

  }

  raz(id: 'A' | 'B'): void {

  }
}
