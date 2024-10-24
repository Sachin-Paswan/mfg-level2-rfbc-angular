import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BrlStation } from '../Model/brlstation';

@Injectable({
  providedIn: 'root'
})

export class BrlStationService {

  constructor(private _httpClient: HttpClient, private router: Router) { }

  baseUrl: String = "/api/brlstations";
  baseOption = {
    withCredentials: true
  }

  fetchAllBrlStations(): Observable<BrlStation[]> {
    return this._httpClient.get<BrlStation[]>(`${this.baseUrl}`, this.baseOption).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  createBrlStation(data: BrlStation) {
    return this._httpClient.post<BrlStation>(`${this.baseUrl}`, data, this.baseOption).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  updateBrlStation(data: BrlStation) {
    return this._httpClient.put<BrlStation>(`${this.baseUrl}/${data.ID}`, data, this.baseOption).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  deleteBrlStation(id: Number) {
    return this._httpClient.delete<BrlStation>(`${this.baseUrl}/${id}`, this.baseOption).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 401) {
      this.showUnauthorizedMesasage();
    }
    if (error.status == 404) {
      this.showNotFoundMessage();
    }
    if (error.status == 500) {
      this.showInternalErrorMessage();
    }
    return throwError(error);
  }

  showUnauthorizedMesasage() {
    document.body.innerHTML = '<div style="color:red;font-size: 24px;text-align:center; margin-top: 25px;">Unauthorized Access!</div>';
  }

  showNotFoundMessage() {
    document.body.innerHTML = '<div style="color:yellow;font-size: 24px;text-align:center; margin-top: 25px;">Service Not Found!</div>';
  }

  showInternalErrorMessage() {
    document.body.innerHTML = '<div style="color:blue;font-size: 24px;text-align:center; margin-top: 25px;">Internal Error!</div>';
  }
}
