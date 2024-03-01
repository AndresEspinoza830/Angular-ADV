import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') !== '') {
      const tema = localStorage.getItem('theme') || '';
      this.linkTheme?.setAttribute('href', tema);
    } else {
      this.linkTheme?.setAttribute(
        'href',
        './assets/css/colors/default-dark.css'
      );
    }
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach((elem) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currenTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currenTheme) {
        elem.classList.add('working');
      }
    });
  }
}
