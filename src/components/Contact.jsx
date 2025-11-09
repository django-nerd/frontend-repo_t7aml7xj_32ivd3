import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      submitted_at: new Date().toISOString()
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ ok: true, msg: 'Thanks! Your message has been received.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message || 'Something went wrong.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-600">Have a project or collaboration in mind? Let's talk.</p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <p className={`mt-4 text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.msg}</p>
          )}
        </div>
      </div>
    </section>
  )
}
