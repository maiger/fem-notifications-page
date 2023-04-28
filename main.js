const markEl = document.querySelector(".topbar__mark-all-read");
const unreadBoxEl = document.querySelector(".topbar__unread");
const unreadEls = document.querySelectorAll(".unread");

updateUnreadCount(unreadEls.length);

markEl.addEventListener("click", () => {
  // Mark as read
  unreadEls.forEach((element) => {
    element.classList.remove("unread");
  });

  // Get unread dots
  const dotEls = document.querySelectorAll(".messages__dot");
  dotEls.forEach((element) => {
    element.classList.add("hidden");
  });

  updateUnreadCount(0);
});

function updateUnreadCount(value) {
  unreadBoxEl.textContent = value;
}
