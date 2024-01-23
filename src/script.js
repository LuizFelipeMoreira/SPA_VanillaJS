document.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.maches('nav a')) {
    return;
  }
  e.preventDefault();
  urlRoutes();
});

const urlRoutes = (event) => {
  event = event || window.event;
};

const urlLocationRender = async () => {};
