import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { FormlyFieldConfig } from '@ngx-formly/core';


import {
  DemoModel,
} from '../../demo.model';
import {
  DemoService,
} from '../../demo.service';

@Component({
  selector: 'app-demo-detail-page',
  templateUrl: './demo-detail-page.component.html',
  styleUrls: ['./demo-detail-page.component.scss']
})
export class DemoDetailPageComponent implements OnInit {

  public form = new FormGroup({});
  public model: DemoModel;
  public fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'ID',
        disabled: true,
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      }
    },
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        options: [
          {
            label: 'Female', value: 'female',
          },
          {
            label: 'Male', value: 'male',
          },
        ],
        required: true,
      }
    },
    {
      key: 'company',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Company',
        placeholder: 'Enter company',
        required: true,
      }
    }
  ];

  constructor(
    private demoService: DemoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.demoService.getDatum(params.id)
        .subscribe((data: DemoModel) => {
          this.model = data;
          console.log(this.model);
        });
      }
    })
  }

  public submit(model: DemoModel): void {
    this.demoService.update(model)
    .subscribe((res: DemoModel) => {
      alert('Update completed!');
      this.router.navigate(['demo']);
    });
  }

}
