import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/service/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
  posts!: Post[]
  constructor() {
    getPosts().then(posts => {
      console.log(posts)
      this.posts = posts
      this.activePosts()
      console.log(this.posts)
    })
  }
  ngOnInit(): void {
  }

  activePosts() {
    this.posts = this.posts.filter(post => post.active);
  }

}
