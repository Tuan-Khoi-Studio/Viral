const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const container = document.querySelector(".container");

let noClickCount = 0;

noButton.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount <= 5) {
    // Nút "No" nhỏ dần trong 5 lần bấm
    noButton.style.transform = `scale(${1 - noClickCount * 0.15})`; // Giảm kích thước
  } else {
    // Ẩn nút "No" và thay đổi câu hỏi thành "=))"
    noButton.style.display = "none";
    const areYouSure = container.querySelector("h2"); // Tìm câu hỏi hiện tại
    if (areYouSure) {
      areYouSure.textContent = "=))"; // Thay đổi nội dung
    } else {
      const areYouSure = document.createElement("h2");
      areYouSure.textContent = "=))";
      container.appendChild(areYouSure);
    }
  }

  yesButton.style.transform = `scale(${1 + noClickCount * 0.1})`; // Tăng kích thước "Yes"

  // Di chuyển nút "No" đến vị trí ngẫu nhiên không trùng với "Yes"
  const yesRect = yesButton.getBoundingClientRect();
  let newX, newY;
  do {
    const maxX = container.offsetWidth - noButton.offsetWidth;
    const maxY = container.offsetHeight - noButton.offsetHeight;
    newX = Math.floor(Math.random() * maxX);
    newY = Math.floor(Math.random() * maxY);
  } while (
    newX < yesRect.right &&
    newX + noButton.offsetWidth > yesRect.left &&
    newY < yesRect.bottom &&
    newY + noButton.offsetHeight > yesRect.top
  );

  noButton.style.left = newX + "px";
  noButton.style.top = newY + "px";
});

container.addEventListener("mousemove", (event) => {
  // ... (Phần mã di chuyển nút khi chuột di chuyển giữ nguyên) ...
});

document.getElementById("yes").addEventListener("click", () => {
  window.location.href = "yes.html";
});
