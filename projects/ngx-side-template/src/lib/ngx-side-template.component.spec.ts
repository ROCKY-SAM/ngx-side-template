import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSideTemplateComponent } from './ngx-side-template.component';

describe('NgxSideTemplateComponent', () => {
  let component: NgxSideTemplateComponent;
  let fixture: ComponentFixture<NgxSideTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSideTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSideTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
