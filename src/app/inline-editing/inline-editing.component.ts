import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css'],
  imports: [NzDividerModule, NzTableModule],
})
export class InlineEditingComponent implements OnInit {
  postList: any[] = [];
  pageIndex = 1;
  pageSize = 5;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.postList = res;
      });
  }
}
