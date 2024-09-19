export default function Contact() {
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-4">I’d love to hear from you! Feel free to get in touch for any inquiries or collaboration opportunities.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>
      </main>
    );
  }
  