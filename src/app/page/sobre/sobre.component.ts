import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() sobre: string;
  @Input() eu: string;
  @Input() euP: string;
  @Input() comeco: string;
  @Input() comecoP: string;
  currentUrl: string = "";

  isPanelOpen: PanelStatus = {
    panel1: false,
    panel2: false
  };

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event) => this.handleDocumentClick(event));
    this.currentUrl = this.router.url;
  }

  togglePanel(panel: keyof PanelStatus): void {
    // Fechar todos os painéis primeiro
    Object.keys(this.isPanelOpen).forEach((key: string) => {
      const panelKey = key as keyof PanelStatus;
      if (panelKey !== panel) {
        this.isPanelOpen[panelKey] = false;
        const iconToClose = panelKey === 'panel1' ? this.icon1.nativeElement : this.icon2.nativeElement;
        this.renderer.removeClass(iconToClose, 'open');
      }
    });
  
    // Abrir ou fechar o painel clicado
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
