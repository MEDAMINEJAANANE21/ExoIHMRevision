import { Component, signal } from '@angular/core';
import { BoutonCustomComponent } from './bouton-custom.component';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 3 — PARENT  parent.component.ts                        ║
  ║                                                                  ║
  ║  Tu vas recevoir les événements émis par le composant enfant.    ║
  ║                                                                  ║
  ║  Syntaxe pour écouter un output :                                ║
  ║    <app-bouton-custom                                            ║
  ║      [libelle]="'Valider'"                                       ║
  ║      (clique)="surClic($event)">         ← $event = string émis  ║
  ║    </app-bouton-custom>                                          ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Instancie <app-bouton-custom> avec [libelle]="'Valider'"     ║
  ║     et écoute (clique) → appelle surClic($event)                 ║
  ║                                                                  ║
  ║  2. Instancie un 2ème bouton avec [libelle]="'Supprimer'"        ║
  ║     et [variante]="'danger'" — écoute aussi (clique)             ║
  ║                                                                  ║
  ║  3. Affiche le dernier message reçu via derniereAction()         ║
  ║                                                                  ║
  ║  4. Affiche un historique de tous les clics (historique[])       ║
  ║                                                                  ║
  ║  5. Complète surClic(libelle: string) pour :                     ║
  ║     - mettre à jour derniereAction avec le libelle reçu          ║
  ║     - ajouter une entrée horodatée dans historique[]             ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-parent-ex3',
  standalone: true,
  imports: [BoutonCustomComponent],
  template: `
    <h2>Exercice 3 — output() et émission d'événements</h2>

    <!-- TODO 1 : Bouton "Valider" qui écoute (clique) -->
    <app-bouton-custom
      [libelle]="'Valider'"
      (clique)="surClic($event)">
    </app-bouton-custom>

    <!-- TODO 2 : Bouton "Supprimer" variante danger qui écoute (clique) -->
    <app-bouton-custom
      [libelle]="'Supprimer'"
      [variante]="'danger'"
      (clique)="surClic($event)">
    </app-bouton-custom>

    <!-- TODO 3 : Affiche derniereAction() -->
    <p>Dernière action : {{derniereAction()}}</p>

    <!-- TODO 4 : Affiche la liste historique[] -->
    <ul>
      @for (his of historique; track his) {
        <li>{{ his }}</li>
      }
    </ul>
  `
})
export class ParentEx3Component {
  derniereAction = signal('(aucune)');
  historique: string[] = [];

  // TODO 5 : Met à jour derniereAction et ajoute dans historique
  surClic(libelle: string): void {
    this.derniereAction.set(libelle);
    this.historique.push(this.derniereAction());
  }
}
