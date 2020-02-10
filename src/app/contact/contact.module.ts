import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, FormsModule]
})
export class ContactModule {}
