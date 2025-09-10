import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
  imports: [FormsModule],
})
export class ControlFlowComponent implements OnInit {
  isParaVisible: boolean = true;

  constructor() {}
  startMonthName: string = 'sep';
  citList: string[] = ['Pune', 'Mumbai', 'Panji', 'Nagpur'];

  studentList: any[] = [
    { name: 'AAAA', city: 'Pune', isActive: false },
    { name: 'BB', city: 'Mumbai', isActive: false },
    { name: 'CCC', city: 'Panji', isActive: true },
    { name: 'DDD', city: 'Nagpur', isActive: false },
  ];

  ngOnInit() {}

  showH() {
    this.isParaVisible = true;
  }
  hideH() {
    this.isParaVisible = false;
  }
}
