/**
 * DogRandom — app.js
 *
 * Fetches 20 random dog images from the Dog CEO API and renders
 * them in a responsive gallery. Supports refresh and error handling.
 *
 * API: https://dog.ceo/api/breeds/image/random/20
 */

const API_URL = "https://dog.ceo/api/breeds/image/random/20";

/* ---- DOM refs -------------------------------------------- */
const galleryEl    = document.getElementById("gallery");
const loadingEl    = document.getElementById("loadingState");
const errorEl      = document.getElementById("errorState");
const errorMsgEl   = document.getElementById("errorMessage");
const refreshBtn   = document.getElementById("refreshBtn");
const retryBtn     = document.getElementById("retryBtn");

/* ---- State helpers --------------------------------------- */
function showLoading() {
  loadingEl.classList.remove("hidden");
  errorEl.classList.add("hidden");
  galleryEl.classList.add("hidden");
  galleryEl.innerHTML = "";
  refreshBtn.disabled = true;
  refreshBtn.textContent = "Fetching…";
}

function showError(message) {
  loadingEl.classList.add("hidden");
  galleryEl.classList.add("hidden");
  errorMsgEl.textContent = message;
  errorEl.classList.remove("hidden");
  refreshBtn.disabled = false;
  refreshBtn.textContent = "Fetch New Dogs";
}

function showGallery() {
  loadingEl.classList.add("hidden");
  errorEl.classList.add("hidden");
  galleryEl.classList.remove("hidden");
  refreshBtn.disabled = false;
  refreshBtn.textContent = "Fetch New Dogs";
}

/* ---- Breed extraction ------------------------------------ */
/**
 * Extracts a human-readable breed name from a Dog CEO image URL.
 * URL format: https://images.dog.ceo/breeds/<breed>[-<sub>]/<file>.jpg
 *
 * @param {string} url
 * @returns {string}
 */
function breedFromUrl(url) {
  try {
    const parts = new URL(url).pathname.split("/");
    // pathname: /breeds/<breed-segment>/<file>
    const segment = parts[2] ?? "unknown";
    // Segment may be "hound-basset" → "basset hound"
    const [main, sub] = segment.split("-");
    return sub ? `${sub} ${main}` : main;
  } catch {
    return "unknown";
  }
}

/* ---- Card builder ---------------------------------------- */
/**
 * Creates a single dog card element.
 *
 * @param {string} imageUrl
 * @param {number} index   — used to stagger the entry animation delay
 * @returns {HTMLElement}
 */
function createCard(imageUrl, index) {
  const breed = breedFromUrl(imageUrl);

  const card = document.createElement("article");
  card.className = "dog-card";
  // Stagger animation: each card appears ~30 ms after the previous one
  card.style.animationDelay = `${index * 30}ms`;

  const wrapper = document.createElement("div");
  wrapper.className = "dog-card__image-wrapper";

  const img = document.createElement("img");
  img.className = "dog-card__img";
  img.alt = `Random ${breed} dog`;
  img.loading = "lazy";
  img.decoding = "async";

  // Remove skeleton shimmer once image is fully loaded
  img.addEventListener("load", () => {
    img.classList.add("loaded");
  });

  // Soft fallback if a specific image fails to load
  img.addEventListener("error", () => {
    wrapper.style.background = "var(--clr-primary-light)";
    img.alt = "Image unavailable";
    img.style.objectFit = "contain";
    img.style.padding = "1rem";
    img.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='50%25' x='50%25' dominant-baseline='middle' text-anchor='middle' font-size='40'%3E%F0%9F%90%BE%3C/text%3E%3C/svg%3E";
  });

  // Set src after event listeners are attached
  img.src = imageUrl;

  const info = document.createElement("div");
  info.className = "dog-card__info";

  const breedEl = document.createElement("span");
  breedEl.className = "dog-card__breed";
  breedEl.textContent = breed;

  const badge = document.createElement("span");
  badge.className = "dog-card__badge";
  badge.textContent = "dog";
  badge.setAttribute("aria-hidden", "true");

  wrapper.appendChild(img);
  info.appendChild(breedEl);
  info.appendChild(badge);
  card.appendChild(wrapper);
  card.appendChild(info);

  return card;
}

/* ---- Main fetch ------------------------------------------ */
async function fetchDogs() {
  showLoading();

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}.`);
    }

    const data = await response.json();

    if (data.status !== "success" || !Array.isArray(data.message)) {
      throw new Error("Unexpected API response format.");
    }

    const images = data.message; // array of 20 image URLs

    if (images.length === 0) {
      throw new Error("The API returned no images. Please try again.");
    }

    // Build and append all cards
    const fragment = document.createDocumentFragment();
    images.forEach((url, i) => {
      fragment.appendChild(createCard(url, i));
    });
    galleryEl.appendChild(fragment);

    showGallery();
  } catch (err) {
    console.error("[DogRandom] Fetch failed:", err);

    const isNetworkError =
      err instanceof TypeError && err.message.toLowerCase().includes("fetch");

    showError(
      isNetworkError
        ? "Could not reach the Dog CEO API. Check your internet connection and try again."
        : err.message || "An unexpected error occurred. Please try again."
    );
  }
}

/* ---- Event listeners ------------------------------------- */
refreshBtn.addEventListener("click", fetchDogs);
retryBtn.addEventListener("click", fetchDogs);

/* ---- Initial load ---------------------------------------- */
fetchDogs();
