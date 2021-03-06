import { Animal } from './../../interfaces/animal.interface';
import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';
import { Refresher, reorderArray } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenar: boolean = false;

  constructor() {

 this.animales = ANIMALES.slice(0);

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

   this.audioTiempo = setTimeout(() =>
   animal.reproduciendo = false, animal.duracion * 1000);
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
  borrar_animal (idx:number){

    this.animales.splice(idx, 1);
  }

  refrescar_lista (refresher:Refresher){

    setTimeout(() => {
      console.log('Inicio ordenar');
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 1000);
  }

  reordenar_animales(indices){

    this.animales = reorderArray(this.animales, indices);
  }
}
