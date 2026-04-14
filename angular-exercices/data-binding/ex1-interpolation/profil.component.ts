import { Component } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 1 — Interpolation  {{ }}                       ║
  ║                                                          ║
  ║  Objectif : Afficher des données du composant dans       ║
  ║  le template grâce à l'interpolation {{ }}               ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Complète la méthode messageAccueil()                 ║
  ║  2. Affiche dans le template :                           ║
  ║     - Le message d'accueil (ex: "Bonjour, Alice Dupont") ║
  ║     - L'âge de l'utilisateur                             ║
  ║     - Son rôle                                           ║
  ║     - Son nom complet (concaténation dans le template)   ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-profil',
  standalone: true,
  template: `
    <!-- TODO 1 : Affiche le message d'accueil via interpolation -->

    <!-- TODO 2 : Affiche l'âge -->

    <!-- TODO 3 : Affiche le rôle -->

    <!-- TODO 4 : Affiche le nom complet en concaténant prenom + ' ' + nom directement dans le template -->

  `
})
export class ProfilComponent {
  prenom = 'Alice';
  nom = 'Dupont';
  age = 28;
  role = 'Développeur Angular';

  // TODO 5 : Retourne la chaîne "Bonjour, Alice Dupont !"
  get messageAccueil(): string {
    return '';
  }
}
