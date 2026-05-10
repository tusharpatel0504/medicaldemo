import React from 'react'

const Policy = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28">
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Luxora respects your privacy and is committed to protecting your personal information.
          This page explains how we collect, use, and safeguard your data when you use our services.
        </p>
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Information We Collect</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Contact details, consultation preferences, and service interactions needed to support your medical travel journey.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">How We Use Data</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              To coordinate consultations, improve user experience, and provide support tailored to your needs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Data Protection</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              We implement reasonable security safeguards to protect personal data from unauthorized access.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Policy