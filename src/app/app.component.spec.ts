import { getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';

import { AppComponent } from './app.component';
import { RbxHeroSectionModule } from './modules/hero-section/hero-section.module';
import { RbxCardModule } from './modules/card/card.module';
import { RbxButtonModule } from './modules/button/button.module';

describe(`App Component`, () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RbxHeroSectionModule,
        RbxCardModule,
        RbxButtonModule,
      ],
      declarations: [ AppComponent ],
      providers: [],
    }).compileComponents();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).to.not.be.empty;
  });

  it('should display a title', () => {
    let title: any;
    fixture = TestBed.createComponent(AppComponent);

    title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).to.equal('');

    fixture.detectChanges();

    title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).to.equal('Random angular library test');
  });
});
