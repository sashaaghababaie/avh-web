"use client";

import { useInView } from "@/hooks/useInView";

const LogoSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  return (
    <section
      ref={sectionRef}
      id="logo"
      className="py-12 sm:py-16 lg:py-20 bg-white relative h-screen"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/AVH Logo.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      {/* Title and Description Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-2 md:gap-4">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-8 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          AVH Story
        </h2>
        <div
          className={`text-left text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto px-4 flex flex-col gap-2 md:gap-4 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          <p className="leading-relaxed">
            The story of the{" "}
            <strong>“Aviation Experience and Interaction Center”</strong> began
            with a gap. <br />
          </p>
          <p className="leading-relaxed">
            The absence of a place that could bring together aviation
            enthusiasts, professionals, and even curious newcomers. For years,
            Iran’s aviation community only had the chance to meet at scattered
            events or informal gatherings. While those meetings were warm and
            inspiring, they could not satisfy the community’s need to learn,
            experience, and grow. This need sparked the creation of a dynamic
            center for conversation, learning, and hands-on experience. A place
            where pilots, technicians, air traffic controllers, cabin crew, and
            every interested individual can interact, draw inspiration from one
            another, and gain a clearer understanding of the value of diverse
            roles within the industry. <br />
          </p>
          <p className="leading-relaxed">
            Here, interaction becomes culture, experience becomes knowledge, and
            a friendly hangout transforms into a meaningful cultural and
            economic platform. A place where the future of aviation in Iran can
            take flight from these very conversations and collaborations.
          </p>
          {/* A place to connect, socialize, and experience the world of aviation */}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
