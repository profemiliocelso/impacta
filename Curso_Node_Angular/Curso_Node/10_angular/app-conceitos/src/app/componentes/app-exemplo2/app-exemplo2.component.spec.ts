import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExemplo2Component } from './app-exemplo2.component';

describe('AppExemplo2Component', () => {
  let component: AppExemplo2Component;
  let fixture: ComponentFixture<AppExemplo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExemplo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExemplo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
