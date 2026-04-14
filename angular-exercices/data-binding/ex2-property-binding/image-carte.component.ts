import { Component } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 2 — Property Binding  [propriété]="valeur"     ║
  ║                                                          ║
  ║  Objectif : Lier des propriétés HTML à des variables     ║
  ║  du composant via [prop]="valeur"                        ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Lie [src] et [alt] de la balise <img>                ║
  ║  2. Lie [disabled] du bouton à !estConnecte              ║
  ║  3. Lie [class.actif] sur le <div> selon le statut       ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-image-carte',
  standalone: true,
  template: `
    <!-- TODO 1 : Lie [src] et [alt] à imageUrl et imageAlt -->
    <img />

    <!-- TODO 2 : Lie [disabled] à !estConnecte -->
    <button>Accéder au profil</button>

    <!-- TODO 3 : Lie [class.actif] pour appliquer le style si statut === 'Actif' -->
    <div>Statut : {{ statut }}</div>
  `,
  styles: [`
    .actif { color: green; font-weight: bold; }
  `]
})
export class ImageCarteComponent {
  imageUrl   = 'https://picsum.photos/200';
  imageAlt   = 'Photo de profil';
  estConnecte = false;
  statut     = 'Actif';
}
