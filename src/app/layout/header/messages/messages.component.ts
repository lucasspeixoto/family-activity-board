import { Component, Input } from '@angular/core';
interface Email {
  name: string;
  time: string;
  message: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  public emails: Email[] = [
    { name: 'Jane Hew', time: '9:32', message: 'Hey! How is it going?' },
    {
      name: 'Lloyd Brown',
      time: '9:18',
      message: 'Check out my new Dashboard',
    },
    {
      name: 'Mark Winstein',
      time: '9:15',
      message: 'I want rearrange the appointment',
    },
    {
      name: 'Liana Dutti',
      time: '9:09',
      message: 'Good news from sale department',
    },
  ];
  public colors: string[] = ['yellow', 'green', 'blue', 'ping'];
}
