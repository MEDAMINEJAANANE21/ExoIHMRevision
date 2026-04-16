import { Component } from '@angular/core';
import { BadgeComponent } from './badge.component';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 2 — PARENT  parent.component.ts                        ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Instancie <app-badge> en fournissant uniquement [label]      ║
  ║     → les autres inputs prendront leurs valeurs par défaut       ║
  ║                                                                  ║
  ║  2. Instancie <app-badge> avec [label] + [couleurFond]           ║
  ║     personnalisée                                                 ║
  ║                                                                  ║
  ║  3. Instancie <app-badge> avec [label] + [taille]="'grand'"      ║
  ║                                                                  ║
  ║  4. Instancie <app-badge> SANS fournir [label]                   ║
  ║     → observe l'erreur Angular dans la console :                 ║
  ║       "Required input 'label' not provided"                      ║
  ║     → puis remets [label] pour corriger                          ║
  ║                                                                  ║
  ║  ⚠️  Note : pour passer une chaîne littérale à un input, écris   ║
  ║     [label]="'mon texte'"  (guillemets imbriqués)                ║
  ║     ou utilise  label="mon texte"  (sans crochets)               ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-parent-ex2',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <h2>Exercice 2 — input() optionnel vs input.required()</h2>

    <!-- TODO 1 : Badge avec seulement [label] -->
    <app-badge [label]="'Badge 1'" />

    <!-- TODO 2 : Badge avec [label] + [couleurFond] personnalisée -->
    <app-badge [label]="'Badge 2'" [couleurFond]="'#ff5722'" />

    <!-- TODO 3 : Badge avec [label] + [taille]="'grand'" -->
    <app-badge [label]="'Badge 3'" [taille]="'grand'" />

    <!-- TODO 4 : Badge SANS [label] → observe l'erreur, puis corrige -->
    
  `
})
export class ParentEx2Component {}
