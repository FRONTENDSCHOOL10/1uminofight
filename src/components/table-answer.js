class TableAnswer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['question', 'answer', 'date'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const question = this.getAttribute('question');
    const answer = this.getAttribute('answer');
    const date = this.getAttribute('date');
    this.shadowRoot.innerHTML = `
    <style>
        .qa-container {
            width: 1050px;
            height: auto;
            position: relative;
            padding: 0px;
            border-top: 1px solid #E1E1E1;
            border-bottom: 1px solid #E1E1E1;
            overflow: hidden;
            background-color: #F9F9F9;
        }
        .icon {
            margin-right: 30px;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
        }
        .icon svg {
            width: 100%;
            height: 100%;
            display: block;
        }    
        .qa-text {
            font-size: 12px;
            flex: 1;
        }
        .question-container, .answer-container {
            display: flex;
            align-items: flex-start;
            margin: 20px;
            margin-bottom: 50px;
        }

        .date {
            margin-top: 10px;
            font-size: 12px;
            color: #898989;
        }
        .question, .answer {
            margin: 0px;
            font-weight: 600;
        }
    </style>

    <div class="qa-container">
      <div class="question-container">
        <div class="icon"><svg><use href="/sprite/icons.svg#Question"></use></svg></div>
        <p class="question">${question}</p>
      </div>
      <div class="answer-container">
        <div class="icon"><svg><use href="/sprite/icons.svg#Answer"></use></svg></div>
        <div class="qa-text">
          <p class="answer">${answer}</p>
          <p class="date">${date}</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('table-answer', TableAnswer);
