import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteBannerComponent } from './delete-banner/delete-banner.component';
import { NewBannerComponent } from './new-banner/new-banner.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  public dataSource = new MatTableDataSource([
    { id: '123456', imageSrc: 'https://picsum.photos/id/1/300/200' },
  ]);

  displayedColumns: string[] = ['serial', 'image', 'actions'];

  constructor(private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addBanner() {
    this.dialog.open(NewBannerComponent, {
      width: '700px',
      disableClose: true,
    });
  }

  edit(id: string) {
    this.dialog.open(NewBannerComponent, {
      data: id,
      width: '700px',
      disableClose: true,
    });
  }

  delete(id: string) {
    this.dialog.open(DeleteBannerComponent, {
      width: '700px',
      disableClose: true,
    });
  }
}
