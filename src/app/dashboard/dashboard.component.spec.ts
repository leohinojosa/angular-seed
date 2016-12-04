/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import {Observable} from "rxjs";

import {Post} from "../shared/models/post";
import {POSTS} from "../shared/mocks/mock-posts";
import {PostsService} from "../posts.service";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;



  beforeEach(async(() => {

    class postServiceMock {
      getPosts() : Observable<Post[]>{
        return Observable.of(POSTS);
      }
    }

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:[{ provide: PostsService, useClass: postServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('allows testing the generated html', () =>{

      let element = fixture.debugElement.query(By.css('h1'));

      expect(element.nativeElement.textContent).toContain(component.title);

    });

  it('should create', () => {

    expect(component).toBeTruthy();
    expect(component.posts).toBe(POSTS);

  });
});
