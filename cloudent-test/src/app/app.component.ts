import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CourseDialogComponent} from "./course-dialog/course-dialog.component";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  title = 'cloudent-test';

  showFiller = false;


  openDialog() {
    this.dialog.open(CourseDialogComponent);
  }

}
