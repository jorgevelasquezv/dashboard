import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/request-response';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private usersService: UsersService = inject(UsersService);

  private route = inject(ActivatedRoute);

  public user: Signal<User | undefined> = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public fullName = computed(() => {
    const user = this.user();
    return user ? `${user.first_name} ${user.last_name}` : '';
  });
}
