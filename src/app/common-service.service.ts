import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http : HttpClient) { }

  Getnotes() {
    return this.http.get('http://localhost:8080/api/getnotes').pipe(res => res);
  }

 save(data) {
   return this.http.post(`http://localhost:8080/api/Save`,data).pipe(res => res);
 }

 Savenotes(data) {
   console.log(data)
  return this.http.post(`http://localhost:8080/api/Savenotes`,data).pipe(res => res);

}


  Authenticate(obj){
    return this.http.post(`http://localhost:8080/api/auth`,{obj :obj});
  }
}
