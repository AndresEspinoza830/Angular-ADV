import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public title: string = 'Ventas';
  public labels1: string[] = ['Compra1', 'Compra2', 'Compra3'];
  public data1: number[] = [300, 150, 150];
}
