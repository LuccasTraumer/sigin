import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ApresentacaoComponent } from '../apresentacao/apresentacao.component';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css','./signin.component.css']
})
export class SigninComponent implements OnInit {
  activated: boolean;

  activate():void {
    this.activated = true;
    console.log(this.activated);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
