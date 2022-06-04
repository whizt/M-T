const loading = document.querySelector('.loading');
const content = document.querySelector('.content');
setTimeout(() => {
  loading.style.opacity = "0";
  content.style.opacity = "1";
  loading.style.zIndex = "-1";
}, 1000)