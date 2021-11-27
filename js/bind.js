const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const carList = ['bmw'];

  const root = $('#root');
  const input = $('#input');
  const submit = $('#submit');

  return {
    add(car) {
      carList.push(car);
    },
    remove(index) {
      carList.splice(index, 1);
    },
    render() {
      const html = carList
        .map(
          (item, idx) => `
            <li>
            ${item}
            <span data-index='${idx}' class='delete' style='cursor:pointer; color: red;' >X</span>
            </li>
          `,
        )
        .join('');

      root.innerHTML = html;
    },
    handleAdd() {
      const car = input.value;
      if (!car) return;

      this.add(car);
      this.render();

      input.value = '';
      input.focus();
    },
    handleDelete(e) {
      const delBtn = e.target.closest('.delete');
      if (!delBtn) return;

      const idx = delBtn.dataset.index;
      this.remove(idx);
      this.render();
    },
    init() {
      submit.onclick = this.handleAdd.bind(this);

      input.onkeydown = (e) => {
        if (e.keyCode === 13) {
          this.handleAdd();
        }
      };

      root.onclick = this.handleDelete.bind(this);

      this.render();
    },
  };
})();

app.init();
