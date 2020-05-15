
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Theater } from 'src/app/model/theater';

@Component({
  selector: 'app-theater-edit',
  templateUrl: './theater-edit.component.html',
  styleUrls: ['./theater-edit.component.css']
})
export class TheaterEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  theaterData: Theater[];
  TheaterProfile:any = ['Megaplexes', 'Multiplexes', 'Cinema', 'Multi-Cinema', 'Cine-complex']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.updateTheater();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTheater(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      type: ['', [Validators.required]],
      revenue: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price_range: ['', [Validators.required]]
    })

  }

  updateProfile(e) {
    this.editForm.get('type').setValue(e, {
      onlySelf: true
    })
  }

  get myForm() {
    return this.editForm.controls;
  }

  getTheater(id) {
    this.apiService.getTheater(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        address: data['address'],
        capacity: data['capacity'],
        type: data['type'],
        revenue: data['revenue'],
        price_range: data['price_range']
      });
    });
  }

  updateTheater() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      type: ['', [Validators.required]],
      revenue: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price_range: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTheater(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/theaters-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }


}
