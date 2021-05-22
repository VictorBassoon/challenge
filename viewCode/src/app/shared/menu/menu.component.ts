import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public readonly menuItems = [
    {label: 'Code', link: '/code', icon: 'po-icon po-icon-arrow-right'},
    {label: 'Comunidade', link: '/comunidade', icon:'po-icon po-icon-users'}
]

public nameUser:string = 'Alonso'

  constructor() {

  }

  ngOnInit(): void {
  }

}
