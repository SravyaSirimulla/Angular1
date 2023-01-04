import { Component } from '@angular/core';

@Component({
  selector: 'Tabs',
  templateUrl: './Tab.component.html',
  styleUrls: ['./Tab.component.scss']
})
export class TabComponent {
  activeTab: string = "Home";
  onTabClick(tab: string) {
    this.activeTab = tab;
  }
}
