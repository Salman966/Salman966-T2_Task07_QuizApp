export class ResultComponent {
    constructor(score, total) {
        this.score = score;
        this.total = total;
    }
    render() {
        const container = document.createElement('div');
        container.style.textAlign = 'center';
        container.style.marginTop = '50px';
        const result = document.createElement('h2');
        result.textContent = `نتيجتك: ${this.score} / ${this.total}`;
        result.style.fontSize = '22px';
        result.style.color = 'black';
        container.appendChild(result);
        return container;
    }
}
//# sourceMappingURL=resultComponent.js.map