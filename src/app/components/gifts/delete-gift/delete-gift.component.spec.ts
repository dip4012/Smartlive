import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGiftComponent } from './delete-gift.component';

describe('DeleteGiftComponent', () => {
  let component: DeleteGiftComponent;
  let fixture: ComponentFixture<DeleteGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
