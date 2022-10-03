import { Injectable } from '@angular/core';
import { RegistrationForm } from '../Components/register-form/register-form.component';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import * as Promise from "bluebird";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'https://random-data-api.com/api/v2/users'

  constructor(
    private http: HttpClient,
  ) {}

  async register(payload: RegistrationForm): Promise<void> {
    return axios.get(this.url)
    .then((response)=> {return response.data})
    .catch((error) => {
      if( error.response ){
        console.log(error.response.data); // => the response payload 
      }
    })
  }
}
