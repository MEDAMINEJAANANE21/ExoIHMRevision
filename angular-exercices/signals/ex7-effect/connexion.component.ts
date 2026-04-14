import { Component, signal, effect } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 7 — Effets de bord  effect()                   ║
  ║                                                          ║
  ║  Objectif : Déclencher du code automatiquement           ║
  ║  à chaque changement d'un signal                         ║
  ║                                                          ║
  ║  Rappel syntaxe :                                        ║
  ║    constructor() {                                       ║
  ║      effect(() => {                                      ║
  ║        console.log(this.monSignal()); // re-run auto     ║
  ║      });                                                 ║
  ║    }                                                     ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Complète connecter() → set l'utilisateur à 'Alice'   ║
  ║  2. Complète deconnecter() → set l'utilisateur à null    ║
  ║  3. Dans le constructor, crée un effect() qui :          ║
  ║     a. Logue la valeur du signal dans la console         ║
  ║     b. Ajoute une entrée horodatée dans historique[]     ║
  ║        Format : "14:30:05 — Connexion : Alice"           ║
  ║              ou "14:30:10 — Déconnexion"                 ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-connexion',
  standalone: true,
  template: `
    @if (utilisateur()) {
      <p>✅ Connecté en tant que : {{ utilisateur() }}</p>
      <button (click)="deconnecter()">Se déconnecter</button>
    } @else {
      <p>❌ Non connecté</p>
      <button (click)="connecter()">Se connecter</button>
    }

    <h3>Historique des connexions :</h3>
    <ul>
      @for (entry of historique; track entry) {
        <li>{{ entry }}</li>
      }
    </ul>
  `
})
export class ConnexionComponent {
  utilisateur = signal<string | null>(null);
  historique: string[] = [];

  constructor() {
    // TODO 3 : Crée un effect() ici
    // effect(() => {
    //   a. Récupère la valeur du signal
    //   b. Logue dans la console
    //   c. Ajoute dans historique avec l'heure (new Date().toLocaleTimeString())
    // });
  }

  // TODO 1 : Set utilisateur à 'Alice'
  connecter(): void {

  }

  // TODO 2 : Set utilisateur à null
  deconnecter(): void {

  }
}
