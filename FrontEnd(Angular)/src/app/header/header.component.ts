import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  togglesidebar(){
    this.toggleSidebarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
  }, 300);
  }
}
