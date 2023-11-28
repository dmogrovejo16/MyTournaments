import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor() {
    
  }
  enviarMensaje() {
    console.log('Mensaje enviado por consola desde Ionic.');
  }
  enviarMensaje2() {
    console.log('Mensaje enviado por consola desde Ionic 2');
  }

 
}
