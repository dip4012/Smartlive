import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteGiftComponent } from './delete-gift/delete-gift.component';
import { NewGiftComponent } from './new-gift/new-gift.component';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css'],
})
export class GiftsComponent implements OnInit {
  value = '';
  public dataSource = new MatTableDataSource([
    {
      id: '564654654',
      imageSrc: 'https://picsum.photos/id/1/300/200',
      coins: 5,
      category: 3,
      isFree: true,
    },
    {
      id: '564654654',
      imageSrc: 'https://picsum.photos/id/1/300/200',
      coins: 5,
      category: 2,
      isFree: true,
    },
    {
      id: '564654654',
      imageSrc: 'https://picsum.photos/id/1/300/200',
      coins: 5,
      category: 1,
      isFree: true,
    },
  ]);

  displayedColumns: string[] = [
    'serial',
    'image',
    'coins',
    'category',
    'isFree',
    'actions',
  ];

  constructor(private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addGift() {
    this.dialog.open(NewGiftComponent, { disableClose: true, width: '700px' });
  }

  editGift(id: string) {
    this.dialog.open(NewGiftComponent, {
      data: id,
      disableClose: true,
      width: '700px',
    });
  }

  deleteGift(id: string) {
    this.dialog.open(DeleteGiftComponent, {
      data: id,
      disableClose: true,
      width: '700px',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
