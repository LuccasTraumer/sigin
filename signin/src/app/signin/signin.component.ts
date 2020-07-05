import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../apresentacao/apresentacao.component.css']
})
export class SigninComponent implements OnInit {

  @Input()
  btnClick: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
