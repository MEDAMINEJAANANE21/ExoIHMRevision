// ============================================================
//  EXERCICES SUR LES PROMESSES EN TYPESCRIPT / ANGULAR
//  Niveaux : 🟢 Facile | 🟡 Moyen | 🔴 Difficile
// ============================================================

// ============================================================
// PARTIE 1 — new Promise() : LE CONSTRUCTEUR
// ============================================================

// 🟢 EXERCICE 1.1 — Facile
// CONCEPT : Comprendre les états pending → fulfilled / rejected
// INTÉRÊT : Apprendre à créer une promesse manuellement
//           et à déclencher resolve() ou reject()
//
// TODO : Complète la fonction `diviser` qui retourne une Promise<number>.
//        - Si `b === 0`, rejeter avec le message "Division par zéro !"
//        - Sinon, résoudre avec le résultat de a / b
//
// function diviser(a: number, b: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     // ??? ton code ici
//   });
// }
//
// Test attendu :
// diviser(10, 2).then(r => console.log(r));        // → 5
// diviser(10, 0).catch(e => console.error(e));     // → "Division par zéro !"


// ─────────────────────────────────────────────────────────────

// 🟡 EXERCICE 1.2 — Moyen
// CONCEPT : Wrapper une fonction callback avec new Promise()
// INTÉRÊT : C'est le cas réel quand tu dois "promessifier"
//           une ancienne API (setTimeout, fs.readFile, etc.)
//
// La fonction ci-dessous utilise un callback.
// TODO : Écris `jouerSonP` qui fait la même chose mais retourne une Promise<void>.
//
// function jouerSon(url: string, cb: () => void): void {
//   console.log(`Début de la lecture du son ${url}`);
//   setTimeout(() => {
//     console.log(`Fin de la lecture du son ${url}`);
//     cb();
//   }, 500 + Math.random() * 500);
// }
//
// function jouerSonP(url: string): Promise<void> {
//   return new Promise<void>((resolve) => {
//     // ??? utilise jouerSon ici
//   });
// }
//
// Test attendu :
// jouerSonP("intro.mp3").then(() => console.log("Promesse résolue !"));


// ─────────────────────────────────────────────────────────────

// 🔴 EXERCICE 1.3 — Difficile
// CONCEPT : Promessifier avec gestion d erreur + timeout
// INTÉRÊT : Simuler une vraie requête réseau qui peut échouer
//           et comprendre pourquoi on a besoin de reject()
//
// TODO : Écris `fetchDataP(url: string): Promise<string>` qui :
//        - Attend un délai aléatoire entre 200ms et 800ms
//        - Si url contient "bad", rejeter avec "URL invalide : <url>"
//        - Sinon, résoudre avec "Données reçues de : <url>"
//        - BONUS : Ajoute un mécanisme de timeout global à 600ms :
//          si le délai dépasse 600ms → rejeter avec "Timeout dépassé"
//
// function fetchDataP(url: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     // ??? ton code ici
//   });
// }
//
// Tests attendus :
// fetchDataP("https://api.example.com/data")
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
//
// fetchDataP("https://bad.url")
//   .then(data => console.log(data))
//   .catch(err => console.error(err));  // → "URL invalide : https://bad.url"


// ============================================================
// PARTIE 2 — Promise.resolve() / Promise.reject()
// ============================================================

// 🟢 EXERCICE 2.1 — Facile
// CONCEPT : Retourner une promesse déjà résolue
// INTÉRÊT : Uniformiser une interface — que la donnée vienne du
//           cache ou du réseau, on retourne toujours une Promise
//
// TODO : Complète `getUsername(id: number): Promise<string>`
//        - Si id === 1, retourner directement Promise.resolve("Alice")
//        - Si id === 2, retourner directement Promise.resolve("Bob")
//        - Sinon, retourner Promise.reject("Utilisateur introuvable")
//
// function getUsername(id: number): Promise<string> {
//   // ??? ton code ici
// }
//
// Tests attendus :
// getUsername(1).then(n => console.log(n));         // → "Alice"
// getUsername(99).catch(e => console.error(e));     // → "Utilisateur introuvable"


// ─────────────────────────────────────────────────────────────

// 🟡 EXERCICE 2.2 — Moyen
// CONCEPT : Forcer un reject() à l intérieur d un .then()
// INTÉRÊT : Comprendre que dans un .then(), retourner
//           Promise.reject() court-circuite le chaînage
//           vers le .catch() le plus proche
//
// TODO : Complète le chaînage suivant :
//        - validateAge(age) : si age < 0 ou > 150 → Promise.reject("Âge invalide")
//                             sinon → Promise.resolve(age)
//        - Dans le .then() suivant, si age < 18 → Promise.reject("Mineur refusé")
//                                   sinon → afficher "Accès autorisé pour " + age + " ans"
//
// function validateAge(age: number): Promise<number> {
//   // ??? ton code ici
// }
//
// validateAge(???)
//   .then((age) => {
//     // ??? vérification mineur
//   })
//   .catch((err) => console.error("Erreur :", err));
//
// Tests attendus :
// validateAge(-5)   → "Erreur : Âge invalide"
// validateAge(15)   → "Erreur : Mineur refusé"
// validateAge(25)   → "Accès autorisé pour 25 ans"


// ─────────────────────────────────────────────────────────────

// 🔴 EXERCICE 2.3 — Difficile
// CONCEPT : Cache avec fallback réseau + Promise.resolve/reject
// INTÉRÊT : Pattern très courant en Angular (NgRx, services HTTP)
//           Comprendre que l appelant ne sait pas d où vient la donnée
//
// TODO : Implémente `getData(key: string): Promise<string>` qui :
//        1. Cherche dans `cache` (Map<string, string>)
//        2. Si trouvé → Promise.resolve(valeur du cache) + log "depuis le cache"
//        3. Si non trouvé → simule un appel réseau (setTimeout 300ms)
//           - Si la clé contient "error" → reject("Erreur serveur")
//           - Sinon → resolve("Données pour : " + key) + stocker dans cache
//
// const cache = new Map<string, string>();
//
// function getData(key: string): Promise<string> {
//   // ??? ton code ici
// }
//
// Tests attendus :
// getData("user1")                           // → "Données pour : user1" (réseau)
//   .then(d => getData("user1"))             // → "depuis le cache"
//   .then(d => console.log(d))
//   .catch(console.error);
//
// getData("error-404").catch(console.error); // → "Erreur serveur"


// ============================================================
// PARTIE 3 — COMBINATEURS
// ============================================================

// ─── Promise.all ─────────────────────────────────────────────

// 🟢 EXERCICE 3.1 — Facile (Promise.all)
// CONCEPT : Lancer plusieurs promesses en parallèle
// INTÉRÊT : Bien plus rapide que le séquentiel pour des
//           opérations indépendantes (requêtes, fichiers...)
//
// TODO : Utilise Promise.all pour récupérer en parallèle :
//        - fetchUser(1)    → résout avec { id: 1, name: "Alice" } après 300ms
//        - fetchPosts(1)   → résout avec ["Post1", "Post2"] après 500ms
//        - fetchFriends(1) → résout avec ["Bob", "Charlie"] après 200ms
//       Affiche ensuite les 3 résultats ensemble.
//
// function fetchUser(id: number): Promise<{ id: number; name: string }> {
//   return new Promise(resolve => setTimeout(() => resolve({ id, name: "Alice" }), 300));
// }
// function fetchPosts(id: number): Promise<string[]> {
//   return new Promise(resolve => setTimeout(() => resolve(["Post1", "Post2"]), 500));
// }
// function fetchFriends(id: number): Promise<string[]> {
//   return new Promise(resolve => setTimeout(() => resolve(["Bob", "Charlie"]), 200));
// }
//
// Promise.all([...])
//   .then(([user, posts, friends]) => {
//     // afficher les 3 résultats
//   });


// ─────────────────────────────────────────────────────────────

// 🔴 EXERCICE 3.2 — Difficile (Promise.all)
// CONCEPT : Promise.all échoue au premier rejet ("fail-fast")
// INTÉRÊT : Comprendre quand NE PAS utiliser Promise.all
//           (quand certains échecs sont acceptables)
//
// TODO : Écris `chargerDashboard(userId: number): Promise<void>` qui :
//        - Lance fetchUser, fetchPosts, fetchFriends en parallèle
//        - Si fetchPosts échoue (simule avec reject si userId === 99),
//          TOUT le Promise.all doit être rejeté
//        - Affiche un message d erreur clair
//        - BONUS : Refais la même chose avec Promise.allSettled
//          pour afficher quand même les données partielles
//
// async function chargerDashboard(userId: number): Promise<void> {
//   // ??? version Promise.all
//   // ??? version Promise.allSettled en bonus
// }
//
// chargerDashboard(1);   // → tout OK
// chargerDashboard(99);  // → erreur, rien ne s affiche (avec all)
//                        // → données partielles (avec allSettled)


// ─── Promise.any ─────────────────────────────────────────────

// 🟡 EXERCICE 3.3 — Moyen (Promise.any)
// CONCEPT : Promise.any prend la première promesse fulfillée
// INTÉRÊT : Pattern "miroir" — interroger plusieurs serveurs
//           et utiliser la réponse la plus rapide
//
// TODO : Tu as 3 "serveurs miroirs". Crée 3 promesses qui résolvent
//        après des délais différents (ex: 800ms, 300ms, 600ms).
//        Utilise Promise.any pour afficher la réponse du plus rapide.
//        BONUS : Fais échouer les serveurs 1 et 3 — vérifie que
//        Promise.any utilise quand même le serveur 2.
//
// const serveur1 = new Promise<string>((resolve) => setTimeout(() => resolve("Serveur 1"), 800));
// const serveur2 = new Promise<string>((resolve) => setTimeout(() => resolve("Serveur 2"), 300));
// const serveur3 = new Promise<string>((resolve) => setTimeout(() => resolve("Serveur 3"), 600));
//
// Promise.any([serveur1, serveur2, serveur3])
//   .then(result => console.log("Réponse la plus rapide :", result))
//   .catch(err => console.error("Tous les serveurs ont échoué :", err));


// ─── Promise.race ────────────────────────────────────────────

// 🟢 EXERCICE 3.4 — Facile (Promise.race)
// CONCEPT : Promise.race retourne la première résolue OU rejetée
// INTÉRÊT : Pattern "timeout" — ne pas attendre indéfiniment
//           une réponse réseau
//
// TODO : Crée une fonction `withTimeout<T>(promise: Promise<T>, ms: number): Promise<T>`
//        qui rejette avec "Timeout !" si la promesse prend plus de `ms` millisecondes.
//        Teste-la avec une requête qui prend 800ms et un timeout de 500ms.
//
// function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
//   const timeoutP = new Promise<T>((_, reject) =>
//     setTimeout(() => reject("Timeout !"), ms)
//   );
//   return ???; // utilise Promise.race
// }
//
// const requeteLente = new Promise<string>(resolve => setTimeout(() => resolve("Données"), 800));
//
// withTimeout(requeteLente, 500)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));  // → "Timeout !"
//
// withTimeout(requeteLente, 1200)
//   .then(data => console.log(data))   // → "Données"
//   .catch(err => console.error(err));


// ─── Promise.allSettled ──────────────────────────────────────

// 🟡 EXERCICE 3.5 — Moyen (Promise.allSettled)
// CONCEPT : allSettled attend tout le monde sans jamais rejeter
// INTÉRÊT : Idéal pour les opérations en masse (envois d emails,
//           imports par lot) où des échecs partiels sont tolérés
//
// TODO : Tu envoies des emails à 4 utilisateurs.
//        - alice@mail.com  → succès après 200ms
//        - bob@mail.com    → échec après 400ms (simuler avec reject)
//        - carol@mail.com  → succès après 100ms
//        - dave@mail.com   → échec après 300ms (simuler avec reject)
//
//        Utilise Promise.allSettled pour :
//        - Afficher combien d emails ont été envoyés avec succès
//        - Lister les adresses qui ont échoué
//
// function envoyerEmail(destinataire: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     // ??? ton code ici
//   });
// }
//
// Promise.allSettled([
//   envoyerEmail("alice@mail.com"),
//   envoyerEmail("bob@mail.com"),
//   envoyerEmail("carol@mail.com"),
//   envoyerEmail("dave@mail.com"),
// ]).then(results => {
//   const succes = results.filter(r => r.status === "fulfilled");
//   const echecs = results.filter(r => r.status === "rejected");
//   console.log(`Succes : ${succes.length} email(s) envoyé(s)`);
//   console.log(`Echec  : ${echecs.length} email(s) échoué(s)`);
// });


// ─────────────────────────────────────────────────────────────

// 🔴 EXERCICE 3.6 — Difficile (Promise.allSettled)
// CONCEPT : Rapport détaillé + retry sur les échecs
// INTÉRÊT : Pattern "batch processing" professionnel —
//           1er passage allSettled, puis retry sur les rejected
//
// TODO : Implémente un système d envoi en 2 passes :
//        PASSE 1 : Envoyer à une liste de 5 emails avec allSettled
//        PASSE 2 : Récupérer les rejected de la passe 1 et les réessayer
//                  (simule que la 2ème tentative réussit toujours)
//        Affiche un rapport final : succès passe 1, succès passe 2, échecs totaux
//
// const emails = ["a@mail.com", "b@mail.com", "c@mail.com", "d@mail.com", "e@mail.com"];
// // Simule : b et d échouent à la 1ère passe
//
// async function envoyerAvecRetry(liste: string[]): Promise<void> {
//   // ??? ton code ici
// }


// ============================================================
// PARTIE 4 — async / await
// ============================================================

// 🟢 EXERCICE 4.1 — Facile
// CONCEPT : async/await = syntaxe synchrone sur des Promesses
// INTÉRÊT : Comprendre que async retourne toujours une Promise
//           et que await "déplie" la valeur
//
// TODO : Réécris ce chaînage .then() en async/await :
//
// getUsername(1)
//   .then(name => name.toUpperCase())
//   .then(name => console.log("Bonjour,", name))
//   .catch(err => console.error(err));
//
// async function saluer(id: number): Promise<void> {
//   // ??? ton code ici (même résultat, sans .then())
// }


// ─────────────────────────────────────────────────────────────

// 🟡 EXERCICE 4.2 — Moyen
// CONCEPT : Séquentiel vs Parallèle avec async/await
// INTÉRÊT : Piège classique — await dans une boucle est SÉQUENTIEL
//           Savoir quand utiliser await Promise.all([...])
//
// // Séquentiel (lent) — temps total = 300 + 500 + 200 = 1000ms
// async function chargerSequentiel(): Promise<void> {
//   const user    = await fetchUser(1);    // 300ms
//   const posts   = await fetchPosts(1);   // 500ms
//   const friends = await fetchFriends(1); // 200ms
//   console.log(user, posts, friends);
// }
//
// // Parallèle (rapide) — temps total = max(300, 500, 200) = 500ms
// async function chargerParallele(): Promise<void> {
//   const [user, posts, friends] = await Promise.all([
//     fetchUser(1),
//     fetchPosts(1),
//     fetchFriends(1),
//   ]);
//   console.log(user, posts, friends);
// }
//
// TODO : Lance les deux et mesure avec console.time / console.timeEnd
// Pourquoi chargerParallele est 2x plus rapide ?


// ─────────────────────────────────────────────────────────────

// 🔴 EXERCICE 4.3 — Difficile
// CONCEPT : Gestion d erreurs imbriquées avec async/await
// INTÉRÊT : Comprendre où placer les try/catch pour ne pas
//           "avaler" les erreurs silencieusement
//
// TODO : Implémente `processerCommande(userId, productId)` qui :
//        1. await fetchUser(userId)           — peut rejeter si userId invalide
//        2. await fetchProduct(productId)     — peut rejeter si stock = 0
//        3. await creerCommande(user, product)— peut rejeter si paiement échoue
//        4. Chaque étape a son propre message d erreur spécifique
//        5. Un seul try/catch global OU des try/catch imbriqués ?
//           Réfléchis et justifie ton choix dans un commentaire.
//
// async function processerCommande(userId: number, productId: number): Promise<void> {
//   // ??? ton code ici
// }


// ============================================================
// SOLUTIONS — Décommente pour vérifier tes réponses
// ============================================================

// --- SOLUTION 1.1 ---
// function diviser(a: number, b: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     if (b === 0) reject("Division par zéro !");
//     else resolve(a / b);
//   });
// }
// diviser(10, 2).then(r => console.log(r));
// diviser(10, 0).catch(e => console.error(e));

// --- SOLUTION 2.1 ---
// function getUsername(id: number): Promise<string> {
//   if (id === 1) return Promise.resolve("Alice");
//   if (id === 2) return Promise.resolve("Bob");
//   return Promise.reject("Utilisateur introuvable");
// }

// --- SOLUTION 3.4 ---
// function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
//   const timeoutP = new Promise<T>((_, reject) =>
//     setTimeout(() => reject("Timeout !"), ms)
//   );
//   return Promise.race([promise, timeoutP]);
// }

// --- SOLUTION 4.1 ---
// async function saluer(id: number): Promise<void> {
//   try {
//     const name = await getUsername(id);
//     console.log("Bonjour,", name.toUpperCase());
//   } catch (err) {
//     console.error(err);
//   }
// }
