import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpOrSingInComponent } from './sing-up-or-sing-in.component';

describe('SingUpOrSingInComponent', () => {
  let component: SingUpOrSingInComponent;
  let fixture: ComponentFixture<SingUpOrSingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpOrSingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpOrSingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
