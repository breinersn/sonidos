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

 this.animales = ANIMALES.slice(0);
  }
  public reproducir(animal:Animal){


    let audio = new Audio();
    audio.src = animal.audio;

    audio.load();
    audio.play();

    setTimeout(()=> animal.reproduciendo = false, animal.duracion * 10);
  }
}
