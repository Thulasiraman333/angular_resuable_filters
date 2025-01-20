import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from '../../model/users';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-adv-filter',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './adv-filter.component.html',
  styleUrl: './adv-filter.component.scss'
})
export class AdvFilterComponent {
  @Input() columnList: Column[] = [];
  @Input() gridData: any[] = [];
  @Output() onFilter = new EventEmitter<any>();

  currentSelectedItem: Column = {
    fieldName: '',
    header: '',
    inputType: ''
  };

  filterObj: any = {};
  onCurrentSelectedItem(data: Column) {
    this.currentSelectedItem = data;
  }

  applyFilter() {
    let filterData: any = [...this.gridData];
    for (const fieldName of Object.keys(this.filterObj)) {
      filterData = this.gridData.filter((item: any) => {
        return item[fieldName].toString().toLowerCase() == this.filterObj[fieldName].toLowerCase();
      })
    }
    this.onFilter.emit(filterData);
  }

  updateFilter(fieldName: string, event: any) {
    this.filterObj = {};
    this.filterObj[fieldName] = event.target.value;
  }
}


