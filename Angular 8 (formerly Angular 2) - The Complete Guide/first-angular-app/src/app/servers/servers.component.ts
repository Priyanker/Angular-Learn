import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  useDisabledButton: boolean = true;
  additionalServers: any = 'No Server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  constructor() { 
  }
  
  getDisabledStatus(){
    return this.serverName === '';
  }

  generateNewServer(){
    this.serverCreated = true;
    this.additionalServers = `The newly created server name is ${this.serverName}`;
  }
  ngOnInit() {
  }

}
