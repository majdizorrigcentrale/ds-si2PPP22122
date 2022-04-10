import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPaysComponent } from './item-pays.component';

describe('ItemPaysComponent', () => {
  let component: ItemPaysComponent;
  let fixture: ComponentFixture<ItemPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
