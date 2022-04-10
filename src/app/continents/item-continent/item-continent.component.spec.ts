import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContinentComponent } from './item-continent.component';

describe('ItemContinentComponent', () => {
  let component: ItemContinentComponent;
  let fixture: ComponentFixture<ItemContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemContinentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
