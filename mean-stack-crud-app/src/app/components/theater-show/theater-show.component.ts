import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-theater-show',
  templateUrl: './theater-show.component.html',
  styleUrls: ['./theater-show.component.css']
})
export class TheaterShowComponent implements OnInit {

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
