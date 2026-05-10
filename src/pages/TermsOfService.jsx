import React from 'react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28">
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          These terms govern your use of Luxora services and website. By using this website,
          you agree to comply with these terms.
        </p>
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Service Scope</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Luxora provides information and coordination support for medical travel and consultations.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">User Responsibility</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Users are responsible for providing accurate information and reviewing provider-specific terms.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Limitations</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Medical decisions remain between patients and licensed healthcare professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
