import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Diary } from '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnChanges {

  @Input() diary : Diary;

  @Output() saveChanges: EventEmitter<Diary> = new EventEmitter<Diary>();

  constructor(private formBuilder: FormBuilder) { }

  public diaryForm: FormGroup = this.formBuilder.group({
    'title': [ '', [ Validators.required ] ],
    'content': [ '', [ Validators.required ] ],
  });

  public get title(): AbstractControl {
    return this.diaryForm.get('title');
  }
  public get content(): AbstractControl {
    return this.diaryForm.get('content');
  }

  public ngOnChanges(): void {
    this.diaryForm.patchValue(this.diary);
  }

  public onSubmit(): void {
    if (this.diaryForm.valid) {
      this.saveChanges.emit(this.diaryForm.value);
    }
  }

}
