import Image from "next/image";

function Nav() {
  return (
    <header className="shrink-0 bg-cream py-3 md:py-[13px]">
      <nav className="flex items-center justify-center px-5 py-2 md:py-3">
        <div className="flex max-w-[1400px] flex-1 items-center justify-center gap-10 md:justify-between">
          {/* Left links — hidden on mobile */}
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Copium
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Rejects
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Therapy
            </a>
          </div>

          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/assets/logo.png"
              alt="WHY C?"
              width={80}
              height={30}
              className="md:h-[38px] md:w-[100px]"
              unoptimized
            />
          </a>

          {/* Right links — hidden on mobile */}
          <div className="hidden flex-1 items-center gap-8 md:flex">
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Rejectors
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Excuses
            </a>
            <a href="#" className="rounded-md px-3 py-2 font-sans text-sm tracking-[0.4px] text-ink">
              Startup Graveyard
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-5 md:gap-10 md:px-4">
      <div className="flex flex-col items-center gap-3 md:gap-[47px]">
        {/* Heading */}
        <h1 className="text-center font-serif text-[36px] font-light leading-[1.1] text-ink sm:text-[60px] md:text-[84px]">
          Only for
          <br />
          top <em className="font-medium">1% rejected</em>
        </h1>

        {/* Quote */}
        <blockquote className="flex max-w-full flex-col gap-2 px-2 md:w-[420px] md:gap-3 md:px-0">
          <p className="font-serif text-sm leading-[1.6] text-ink md:text-lg">
            <span>[1]</span>{" "}
            <em>
              &ldquo;A formidable reject is one who seems like they&rsquo;ll
              ship anyway, regardless of whatever rejection emails are in the
              way.
            </em>
          </p>
          <cite className="block pr-2 text-right font-serif text-xs not-italic leading-[1.5] text-ink md:text-base">
            <em>— Claude</em>
          </cite>
        </blockquote>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-4 sm:gap-5">
        <button
          data-tally-open="A7qdpz"
          data-tally-layout="modal"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          data-tally-form-events-forwarding="1"
          className="flex h-10 cursor-pointer items-center justify-center rounded-full bg-black px-5 font-serif text-base italic leading-[1.12] tracking-[-0.6px] text-[#f5f5ed] md:h-[46px] md:px-4 md:text-xl"
        >
          I will Watch
        </button>
        <a
          href="#"
          className="font-sans text-base leading-[1.12] tracking-[-0.6px] text-black md:text-xl"
        >
          I will Pitch
        </a>
      </div>
    </section>
  );
}

function PoweredBy() {
  return (
    <div className="flex shrink-0 items-center justify-center gap-3 pb-5 pt-3 md:gap-[19px] md:pb-16 md:pt-8">
      <span className="font-serif text-sm leading-[1.6] text-black md:text-lg">
        Powered by
      </span>
      <div className="flex items-center gap-3 md:gap-5">
        <Image
          src="/assets/inner-circle-logo.svg"
          alt="Inner Circle"
          width={60}
          height={16}
          className="md:h-[21px] md:w-[81px]"
        />
        <Image
          src="/assets/aiweekends-logo.svg"
          alt="AI Weekends"
          width={35}
          height={19}
          className="md:h-[25px] md:w-[47px]"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-cream">
      <Nav />
      <Hero />
      <PoweredBy />
    </div>
  );
}
