function renderHeader() {
  const heading = document.createElement("h1");
  heading.textContent = "Neringa G";
  heading.style.textAlign = "center";
  heading.style.backgroundColor = "red";

  document.body.append(heading);
}

export default renderHeader;
