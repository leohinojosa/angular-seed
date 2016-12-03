/* tslint:disable:no-unused-variable */

import {
  async,
  getTestBed,
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  HttpModule,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {PostsService} from './posts.service';
import {POSTS} from './shared/mocks/mock-posts';

describe('PostsService', () => {

  let mockBackend: MockBackend;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [PostsService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
        }
      ],
      imports: [
        HttpModule
      ],
    });

    mockBackend = getTestBed().get(MockBackend);

  });


  it('should call the getPosts method', async(inject([PostsService], (postService) => {

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: POSTS
              }
            )));
        });
    });

    postService = getTestBed().get(PostsService);
    expect(postService).toBeDefined();

    postService.getPosts().subscribe(result => {
      expect(result.length).toBe(POSTS.length);
    });

  })));

});
