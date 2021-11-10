import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import * as confetti from "canvas-confetti";

@Component({
    selector: 'app-congratulations-dialog',
    templateUrl: './congratulations-dialog.component.html',
    styleUrls: ['./congratulations-dialog.component.scss']
})
export class CongratulationsDialogComponent implements AfterViewInit, OnDestroy {

    @ViewChild('canvas') canvasElement!: HTMLCanvasElement;

    private eastereggInterval: number | undefined;

    ngAfterViewInit() {
        const eastereggConfetti = confetti.create(this.canvasElement, {
            resize: true,
        });
        this.fireConfetti(eastereggConfetti);
        this.eastereggInterval = setInterval(() => this.fireConfetti(eastereggConfetti), 1000);
    }

    private fireConfetti(eastereggConfetti: confetti.CreateTypes) {
        eastereggConfetti({
            scalar: 1.5,
            angle: Math.random() * (135 - 45) + 45
        });
    }

    ngOnDestroy(): void {
        clearInterval(this.eastereggInterval);
    }
}
