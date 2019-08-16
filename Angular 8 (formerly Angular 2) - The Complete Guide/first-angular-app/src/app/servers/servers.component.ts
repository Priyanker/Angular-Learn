import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  useDisabledButton: boolean = true;
  additionalServers: any = 'No Server was created';
  serverName: string = 'Default';
  constructor() { 
    setTimeout(() => {
      this.useDisabledButton = false;
    }, 2000);
  }
  
  getDisabledStatus(){
    return this.useDisabledButton;
  }

  generateNewServer(){
    this.additionalServers = document.querySelector('app-server');
    console.dir(this.additionalServers);
    
  }
  onServerNameUpdate(event:any){
    console.log(event);
    
    this.serverName = event.target.value;
  }
  ngOnInit() {
  }

}
