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

  escapeHtml(unsafe) {
    return unsafe
      .replace(/\n/g, '<br>')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  render() {
    const question = this.escapeHtml(
      this.getAttribute('question') || ''
    ).replace(/\n/g, '<br>');
    const answer = this.escapeHtml(this.getAttribute('answer') || '').replace(
      /\n/g,
      '<br>'
    );
    const date = this.escapeHtml(this.getAttribute('date') || '');
    this.shadowRoot.innerHTML = `
    <style>
        .qa-container {
            width: 1050px;
            height: 420px;
            position: relative;
            padding: 0px;
            border-top: 1px solid #E1E1E1;
            border-bottom: 1px solid #E1E1E1;
            overflow: hidden;
            background-color: #F9F9F9;
        }
        .icon {
            margin-right: 10px;
            width: 24px;
            height: 24px;
            background-color: blue;
        }
        .icon svg {
            width: 100%;
            height: 100%;
        }    
        .qa-text {
            font-size: 12px;
            flex: 1;
        }
        .question-container, .answer-container {
            display: flex;
            align-items: center;
            margin: 20px;
        }
        .answer-container {
            
        }
        .date {
            margin-top: 10px;
            font-size: 0.9em;
            color: #555;
        }
        .q-text {
            font-weight: bold;
        }
    </style>

    <div class="qa-container">
      <div class="question-container">
        <div class="icon"><svg><use href="/public/sprite/icons.svg#Question"></use></svg></div>
        <p class="q-text">${question}</p>
      </div>
      <div class="answer-container">
        <div class="icon"><svg><use href="/public/sprite/icons.svg#Answer"></use></svg></div>
        <div class="qa-text">
          <div class="answer">${answer}</div>
        </div>
      </div>
      <div class="date">${date}</div>
    </div>
    `;
  }
}

customElements.define('table-answer', TableAnswer);
