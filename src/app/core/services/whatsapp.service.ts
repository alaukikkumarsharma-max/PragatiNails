import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { APP_CONSTANTS } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  openGeneralChat(): void {
    const url = this.buildUrl(APP_CONSTANTS.DEFAULT_MESSAGES.GENERAL);
    window.open(url, '_blank');
  }

  openOrder(product: Product, size?: string, qty: number = 1): void {
    let message = `${APP_CONSTANTS.DEFAULT_MESSAGES.ORDER}\n\n`;
    message += `Product: ${product.name}\n`;
    message += `Price: ${APP_CONSTANTS.CURRENCY}${product.price}\n`;

    if (product.hasSize && size) {
      message += `Size: ${size}\n`;
    }

    message += `Quantity: ${qty}`;

    const url = this.buildUrl(message);
    window.open(url, '_blank');
  }

  private buildUrl(message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${APP_CONSTANTS.WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }
}
