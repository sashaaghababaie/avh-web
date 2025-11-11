"use client";

import { useInView } from "@/hooks/useInView";

export default function MembershipSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  const plans = [
    {
      name: "Basic",
      price: "$50",
      period: "/month",
      features: [
        "Access to basic facilities",
        "Community events",
        "Newsletter subscription",
      ],
    },
    {
      name: "Premium",
      price: "$100",
      period: "/month",
      features: [
        "All basic features",
        "Priority lounge access",
        "Conference room bookings",
        "Discounts on services",
      ],
    },
    {
      name: "Elite",
      price: "$400",
      period: "/month",
      features: [
        "All premium features",
        "24/7 dedicated support",
        "Private hangar access",
        "Exclusive events",
        "Personal concierge",
      ],
    },
    {
      name: "Enterprise",
      price: "$600",
      period: "/month",
      features: [
        "All elite features",
        "Custom solutions",
        "Dedicated account manager",
        "Volume discounts",
        "Tailored packages",
      ],
    },
  ];

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-4 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          Membership Plans
        </h2>
        <p
          className={`text-lg sm:text-xl text-neutral-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.2s" : "0s" }}
        >
          Choose the perfect membership plan that suits your aviation needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-px bg-linear-to-b from-brand to-neutral-200 rounded-tr-4xl rounded-bl-4xl rounded-lg hover:shadow-lg transition-all flex flex-col h-full animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{
                transitionDelay: sectionInView ? `${0.3 + index * 0.1}s` : "0s",
              }}
            >
              <div className="bg-linear-to-b from-gray-100 to-gray-50 p-10 rounded-tr-4xl rounded-bl-4xl rounded-lg h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-black">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-neutral-600 ml-1">{plan.period}</span>
                  )}
                  <div className="border-b border-neutral-300 mt-5 w-full" />
                </div>
                <ul className="space-y-3 mb-8 grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-brand mr-2 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-brand hover:bg-brand/80 cursor-pointer text-white font-semibold py-3 px-6 rounded-tr-3xl rounded-bl-3xl transition-colors mt-auto">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
