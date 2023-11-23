const date = new Date();
const today = () => {
  console.log(date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate(), + '日');
};
today();