import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getOrganizations (organizationId,callback) {
    if (organizationId) {
      this.http.get('http://localhost:3000/organizations/' + organizationId)
      .subscribe((res)=>{
        console.log('Response in provider ', res);
        callback(null, res);
      })
    } else {
      alert('Send valid organization id');
      callback(null);
    }
  }
}
