import { Component, OnInit, SimpleChanges } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {


  loginWithFocus: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.changeBC();
  }

  receiveMessage($event) {
    if($event === 'true'){
      this.loginWithFocus = true;
    }
    if ($event === 'false'){
      this.loginWithFocus = false;
    }
    this.changeBC();
  }
  changeBC(){
   if(this.loginWithFocus) {
     document.getElementById('left').style.background = '#fff';
     document.getElementById('right').style.background = 'linear-gradient(to bottom right, #8f25d6, #620c94)';
   }
   else{
    document.getElementById('left').style.transition = 'all 2s';
    document.getElementById('left').style.background = 'linear-gradient(to bottom right, #8f25d6, #620c94)';
    document.getElementById('right').style.background = '#fff';  
   }   
  }

}
