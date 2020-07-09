import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {

  loginActivated: boolean;
  registerActivated: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  

}
