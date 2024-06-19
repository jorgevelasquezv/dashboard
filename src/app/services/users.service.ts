import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, delay, map } from 'rxjs';

import { User, UserResponse, UsersResponse } from '@interfaces/request-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #state = signal<State>({
    users: [],
    loading: true,
  });

  private http: HttpClient = inject(HttpClient);

  public users = computed(() => this.#state().users);

  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe((response) => {
        this.#state.set({
          loading: false,
          users: response.data,
        });
      });
  }

  public getUserById(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(delay(1500))
      .pipe(map((response) => response.data));
  }
}
