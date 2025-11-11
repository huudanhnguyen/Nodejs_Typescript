// --- Handle User Detail Modal ---
document.addEventListener("DOMContentLoaded", () => {
  const userModal = document.getElementById("userDetailModal");

  if (userModal) {
    userModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const name = button.getAttribute("data-name");
      const email = button.getAttribute("data-email");
      const address = button.getAttribute("data-address");

      document.getElementById("modalName").textContent = name;
      document.getElementById("modalEmail").textContent = email;
      document.getElementById("modalAddress").textContent = address;
    });
  }

  // --- Auto Dismiss Alert ---
  const alert = document.getElementById("autoDismissAlert");
  if (alert) {
    setTimeout(() => {
      const bsAlert = new bootstrap.Alert(alert);
      bsAlert.close();
    }, 2000);
  }
});
