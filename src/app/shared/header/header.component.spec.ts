import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedModule } from '../shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,SharedModule],
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

  it('should display navigation items when authenticated', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const navItems = fixture.nativeElement.querySelectorAll('.big');
    expect(navItems.length).toEqual(5);
    expect(navItems[0].textContent).toContain('DASHBOARD');
    expect(navItems[1].textContent).toContain('CONTENT');
    expect(navItems[2].textContent).toContain('USERS');
    expect(navItems[3].textContent).toContain('REPORT');
    expect(navItems[4].textContent).toContain('ADMIN');
  });

  it('should not display navigation items when not authenticated', () => {
    component.isAuthenticated = false;
    fixture.detectChanges();
    const navItems = fixture.nativeElement.querySelectorAll('.nav-items li');
    expect(navItems.length).toEqual(0);
  });

  it('should change value of isEntered on mouseenter event on alert-list', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const alertList = fixture.nativeElement.querySelector('#alert-list');
    alertList.dispatchEvent(new MouseEvent('mouseenter'));
    expect(component.isEntered).toBeTruthy();
  });

  it('should change value of isEntered on mouseleave event on alert-list', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const alertList = fixture.nativeElement.querySelector('#alert-list');
    alertList.dispatchEvent(new MouseEvent('mouseenter'));
    expect(component.isEntered).toBeTruthy();
    alertList.dispatchEvent(new MouseEvent('mouseleave'));
    expect(component.isEntered).toBeFalsy();
  });

  it('should change value of isEnteredAnc on mouseenter event on announcement-list', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const announcementList = fixture.nativeElement.querySelector('#announcement-list');
    announcementList.dispatchEvent(new MouseEvent('mouseenter'));
    expect(component.isEnteredAnc).toBeTruthy();
  });

  it('should change value of isEnteredAnc on mouseleave event on announcement-list', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const announcementList = fixture.nativeElement.querySelector('#announcement-list');
    announcementList.dispatchEvent(new MouseEvent('mouseenter'));
    expect(component.isEnteredAnc).toBeTruthy();
    announcementList.dispatchEvent(new MouseEvent('mouseleave'));
    expect(component.isEnteredAnc).toBeFalsy();
  });

  it('should expand the vertical nav bar on hamburger button hover', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const hamburgerList = fixture.nativeElement.querySelector('#hamburger-list');
    hamburgerList.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    const verticleNavbar = fixture.nativeElement.querySelector('#verticle-navbar');
    expect(verticleNavbar).toBeTruthy();
  });

  it('should collapse the vertical nav bar on mouse leave after delay', fakeAsync(() => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const hamburgerList = fixture.nativeElement.querySelector('#hamburger-list');
    hamburgerList.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    const verticleNavbar = fixture.nativeElement.querySelector('#verticle-navbar');
    expect(verticleNavbar).toBeTruthy();
    hamburgerList.dispatchEvent(new Event('mouseleave'));
    
    setTimeout(() => {
      fixture.detectChanges();
      const collapsedNavbar = fixture.nativeElement.querySelector('#verticle-navbar');
      expect(collapsedNavbar).toBeFalsy();
    }, 300);
    tick(300);
  }));

  it('should highlight selected hamburger menu item', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();
    const ref2 = fixture.nativeElement.querySelector('.hamburger-item:nth-child(2)');
    ref2.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const selectedNavItem = fixture.nativeElement.querySelector('.hamburger-item.selected');
    expect(selectedNavItem).toBe(ref2);
  });

});
