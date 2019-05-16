import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

      resumenXProducto = [
        {
            productNemo: 'AAA',
            tooltip: 'Créditos en cuotas',
            optyCursada: 16,
            optyCommitted: 16
        },
        {
            productNemo: 'BBB',
            tooltip: 'Créditos de consumo',
            optyCursada: 3,
            optyCommitted: 10
        },
        {
            productNemo: 'CCC',
            tooltip: 'Créditos de consumo',
            optyCursada: 27,
            optyCommitted: 20
        },
        {
            productNemo: 'DDD',
            tooltip: 'Créditos de consumo',
            optyCursada: 5,
            optyCommitted: 6
        }
    ];


  widthGrafica:number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)-40;
  heightGrafica:number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  height:number = 350;
  rojo:string = "#c11d1d";
  azul:string = "#4a90e2";
  verde:string = "#19c77b";
  negro:string = "#4a4a4a";
  blanco:string = "#ffffff";
  currentDate:Date = new Date();
  currentDay:number = this.currentDate.getDate();
  dataPizarraGrafica: any[] = 
  [
    {
      "code": 1,
      "name": "Gonzalez Dorsey",
      "data": [
        {
          "dia": 1,
          "estimacion": 6,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 2,
          "estimacion": 3,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 3,
          "estimacion": 1,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 4,
          "estimacion": 6,
          "logro": 4,
          "finde": false
        },
        {
          "dia": 5,
          "estimacion": 3,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 8,
          "estimacion": 2,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 9,
          "estimacion": 5,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 10,
          "estimacion": 7,
          "logro": 2,
          "finde": false
        },
        {
          "dia": 11,
          "estimacion": 6,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 12,
          "estimacion": 4,
          "logro": 5,
          "finde": false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 15,
          "estimacion": 6,
          "logro": 6,
          "finde": false
        },
        {
          "dia": 16,
          "estimacion": 5,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 17,
          "estimacion": 6,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 18,
          "estimacion": 3,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 22,
          "estimacion": 7,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 23,
          "estimacion": 4,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 24,
          "estimacion": 6,
          "logro": 2,
          "finde": false
        },
        {
          "dia": 25,
          "estimacion": 5,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 26,
          "estimacion": 2,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 29,
          "estimacion": 3,
          "logro": 7,
          "finde": false
        },
        {
          "dia": 30,
          "estimacion": 7,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 31,
          "estimacion": 6,
          "logro": 3,
          "finde":false
        }
      ]
    },
    {
      "code": 2,
      "name": "Ann Hood",
      "data": [
        {
          "dia": 1,
          "estimacion": 7,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 2,
          "estimacion": 3,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 3,
          "estimacion": 8,
          "logro": 0,
          "finde":false
        },
        {
          "dia": 4,
          "estimacion": 5,
          "logro": 0,
          "finde":false
        },
        {
          "dia": 5,
          "estimacion": 7,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 8,
          "estimacion": 2,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 9,
          "estimacion": 7,
          "logro": 4,
          "finde": false
        },
        {
          "dia": 10,
          "estimacion": 3,
          "logro": 4,
          "finde": false
        },
        {
          "dia": 11,
          "estimacion": 6,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 12,
          "estimacion": 1,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 15,
          "estimacion": 5,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 16,
          "estimacion": 5,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 17,
          "estimacion": 2,
          "logro": 6,
          "finde": false
        },
        {
          "dia": 18,
          "estimacion": 2,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 22,
          "estimacion": 0,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 23,
          "estimacion": 1,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 24,
          "estimacion": 0,
          "logro": 6,
          "finde": false
        },
        {
          "dia": 25,
          "estimacion": 4,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 26,
          "estimacion": 8,
          "logro": 0,
          "finde":false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 29,
          "estimacion": 8,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 30,
          "estimacion": 2,
          "logro": 4,
          "finde": false
        },
        {
          "dia": 31,
          "estimacion": 4,
          "logro": 6,
          "finde":false
        }
      ]
    },
    {
      "code": 3,
      "name": "Mcpherson Sargent",
      "data": [
        {
          "dia": 1,
          "estimacion": 1,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 2,
          "estimacion": 3,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 3,
          "estimacion": 3,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 4,
          "estimacion": 6,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 5,
          "estimacion": 4,
          "logro": 7,
          "finde":false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 8,
          "estimacion": 6,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 9,
          "estimacion": 7,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 10,
          "estimacion": 7,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 11,
          "estimacion": 2,
          "logro": 7,
          "finde":false
        },
        {
          "dia": 12,
          "estimacion": 4,
          "logro": 6,
          "finde": false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 15,
          "estimacion": 5,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 16,
          "estimacion": 8,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 17,
          "estimacion": 5,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 18,
          "estimacion": 1,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 22,
          "estimacion": 5,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 23,
          "estimacion": 6,
          "logro": 5,
          "finde": false
        },
        {
          "dia": 24,
          "estimacion": 8,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 25,
          "estimacion": 8,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 26,
          "estimacion": 5,
          "logro": 2,
          "finde":false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 29,
          "estimacion": 5,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 30,
          "estimacion": 6,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 31,
          "estimacion": 8,
          "logro": 0,
          "finde": false
        }
      ]
    },
    {
      "code": 4,
      "name": "Della Heath",
      "data": [
        {
          "dia": 1,
          "estimacion": 1,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 2,
          "estimacion": 7,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 3,
          "estimacion": 2,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 4,
          "estimacion": 3,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 5,
          "estimacion": 2,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 8,
          "estimacion": 5,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 9,
          "estimacion": 4,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 10,
          "estimacion": 4,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 11,
          "estimacion": 2,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 12,
          "estimacion": 0,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 15,
          "estimacion": 6,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 16,
          "estimacion": 6,
          "logro": 5,
          "finde": false
        },
        {
          "dia": 17,
          "estimacion": 8,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 18,
          "estimacion": 3,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 22,
          "estimacion": 2,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 23,
          "estimacion": 0,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 24,
          "estimacion": 0,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 25,
          "estimacion": 0,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 26,
          "estimacion": 0,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 29,
          "estimacion": 7,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 30,
          "estimacion": 3,
          "logro": 8,
          "finde": false
        },
        {
          "dia": 31,
          "estimacion": 8,
          "logro": 4,
          "finde":false
        }
      ]
    },
    {
      "code": 5,
      "name": "Evans Mayo",
      "data": [
        {
          "dia": 1,
          "estimacion": 0,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 2,
          "estimacion": 6,
          "logro": 7,
          "finde":false
        },
        {
          "dia": 3,
          "estimacion": 0,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 4,
          "estimacion": 4,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 5,
          "estimacion": 8,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 8,
          "estimacion": 2,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 9,
          "estimacion": 6,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 10,
          "estimacion": 0,
          "logro": 8,
          "finde": false
        },
        {
          "dia": 11,
          "estimacion": 4,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 12,
          "estimacion": 1,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 15,
          "estimacion": 8,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 16,
          "estimacion": 7,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 17,
          "estimacion": 2,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 18,
          "estimacion": 4,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 22,
          "estimacion": 5,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 23,
          "estimacion": 7,
          "logro": 0,
          "finde":false
        },
        {
          "dia": 24,
          "estimacion": 8,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 25,
          "estimacion": 4,
          "logro": 2,
          "finde":false
        },
        {
          "dia": 26,
          "estimacion": 2,
          "logro": 7,
          "finde": false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 29,
          "estimacion": 6,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 30,
          "estimacion": 3,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 31,
          "estimacion": 3,
          "logro": 7,
          "finde":false
        }
      ]
    },
    {
      "code": 6,
      "name": "Brianna Gould",
      "data": [
        {
          "dia": 1,
          "estimacion": 6,
          "logro": 8,
          "finde": false
        },
        {
          "dia": 2,
          "estimacion": 6,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 3,
          "estimacion": 5,
          "logro": 2,
          "finde":false
        },
        {
          "dia": 4,
          "estimacion": 1,
          "logro": 7,
          "finde":false
        },
        {
          "dia": 5,
          "estimacion": 6,
          "logro": 6,
          "finde": false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 8,
          "estimacion": 1,
          "logro": 5,
          "finde":false
        },
        {
          "dia": 9,
          "estimacion": 7,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 10,
          "estimacion": 3,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 11,
          "estimacion": 4,
          "logro": 0,
          "finde":false
        },
        {
          "dia": 12,
          "estimacion": 1,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 15,
          "estimacion": 7,
          "logro": 9,
          "finde": false
        },
        {
          "dia": 16,
          "estimacion": 5,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 17,
          "estimacion": 8,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 18,
          "estimacion": 2,
          "logro": 2,
          "finde":false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 22,
          "estimacion": 7,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 23,
          "estimacion": 6,
          "logro": 1,
          "finde": false
        },
        {
          "dia": 24,
          "estimacion": 3,
          "logro": 4,
          "finde": false
        },
        {
          "dia": 25,
          "estimacion": 4,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 26,
          "estimacion": 3,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 29,
          "estimacion": 1,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 30,
          "estimacion": 5,
          "logro": 0,
          "finde":false
        },
        {
          "dia": 31,
          "estimacion": 7,
          "logro": 1,
          "finde":false
        }
      ]
    },
    {
      "code": 7,
      "name": "Frost Sawyer",
      "data": [
        {
          "dia": 1,
          "estimacion": 0,
          "logro": 4,
          "finde": false
        },
        {
          "dia": 2,
          "estimacion": 1,
          "logro": 1,
          "finde":false
        },
        {
          "dia": 3,
          "estimacion": 2,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 4,
          "estimacion": 6,
          "logro": 6,
          "finde": false
        },
        {
          "dia": 5,
          "estimacion": 4,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 6,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 7,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 8,
          "estimacion": 2,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 9,
          "estimacion": 1,
          "logro": 8,
          "finde": false
        },
        {
          "dia": 10,
          "estimacion": 7,
          "logro": 0,
          "finde": false
        },
        {
          "dia": 11,
          "estimacion": 4,
          "logro": 8,
          "finde": false
        },
        {
          "dia": 12,
          "estimacion": 5,
          "logro": 4,
          "finde":false
        },
        {
          "dia": 13,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 14,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 15,
          "estimacion": 6,
          "logro": 6,
          "finde":false
        },
        {
          "dia": 16,
          "estimacion": 6,
          "logro": 2,
          "finde": false
        },
        {
          "dia": 17,
          "estimacion": 3,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 18,
          "estimacion": 5,
          "logro": 2,
          "finde": false
        },
        {
          "dia": 19,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 20,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 21,
          "estimacion": 0,
          "logro": 0,
          "finde": true
        },
        {
          "dia": 22,
          "estimacion": 6,
          "logro": 2,
          "finde":false
        },
        {
          "dia": 23,
          "estimacion": 6,
          "logro": 5,
          "finde": false
        },
        {
          "dia": 24,
          "estimacion": 1,
          "logro": 9,
          "finde":false
        },
        {
          "dia": 25,
          "estimacion": 6,
          "logro": 3,
          "finde": false
        },
        {
          "dia": 26,
          "estimacion": 0,
          "logro": 3,
          "finde":false
        },
        {
          "dia": 27,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 28,
          "estimacion": 0,
          "logro": 0,
          "finde":true
        },
        {
          "dia": 29,
          "estimacion": 7,
          "logro": 2,
          "finde":false
        },
        {
          "dia": 30,
          "estimacion": 4,
          "logro": 8,
          "finde":false
        },
        {
          "dia": 31,
          "estimacion": 5,
          "logro": 1,
          "finde": false
        }
      ]
    }
  ]
  lastDay:number = this.dataPizarraGrafica[0].data.length;
  distancePoints:number = this.widthGrafica/this.lastDay;
  estiMax:number[] = [];
  logroMax:number[] = [];
  maxValue:number[] = [];
  estimadoY2:any[] = [];
  logroY2:any[] = [];
  oportunidad:string = 'cumplidos';
  visor:boolean = false;
  scrollPositionY:number = 0;
  totalesPizarra:any[] = [];
  
  constructor() { }

  @HostListener("window:scroll")
  scrollPizarra(){
    this.scrollPositionY = document.documentElement.scrollTop;
  }

  ShowTooltip(e, l) {
    this.visor = true
    document.querySelector('#valorlogro').innerHTML = l;
    document.querySelector('#valorestima').innerHTML = e;
    let scrollValue = this.scrollPositionY
    window.onmousemove = function(e) {
        document.getElementById('tooltipPizarra').style.left = e.clientX-8+"px";
        document.getElementById('tooltipPizarra').style.top = e.clientY+scrollValue+"px";
    }
  }
  HideTooltip() {
    this.visor = false;
  }

  ngOnInit() {
    for (let i = 0; i < this.dataPizarraGrafica.length; i++) {
      let estiMaxA:number[] = [];
      let logroMaxA:number[] = [];
      this.dataPizarraGrafica[i].data.forEach(x => {
          estiMaxA.push(x.estimacion);
          logroMaxA.push(x.logro);
      });
      this.estiMax.push(Math.max.apply(Math, estiMaxA));
      this.logroMax.push(Math.max.apply(Math, logroMaxA));
      if(this.estiMax[i] > this.logroMax[i]) {
        this.maxValue.push(this.estiMax[i]+2)
      }
      else if(this.estiMax[i] < this.logroMax[i] || this.estiMax[i] === this.logroMax[i]) {
        this.maxValue.push(this.logroMax[i]+2)
      }
      let sumaLogro = logroMaxA.reduce(function(a, b){ return a + b; })
      let sumaEsti = estiMaxA.reduce(function(a, b){ return a + b; })
      this.totalesPizarra.push({
        totalEsti: sumaEsti,
        totalLogro: sumaLogro
      })
      estiMaxA.shift();
      estiMaxA.push(estiMaxA[estiMaxA.length-1]);
      this.estimadoY2.push(estiMaxA);
      logroMaxA.shift();
      logroMaxA.push(logroMaxA[logroMaxA.length-1]);
      this.logroY2.push(logroMaxA);
    }  
  }

}
