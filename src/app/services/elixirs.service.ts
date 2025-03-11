import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ElixirsService {
  private baseUrl = 'https://wizard-world-api.herokuapp.com/elixirs';
  private elixirs = signal<any[]>([]);
  private isLoading = signal<boolean>(false);
  private error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  getElixirs(filters: any): void {
    this.isLoading.set(true);
    this.error.set(null);

    let params = new HttpParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    this.http.get<any[]>(this.baseUrl, { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.error.set(`Failed to load elixirs: ${error.message}`);
          return of([]);
        }),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe({
        next: (data) => this.elixirs.set(data),
      });
  }

  elixirsSignal(): Signal<any[]> {
    return this.elixirs.asReadonly();
  }

  loadingSignal(): Signal<boolean> {
    return this.isLoading.asReadonly();
  }

  errorSignal(): Signal<string | null> {
    return this.error.asReadonly();
  }
}