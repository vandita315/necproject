import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListAddedComponent } from './shopping-list-added.component';

describe('ShoppingListAddedComponent', () => {
  let component: ShoppingListAddedComponent;
  let fixture: ComponentFixture<ShoppingListAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
