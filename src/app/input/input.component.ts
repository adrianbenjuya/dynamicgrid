import { Component, OnInit } from '@angular/core';
import { IItem } from '../item.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, IItem {

  value: string;

  constructor() { }

  ngOnInit() {
  }

}
