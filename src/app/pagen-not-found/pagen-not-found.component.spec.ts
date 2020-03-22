import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenNotFoundComponent } from './pagen-not-found.component';

describe('PagenNotFoundComponent', () => {
  let component: PagenNotFoundComponent;
  let fixture: ComponentFixture<PagenNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
