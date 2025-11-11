export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-start justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/AVH Facade-Hero.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-5 animate-slide-up-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Aviation Hub
          {/* <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white ml-2">
            (AVH)
          </span> */}
        </h1>
        <p
          className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto font-normal animate-slide-up-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Your premier destination for aviation excellence. Experience
          world-class facilities, premium services, and a community dedicated to
          the art of flight.
        </p>
      </div>
    </section>
  );
}
