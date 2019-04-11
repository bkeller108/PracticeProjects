import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorUpdateTeamExpenseComponent } from './addor-update-team-expense.component';

describe('AddorUpdateTeamExpenseComponent', () => {
  let component: AddorUpdateTeamExpenseComponent;
  let fixture: ComponentFixture<AddorUpdateTeamExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorUpdateTeamExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorUpdateTeamExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
