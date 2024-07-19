class TableSell extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title') || '';
    const author = this.getAttribute('author') || '';
    const date = this.getAttribute('date') || '';
    const isAwait = this.getAttribute('isAwait') || '0';
    const isSecret = this.getAttribute('isSecret') || '1';
    const question = this.getAttribute('question') || '';
    const answer = this.getAttribute('answer') || '';
    const answerDate = this.getAttribute('answerDate') || '';

    this.shadowRoot.innerHTML = `
            <style>
                .answer {
                    display: none;
                }
            </style>
            <div class="container">
                <table-title 
                    title="${title}" 
                    author="${author}" 
                    date="${date}" 
                    isAwait="${isAwait}" 
                    isSecret="${isSecret}">
                </table-title>
                <table-answer 
                    class="answer"
                    question="${question}" 
                    answer="${answer}" 
                    date="${answerDate}">
                </table-answer>
            </div>
        `;
  }

  connectedCallback() {
    $(this.shadowRoot.querySelector('table-title')).on('click', () => {
      $(this.shadowRoot.querySelector('.answer')).toggle();
    });
  }
}

customElements.define('table-sell', TableSell);
