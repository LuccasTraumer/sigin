import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css','./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output()
  eventEmiter: EventEmitter<string> = new EventEmitter<string>();

  activate():void {
    console.log('Ativado');
    this.eventEmiter.emit('true');
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFocus(): boolean {
    console.log('Ativado');
    return true;
  }
}
