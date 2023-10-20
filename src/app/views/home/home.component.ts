import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Json } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  invalidFile = false;

  constructor(private router: Router, private dataService: DataService) {}

  loadJson() {
    this.input.nativeElement.click();
  }

  async fileUpload() {
    if (this.input.nativeElement.files === null) {
      return;
    }

    const file = this.input.nativeElement.files[0];
    try {
      const json = JSON.parse(await file.text());
      this.invalidFile = false;
      this.dataService.json = {
        name: file.name,
        content: json,
      };
      this.router.navigateByUrl('/json');
    } catch (error: any) {
      this.invalidFile = true;
    }
  }
}
