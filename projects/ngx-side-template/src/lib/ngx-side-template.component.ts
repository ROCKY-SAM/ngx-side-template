import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
 
@Component({
  selector: 'lib-ngx-side-template',
  templateUrl: 'ngx-side-template.component.html',
  styleUrls: ['ngx-side-template.component.css']
})
export class NgxSideTemplateComponent implements OnInit {
 @Input() items:Array<any>;
 @Input() divContent:any;
 @Output() changeActiveLink = new EventEmitter<any>(true);
  constructor() { }

  ngOnInit(): void {
  }
  changeActive(item){
    this.items.forEach(element => {
      element.active = ""; 
      if(element.url == item.url){
        element.active = "active";
      }
    });
    this.changeActiveLink.emit(this.items);
  }

 
}
