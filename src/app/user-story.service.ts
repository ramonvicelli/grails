import { Injectable } from '@angular/core';

import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  userStory = {
    name: 'A User Story',
    description: 'A User Story',
    category: 'Generator',
    subCategory: 'Site Configuration',
    estimatedStartDate: '15-Apr-2015',
    sponsorEmail: '',
    complexity: '',
  };

  constructor() { }

  getUser(): User {
    return this.userStory;
  }

  udpateUser(user: User): User {
    this.userStory = user;

    return this.userStory;
  }
}
