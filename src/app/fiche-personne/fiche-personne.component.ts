import { Component } from '@angular/core';

@Component({
  selector: 'app-fiche-personne',
  templateUrl: './fiche-personne.component.html',
  styleUrls: ['./fiche-personne.component.css'],
})
export class FichePersonneComponent {
  prenom: string = 'John';
  nom: string = 'Doe';
  age: number = 35;

  fin_de_carriere: number = 65 - this.age;
}
