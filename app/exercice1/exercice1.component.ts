import { Component, signal, computed} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  standalone: true,
  templateUrl: './exercice1.component.html',
})
export class Exercice1Component {

  // TODO : Déclare un signal "compteur" initialisé à 0
  protected readonly compteur = signal<number>(0);


  // TODO : Méthode pour incrémenter le compteur
  protected incrementationSignal(): void {
    this.compteur.update((s:number) => s + 1 );
  }
  
  //TODO : Creation d'un signal derive du signal "compteur" et qui l'incremente sans changer la valeur du signal "compteur"
  protected readonly incrementationSignal2 = computed<number>(()=>this.compteur()+1);


  // TODO : Méthode pour décrémenter le compteur
  protected decrementationSignal(): void {
    this.compteur.update((s:number) => s - 1);
  }

  //TODO : Creation d'un signal derive du signal "compteur" et qui decremente sans changer la valeur du signal "compteur"
  protected readonly decrementationSignal2 = computed<number>(() => this.compteur()-1);

}