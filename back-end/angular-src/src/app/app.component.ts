import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'angular-src';
  device: any;

  private mediaSub: Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver
  ) {

  }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        this.device = change;
      }
    );
  }
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }


}

