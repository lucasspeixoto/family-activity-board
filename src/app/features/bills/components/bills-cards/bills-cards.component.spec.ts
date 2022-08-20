import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsCardsComponent } from './bills-cards.component';

describe('BillsCardsComponent', () => {
  let component: BillsCardsComponent;
  let fixture: ComponentFixture<BillsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
