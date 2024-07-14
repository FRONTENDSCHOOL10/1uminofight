class TableTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['title', 'author', 'date', 'isAwait', 'isSecret'];
  }

  render() {
    const title = this.getAttribute('title');
    const author = this.getAttribute('author');
    const date = this.getAttribute('date');
    const isAwait = this.getAttribute('isAwait');
    const isSecret = this.getAttribute('isSecret');
    let displayTitle = title;
    let titleStyle = 'color: black';
    let awaitStatus = '답변대기';
    let awaitStyle = 'color: gray';
    let lockIcon = '';

    const newAuthor =
      author.length === 3
        ? author[0] + '*' + author[2]
        : author[0] + '**' + author[3];

    if (isSecret === '0') {
      displayTitle = '비밀글입니다.';
      titleStyle = 'color: gray;';
      lockIcon = `
        <svg class="lock-icon" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_61_3096)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.043 12.575C11.0425 12.6432 11.0151 12.7084 10.9668 12.7565C10.9185 12.8046 10.8532 12.8317 10.785 12.832H1.214C1.14583 12.8317 1.08051 12.8046 1.03221 12.7565C0.983908 12.7084 0.956526 12.6432 0.956 12.575V5.42C0.956 5.278 1.073 5.162 1.214 5.162H10.784C10.928 5.162 11.044 5.278 11.044 5.42V12.575H11.043ZM3.685 3.237C3.68579 2.63238 3.9264 2.05276 4.35403 1.62532C4.78165 1.19788 5.36138 0.957529 5.966 0.957C6.5707 0.957265 7.15058 1.19753 7.57826 1.62503C8.00595 2.05253 8.24647 2.6323 8.247 3.237V4.205H3.685V3.237ZM10.785 4.205H9.205V3.237C9.20394 2.3783 8.86215 1.55512 8.25467 0.948206C7.6472 0.341294 6.8237 0.000264295 5.965 0C5.10708 0.00132358 4.28472 0.342852 3.67826 0.949678C3.07181 1.5565 2.73079 2.37908 2.73 3.237V4.205H1.214C0.544 4.205 0 4.75 0 5.42V12.575C0 13.244 0.545 13.789 1.214 13.789H10.784C11.455 13.789 12 13.244 12 12.575V5.42C12 4.75 11.455 4.205 10.785 4.205Z" fill="#B5B5B5" stroke="#B5B5B5" stroke-width="1"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.19995C5 8.54295 5.184 8.83195 5.448 9.01195V10.342H6.551V9.01195C6.68673 8.92384 6.79868 8.80368 6.87698 8.66207C6.95529 8.52046 6.99754 8.36175 7 8.19995C7 7.93473 6.89464 7.68038 6.70711 7.49284C6.51957 7.30531 6.26522 7.19995 6 7.19995C5.73478 7.19995 5.48043 7.30531 5.29289 7.49284C5.10536 7.68038 5 7.93473 5 8.19995Z" fill="#B5B5B5" stroke="#B5B5B5" stroke-width="1"/>
  </g>
  <defs>
    <clipPath id="clip0_61_3096">
      <rect width="12" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;
    }
    if (isAwait === '0') {
      awaitStatus = '답변완료';
      awaitStyle = 'color: #5F0080';
    }

    this.shadowRoot.innerHTML = `
      <style>
        .Table-Title {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 1050px;
          height: 58px;
          padding: 10px 0;
          border-bottom: 1px solid #ccc;
          border-top: 1px solid #ccc;
          gap: 0;
          position: relative;
        }
        .title {
          font-size: 16px;
          font-weight: bold;
          flex-grow: 1;
          padding-right: 16px;
          ${titleStyle}
        }
        .author, .date, .await {
          font-size: 16px;
          font-weight: bold;
          color: #666;
          white-space: nowrap;
          margin-right: 16px;
        }
        .author {
          flex-shrink: 0;
        }
        .date {
          flex-shrink: 0;
        }
        .await {
          flex-shrink: 0;
          ${awaitStyle}
        }
      </style>
      <div class="Table-Title">
        <h2 class="title">${displayTitle} ${lockIcon}</h2>
        <p class="author">${newAuthor}</p>
        <p class="date">${date}</p>
        <p class="await">${awaitStatus}</p>
      </div>
    `;
  }
}

customElements.define('table-title', TableTitle);
