export function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading font-semibold mb-4">Get in Touch</h1>
      <p className="text-lg leading-relaxed mb-10 text-muted">
        Have a question, a recipe suggestion, or just want to say hello? Fill in the form
        below and we will get back to you as soon as we can.
      </p>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            className="px-4 py-3 bg-surface border border-border rounded text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className="px-4 py-3 bg-surface border border-border rounded text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Your message..."
            className="px-4 py-3 bg-surface border border-border rounded text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start px-8 py-3 bg-accent text-bg font-medium tracking-wide hover:opacity-80 transition-opacity rounded"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
