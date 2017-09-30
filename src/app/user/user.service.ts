import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class UserService {
  public user = {
    usercode: '',
    password: '',
    username: '',
    avatar: '',
    userstatus: '',
    usercodeStatus: '',
    passwordStatus: '',
  };

  constructor(private http: Http) {
  }

  public login( usercode: String, password: String ): Promise<any> {
    return this.http.post('/user/login', {})
      .toPromise()
      .then((response) => response.json().data as any[])
      .catch((e) => {
        console.error('登录错误');
        return Promise.reject( e );
      });
  }

  public isNull( str ) {
    return str === '' || str === null || str === undefined;
  }
}
