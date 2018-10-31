import { Animal } from './../../interfaces/animal.interface';
import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor() {

 this.animales = ANIMALES.splice(0);

  }
    reproducir(animal:Animal){

      this.pausarAudio(animal);

      if(animal.reproduciendo){
        animal.reproduciendo = false;
        return;
      }

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();

    animal.reproduciendo = true;

   this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }

  private pausarAudio(animalSel:Animal){

    clearTimeout(this.audioTiempo);

    this.audio.pause();
    this.audio.currentTime = 0;

    for(let Animal of this.animales){

      if(Animal.nombre != animalSel.nombre){

        Animal.reproduciendo = false;
      }
    }
  }
}
