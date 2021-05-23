import { NgModule } from '@angular/core';
import { NgxSideTemplateComponent } from './ngx-side-template.component';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [
    NgxSideTemplateComponent
  ],
  imports: [BrowserModule
  ],
  exports: [
    NgxSideTemplateComponent
  ]
})
export class NgxSideTemplateModule { }
