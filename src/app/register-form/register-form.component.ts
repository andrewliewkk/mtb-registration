import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';    

export enum DayTimeEnum {
  AM = 'AM',
  PM = 'PM',
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    location: ['TQ'],
    date: [new Date()],
    time: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.log(this.registerForm.value)
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
    this.registerForm.reset({
      name: '',
      location: 'TQ',
      date: new Date(),
      time: '',
    })
  }
}
