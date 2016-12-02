import { Component, OnInit } from '@angular/core';
import { PostsService } from './../posts.service';
import { Post } from './../shared/models/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {

  results = [
    {id:1000, title:'Zero',summary:'test'},
    {id:1001, title:'One',summary:'test'},
    {id:1010, title:'Two',summary:'test'},
    {id:1011, title:'Three',summary:'test'},
  ];

  posts:Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.postsService.getPosts()
                    .subscribe(posts =>{
                        this.posts = posts
                    },
                    err => {console.log(err);});

  }

}
