export class QuestionComponent {
    constructor(question, onAnswer) {
        this.question = question;
        this.onAnswer = onAnswer;
    }
    render() {
        const container = document.createElement('div');
        const qText = document.createElement('h2');
        qText.textContent = this.question.question;
        container.appendChild(qText);
        const buttonGroup = document.createElement('div');
        buttonGroup.style.display = 'flex';
        buttonGroup.style.justifyContent = 'center';
        buttonGroup.style.gap = '10px';
        buttonGroup.style.marginTop = '15px';
        buttonGroup.style.flexWrap = 'wrap';
        this.question.options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.style.padding = '10px 15px';
            btn.style.fontSize = '16px';
            btn.style.cursor = 'pointer';
            btn.style.border = '1px solid #ccc';
            btn.style.borderRadius = '5px';
            btn.style.backgroundColor = '#f9f9f9';
            btn.onmouseenter = () => {
                btn.style.backgroundColor = '#00bfff';
                btn.style.color = 'white';
            };
            btn.onmouseleave = () => {
                btn.style.backgroundColor = '#f9f9f9';
                btn.style.color = 'black';
            };
            btn.onclick = () => {
                const isCorrect = option === this.question.answer;
                this.onAnswer(isCorrect);
            };
            buttonGroup.appendChild(btn);
        });
        container.appendChild(buttonGroup);
        return container;
    }
}
//# sourceMappingURL=questionComponent.js.map