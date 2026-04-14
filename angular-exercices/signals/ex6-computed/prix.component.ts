import { Component, signal, computed } from '@angular/core';

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  EXERCICE 6 — Signal dérivé  computed()                  ║
  ║                                                          ║
  ║  Objectif : Calculer automatiquement des valeurs         ║
  ║  dérivées d'un signal avec computed()                    ║
  ║                                                          ║
  ║  Rappel syntaxe :                                        ║
  ║    const double = computed(() => monSignal() * 2)        ║
  ║    double()   → lecture seule, recalculé automatiquement ║
  ║                                                          ║
  ║  À faire :                                               ║
  ║  1. Déclare montantTVA avec computed()                   ║
  ║     → prixHT() * tauxTVA()                               ║
  ║  2. Déclare prixTTC avec computed()                      ║
  ║     → prixHT() + montantTVA()                            ║
  ║  3. Lie l'input au signal prixHT (voir astuce ci-bas)    ║
  ║  4. Affiche montantTVA() et prixTTC() dans le template   ║
  ║                                                          ║
  ║  ⚠️  Astuce pour lier un <input number> à un signal :    ║
  ║  <input type="number"                                    ║
  ║    [value]="prixHT()"                                    ║
  ║    (input)="prixHT.set(+$any($event.target).value)" />   ║
  ╚══════════════════════════════════════════════════════════╝
*/

@Component({
  selector: 'app-prix',
  standalone: true,
  template: `
    <h2>Calculateur de prix</h2>

    <label>
      Prix HT (€) :
      <!-- TODO 3 : Lie l'input au signal prixHT (voir astuce) -->
      <input type="number" />
    </label>

    <!-- TODO 4 : Affiche montantTVA() et prixTTC() -->
    <p>Montant TVA (20%) : ... €</p>
    <p><strong>Prix TTC : ... €</strong></p>
  `
})
export class PrixComponent {
  prixHT   = signal(100);
  tauxTVA  = signal(0.20);

  // TODO 1 : Déclare montantTVA = computed(() => ...)
  // montantTVA = computed(() => ???);

  // TODO 2 : Déclare prixTTC = computed(() => ...)
  // prixTTC = computed(() => ???);
}
