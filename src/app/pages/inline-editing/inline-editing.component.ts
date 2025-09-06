import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css'],
  imports: [NzDividerModule, NzTableModule, FormsModule],
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

  onEdit(record: any) {
    this.removeEditable();
    record.isEditable = true;
  }

  onSave(data: any) {
    if (data.userId == '' || data.title == '' || data.body == '') {
      alert('Provide all values');
    } else {
      console.log(data);
    }
  }
  addNew() {
    this.removeEditable();
    const newObj = {
      userId: '',
      id: 0,
      title: '',
      body: '',
      isEditable: true,
    };
    this.postList.unshift(newObj);
  }
  removeEditable() {
    this.postList.forEach((element) => {
      element.isEditable = false;
    });
  }
  cancelRow(item: any) {
    if (item.id === 0) {
      this.postList.splice(0, 1);
    }
    item.isEditable = false;
  }
}
