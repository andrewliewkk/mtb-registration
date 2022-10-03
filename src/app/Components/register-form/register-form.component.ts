import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';    
import { RegisterService } from 'src/app/Services/register.service';

export enum DayTimeEnum {
  AM = 'AM',
  PM = 'PM',
}

export interface RegistrationForm {
  name: string,
  location: string,
  date: Date,
  time: DayTimeEnum | ''
}

const initialForm: RegistrationForm = {
  name: '',
  location: 'TQ',
  date: new Date(),
  time: '',
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    location: ['TQ'],
    date: [new Date()],
    time: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private readonly registerService: RegisterService,
  ) {}

  async onSubmit(): Promise<void> {
    console.log(await this.registerService.register(this.registerForm.value));
  }

  get defaultTimeValue(): string {
    return DayTimeEnum.AM
  }

  get dayTimes(): DayTimeEnum[] {
    let dayTimeArr: DayTimeEnum[] = []
    _.forEach(DayTimeEnum, (time) => {
      dayTimeArr.push(time);
    })
    return dayTimeArr;
  }

  resetForm(): void {
    this.registerForm.reset(initialForm)
  }
}
