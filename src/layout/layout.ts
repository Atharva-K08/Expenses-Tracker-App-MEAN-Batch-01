import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(private router: Router) {}
  navItems = [
    { placeholder: 'Dasboard', isActive: true, icon: 'ri-dashboard-line', route: 'dashboard' },
    {
      placeholder: 'Transactions',
      isActive: false,
      icon: 'ri-equalizer-2-line',
      route: 'transaction',
    },
    { placeholder: 'Goals', isActive: false, icon: 'ri-target-line', route: 'dashboard' },
    { placeholder: 'Budget', isActive: false, icon: 'ri-exchange-dollar-line', route: 'dashboard' },
    { placeholder: 'Analytics', isActive: false, icon: 'ri-line-chart-line', route: 'dashboard' },
  ];
  clickHandler = (index: number) => {
    this.navItems.map((item) => {
      item.isActive = false;
    });
    this.navItems[index].isActive = !this.navItems[index].isActive;
    this.router.navigateByUrl(this.navItems[index].route);
  };
}
