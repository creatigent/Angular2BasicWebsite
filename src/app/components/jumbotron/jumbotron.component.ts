import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent  {  
    private jbtHeading : string;
    private jbtText : string;
    private jbtBtnText : string;
    private jbtBtnUrl : string;

    constructor(){
        this.jbtHeading = "Welcome";
        this.jbtText = "This is simple Angularjs 2 application";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "/about";
    }
}
