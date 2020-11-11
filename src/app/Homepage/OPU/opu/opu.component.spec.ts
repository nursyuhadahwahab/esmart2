import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpuComponent } from './opu.component';

describe('OpuComponent', () => {
  let component: OpuComponent;
  let fixture: ComponentFixture<OpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
