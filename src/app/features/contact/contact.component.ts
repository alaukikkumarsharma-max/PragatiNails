import { Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private whatsapp: WhatsappService) {}

  chat(): void {
    this.whatsapp.openGeneralChat();
  }
}
