import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateConfigService } from './translate-config.service';
import { getApiDataService } from './getApiData.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-subscription';

  public user: any;
  public id: number = Math.floor(Math.random() * 9) + 1;
  public selectedLanguage: string = 'en';
  translateConfigService: any;

  constructor(
    private getApiData:getApiDataService,
    // private translateConfig:TranslateConfigService
    ) {}

  ngOnInit(){
  
    setTimeout(() => {
      this.getApiData.fetchData(this.id).subscribe({
        next: async (res:any) => {
          this.user = await(res.data);
          console.log(res);
          console.log('Data loaded succesfully!')
        },
        error:() => {
          console.log('Data could not be loaded!')
        }
      })
    }, 1000);
    
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  //Custom functions
  onSubmit(form:NgForm){

  }


  

}

