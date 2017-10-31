import { Component, OnInit, Input, Output  } from '@angular/core';
import { UserService } from './user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public isVisible = false;
  public validateForm: FormGroup;
  public user: any;

  constructor( public UserService: UserService, private fb: FormBuilder ) {
    this.user = UserService.user;

    this.validateForm = this.fb.group({
      usercode: [ '', [ Validators.required ], [ this.loginValidControl ] ],
      password: [ '', [ Validators.required ], [ this.loginValidControl ] ]
    });
  }

  public submitForm = ( $event, value ) => {
    $event.preventDefault();
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  };

  public hideModal( $event ) {
    this.isVisible = false;
    this.clearForm();
  }

  public clearForm() {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }

  public getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  public passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  }

  /**
   * 用户名和密码校验控制器,只接受字母开头，后可接.=+-@等字符
   * @param {FormControl} control - 表单控制对象
   * @memberof UserComponent
   */
  public loginValidControl = (control: FormControl): any => {
    return Observable.create((observer) => {
      setTimeout(() => {
        if (!/^[A-z](\w|\.|\=|\+|\-|\@)*$/g.test( control.value )) {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 100);
    });
  }

  public login() {
    if ( this.UserService.isNull(this.user.usercode) ) {
      alert('请输入用户名');
    }
    if ( this.UserService.isNull(this.user.password) ) {
      alert('请输入用户密码');
    }
    let promise = this.UserService.login(this.user.usercode, this.user.password);

    promise.then((data) => {
      alert( data );
    }, (error) => {
      alert('网络错误');
    });
  }

  // 注册
  public jumpRigester() {
  }

  // 修改密码
  public jumpEditPassword() {

  }

  public ngOnInit() {
  }
};
