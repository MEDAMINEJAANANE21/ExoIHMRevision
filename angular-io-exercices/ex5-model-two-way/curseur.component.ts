import { Component, model, computed } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  EXERCICE 5 — ENFANT  curseur.component.ts                       ║
  ║  model() = input + output en un seul appel                       ║
  ║                                                                  ║
  ║  model() est un raccourci qui crée SIMULTANÉMENT :               ║
  ║    • un input signal   : reçoit la valeur du parent              ║
  ║    • un output signal  : émet "nomChange" quand on modifie       ║
  ║                                                                  ║
  ║  Syntaxe :                                                       ║
  ║    valeur = model<number>(0)        // modèle + valeur par défaut ║
  ║    valeur = model.required<number>()// modèle requis              ║
  ║                                                                  ║
  ║  Contrairement à input(), un model() est un WritableSignal :     ║
  ║  l'enfant PEUT appeler this.valeur.set() ou .update()            ║
  ║  → Angular émet automatiquement l'événement "valeurChange"       ║
  ║    pour informer le parent du changement.                        ║
  ║                                                                  ║
  ║  Dans le parent :                                                ║
  ║    <app-curseur [(valeur)]="monSignal" />                        ║
  ║  est équivalent à :                                              ║
  ║    <app-curseur                                                  ║
  ║      [valeur]="monSignal()"                                      ║
  ║      (valeurChange)="monSignal.set($event)">                     ║
  ║    </app-curseur>                                                ║
  ║                                                                  ║
  ║  À faire :                                                       ║
  ║  1. Déclare "valeur" comme model requis de type number           ║
  ║  2. Déclare "min" comme input optionnel (défaut: 0)              ║
  ║  3. Déclare "max" comme input optionnel (défaut: 100)            ║
  ║  4. Crée un computed "pourcentage" =                             ║
  ║     (valeur()-min()) / (max()-min()) * 100                       ║
  ║  5. Dans le template :                                           ║
  ║     - Affiche une barre de progression avec [style.width]        ║
  ║       liée à pourcentage() + '%'                                 ║
  ║     - Affiche la valeur actuelle                                 ║
  ║     - Bouton "−10" → this.valeur.update(v => Math.max(min(),v-10))
  ║     - Bouton "+10" → this.valeur.update(v => Math.min(max(),v+10))
  ║     - Un <input type="range"> lié en two-way au model valeur     ║
  ║       (utilise [value] et (input) pour lire le range)            ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-curseur',
  standalone: true,
  template: `
    <div style="border: 2px solid #009688; padding: 12px; border-radius: 8px; min-width: 280px;">
      <small style="color: gray">[ Curseur Enfant ]</small>

      <!-- TODO 5a : Barre de progression -->
      <div style="background:#e0e0e0; border-radius:4px; height:12px; margin: 8px 0;">
        <div style="background:#009688; height:100%; border-radius:4px; transition: width 0.2s;">
          <!-- [style.width] lié à pourcentage() + '%' -->
        </div>
      </div>

      <!-- TODO 5b : Affiche valeur() entre min() et max() -->
      <p>Valeur : ...</p>

      <!-- TODO 5c : Boutons −10 et +10 -->
      <button>−10</button>
      <button>+10</button>

      <!-- TODO 5d : <input type="range"> lié au model valeur -->
      <!-- [min]="min()" [max]="max()" [value]="valeur()" -->
      <!-- (input)="valeur.set(+$any($event.target).value)" -->
      <br />
      <input type="range" />
    </div>
  `
})
export class CurseurComponent {
  // TODO 1 : valeur = model.required<number>()
  // valeur = ???

  // TODO 2 : min = input optionnel (défaut: 0)
  // min = ???

  // TODO 3 : max = input optionnel (défaut: 100)
  // max = ???

  // TODO 4 : pourcentage = computed(...)
  // pourcentage = computed(() => ???);
}
