import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSandbox } from '../../user/user.sandbox';

@Component({
  selector: 'app-home-event-planner',
  templateUrl: './home-event-planner.component.html',
  styleUrls: ['./home-event-planner.component.css']
})
export class HomeEventPlannerComponent implements OnInit {

  constructor(private userSandbox: UserSandbox,
              private router: Router) { }

  ngOnInit(): void {
  }

  goToEventPlannerHome():void {
    this.router.navigate(['eventPlannerHome']);
  }

  closeSesion():void {
    this.userSandbox.closeSesion();
  }
}
