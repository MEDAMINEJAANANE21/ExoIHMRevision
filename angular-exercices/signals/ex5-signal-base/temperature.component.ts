import { Component, signal } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 5 — Signal de base  signal() + .update()       ║
  ║                                                          ║
  ║  Objectif : Créer et modifier un signal simple           ║
  ║                                                          ║
  ║  Rappel syntaxe :                                        ║
  ║    const s = signal(valeurInitiale)                      ║
  ║    s()              → lire la valeur dans le template    ║
  ║    s.set(10)        → remplacer la valeur                ║
  ║    s.update(v => v + 1) → modifier depuis la valeur      ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Déclare le signal temperature initialisé à 20        ║
  ║  2. Affiche temperature() dans le template               ║
  ║  3. Lie (click) des boutons à augmenter() et baisser()   ║
  ║  4. Complète augmenter() avec .update()                  ║
  ║  5. Complète baisser() avec .update()                    ║
  ║  6. Affiche ⚠️ "Trop chaud !" si temp > 35               ║
  ║  7. Affiche 🥶 "Trop froid !" si temp < 0                ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-temperature',
  standalone: true,
  template: `
    <!-- TODO 2 : Affiche la valeur du signal temperature -->
    <h2>Température : {{temperature()}}°C</h2>

    <!-- TODO 3 : Lie les boutons aux méthodes -->
    <button (click) = "baisser()">− 1°C</button>
    <button (click) = "augmenter()">+ 1°C</button>

    <!-- TODO 6 : Affiche une alerte si temp > 35 -->
    @if(temperature()>35){
      <p>⚠️ Trop chaud !</p>
    }

    <!-- TODO 7 : Affiche une alerte si temp < 0 -->
    @if(temperature()<0){
      <p>🥶 Trop froid !</p>
    }
  `
})
export class TemperatureComponent {

  // TODO 1 : Déclare le signal temperature (valeur initiale : 20)
  // temperature = signal(???);
  protected readonly temperature = signal<number>(20);

  // TODO 4 : Incrémente temperature de 1 avec .update()
  protected augmenter(): void {
    this.temperature.update((temp:number) => temp + 1);
  }

  // TODO 5 : Décrémente temperature de 1 avec .update()
  protected baisser(): void {
    this.temperature.update((temp:number) => temp - 1);

  }
}
