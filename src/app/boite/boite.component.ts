import { Component } from '@angular/core';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css'],
})
export class BoiteComponent {
  tirelire1: number = 0;
  tirelire2: number = 0;
  tirelire3: number = 0;

  ajouter100Fr() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      this.tirelire1 += 100;
    } else if (random === 2) {
      this.tirelire2 += 100;
    } else {
      this.tirelire3 += 100;
    }
  }

  utiliserTirelire(tirelire: number) {
    switch (tirelire) {
      case 1:
        this.tirelire1 -= this.tirelire1;
        break;
      case 2:
        this.tirelire2 -= this.tirelire2;
        break;
      case 3:
        this.tirelire3 -= this.tirelire3;
        break;
    }
  }
}
