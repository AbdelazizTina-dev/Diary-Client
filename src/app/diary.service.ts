import { Injectable } from '@angular/core';
import { Diary } from './diary';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  public diaries : Diary[] = [];

  private apiUrl = "http://127.0.0.1:8000/api/diaries";

  constructor(private httpClient: HttpClient) { }

  public getDiaries(): Promise<Diary[]>{
    return this.httpClient.get<Diary[]>(this.apiUrl).toPromise();
  }

  public getDiary(id: number): Promise<Diary> {
    return this.httpClient.get<Diary>(this.apiUrl + '/' + id).toPromise();
  }

  public addDiary(diary:Diary): Promise<Diary>{
    return this.httpClient.post<Diary>(this.apiUrl, diary).toPromise();
  }

  public updateDiary(id:number, modDiary:Diary): Promise<Diary>{
    return this.httpClient.patch<Diary>(this.apiUrl + '/' + id, modDiary).toPromise();
  }

}
