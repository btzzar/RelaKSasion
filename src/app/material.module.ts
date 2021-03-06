// import { NgModule } from "@angular/core";
// import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


// @NgModule({
// imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule],
// exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule]
// })

// export class MaterialModule{}

import { NgModule } from '../../node_modules/@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule } from '@angular/material';

@NgModule ({
imports: [
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatNativeDateModule, 
    MatDatepickerModule, 
    MatCheckboxModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatTabsModule, 
    MatCardModule, 
    MatSelectModule, 
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule
    ],
exports: [
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatNativeDateModule, 
    MatDatepickerModule, 
    MatCheckboxModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatTabsModule, 
    MatCardModule, 
    MatSelectModule, 
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule
    ]
})

export class MaterialModule {}

