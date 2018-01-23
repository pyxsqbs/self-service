import language from './Languages/index';

const L = language.QueryEvent.QueryEventTable;

export function pagination() {
  let pagination = document.getElementsByClassName('ant-pagination-options-quick-jumper')[0];
  if (pagination) {
    pagination = pagination.innerHTML;
    pagination = pagination.replace('跳至', L.pagination_goTo);
    pagination = pagination.replace('页', L.pagination_page);
    document.getElementsByClassName('ant-pagination-options-quick-jumper')[0].innerHTML = pagination;
  }
}
