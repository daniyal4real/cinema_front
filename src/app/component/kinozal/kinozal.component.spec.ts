import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinozalComponent } from './kinozal.component';

describe('KinozalComponent', () => {
  let component: KinozalComponent;
  let fixture: ComponentFixture<KinozalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinozalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinozalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
