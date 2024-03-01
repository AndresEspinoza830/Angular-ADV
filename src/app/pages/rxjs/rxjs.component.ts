import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  interval,
  map,
  retry,
  take,
  filter,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs!: Subscription;

  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe({
    //     next: (data) => console.log(data),
    //     error: (err) => console.log(err),
    //     complete: () => console.log('Subscribe Complete.'),
    //   });

    this.intervalSubs = this.retornaInterval().subscribe({
      next: (value) => console.log(value),
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInterval(): Observable<number> {
    return interval(500).pipe(
      map((value) => {
        return value + 1;
      }),
      filter((valor) => (valor % 2 === 0 ? true : false)),
      take(10)
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor 2');
        }
      }, 1000);
    });
  }
}
