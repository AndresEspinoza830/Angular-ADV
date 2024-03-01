import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  //TODO: Las promesas no solo son para ejecutar peticiones asincronas, sino para que se ejcuten luego de una tarea o etc
  ngOnInit(): void {
    //TODO: Ejemplo 1 de promesas sin peticiones
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });
    // promesa
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
    // console.log('Fin del init');
    this.getUsuarios().then((usuarios) => console.log(usuarios));
  }

  //TODO: Ejemplo 2  de promesas con peticiones
  getUsuarios() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then((data) => data.json())
        .then((res) => resolve(res.data));
    });
  }
}
