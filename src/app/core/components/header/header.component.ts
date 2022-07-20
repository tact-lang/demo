import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild
} from '@angular/core';
import { LINKS } from '@core/constants/LINKS';
import { ROUTE_PATH } from '@app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostListener('window:mousedown', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onGlobalClick(event: Event): void {
    if (!this.burgerOpened) {
      return;
    }

    if (this.burger && !this.burger.nativeElement.contains(event.target as HTMLElement)) {
      this.burgerToggled();
    }
  }

  @ViewChild('burger') burger: ElementRef<HTMLElement> | undefined;

  public burgerOpened = false;

  public LINKS = LINKS;

  public ROUTE_PATH = ROUTE_PATH;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public burgerToggled(): void {
    this.burgerOpened = !this.burgerOpened;
    this.document.documentElement.classList.toggle('burger-opened');
  }
}
