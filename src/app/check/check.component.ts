import { Component, OnInit } from '@angular/core';
import { IItem } from '../item.interface';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit, IItem {

  value = false;

  constructor() { }

  ngOnInit() {
  }

}
