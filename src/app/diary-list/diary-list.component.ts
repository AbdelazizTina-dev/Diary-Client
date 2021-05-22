import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {

  public diaries : Diary[];

  constructor(private diaryService:DiaryService) {
    this.diaries = diaryService.getDiaries();
  }

  ngOnInit(): void {
  }

}
