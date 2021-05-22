import { Injectable } from '@angular/core';
import { Diary } from './diary';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  public diaries : Diary[] = [
    {
      id : 1,
      title : "Went to the beach",
      content : "We went to the beach and it was so fun I wish we can do it more often"
    },
    {
      id : 2,
      title : "Went to the sea",
      content : "We went to the sea and it was so fun I wish we can do it more often"
    },
    {
      id : 3,
      title : "Went to the theater",
      content : "We went to the theater and it was so fun I wish we can do it more often"
    },
    {
      id : 4,
      title : "Went to the hakuna",
      content : "We went to the hakuna and it was so fun I wish we can do it more often"
    }
  ];

  constructor() { }

  public getDiaries(): Diary[]{
    return this.diaries;
  }

  public getDiary(id: number): Diary {
    return this.diaries.find((i: Diary) => i.id === id);
  }

  public addDiary(diary:Diary){
    this.diaries.push(diary);
  }

  public updateDiary(id:number, modDiary:Diary): Diary{
      const diary = this.getDiary(id);
      Object.assign(diary, modDiary);
      return diary;
  }

}
