# 📘 Exercices Angular — Signals & Data Binding

## Structure du projet

```
angular-exercices/
├── data-binding/
│   ├── ex1-interpolation/          → {{ expression }}
│   ├── ex2-property-binding/       → [propriété]="valeur"
│   ├── ex3-event-binding/          → (événement)="méthode()"
│   └── ex4-two-way-binding/        → [(ngModel)]="variable"
│
└── signals/
    ├── ex5-signal-base/            → signal() + .update()
    ├── ex6-computed/               → computed()
    ├── ex7-effect/                 → effect()
    └── ex8-panier-complet/         → Tout combiné 🛒
```

## Comment utiliser ces fichiers

1. Copie le dossier `angular-exercices/` dans ton projet Angular (ex: sous `src/app/`)
2. Ouvre chaque fichier `.component.ts`
3. Lis les instructions dans l'en-tête `╔══╗`
4. Complète chaque `// TODO` dans l'ordre indiqué
5. Ajoute le composant dans ton `app.component.html` pour tester :
   ```html
   <app-profil />
   <app-image-carte />
   <!-- etc. -->
   ```

## Prérequis

- Angular **17+** (pour la syntaxe `@if`, `@for` et les Signals stables)
- Pour l'ex4 : `FormsModule` est déjà importé dans le composant

## Récapitulatif des APIs Signals

| API | Usage | Exemple |
|-----|-------|---------|
| `signal(val)` | Crée un signal | `count = signal(0)` |
| `monSignal()` | Lit la valeur | `{{ count() }}` |
| `.set(val)` | Remplace la valeur | `count.set(5)` |
| `.update(fn)` | Modifie depuis l'ancienne valeur | `count.update(v => v + 1)` |
| `computed(fn)` | Valeur dérivée (lecture seule) | `double = computed(() => count() * 2)` |
| `effect(fn)` | Effet de bord automatique | `effect(() => console.log(count()))` |
