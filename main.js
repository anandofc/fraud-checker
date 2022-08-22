let searchable = [
 '01408099068 (প্রতারক ক্রেতা)',
'01712794425 (প্রতারক ক্রেতা)',
'01816189889 (প্রতারক বিক্রেতা)',
'01750145048 (প্রতারক ক্রেতা)',
'01320840435 (প্রতারক ক্রেতা)',
'01962591356 (প্রতারক বিক্রেতা)',
'01711781078 (প্রতারক ক্রেতা)',
'01823255374 (প্রতারক ক্রেতা)',
'01932832485 (প্রতারক ক্রেতা)',
'01861502344 (প্রতারক ক্রেতা)',
'01785915084 (প্রতারক ক্রেতা)',
'01873236071 (প্রতারক ক্রেতা)',
'01737555476 (প্রতারক ক্রেতা)',
'01856076466 (প্রতারক ক্রেতা)',
'01633326572 (প্রতারক ক্রেতা)',
'01823305292 (প্রতারক ক্রেতা)',
'01871318394  (প্রতারক ক্রেতা)',
'01742525116 (প্রতারক ক্রেতা)',
'01715470393 (প্রতারক ক্রেতা)',
'01968279422 (প্রতারক ক্রেতা)',
'01615675837 (প্রতারক ক্রেতা)',
'01737788189 (প্রতারক ক্রেতা)',
'01619102033 (প্রতারক ক্রেতা)',
'01856229797 (প্রতারক ক্রেতা)',
'01855055416 (প্রতারক ক্রেতা)',
'01786529694 (প্রতারক ক্রেতা)',
'01970855687 (প্রতারক ক্রেতা)',
'01774324475 (প্রতারক ক্রেতা)',
'01600236427 (প্রতারক ক্রেতা)',
'01752638284 (প্রতারক ক্রেতা)',
'01849405738 (প্রতারক ক্রেতা)',
'01711036107 (প্রতারক ক্রেতা)',
'01715470393 (প্রতারক ক্রেতা)',
'01764968788 (প্রতারক ক্রেতা)',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
