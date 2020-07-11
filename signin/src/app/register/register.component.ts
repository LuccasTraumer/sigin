import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()
  loginActivated: EventEmitter = new EventEmitter();

  activated(): void {
    this.loginActivated.emit("false");
    console.log('Desativado');
  }
  constructor() { }

  ngOnInit(): void {
  }
  getFocus(): boolean{
    return true;
  }
}
