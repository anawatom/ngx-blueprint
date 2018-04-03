import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import {
  TableColumn,
} from '@swimlane/ngx-datatable';


import {
  DemoService,
} from '../../demo.service';
import {
  DemoModel,
} from '../../demo.model';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent implements OnInit {

  @ViewChild('buttonTemplate') public buttonTemplate: TemplateRef<any>;

  public rows: Array<DemoModel> = [];
  public loadingIndicator: boolean = true;
  public reorderable: boolean = true;
  public columns: Array<TableColumn>;

  constructor(
    private demoService: DemoService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.columns = [
      { prop: 'id' },
      { prop: 'name' },
      { prop: 'gender' },
      { prop: 'company' },
      { name: 'Actions', cellTemplate: this.buttonTemplate, sortable: false},
    ];
    this.loadData();
  }

  public onEditBtnClicked(id: string): void {
    this.router.navigate(['demo', id]);
  }

  public onDeleteBtnClicked(id): void {
    const cfResult: boolean = confirm('Are you sure?');
    if (cfResult) {
      this.demoService.delete(id)
      .subscribe((res: boolean) => {
        if (res) {
          this.loadData();
        } else {
          alert('Got error during delete!!!');
        }
      });
    }
  }

  private loadData(): void {
    this.demoService.getData()
    .subscribe((data: Array<DemoModel>) => {
      this.rows = data;
    });
  }

}
