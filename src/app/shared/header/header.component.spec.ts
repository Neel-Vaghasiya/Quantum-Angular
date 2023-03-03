import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize isEntered to false', () => {
    expect(component.isEntered).toBeFalse();
  });

  it('should initialize isEnteredAnc to false', () => {
    expect(component.isEnteredAnc).toBeFalse();
  });

  it('should initialize isEnteredHam to false', () => {
    expect(component.isEnteredHam).toBeFalse();
  });

  it('should initialize inHam to false', () => {
    expect(component.inHam).toBeFalse();
  });

  it('should not display clickedHamItem initially', () => {
    expect(component.clickedHamItem).toBeFalsy();
  });

  it('should set isEntered to true on mouse enter', () => {
    component.OnMouseEnter();
    expect(component.isEntered).toBeTrue();
  });

  it('should set isEntered to false on mouse leave', () => {
    component.OnMouseEnter();
    component.OnMouseLeave();
    expect(component.isEntered).toBeFalse();
  });

  it('should set isEnteredAnc to true on mouse enter', () => {
    component.OnMouseEnterAnc();
    expect(component.isEnteredAnc).toBeTrue();
  });

  it('should set isEnteredAnc to false on mouse leave', () => {
    component.OnMouseEnterAnc();
    component.OnMouseLeaveAnc();
    expect(component.isEnteredAnc).toBeFalse();
  });

  it('should set isEnteredHam to true and inHam to true on mouse enter', () => {
    component.OnMouseEnterHam();
    expect(component.isEnteredHam).toBeTrue();
    expect(component.inHam).toBeTrue();
  });

  it('should set isEnteredHam to false on mouse leave after a short delay', (done) => {
    component.OnMouseEnterHam();
    component.OnMouseLeaveHam();
    setTimeout(() => {
      expect(component.isEnteredHam).toBeFalse();
      done();
    }, 300);
  });

  it('should set clickedHamItem when an item is clicked', () => {
    const ref = 'test';
    component.OnHamItemClick(ref);
    expect(component.clickedHamItem).toBe(ref);
  });

});
