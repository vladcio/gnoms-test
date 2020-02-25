import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomsListComponent } from './gnoms-list.component';

describe('GnomsListComponent', () => {
  let component: GnomsListComponent;
  let fixture: ComponentFixture<GnomsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
