import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeContinentComponent } from './liste-continent.component';

describe('ListeContinentComponent', () => {
  let component: ListeContinentComponent;
  let fixture: ComponentFixture<ListeContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeContinentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
