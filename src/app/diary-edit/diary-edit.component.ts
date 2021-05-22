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

  async ngOnInit(): Promise<void> {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.diary = await this.diaryService.getDiary(id);
    }
  }

  public async onSaveChanges(modDiary: Diary): Promise<void> {
    if (this.diary) {
      await this.diaryService.updateDiary(this.diary.id, modDiary);
      this.location.back();
    }
    else {
      await this.diaryService.addDiary(modDiary);
      this.router.navigate(['/diaries']);
    }
  }
}
