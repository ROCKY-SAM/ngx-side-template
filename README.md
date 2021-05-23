# NgxSideTemplate

 ![image](https://user-images.githubusercontent.com/12700182/119260877-72f3eb80-bbf2-11eb-8d40-446ae9d8de10.png)

Sample Code

<lib-ngx-side-template [items]="items" [divContent]="templateText"></lib-ngx-side-template>

app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxSideTemplateModule} from 'ngx-side-template';
  imports: [
    NgxSideTemplateModule
  ],
  schemas: [    
    NO_ERRORS_SCHEMA
  ]
  
app.component.html

<lib-ngx-side-template [items]="items" [divContent]="templateText"></lib-ngx-side-template>

app.component.ts

  templateText:any=` <h2>Responsive Surlebar Example</h2>
  <p>This example use media queries to transform the surlebar to a top navigation bar when the screen size is 700px or less.</p>
  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
  <h3>Resize the browser window to see the effect.</h3>`;
  items = [
    {url: 1, name:'Superman'},
    {url: 2, name:'Batman'},
    {url: 5, name:'BatGirl'},
    {url: 3, name:'Robin'},
    {url: 4, name:'Flash'}
];
