import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  value = '';
  public dataSource = new MatTableDataSource([
    {
      imageSrc: 'https://picsum.photos/id/1/300/200',
      id: '123456789',
      name: 'John Doe',
      balance: 15914,
      received: 756757,
      block: '',
    },
    {
      imageSrc: 'https://picsum.photos/id/1/300/200',
      id: '98798798797',
      name: 'John Doe',
      balance: 123456,
      received: 65464,
      block: '',
    },
    {
      imageSrc: 'https://picsum.photos/id/1/300/200',
      id: '5646454645',
      name: 'John Doe',
      balance: 123456,
      received: 856456,
      block: '',
    },
    {
      imageSrc: 'https://picsum.photos/id/1/300/200',
      id: '2331313213',
      name: 'John Doe',
      balance: 123456,
      received: 878789,
      block: '',
    },
    {
      imageSrc: 'https://picsum.photos/id/1/300/200',
      id: '59519519519',
      name: 'John Doe',
      balance: 123456,
      received: 654654,
      block: '',
    },
    {
      imageSrc: 'https://picsum.photos/id/1/300/200',
      id: '573573573575',
      name: 'John Doe',
      balance: 123456,
      received: 456456,
      block: '',
    },
  ]);
  displayedColumns: string[] = [
    'serial',
    'image',
    'id',
    'name',
    'balance',
    'received',
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

  // changeStatus(id, isFree) {}

  delete(id: string) {
    this.dialog.open(DeleteUserComponent, {
      disableClose: true,
      data: id,
      width: '700px',
    });
  }

  edit(id: string) {
    this.dialog.open(NewUserComponent, {
      data: id,
      disableClose: true,
      width: '700px',
    });
  }

  createUser() {
    this.dialog.open(NewUserComponent, { disableClose: true, width: '700px' });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
