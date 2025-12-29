const DEFAULT_SELECTOR = "[data-reveal], [data-reveal-item]";

function toMs(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  const n = Number(value);
  return Number.isFinite(n) ? `${n}ms` : fallback;
}

function applyTimingVars(el) {
  const delay = el.getAttribute("data-reveal-delay");
  const duration = el.getAttribute("data-reveal-duration");
  const ease = el.getAttribute("data-reveal-ease");

  el.style.setProperty("--reveal-delay", toMs(delay, "0ms"));
  el.style.setProperty("--reveal-duration", toMs(duration, "800ms"));
  if (ease) el.style.setProperty("--reveal-ease", ease);
}

function applyStagger(container) {
  const stagger = Number(container.getAttribute("data-reveal-stagger"));
  if (!Number.isFinite(stagger) || stagger <= 0) return;

  const items = Array.from(container.querySelectorAll("[data-reveal-item]"));
  items.forEach((el, idx) => {
    // Preserve explicit delay if provided
    if (el.hasAttribute("data-reveal-delay")) return;
    el.style.setProperty("--reveal-delay", `${idx * stagger}ms`);
  });
}

/**
 * Initializes IntersectionObserver-based reveal animations.
 * Call again after route changes if new DOM is rendered.
 */
export function initScrollReveal({
  selector = DEFAULT_SELECTOR,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.12,
} = {}) {
  if (typeof window === "undefined" || typeof document === "undefined") return () => {};

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const elements = Array.from(document.querySelectorAll(selector));

  // If reduced motion is requested, skip observers and just show content.
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("is-revealed"));
    return () => {};
  }

  // Apply timing variables and stagger containers
  elements.forEach((el) => applyTimingVars(el));
  Array.from(document.querySelectorAll("[data-reveal-stagger]")).forEach((c) => applyStagger(c));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-revealed");
        }
      });
    },
    { root: null, rootMargin, threshold }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}


