import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFoterComponent } from './mobile-foter.component';

describe('MobileFoterComponent', () => {
  let component: MobileFoterComponent;
  let fixture: ComponentFixture<MobileFoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileFoterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileFoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
