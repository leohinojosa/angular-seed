import { Injectable } from '@angular/core';
import { Post } from './shared/models/post';
import { POSTS}  from './shared/mocks/mock-posts';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts() : Post[] {
    console.log('test');

    return POSTS;
  }
}
