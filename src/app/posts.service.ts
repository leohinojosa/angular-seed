import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Post } from './shared/models/post';
//import { POSTS}  from './shared/mocks/mock-posts';

@Injectable()
export class  PostsService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  // getPosts() : Post[] {
  //   console.log('test');
  //
  //   return POSTS;
  // }

  getPosts() : Observable<Post[]> {
    return this.http.get(this.url)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
