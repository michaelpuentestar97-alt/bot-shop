const themeToggle = document.querySelector("[data-theme-toggle]");

if (!(themeToggle instanceof HTMLButtonElement)) {
  throw new Error("No se encontró el control para cambiar el tema.");
}

const themeLabel = themeToggle.querySelector(".theme-label");

if (!themeLabel) {
  throw new Error("No se encontró la etiqueta del control de tema.");
}

function updateThemeControl(theme) {
  const isNight = theme === "night";
  themeToggle.setAttribute("aria-pressed", String(isNight));
  themeToggle.setAttribute(
    "aria-label",
    isNight ? "Cambiar a modo diurno" : "Cambiar a modo nocturno",
  );
  themeLabel.textContent = isNight ? "Modo diurno" : "Modo nocturno";
}

updateThemeControl(document.documentElement.dataset.theme);

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "night" ? "day" : "night";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("shopybot-theme", nextTheme);
  updateThemeControl(nextTheme);
});
