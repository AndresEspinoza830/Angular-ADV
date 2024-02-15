import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ProgressComponent],
  imports: [FormsModule, CommonModule, ProgressRoutingModule, ComponentsModule],
})
export class ProgressModule {}
