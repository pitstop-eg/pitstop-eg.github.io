const form = document.querySelector(".brief-form");

if (form) {
  const boxes = [...form.querySelectorAll('input[name="lane"]')];
  const syncRequired = () => { const any = boxes.some(b => b.checked); boxes.forEach(b => b.required = !any); };
  boxes.forEach(b => b.addEventListener("change", syncRequired));
  syncRequired();

  const status = form.querySelector(".form-status");
  const button = form.querySelector('[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    try {
      const data = Object.fromEntries(new FormData(form));
      data.lane = boxes.filter((b) => b.checked).map((b) => b.value).join(", ");
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      syncRequired();
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
