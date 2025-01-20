import { Component } from '@angular/core';
import { Column, Users } from '../../model/users';
import { AdvFilterComponent } from "../../shared/adv-filter/adv-filter.component";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AdvFilterComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  filterData: Users[] = [];
  columnArray: Column[] = [
    { fieldName: 'userName', header: 'User Name', inputType: 'text' },
    { fieldName: 'password', header: 'Password', inputType: 'text' },
    { fieldName: 'isActive', header: 'Status', inputType: 'text' },
    { fieldName: 'role', header: 'Role', inputType: 'dropdown', options: ['Guest', 'Admin', 'SuperAdmin'] },
    { fieldName: 'gender', header: 'Gender', inputType: 'dropdown', options: ['Male', 'Fe Male'] },
    { fieldName: 'city', header: 'City', inputType: 'dropdown', options: ['Pune', 'Mumbai', 'Kolkata', 'TamilNadu', 'Erode'] },
  ]
  userData: Users[] = [
    { userName: "Virat Kohli", password: "vk123", isActive: "true", role: "Guest", gender: "Male", city: "Pune" },
    { userName: "Ms Dhoni", password: "ms123", isActive: "false", role: "Admin", gender: "Male", city: "Mumbai" },
    { userName: "Karun Nair", password: "kn123", isActive: "true", role: "SuperAdmin", gender: "Male", city: "Kolkata" },
    { userName: "Shikar", password: "vk123", isActive: "false", role: "Guest", gender: "Male", city: "TamilNadu" },
    { userName: "Preethi Zindha", password: "vk123", isActive: "true", role: "Admin", gender: "Fe Male", city: "Chennai" },
    { userName: "Arun", password: "vk123", isActive: "false", role: "SuperAdmin", gender: "Male", city: "Mumbai" },
    { userName: "Virat Kohli", password: "k123", isActive: "true", role: "Guest", gender: "Male", city: "Pune" },
    { userName: "Nakul Preethi", password: "vk123", isActive: "true", role: "Admin", gender: "Fe Male", city: "Kolkata" },
    { userName: "Vaibhav", password: "v123", isActive: "false", role: "SuperAdmin", gender: "Male", city: "Erode" },
  ]

  constructor() {
    this.filterData = this.userData;
  }
  getFilteredGridData(data: any) {
    this.filterData = data;
  }
}

