import { Injectable } from '@angular/core';
import { User } from "../model/user";

const users:User[] = [
    {
        id: 1,
        name: 'John Watson',
        designation: 'Project Manager',
        gender: 'male'
    },
    {
        id: 2,
        name: 'Raja Sekar',
        designation: 'Team Leader',
        gender: 'male'
    },
    {
        id: 3,
        name: 'Preethi Chawla',
        designation: 'Project Manager',
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ashraf',
        designation: 'Project Delivery Head',
        gender: 'male'
    },
    {
        id: 5,
        name: 'John Watson',
        designation: 'Project Architect',
        gender: 'male'
    },
    {
        id: 6,
        name: 'Emma Tom',
        designation: 'Project Manager',
        gender: 'female'
    },
    {
        id: 7,
        name: 'Nick',
        designation: 'Team Leader',
        gender: 'male'
    }
];

@Injectable()
export class UserService {

    constructor() {
    }

    getUserList() {
        return users;
    }

    getTotalUsersCount() {
        return users.length;
    }
}
