"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

/** Posts to FormSubmit's AJAX endpoint — no backend needed. First submission triggers a one-time
 *  activation email to the inbox; after that, messages arrive directly. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `ragba.dev — ${data.name}`, _template: "table" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-faint focus:border-amber focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-muted">Name <span className="text-amber">*</span></span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-muted">Email <span className="text-amber">*</span></span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block text-ink-muted">Project <span className="text-amber">*</span></span>
        <textarea
          name="message"
          required
          rows={6}
          className={field}
          placeholder="What are you building, what's the timeline, and what does success look like?"
        />
      </label>
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-amber px-6 text-sm font-medium text-on-amber transition-colors hover:bg-amber-hover disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {status === "sending" && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-amber"><Check className="size-4" /> Sent. I&apos;ll reply within a day.</span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-red-400">
              <AlertCircle className="size-4" /> Couldn&apos;t send. Email me at{" "}
              <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
