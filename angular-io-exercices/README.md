# 📘 Exercices Angular — Inputs, Outputs & Communication entre composants

---

## 🔑 Comprendre la différence fondamentale

### ❌ Ce que tu faisais avant (Property Binding classique)

```html
<!-- Dans le template du PARENT -->
<div [class.actif]="estActif"></div>
<img [src]="imageUrl" />
```

Ici, `[src]` et `[class.actif]` sont des **propriétés natives du DOM HTML**.
Angular lie simplement une variable du composant à une propriété HTML existante.
→ **Aucune communication entre deux composants.**

---

### ✅ Ce que tu fais maintenant (Input Signal)

```typescript
// Dans le composant ENFANT
export class CarteComponent {
  titre = input<string>('Sans titre');   // signal d'entrée
}
```

```html
<!-- Dans le template du PARENT -->
<app-carte [titre]="monTitre()"></app-carte>
```

Ici `[titre]` n'est PAS une propriété HTML native. C'est Angular qui intercepte
cet attribut et le transmet à l'input signal `titre` du composant `CarteComponent`.
→ **Communication PARENT → ENFANT via un signal en lecture seule.**

---

## 📊 Tableau comparatif

| | Property Binding classique | Input Signal |
|---|---|---|
| **Cible** | Propriété native du DOM (src, href, disabled…) | Attribut déclaré dans un composant Angular |
| **Direction** | Composant → DOM | Parent → Enfant |
| **Syntaxe dans le parent** | `[src]="url"` | `[monInput]="valeur"` |
| **Déclaration** | Aucune (c'est du HTML natif) | `input()` ou `input.required()` dans l'enfant |
| **Type du signal** | N/A | `InputSignal<T>` (lecture seule) |
| **Modifiable par l'enfant ?** | N/A | ❌ Non |

---

## 📡 Schéma de communication

```
  ┌─────────────────────────────────────────────┐
  │              COMPOSANT PARENT                │
  │                                             │
  │   monSignal = signal('Hello')               │
  │   maMethode(val: string) { ... }            │
  │                                             │
  │   Template :                                │
  │   <app-enfant                               │
  │     [data]="monSignal()"       ← input      │
  │     (update)="maMethode($event)"> ← output  │
  │   </app-enfant>                             │
  └───────────────┬──────────────┬──────────────┘
                  │ [data]       │ (update)
              PARENT→ENFANT  ENFANT→PARENT
                  │              │
  ┌───────────────▼──────────────▼──────────────┐
  │              COMPOSANT ENFANT                │
  │                                             │
  │   data   = input<string>()   ← reçoit       │
  │   update = output<string>()  ← émet         │
  │                                             │
  │   // Lire : this.data()                     │
  │   // Émettre : this.update.emit('valeur')   │
  └─────────────────────────────────────────────┘
```

---

## 📂 Structure des exercices

```
angular-io-exercices/
├── ex1-difference-binding/          Comprendre la différence
│   ├── parent.component.ts
│   └── enfant.component.ts
│
├── ex2-input-optionnel-requis/      input() vs input.required()
│   ├── parent.component.ts
│   └── badge.component.ts
│
├── ex3-output-emission/             output() et .emit()
│   ├── parent.component.ts
│   └── bouton-custom.component.ts
│
├── ex4-parent-enfant-complet/       input + output combinés
│   ├── parent.component.ts
│   └── compteur-enfant.component.ts
│
└── ex5-model-two-way/               model() = input + output en un
    ├── parent.component.ts
    └── curseur.component.ts
```

---

## ⚙️ Comment tester dans ton projet Angular

Dans `app.component.html`, ajoute le composant parent de l'exercice :
```html
<app-parent-ex1 />
<app-parent-ex2 />
<!-- etc. -->
```

Assure-toi d'importer le composant parent dans `app.component.ts` :
```typescript
imports: [ParentEx1Component, ParentEx2Component, ...]
```
