import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css']
})
export class DiaryEditComponent implements OnInit {

  public diary: Diary;

  constructor(
    private diaryService: DiaryService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.diary = this.diaryService.getDiary(id);
    }
  }

  public onSaveChanges(modDiary: Diary): void {
    if (this.diary) {
      this.diaryService.updateDiary(this.diary.id, modDiary);
      this.location.back();
    }
    else {
      this.diaryService.addDiary(modDiary);
      this.router.navigate(['/diaries']);
    }
  }
}
