import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { BrlStation } from '../../Model/brlstation';
import { BrlStationService } from '../../Services/brlstation.service';
import { BrlstationFormComponent } from '../brlstation-form/brlstation-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './brlstation-admin.component.html',
  styleUrl: './brlstation-admin.component.css'
})

export class BrlstationAdminComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID', 'NAME', 'EDIT', 'DELETE'];
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

  deleteBrlStation(id: Number) {
    const isConfirmed = window.confirm('Are you sure you want to Delete');
    if (isConfirmed) {
      this.brlStationService.deleteBrlStation(id).subscribe((data) => {
        this.brlStations = this.brlStations.filter(item => item.ID != id);
      })
      window.location.reload();
    }
  }

  searchBrlStation(input: any) {
    this.filteredBrlStation = this.brlStations.filter(item => item.NAME.toLowerCase().includes(input.toLowerCase()))
    this.dataSource = new MatTableDataSource<BrlStation>(this.filteredBrlStation);
  }

  openDialog(brlStation: BrlStation): void {

    console.log(brlStation);
    const dialogRef = this.dialog.open(BrlstationFormComponent, {
      data: brlStation
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.ID !== undefined) {
          this.brlStation.ID = result.ID;
          this.brlStation.NAME = result.NAME;
          this.brlStation.UPDATE_WHO = result.UPDATE_WHO;
        }
      }
    })
  }

}
