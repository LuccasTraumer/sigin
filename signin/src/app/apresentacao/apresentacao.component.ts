import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {


  loginWithFocus: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event) {
    if($event === 'true'){
      this.loginWithFocus = true;
    }
    if ($event === 'false'){
      this.loginWithFocus = false;
    }
  }

}
