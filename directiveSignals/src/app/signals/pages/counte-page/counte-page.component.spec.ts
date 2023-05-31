import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountePageComponent } from './counte-page.component';

describe('CountePageComponent', () => {
  let component: CountePageComponent;
  let fixture: ComponentFixture<CountePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountePageComponent]
    });
    fixture = TestBed.createComponent(CountePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
