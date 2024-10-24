import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { BrlStation } from '../Model/brlstation';
import { BrlStationService } from '../Services/brlstation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID', 'NAME'];
  dataSource = new MatTableDataSource<BrlStation>();
  constructor(private brlStationService: BrlStationService) { }

  brlStation: BrlStation = {
    ID: 0,
    NAME: '',
    UPDATE_WHO: ''
  }

  brlStations: BrlStation[] = [];
  filteredBrlStation: BrlStation[] = [];
  @ViewChild(MatPaginator) paginator: any;
  readonly dialog = inject(MatDialog);

  ngAfterViewInit(): void {
    this.brlStationService.fetchAllBrlStations().subscribe((data) => {
      this.brlStations = data;
      this.dataSource = new MatTableDataSource<BrlStation>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  searchBrlStation(input: any) {
    this.filteredBrlStation = this.brlStations.filter(item => item.NAME.toLowerCase().includes(input.toLowerCase()))
    this.dataSource = new MatTableDataSource<BrlStation>(this.filteredBrlStation);
  }

}
