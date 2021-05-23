import { Component, OnInit ,Input} from '@angular/core';
 
@Component({
  selector: 'lib-ngx-side-template',
  templateUrl: 'ngx-side-template.component.html',
  styleUrls: ['ngx-side-template.component.css']
})
export class NgxSideTemplateComponent implements OnInit {
 @Input() items:Array<any>;
 @Input() divContent:any;
 HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];
  constructor() { }

  ngOnInit(): void {
  }

 
}
