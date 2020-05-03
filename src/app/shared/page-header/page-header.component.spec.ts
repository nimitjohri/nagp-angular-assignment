import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHeaderComponent } from './page-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render Covid 19 India in h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(component.pageTitle);
  });

  it('it should get localstorage for token value', () => {
    window.localStorage.setItem('TOKEN', 'token');
    component.ngOnInit();
    expect(component.isLoggedIn).toEqual(true);
  });

  it('it should get localstorage username equal to nimitjohri value', () => {
    window.localStorage.setItem('TOKEN', 'token');
    window.localStorage.setItem('username', 'nimitjohri');
    component.ngOnInit();
    expect(component.username).toEqual('nimitjohri');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
