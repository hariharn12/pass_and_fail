import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pass_and_fail';
  studentlist: any;
  passtable: any[] = [];
  failtable: any[] = [];

  constructor() {
    this.studentlist = [
      {
        name: 'ranjith',
        class: 2,
        mark: 34,
      },
      {
        name: 'naveen',
        class: 2,
        mark: 70,
      },
      {
        name: 'mukesh',
        class: 5,
        mark: 34,
      },
      {
        name: 'udhya',
        class: 5,
        mark: 34,
      },
      {
        name: 'hari',
        class: 12,
        mark: 70,
      },
      {
        name: 'dinesh',
        class: 2,
        mark: 34,
      },
    ];
  }

  passstudent(index: number) {
    const passstudents = this.studentlist.splice(index, 1)[0];
    this.passtable.push(passstudents);
  }

  failstudent(index: number) {
    const failstudents = this.studentlist.splice(index, 1)[0];
    this.failtable.push(failstudents);
  }
}
