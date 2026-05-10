import React from 'react'
import googleReviewImage from '../assets/googlereview.png'

const StatsStrip = () => {
  return (
    <section className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-7 md:px-8">
        <div className="grid grid-cols-2 gap-y-5 md:grid-cols-5 md:items-center">
          <div className="text-center md:border-r md:border-slate-200">
            <p className="text-4xl font-extrabold text-slate-900 leading-none">300+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Hospitals</p>
          </div>

          <div className="text-center md:border-r md:border-slate-200">
            <p className="text-4xl font-extrabold text-slate-900 leading-none">7000+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Doctors</p>
          </div>

          <div className="text-center md:border-r md:border-slate-200">
            <p className="text-4xl font-extrabold text-slate-900 leading-none">20+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Countries</p>
          </div>

          <div className="text-center md:border-r md:border-slate-200">
            <p className="text-[10px] font-semibold uppercase text-slate-500">Rated</p>
            <div className="mt-1 flex items-end justify-center gap-1.5">
              <span className="text-2xl font-black text-slate-900 leading-none">4.6</span>
              <span className="text-[11px] text-slate-500">out of 5</span>
            </div>
            <img src={googleReviewImage} alt="Google Reviews" className="mx-auto mt-1 h-4 w-auto" />
          </div>

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase text-slate-500">Trustpilot</p>
            <div className="mt-1 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className="text-emerald-500 text-sm leading-none">★</span>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-slate-500">TrustScore 4.6</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsStrip
