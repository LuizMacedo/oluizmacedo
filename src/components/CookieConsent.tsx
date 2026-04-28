"use client";

import { useState } from "react";

function getStoredConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem("cookie-consent");
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(() => getStoredConsent() === null);

  function handleConsent(consent: "granted" | "denied") {
    localStorage.setItem("cookie-consent", consent);
    setVisible(false);

    if (consent === "denied" && typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface/95 backdrop-blur-md p-5 md:p-6 shadow-xl">
        <p className="text-sm text-muted leading-relaxed">
          Este site usa cookies do Google Analytics para entender como você
          navega e melhorar a experiência.{" "}
          <a
            href="/politica-de-privacidade"
            className="text-accent underline underline-offset-2 hover:text-accent-light"
          >
            Política de Privacidade
          </a>
        </p>
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => handleConsent("granted")}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-background hover:bg-accent-light transition-colors cursor-pointer"
          >
            Aceitar
          </button>
          <button
            onClick={() => handleConsent("denied")}
            className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-muted hover:text-foreground hover:border-accent/30 transition-colors cursor-pointer"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
