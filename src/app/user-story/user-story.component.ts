import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserStoryService } from '../user-story.service'
import { User } from '../user.interface';

const buildRequiredValidation = () => Validators.compose([Validators.required])

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.css']
})
export class UserStoryComponent implements OnInit {

  editMode: boolean;
  user: User;
  formdata: FormGroup;

  constructor(private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.editMode = false
    this.user = this.userStoryService.getUser()
    this.formdata = new FormGroup({
      name: new FormControl(
        this.user.name,
        buildRequiredValidation()
      ),
      description: new FormControl(
        this.user.description,
        buildRequiredValidation()
      ),
      category: new FormControl(
        this.user.category,
        buildRequiredValidation()
      ),
      subCategory: new FormControl(
        this.user.subCategory,
        buildRequiredValidation()
      ),
      estimatedStartDate: new FormControl(
        this.user.estimatedStartDate,
        buildRequiredValidation()
      ),
      sponsorEmail: new FormControl(
        this.user.sponsorEmail
      ),
      complexity: new FormControl(
        this.user.complexity
      ),
    });
  }

  onClickSubmit(data: User) {
    this.editMode = false
    this.user = this.userStoryService.udpateUser(data)
  }

  changeToEditableMode() {
    this.editMode = true
  }

  get f() { return this.formdata.controls; }
}
