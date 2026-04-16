import { Component, input } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 2 — ENFANT  badge.component.ts                         ║
  ║  input() optionnel  vs  input.required()                         ║
  ║                                                                  ║
  ║  Règle Angular :                                                 ║
  ║  • input<T>(defaut)     → optionnel, valeur par défaut requise   ║
  ║  • input.required<T>()  → requis, PAS de valeur par défaut       ║
  ║    Le parent EST OBLIGÉ de le renseigner sinon erreur Angular.   ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Déclare "label" comme input REQUIS de type string            ║
  ║     → le parent sera OBLIGÉ de le fournir                        ║
  ║                                                                  ║
  ║  2. Déclare "couleurFond" comme input OPTIONNEL de type string   ║
  ║     avec la valeur par défaut '#3f51b5'                          ║
  ║                                                                  ║
  ║  3. Déclare "couleurTexte" comme input OPTIONNEL de type string  ║
  ║     avec la valeur par défaut 'white'                            ║
  ║                                                                  ║
  ║  4. Déclare "taille" comme input OPTIONNEL de type                ║
  ║     'petit' | 'moyen' | 'grand'  avec la valeur par défaut       ║
  ║     'moyen'                                                      ║
  ║                                                                  ║
  ║  5. Dans le template, affiche le badge avec les styles liés      ║
  ║     aux inputs : background, color, et font-size selon taille()  ║
  ║     (petit: 11px, moyen: 14px, grand: 18px)                      ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <!-- TODO 5 : Affiche le badge avec les styles dynamiques -->
    <!-- Utilise [style.background], [style.color], [style.font-size] -->
    <span
      [style.background]="couleurFond()"
      [style.color]="couleurTexte()"
      [style.font-size]="fontSize"
    >
      {{ label() }}
    </span>
  `,
  styles: [`
    span {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-weight: bold;
      margin: 4px;
    }
  `]
})
export class BadgeComponent {
  // TODO 1 : label requis (input.required)
  // label = ???
  protected readonly label = input.required<string>();

  // TODO 2 : couleurFond optionnel (défaut : '#3f51b5')
  // couleurFond = ???
   protected readonly couleurFond = input<string>('#3f51b5');

  // TODO 3 : couleurTexte optionnel (défaut : 'white')
  // couleurTexte = ???
  protected readonly couleurTexte  = input<string>('white');

  // TODO 4 : taille optionnel (défaut : 'moyen')
  // taille = ???
  protected readonly taille = input<'petit' | 'moyen' | 'grand'>('moyen');

  // TODO 5 (aide) : pour la font-size, crée un computed() ou utilise une méthode
   get fontSize(): string {
     switch(this.taille()) {
       case 'petit': return '11px';
       case 'grand': return '18px';
       default:      return '14px';
    }
   }
}
