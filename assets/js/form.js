const form = document.querySelector(".brief-form");

if (form) {
  const select = form.elements.lane;
  const other = select.querySelector("[data-other]");
  select.length = 0;
  select.add(other);
  for (const heading of document.querySelectorAll(".lane h3")) {
    const lane = heading.textContent.trim();
    select.add(new Option(lane, lane));
  }

  const status = form.querySelector(".form-status");
  const button = form.querySelector('[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      show("success", status.dataset.success);
    } catch (error) {
      show("error", status.dataset.error);
    } finally {
      button.disabled = false;
    }

    function show(state, text) {
      status.dataset.state = state;
      status.hidden = false;
      status.querySelector(".form-status-text").textContent = text;
    }
  });
}
