import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-theater-create',
  templateUrl: './theater-create.component.html',
  styleUrls: ['./theater-create.component.css']
})
export class TheaterCreateComponent implements OnInit {

  submitted = false;
    theaterForm: FormGroup;
    TheaterProfile:any = ['Megaplexes', 'Multiplexes', 'Cinema', 'Multi-Cinema', 'Cine-complex']


constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.theaterForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      type: ['', [Validators.required]],
      revenue: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price_range: ['', [Validators.required]]
    })
  }

  updateProfile(e){
    this.theaterForm.get('type').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(){
    return this.theaterForm.controls;
  }

  onSubmit() {
      this.submitted = true;
      if (!this.theaterForm.valid) {
        return false;
      } else {
        this.apiService.createTheater(this.theaterForm.value).subscribe(
          (res) => {
            console.log('Theater successfully added!')
            this.ngZone.run(() => this.router.navigateByUrl('/theaters-show'))
          }, (error) => {
            console.log(error);
          });
      }
    }

  }
