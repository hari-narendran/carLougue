import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSearchComponent } from './cars-search.component';

describe('CarsSearchComponent', () => {
  let component: CarsSearchComponent;
  let fixture: ComponentFixture<CarsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
