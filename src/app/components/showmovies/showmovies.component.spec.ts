import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoviesComponent } from './showmovies.component';

describe('ShowmoviesComponent', () => {
  let component: ShowmoviesComponent;
  let fixture: ComponentFixture<ShowmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
