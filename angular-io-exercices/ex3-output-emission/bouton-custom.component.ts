import { Component, input, output } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 3 — ENFANT  bouton-custom.component.ts                 ║
  ║  Définir et émettre une sortie avec output()                     ║
  ║                                                                  ║
  ║  Un output() permet à l'enfant d'envoyer une valeur vers         ║
  ║  le parent. Le parent s'abonne avec la syntaxe (nomOutput).      ║
  ║                                                                  ║
  ║  Syntaxe dans l'enfant :                                         ║
  ║    clique = output<string>()          // déclare la sortie       ║
  ║    this.clique.emit('ma valeur')      // émet une valeur         ║
  ║                                                                  ║
  ║  Syntaxe dans le parent :                                        ║
  ║    <app-enfant (clique)="maMethode($event)">                     ║
  ║    → $event contient la valeur émise                             ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Déclare un input "libelle" requis de type string             ║
  ║  2. Déclare un input "variante" optionnel : 'primaire'|'danger'  ║
  ║     avec la valeur par défaut 'primaire'                         ║
  ║  3. Déclare un output "clique" qui émet un string                ║
  ║     (le libellé du bouton au moment du clic)                     ║
  ║  4. Crée une méthode onClick() qui appelle this.clique.emit()    ║
  ║     en passant le libelle() comme valeur émise                   ║
  ║  5. Dans le template, crée un <button> qui :                     ║
  ║     - affiche libelle()                                          ║
  ║     - appelle onClick() au (click)                               ║
  ║     - applique [class.danger] selon variante() === 'danger'      ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-bouton-custom',
  standalone: true,
  template: `
    <!-- TODO 5 : Bouton avec (click), affichage libelle, et [class.danger] -->
    <button>...</button>
  `,
  styles: [`
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: #3f51b5;
      color: white;
      font-size: 14px;
      margin: 4px;
    }
    button.danger {
      background: #e53935;
    }
  `]
})
export class BoutonCustomComponent {
  // TODO 1 : libelle = input.required<string>()
  // libelle = ???

  // TODO 2 : variante = input optionnel 'primaire' | 'danger' (défaut: 'primaire')
  // variante = ???

  // TODO 3 : clique = output qui émet un string
  // clique = ???

  // TODO 4 : méthode onClick qui émet le libelle via this.clique.emit(...)
  onClick(): void {

  }
}
