import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptUpdateComponent } from './prompt-update.component';

describe('PromptUpdateComponent', () => {
  let component: PromptUpdateComponent;
  let fixture: ComponentFixture<PromptUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptUpdateComponent]
    });
    fixture = TestBed.createComponent(PromptUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
