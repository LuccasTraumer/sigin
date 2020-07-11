import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { EventEmitter, $ } from 'protractor';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css','./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output()
  private loginActivated: EventEmitter = new EventEmitter();

  activate():void {
    console.log('Ativado');
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFocus(): boolean {
    console.log('Ativado');
    return true;
  }
}
