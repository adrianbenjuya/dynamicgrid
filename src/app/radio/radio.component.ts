import { Component, OnInit } from '@angular/core';
import { IItem } from '../item.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit, IItem {

  value: any;
  name = new Date().getTime();

  radios = [
    {
      id: 1,
      text: 'Radio 1',
      value: 'val-1'
    },
    {
      id: 2,
      text: 'Radio 2',
      value: 'val-2'
    },
    {
      id: 3,
      text: 'Radio 3',
      value: 'val-3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
