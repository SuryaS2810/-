
const giftStage = document.getElementById("giftStage");
const giftButton = document.getElementById("giftButton");
const envelopeStage = document.getElementById("envelopeStage");
const envelopeButton = document.getElementById("envelopeButton");
const letterCard = document.getElementById("letterCard");
const proposalButton = document.getElementById("proposalButton");
const proposalModal = document.getElementById("proposalModal");
const yesButton = document.getElementById("yesButton");
const response = document.getElementById("response");
const closeModal = document.getElementById("closeModal");

let giftOpened = false;
let letterOpened = false;

giftButton.addEventListener("click", () => {
  if (giftOpened) return;
  giftOpened = true;
  giftStage.classList.add("opening");
  giftButton.disabled = true;

  setTimeout(() => {
    giftStage.classList.add("hidden");
    envelopeStage.classList.remove("hidden");
    envelopeStage.scrollIntoView({ behavior: "smooth" });
  }, 850);
});

envelopeButton.addEventListener("click", () => {
  if (letterOpened) return;
  letterOpened = true;
  envelopeStage.classList.add("opening");
  envelopeButton.disabled = true;

  setTimeout(() => {
    envelopeStage.classList.add("hidden");
    letterCard.classList.remove("hidden");
    letterCard.scrollIntoView({ behavior: "smooth" });
  }, 850);
});

proposalButton.addEventListener("click", () => {
  proposalModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

function closeProposal() {
  proposalModal.classList.add("hidden");
  document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeProposal);

yesButton.addEventListener("click", () => {
  response.classList.remove("hidden");
  yesButton.textContent = "A FOREVER FULL OF LOVE 💙";
  launchHearts();
});

proposalModal.addEventListener("click", (event) => {
  if (event.target === proposalModal) closeProposal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProposal();
});

function launchHearts() {
  const symbols = ["💙", "💖", "✨", "🩵"];

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[i % symbols.length];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.zIndex = "100";
    heart.style.fontSize = "24px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 2.5s ease-out";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = "translateY(-100vh)";
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 2600);
  }
}
