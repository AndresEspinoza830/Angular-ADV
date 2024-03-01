import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  //TODO: Basta con inyectar el servicio para tener una instancia y que se ejecute el constructor
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}
}
