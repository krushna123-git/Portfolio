export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-8">
        Contact
      </h2>

      <div className="space-y-4 text-lg">
        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/kumbhare-krushna-bi"
            target="_blank"
            className="text-blue-400 ml-2"
          >
            Connect
          </a>
        </p>

        <p>
          GitHub:
          <a
            href="https://github.com/krushna123-git"
            target="_blank"
            className="text-blue-400 ml-2"
          >
            View Profile
          </a>
        </p>

        <p>
          Email: krushnakumbhare.dev@gmail.com
        </p>
      </div>
    </section>
  );
}