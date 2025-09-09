import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  templateUrl: './signal-ex.component.html',
  styleUrls: ['./signal-ex.component.css'],
})
export class SignalExComponent implements OnInit {
  firstName: string = 'Dai vu';
  productName = 'Moto';
  courseName = signal<string>('Angular name');
  courseDuration = signal('Text duration');
  courseDetail = computed(
    () => this.courseName() + ' - ' + this.courseDuration()
  );
  constructor() {
    this.firstName = 'WangJu';
    console.log(this.firstName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set('ABP');
    }, 5000);
    console.log(this.courseName());
  }

  ngOnInit() {}
}
