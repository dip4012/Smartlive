import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
})
export class LevelsComponent implements OnInit {
  public dataSource = new MatTableDataSource([]);

  displayedColumns: string[] = ['image', 'level', 'coins', 'actions'];
  constructor() {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  edit(id: string) {}

  delete(id: string) {}
}
