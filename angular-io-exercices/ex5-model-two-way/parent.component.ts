import { Component, signal, computed } from '@angular/core';
import { CurseurComponent } from './curseur.component';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 5 — PARENT  parent.component.ts                        ║
  ║  Utiliser [(double-binding)] avec model()                        ║
  ║                                                                  ║
  ║  Rappel : les deux syntaxes sont équivalentes                    ║
  ║                                                                  ║
  ║  Syntaxe courte (two-way binding) :                              ║
  ║    <app-curseur [(valeur)]="rouge" />                            ║
  ║                                                                  ║
  ║  Syntaxe longue (explicite) :                                    ║
  ║    <app-curseur                                                  ║
  ║      [valeur]="rouge()"                                          ║
  ║      (valeurChange)="rouge.set($event)">                         ║
  ║    </app-curseur>                                                ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Instancie <app-curseur> avec [(valeur)]="rouge"              ║
  ║     et [max]="255"                                               ║
  ║                                                                  ║
  ║  2. Instancie un 2ème pour "vert" et un 3ème pour "bleu"         ║
  ║     en utilisant la syntaxe LONGUE (sans [()])                   ║
  ║     pour bien comprendre ce qui se passe                         ║
  ║                                                                  ║
  ║  3. Affiche un aperçu de la couleur RGB :                        ║
  ║     - Un carré coloré avec [style.background]="couleurCSS()"     ║
  ║     - Le code hexa ou rgb : rgb(rouge(), vert(), bleu())         ║
  ║                                                                  ║
  ║  4. Complète couleurCSS() qui retourne                           ║
  ║     `rgb(${rouge()}, ${vert()}, ${bleu()})`                      ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-parent-ex5',
  standalone: true,
  imports: [CurseurComponent],
  template: `
    <h2>Exercice 5 — model() et double data-binding</h2>

    <p><strong>Rouge :</strong></p>
    <!-- TODO 1 : Syntaxe courte [(valeur)]="rouge" + [max]="255" -->


    <p><strong>Vert :</strong></p>
    <!-- TODO 2a : Syntaxe LONGUE pour vert ([valeur] + (valeurChange)) -->


    <p><strong>Bleu :</strong></p>
    <!-- TODO 2b : Syntaxe LONGUE pour bleu -->


    <!-- TODO 3 : Carré de couleur + texte RGB -->
    <div style="margin-top: 16px; display: flex; align-items: center; gap: 16px;">
      <div style="width: 80px; height: 80px; border-radius: 8px; border: 1px solid #ccc;">
        <!-- [style.background]="couleurCSS()" -->
      </div>
      <code>rgb(...)</code>
    </div>
  `
})
export class ParentEx5Component {
  rouge = signal(128);
  vert  = signal(64);
  bleu  = signal(200);

  // TODO 4 : Retourne la chaîne CSS `rgb(${rouge()}, ${vert()}, ${bleu()})`
  couleurCSS = computed(() => '');
}
