import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {

  Theater:any = [];

  constructor(private apiService: ApiService) {
    this.readTheater();
  }

  ngOnInit(): void {
  }

  readTheater(){
      this.apiService.getTheaters().subscribe((data) => {
       this.Theater = data;
      })
}

removeTheater(theater, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteTheater(theater._id).subscribe((data) => {
          this.Theater.splice(index, 1);
        }
      )
    }

      }  

}
