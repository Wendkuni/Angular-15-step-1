import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

export interface PeriodicElement {
  Title: string;
  body: string;
  image: string;
  published_at: Date;
  id: number;
}

const PeriodicElement = [
  {
    id: 1,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 2,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 3,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 4,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 5,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 6,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 7,
    Title: 'Shiba Inu',
    body: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
];

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss'],
})
export class AdminBlogComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Title',
    'image',
    'published_at',
    'action',
  ];

  dataSource = PeriodicElement;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  delete(id: number) {
    const dialogRef=this.dialog.open(DeleteDialogComponent);
dialogRef.afterClosed().subscribe(result=>{
  if(result = "true"){
this.dataSource=this.dataSource.filter((data)=>data.id != id)
  }
})

  }

  create() {}

  edit() {}
}
