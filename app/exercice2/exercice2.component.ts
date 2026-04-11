import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  standalone: true,
  templateUrl: './exercice2.component.html',
})
export class Exercice2Component {

  // TODO : Déclare un signal "estDesactive" de type boolean initialisé à true
  protected readonly estDesactive = signal<boolean>(true);


  // TODO : Déclare un signal dérivé "texteBtn" qui retourne "Activé" ou "Désactivé"
  //         selon la valeur de estDesactive()
  protected readonly texteBtn = computed<string>(() => 
    this.estDesactive() === false ? "Activé" : "Désactivé"
  );

  // TODO : Méthode "basculer()" qui inverse la valeur de estDesactive
  protected basculer():void {
    // Methode avec le .set() ::mais elle n'est pas appropreier pour ce cas  
    //this.estDesactive() === true ? this.estDesactive.set(false) : this.estDesactive.set(true); 
    this.estDesactive.update((v:boolean) => !v);
  }

}
