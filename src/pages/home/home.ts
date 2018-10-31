import { Animal } from './../../interfaces/animal.interface';
import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];

  constructor() {

 this.animales = ANIMALES.splice(0);

  }
    reproducir(animal:Animal){


    let audio = new Audio();
    audio.src = animal.audio;

    audio.load();
    audio.play();

    animal.reproduciendo = true;

    setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }
}
