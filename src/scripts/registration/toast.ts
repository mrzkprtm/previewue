/**
 * Toast notification system.
 * Lightweight, framework-agnostic, and accessible.
 */

export function showToast(
  message: string,
  type: "error" | "success" = "error",
  timeout = 4500
) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  const accent = document.createElement("div");
  accent.className = "toast-accent";

  const body = document.createElement("div");
  body.className = "toast-body";

  const label = document.createElement("div");
  label.className = "toast-label";
  label.textContent = type === "error" ? "Perhatian" : "Berhasil";

  const msg = document.createElement("div");
  msg.className = "msg";
  msg.textContent = message.replace(/^[❌⚠✅🎉]\s*/, "");

  body.appendChild(label);
  body.appendChild(msg);

  const close = document.createElement("button");
  close.className = "close";
  close.type = "button";
  close.setAttribute("aria-label", "Close notification");
  close.innerHTML = "×";
  close.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 240);
  });

  toast.appendChild(accent);
  toast.appendChild(body);
  toast.appendChild(close);
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 260);
  }, timeout);
}
