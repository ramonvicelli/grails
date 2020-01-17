import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryPanelComponent } from './user-story-panel.component';

describe('UserStoryPanelComponent', () => {
  let component: UserStoryPanelComponent;
  let fixture: ComponentFixture<UserStoryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
