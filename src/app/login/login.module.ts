import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthComponent } from './user-auth.component';

@NgModule({
  imports: [CommonModule, UserAuthComponent],
  exports: [UserAuthComponent]
})
export class LoginModule {}
