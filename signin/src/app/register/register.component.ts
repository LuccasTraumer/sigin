import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()
  eventEmiter: EventEmitter<string> = new EventEmitter<string>();

  activated(): void {
    console.log('Desativado');
    this.eventEmiter.emit('false');
  }
  constructor() { }

  ngOnInit(): void {
  }
  getFocus(): boolean{
    return true;
  }
}
