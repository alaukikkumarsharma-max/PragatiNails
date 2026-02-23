import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappButtonComponent } from '../../shared/components/whatsapp-button/whatsapp-button.component';
import { WhatsappService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, WhatsappButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private whatsapp: WhatsappService) {}

  orderNow(): void {
    this.whatsapp.openGeneralChat();
  }
}
