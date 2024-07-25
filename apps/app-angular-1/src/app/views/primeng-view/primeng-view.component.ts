import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-primeng-view',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './primeng-view.component.html',
  styleUrl: './primeng-view.component.scss',
})
export class PrimengViewComponent {}
