import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrlStation } from '../../Model/brlstation';
import { BrlStationService } from '../../Services/brlstation.service';

@Component({
  selector: 'app-brlstation-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatFormFieldModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brlstation-form.component.html',
  styleUrl: './brlstation-form.component.css'
})
export class BrlstationFormComponent {

  readonly dialogRef = inject(MatDialogRef<BrlstationFormComponent>)
  data = inject<BrlStation>(MAT_DIALOG_DATA)

  constructor(private brlStationService: BrlStationService) { }

  addOrEditBrlStation(brlStation: BrlStation) {
    console.log(this.data);
    if (brlStation.ID !== 0) {
      this.brlStationService.updateBrlStation(brlStation).subscribe({
        next: (data) => {
          console.log(data);
          console.log("BRL Station Updated Successfully!");
          //window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.brlStationService.createBrlStation(brlStation).subscribe({
        next: (data) => {
          console.log(data);
          console.log("BRL Station Added Successfully!");
          //window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

}
