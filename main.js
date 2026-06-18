const siteHeader = document.querySelector(".site-header");
const internalNavLinks = document.querySelectorAll('.nav a[href^="#"]');

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function getHeaderOffset() {
  if (!siteHeader) {
    return 0;
  }

  const headerRect = siteHeader.getBoundingClientRect();
  const headerStyle = window.getComputedStyle(siteHeader);
  const headerIsSticky = headerStyle.position === "sticky";

  return headerIsSticky ? Math.ceil(Math.max(headerRect.height, headerRect.bottom)) : 16;
}

function scrollToSection(hash, behavior = "smooth") {
  if (!hash || hash === "#") {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));

  if (!target) {
    return;
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior,
  });
}

internalNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (!hash || !hash.startsWith("#")) {
      return;
    }

    event.preventDefault();
    history.pushState(null, "", hash);
    scrollToSection(hash);
  });
});

window.addEventListener("hashchange", () => {
  scrollToSection(window.location.hash);
});

window.addEventListener("load", () => {
  if (!window.location.hash) {
    return;
  }

  scrollToSection(window.location.hash, "auto");

  window.setTimeout(() => {
    scrollToSection(window.location.hash, "auto");
  }, 250);
});

if (window.location.hash) {
  window.requestAnimationFrame(() => {
    scrollToSection(window.location.hash, "auto");
  });
}
