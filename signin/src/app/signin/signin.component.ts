import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css','./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Input()
  loginWithFocus:boolean;

  @Output() 
  changeValue = new EventEmitter<string>();

  activate():void {
    console.log('Ativado');
    console.log(this.loginWithFocus);
    this.changeValue.emit('true');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
