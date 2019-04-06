import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComponentComponent } from './premier-component.component';

describe('PremierComponentComponent', () => {
  let component: PremierComponentComponent;
  let fixture: ComponentFixture<PremierComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
