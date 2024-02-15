import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { Grafica1RoutingModule } from './grafica1-routing.module';
import { Grafica1Component } from './grafica1.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [Grafica1Component],
  imports: [CommonModule, Grafica1RoutingModule, ComponentsModule],
})
export class Grafica1Module {}
