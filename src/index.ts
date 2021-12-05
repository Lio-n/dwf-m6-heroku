(() => {
  const boton = document.querySelector(".boton");
  boton.addEventListener("click", () => {
    history.pushState({}, "", "/una-url-especial");
  });
})();
