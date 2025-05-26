import { Injectable, signal } from '@angular/core';
import { AvailableLocales } from '../types/locales';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<AvailableLocales>('es');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocales) ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocal(locale: AvailableLocales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
