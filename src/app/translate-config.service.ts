import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage() {
    const default_save_lang = window.localStorage.getItem('default_language');
    let language;
    if (default_save_lang) {
      language = JSON.parse(default_save_lang);
    } else {
      language = this.translate.getBrowserLang();
    }
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang:string) {
    this.translate.use(setLang);
    window.localStorage.setItem('default_language', JSON.stringify(setLang));
  }

}