import { NgModule } from '@angular/core';
import { NgxSideTemplateComponent } from './ngx-side-template.component';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NgxSideTemplateComponent
  ],
  imports: [BrowserModule,RouterModule
  ],
  exports: [
    NgxSideTemplateComponent
  ]
})
export class NgxSideTemplateModule { }
