import React from 'react'

const plans = [
  {
    title: 'Surgery Only',
    price: 'FREE',
    features: [
      'Includes surgery',
      "Doctors' appointment and all necessary scans & tests",
      'Concierge Service',
      'Mind-blowing 5-star travel package',
      'End-to-end facilitation (VIP service)'
    ],
    popular: false,
  },
  {
    title: 'Lux Package',
    price: '$1500',
    features: [
      'Includes surgery + flight',
      'Concierge Service',
      'Mind-blowing 5-star travel package',
      'End-to-end facilitation (VIP service)',
      "Doctors' appointment and all necessary scans & tests",
      'Premium post-surgery recovery accommodations'
    ],
    popular: true,
  },
  {
    title: 'Surgery + Travel',
    price: '$1200',
    features: [
      'Includes Surgery + Vacation',
      'Mind-blowing 5-star travel package',
      "Doctors' appointment and all necessary scans & tests",
      'End-to-end facilitation (VIP service)'
    ],
    popular: false,
  },
]

const PricingCard = ({ plan, highlighted }) => (
  <div className={`rounded-2xl p-6 shadow-lg ${highlighted ? 'bg-[#2bbcd4] text-white border-4 border-[#00a6b5]' : 'bg-white'}`}>
    <div className="flex items-center justify-between">
      <h3 className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
      {plan.popular && !highlighted && (
        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">Most Popular</span>
      )}
    </div>

    <p className={`mt-4 text-3xl font-extrabold ${highlighted ? 'text-white' : 'text-[#00a6b5]'}`}>{plan.price}</p>

    <ul className={`mt-6 space-y-2 ${highlighted ? 'text-white/95' : 'text-slate-600'}`}>
      {plan.features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={`mt-1 ${highlighted ? 'text-white' : 'text-[#00a6b5]'}`}>✓</span>
          <span className="text-sm">{f}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6">
      <button className={`w-full py-3 rounded-full font-semibold ${highlighted ? 'bg-white text-[#00a6b5]' : 'bg-slate-900 text-white'}`}>
        Book Now
      </button>
    </div>
  </div>
)

const PricingSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Your Body. Your Goals. Your Plan.</h2>
          <p className="text-sm text-slate-600 mt-2">Choose from carefully crafted packages to support your transformation.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div key={plan.title} className={`${idx === 1 ? 'transform -translate-y-4 md:translate-y-0' : ''}`}>
              <PricingCard plan={plan} highlighted={idx === 1} />
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-slate-400 mt-6">Please Note: Surgery estimate and cost are directly billed and charged as per the hospitals best rates for Luxora patients.</p>
      </div>
    </section>
  )
}

export default PricingSection
