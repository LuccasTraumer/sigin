import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
;


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  loginWithFocus:boolean;

  @Output() 
  changeValue = new EventEmitter<string>();

  activated(): void {
    console.log('Desativado');
    this.changeValue.emit('false');
  }
  constructor() { }

  ngOnInit(): void {

  }
}
