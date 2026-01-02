const API_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api"
    : "https://exam-api-sand.vercel.app/api";
function showToast(message) {

  // Set message
  toast.textContent = message;

  // Show toast
  toast.style.display = "block";

  // Hide after 1 second
  setTimeout(() => {
    toast.style.display = "none";
    toast.textContent = "";
  }, 1000);
}
  let toast = document.getElementById("app-toast");

  // Create toast element if it doesn't exist
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
//    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.setAttribute("aria-atomic", "true");

    // Basic styling
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#333";
    toast.style.color = "#fff";
    toast.style.padding = "10px 16px";
    toast.style.borderRadius = "6px";
    toast.style.display = "none";
    toast.style.zIndex = "1000";
    toast.style.maxWidth = "90%";
    toast.style.textAlign = "center";

    document.body.appendChild(toast);
  }
