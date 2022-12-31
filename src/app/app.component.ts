import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, take, map, tap } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    // map is a transformation operator
    //  - Subscribes to its input Observable
    //  - Create an output Observable

    of(2, 5, 6, 9)
      .pipe(
        map((item) => item * 2),
        tap((item) => console.log(item)),
        take(3)
      )
      .subscribe((item) => console.log(item));

    from([2, 4, 5, 9])
      .pipe(
        map((item) => item * 10),
        map((item) => item - 1)
      )
      .subscribe((item) => console.log(item));
    // of(1, 2, 3, 4, 5, 8).subscribe((item) => console.log(item));
    // from([1, 2, 3, 4, 5, 8]).subscribe({
    //   next: (item) => console.log(`resulting item => ${item}`),
    //   error: (err) => console.log(`error occurred => ${err}`),
    //   complete: () => console.log('Complete'),
    // });
  }
}
