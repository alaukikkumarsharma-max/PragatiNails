import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {

  @Output() close = new EventEmitter<void>();

  constructor(private whatsapp: WhatsappService) {}

  closeMenu(): void {
    this.close.emit();
  }

  openWhatsApp(): void {
    this.whatsapp.openGeneralChat();
    this.closeMenu();
  }
}
