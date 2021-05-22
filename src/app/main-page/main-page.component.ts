import { Component, OnDestroy, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit,OnDestroy {

  public diaries : Diary[];

  constructor(private diaryService:DiaryService) { }

  async ngOnInit(): Promise<void> {
    document.body.className = "selector";
    this.diaries = await this.diaryService.getDiaries();
  }
  ngOnDestroy(){
    document.body.className="";
  }

}
