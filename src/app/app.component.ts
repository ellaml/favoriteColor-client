import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, startWith, Subscription, switchMap } from 'rxjs';
import { Color } from './color';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private timeInterval: Subscription;
  public colors: Color[] = [];
  public maxVotes: number = 0;

  constructor(private colorService: ColorService) {
    this.timeInterval = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.timeInterval = interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.colorService.getColors())
      )
      .subscribe({
        next: (res) => {
          this.colors = res;
          this.calcultaeMax();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }

  public calcultaeMax(): void {
    let maxValue = 0;
    this.colors.forEach((color) => {
      if (color.votes > maxValue) {
        maxValue = color.votes;
      }
    });
    this.maxVotes = maxValue;
  }

  public getColors(): void {
    this.colorService.getColors()
      .subscribe({
        next: (res) => {
          this.colors = res;
          this.calcultaeMax();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  public addVote(color: Color): void {
    this.colorService.incrementColor(color.id).subscribe({
      next: () => {
        this.getColors();
      },
      error: (err) => console.error(err),
    });
  }
}
