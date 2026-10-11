
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.select();

    const copied = document.execCommand("copy");
    textArea.remove();

    showToast(
      copied ? successMessage : "تعذر النسخ. حاول مرة أخرى."
    );
  }
}

document.getElementById("copyPromptButton").addEventListener("click", () => {
  const prompt = document.getElementById("promptText").textContent.trim();
  copyText(prompt, "تم نسخ الـ Prompt بنجاح!");
});

document.getElementById("copyStoryButton").addEventListener("click", () => {
  const story = document.getElementById("storyText").innerText.trim();
  copyText(story, "تم نسخ القصة بنجاح!");
});

document.getElementById("readButton").addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
