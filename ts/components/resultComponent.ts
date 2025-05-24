export class ResultComponent {
  constructor(private score: number, private total: number) {}

  render(): HTMLElement {
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
