import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class getApiDataService{
    constructor(private http:HttpClient) { }

    fetchData(){
        fetch("../assets/dummy-API-data.json")
        .then(res => {
            return res.json()})
    }
}