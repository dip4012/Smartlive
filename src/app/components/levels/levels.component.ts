import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteLevelComponent } from './delete-level/delete-level.component';
import { NewLevelComponent } from './new-level/new-level.component';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
})
export class LevelsComponent implements OnInit {
  value = '';
  public dataSource = new MatTableDataSource([
    {
      id: '564654654',
      image: 'beginner',
      coins: 5,
      level: 3,
      isFree: true,
    },
    {
      id: '564654654',
      image: 'advanced',
      coins: 5,
      level: 2,
      isFree: true,
    },
    {
      id: '564654654',
      image: 'intermediate',
      coins: 5,
      level: 1,
      isFree: true,
    },
  ]);

  displayedColumns: string[] = [
    'serial',
    'image',
    'coins',
    'level',
    'isFree',
    'actions',
  ];
  constructor(private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addLevel() {
    this.dialog.open(NewLevelComponent, { disableClose: true, width: '700px' });
  }

  editLevel(id: string) {
    this.dialog.open(NewLevelComponent, {
      data: id,
      disableClose: true,
      width: '700px',
    });
  }

  deleteLevel(id: string) {
    this.dialog.open(DeleteLevelComponent, {
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
