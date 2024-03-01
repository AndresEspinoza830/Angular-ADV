import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent {
  public titulo: string = '';
  public tituloSubs$!: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe((data) => {
      this.titulo = data.titulo;
      document.title = `AdminPro - ${this.titulo}`;
    });
  }

  //TODO: Revisar si es necesario desuscribirse en algun componente
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(): Observable<any> {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.data)
    );
  }
}
