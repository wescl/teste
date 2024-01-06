import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

interface PanelStatus {
  panel1: boolean;
  panel2: boolean;
}

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  @ViewChild('icon1', { static: true }) icon1: ElementRef;
  @ViewChild('icon2', { static: true }) icon2: ElementRef;

  isPanelOpen: PanelStatus = {
    panel1: false,
    panel2: false
  };

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event) => this.handleDocumentClick(event));
  }

  togglePanel(panel: keyof PanelStatus): void {
    this.isPanelOpen[panel] = !this.isPanelOpen[panel];

    const icon = panel === 'panel1' ? this.icon1.nativeElement : this.icon2.nativeElement;

    if (this.isPanelOpen[panel]) {
      this.renderer.addClass(icon, 'open');
    } else {
      this.renderer.removeClass(icon, 'open');
    }
  }

  private handleDocumentClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const isInsidePanel = this.isInsideElement(clickedElement, '.expansion-panel');
    if (!isInsidePanel) {
      this.closeAllPanels();
    }
  }

  private isInsideElement(element: HTMLElement, selector: string): boolean {
    return element.closest(selector) !== null;
  }

  private closeAllPanels(): void {
    this.isPanelOpen.panel1 = false;
    this.isPanelOpen.panel2 = false;

    this.renderer.removeClass(this.icon1.nativeElement, 'open');
    this.renderer.removeClass(this.icon2.nativeElement, 'open');
  }
}
