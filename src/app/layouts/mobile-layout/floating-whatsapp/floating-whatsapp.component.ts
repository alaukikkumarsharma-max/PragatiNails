import { Component } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  templateUrl: './floating-whatsapp.component.html',
  styleUrls: ['./floating-whatsapp.component.scss']
})
export class FloatingWhatsappComponent {
  constructor(private whatsapp: WhatsappService) {}

  open(): void {
    this.whatsapp.openGeneralChat();
  }
}
