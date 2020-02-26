import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomProfileComponent } from './gnom-profile.component';

describe('GnomProfileComponent', () => {
  let component: GnomProfileComponent;
  let fixture: ComponentFixture<GnomProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
