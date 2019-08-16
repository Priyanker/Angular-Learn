import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  useDisabledButton: boolean = true;
  constructor() { 
    setTimeout(() => {
      this.useDisabledButton = false;
    }, 2000);
  }
  getDisabledStatus(){
    return this.useDisabledButton;
  }
  ngOnInit() {
  }

}
