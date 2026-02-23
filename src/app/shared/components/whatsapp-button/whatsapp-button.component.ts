import { Component, Input } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  @Input() label = 'Order on WhatsApp';

  constructor(private whatsapp: WhatsappService) {}

  openChat(): void {
    this.whatsapp.openGeneralChat();
  }
}
