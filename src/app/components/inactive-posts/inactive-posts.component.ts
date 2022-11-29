import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts!: Post[]
  constructor() {
    getPosts().then(posts => {
      console.log(posts)
      this.posts = posts
      this.inactivePosts()
      console.log(this.posts)
    })

  }
  ngOnInit(): void {
  }

  inactivePosts() {
    this.posts = this.posts.filter(post => !post.active);
  }
}
