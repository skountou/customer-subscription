import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class getApiDataService{
    constructor(private http:HttpClient) { }
    

    fetchData(id:number){
        const customerId = id;
        return this.http
        .get<User>(
            `https://640edc144ed25579dc3e9635.mockapi.io/customer-sub/Customer-Subs/?id=${customerId}`
        );
         
    }
}