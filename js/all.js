import axios from 'https://cdn.skypack.dev/axios';

// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';
const filter = document.querySelector('.filter');
const table = document.querySelector('.table-content');
let showData = [];
let category = '';

let data;
axios.get(url).then(function (res) {
    data = res.data.filter((a) => a.作物名稱);
    // TODO: 之後拆成 renderData 函式
    renderData(data);
});

filter.addEventListener('click', filterCategory);

function filterCategory (e) {
    if (e.target.nodeName === 'BUTTON') {
        category = e.target.dataset.category;
        showData = data.filter((i) => {
            return i.種類代碼 === category;
        });
        // TODO: 之後拆成 renderData 函式
        renderData(showData);
    }
}

function renderData (data) {
    let str = '';
    data.forEach((b) => {
        // TODO: 改成 ES6 的 Template Literals (字面字串符)
        const content = `<tr>
        <td>${b.作物名稱}</td>
        <td>${b.市場名稱}</td>
        <td>${b.上價}</td>
        <td>${b.中價}</td>
        <td>${b.下價}</td>
        <td>${b.平均價}</td>
        <td>${b.交易量}</td>
      <tr>`;

        str += content;
    });
    table.innerHTML = str;
}
