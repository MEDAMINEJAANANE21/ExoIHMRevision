import { Component, signal, computed, effect } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 8 — Exercice Complet 🛒 Panier e-commerce      ║
  ║                                                          ║
  ║  Objectif : Combiner signal(), computed(), effect()      ║
  ║  et tous les types de data binding                       ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Déclare nbArticles avec computed()                   ║
  ║     → somme de toutes les quantités                      ║
  ║  2. Déclare total avec computed()                        ║
  ║     → somme de (prix * quantite) pour chaque produit     ║
  ║  3. Dans le constructor, crée un effect() qui logue      ║
  ║     le total dans la console à chaque changement         ║
  ║  4. Complète incrementer(id) avec .update() + .map()     ║
  ║     → augmente la quantité du produit dont id correspond ║
  ║  5. Complète decrementer(id) avec .update() + .map()     ║
  ║     → diminue la quantité (minimum 0)                    ║
  ║  6. Complète viderPanier()                               ║
  ║     → remet toutes les quantités à 0                     ║
  ║                                                          ║
  ║  💡 Astuce pour .update() sur un tableau :               ║
  ║    this.produits.update(liste =>                         ║
  ║      liste.map(p => p.id === id                          ║
  ║        ? { ...p, quantite: p.quantite + 1 }              ║
  ║        : p                                               ║
  ║      )                                                   ║
  ║    );                                                    ║
  ╚══════════════════════════════════════════════════════════╝
*/

interface Produit {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
}

@Component({
  selector: 'app-panier',
  standalone: true,
  template: `
    <!-- nbArticles() est déjà utilisé ici, à toi de le déclarer -->
    <h1>🛒 Mon Panier ({{ nbArticles() }} articles)</h1>

    @if (nbArticles() === 0) {
      <p>🛍️ Le panier est vide.</p>
    } @else {
      @for (produit of produits(); track produit.id) {
        <div style="margin: 8px 0; display: flex; gap: 12px; align-items: center;">
          <span style="min-width: 200px">{{ produit.nom }}</span>
          <span>{{ produit.prix }} €</span>
          <button (click)="decrementer(produit.id)">−</button>
          <span>{{ produit.quantite }}</span>
          <button (click)="incrementer(produit.id)">+</button>
        </div>
      }

      <hr />
      <strong>Total : {{ total() }} €</strong>
      <br /><br />
      <button (click)="viderPanier()">🗑️ Vider le panier</button>
    }
  `
})
export class PanierComponent {

  produits = signal<Produit[]>([
    { id: 1, nom: 'Clavier mécanique',  prix: 89, quantite: 1 },
    { id: 2, nom: 'Souris ergonomique', prix: 45, quantite: 2 },
    { id: 3, nom: 'Tapis de souris XXL',prix: 25, quantite: 1 },
  ]);

  // TODO 1 : Déclare nbArticles avec computed()
  // → réduit le tableau pour sommer toutes les quantités
  // nbArticles = computed(() => ???);

  // TODO 2 : Déclare total avec computed()
  // → réduit le tableau pour sommer prix * quantite
  // total = computed(() => ???);

  constructor() {
    // TODO 3 : Crée un effect() qui logue le total dans la console
  }

  // TODO 4 : Incrémente la quantité du produit avec l'id donné
  incrementer(id: number): void {

  }

  // TODO 5 : Décrémente la quantité (min 0) du produit avec l'id donné
  decrementer(id: number): void {

  }

  // TODO 6 : Remet toutes les quantités à 0
  viderPanier(): void {

  }
}
