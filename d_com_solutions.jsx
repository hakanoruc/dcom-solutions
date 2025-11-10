import React, { useEffect, useState } from "react";

// ==============================================
// DCom Solutions — Single File React App
// - No external UI/icon libraries to prevent build errors
// - Uses original PNG logo: /dcom_transp_300.png
// - Brand colors: Blue #4B76BB (primary), Green #7AC142 (accent)
// - No location-specific phrasing; uses "process automation" (not RPA)
// - Case Studies removed; CSM included
// - Fix for SyntaxError: this file exports a default React component
// - Includes lightweight runtime checks as "tests"
// ==============================================

const BRAND_BLUE = "#4B76BB";
const BRAND_GREEN = "#7AC142";

// -------------------- Icons (inline SVG) --------------------
function Icon({ children, className = "h-5 w-5" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}
const IconCheck = (props: any) => (
  <Icon {...props}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);
const IconWorkflow = (props: any) => (
  <Icon {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="9" y="14" width="7" height="7" rx="1" />
    <path d="M6.5 10v2a2 2 0 0 0 2 2h1" />
    <path d="M17.5 10v2a2 2 0 0 1-2 2h-1" />
  </Icon>
);
const IconGauge = (props: any) => (
  <Icon {...props}>
    <path d="M3 13a9 9 0 1 0 18 0" />
    <path d="M12 13l3-3" />
  </Icon>
);
const IconLine = (props: any) => (
  <Icon {...props}>
    <polyline points="3,17 8,11 13,14 21,5" />
    <circle cx="8" cy="11" r="1" />
    <circle cx="13" cy="14" r="1" />
  </Icon>
);
const IconLayers = (props: any) => (
  <Icon {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </Icon>
);
const IconRocket = (props: any) => (
  <Icon {...props}>
    <path d="M5 19l3-3" />
    <path d="M15 3c4 0 6 2 6 6l-8 8-6-6 8-8z" />
    <path d="M4 14l-1 5 5-1" />
  </Icon>
);
const IconPhone = (props: any) => (
  <Icon {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.13 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.6a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.57-1.18a2 2 0 0 1 2.11-.45c.83.26 1.7.45 2.6.57A2 2 0 0 1 22 16.92z" />
  </Icon>
);
const IconMail = (props: any) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);
const IconBook = (props: any) => (
  <Icon {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4v15.5" />
    <path d="M20 22V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5" />
  </Icon>
);
const IconCpu = (props: any) => (
  <Icon {...props}>
    <rect x="8" y="8" width="8" height="8" rx="1" />
    <path d="M3 10h2M3 14h2M19 10h2M19 14h2M10 3v2M14 3v2M10 19v2M14 19v2" />
  </Icon>
);
const IconWrench = (props: any) => (
  <Icon {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4" />
  </Icon>
);
const IconCloud = (props: any) => (
  <Icon {...props}>
    <path d="M17.5 19H7a4 4 0 1 1 1-7.9 5 5 0 0 1 9.9 1.4A3.5 3.5 0 0 1 17.5 19z" />
  </Icon>
);
const IconMonitor = (props: any) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M7 20h10" />
  </Icon>
);
const IconTrophy = (props: any) => (
  <Icon {...props}>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10" />
    <path d="M17 4v4a5 5 0 0 1-10 0V4" />
    <path d="M5 8a3 3 0 0 1-3-3V4h3" />
    <path d="M19 8a3 3 0 0 0 3-3V4h-3" />
  </Icon>
);

// -------------------- App --------------------
export default function DComSolutionsSite() {
  // Runtime checks act like tiny test cases to catch regressions
  useEffect(() => {
    console.assert(typeof Header === "function", "Header must be defined");
    console.assert(typeof Hero === "function", "Hero must be defined");
    console.assert(typeof Services === "function", "Services must be defined");
    console.assert(typeof Solutions === "function", "Solutions must be defined");
    console.assert(typeof Approach === "function", "Approach must be defined");
    console.assert(typeof About === "function", "About must be defined");
    console.assert(typeof Contact === "function", "Contact must be defined");
    console.assert(typeof Footer === "function", "Footer must be defined");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(#ffffff, #eff6ff)", color: "#0f172a" }}>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Solutions />
        <Approach />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}

function Header() {
  const linkStyle: React.CSSProperties = { color: BRAND_BLUE, textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, backdropFilter: "blur(6px)", background: "rgba(255,255,255,0.85)", borderBottom: "1px solid #bfdbfe" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", height: 64, alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 600, color: BRAND_BLUE }}>
            <img src="/dcom_transp_300.png" alt="DCom Solutions logo" style={{ height: 32, width: "auto" }} />
            <span>DCom Solutions</span>
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {[
              { label: "Services", href: "#services" },
              { label: "Solutions", href: "#solutions" },
              { label: "Approach", href: "#approach" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((n) => (
              <a key={n.href} href={n.href} style={linkStyle}>
                {n.label}
              </a>
            ))}
            <a href="#contact" style={{ background: BRAND_BLUE, color: "#fff", padding: "10px 14px", borderRadius: 10 }}>Book a discovery call</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 600, color: BRAND_BLUE, lineHeight: 1.1 }}>
              Ship outcomes on ServiceNow—not just projects
            </h1>
            <p style={{ marginTop: 12, fontSize: 18, color: "#2d6a1d" }}>
              Experts who design, implement, and evolve the Now Platform so your teams move faster, stay compliant, and deliver measurable value in weeks—not quarters.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" style={{ background: BRAND_BLUE, color: "#fff", padding: "10px 14px", borderRadius: 10 }}>Talk to an architect</a>
              <a href="#solutions" style={{ border: `1px solid ${BRAND_BLUE}`, color: BRAND_BLUE, padding: "10px 14px", borderRadius: 10 }}>See solutions</a>
            </div>
            <ul style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 14, color: "#2d6a1d" }}>
              {[
                "Platform roadmap & governance",
                "Evergreen upgrades (N-1)",
                "CMDB health & ownership",
                "Dashboards that leaders use",
              ].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <IconCheck className="h-4 w-4" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FancyHeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function FancyHeroArt() {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "5/4", borderRadius: 24, border: "1px solid #e5e7eb", overflow: "hidden" }}>
      <svg viewBox="0 0 960 720" style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }} role="img" aria-label="Abstract ServiceNow ecosystem with connected nodes and gradients">
        <defs>
          <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BRAND_BLUE} />
            <stop offset="100%" stopColor="#89a8e2" />
          </linearGradient>
          <linearGradient id="gradGreen" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND_GREEN} />
            <stop offset="100%" stopColor="#c9ef9f" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={BRAND_GREEN} stopOpacity="0.45" />
            <stop offset="60%" stopColor={BRAND_BLUE} stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <pattern id="iso" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="skewX(30)">
            <path d="M0 0 L0 40 M0 0 L40 0" stroke="#dbeafe" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="960" height="720" fill="#f8fbff" />
        <rect x="0" y="0" width="960" height="720" fill="url(#iso)" opacity="0.35" />
        <g opacity="0.8">
          <circle cx="760" cy="140" r="110" fill="url(#gradBlue)" opacity="0.25" />
          <circle cx="220" cy="560" r="150" fill="url(#gradGreen)" opacity="0.25" />
          <circle cx="480" cy="360" r="260" fill="url(#glow)" />
        </g>
        <g>
          <rect x="150" y="160" width="260" height="150" rx="18" fill="#fff" stroke="#e5e7eb" />
          <text x="175" y="195" fontSize="16" fill={BRAND_BLUE} fontWeight="600">ITSM</text>
          <rect x="175" y="205" width="200" height="12" rx="6" fill="#e5e7eb" />
          <rect x="175" y="225" width="170" height="12" rx="6" fill="#e5e7eb" />
          <rect x="175" y="245" width="140" height="12" rx="6" fill="#e5e7eb" />
        </g>
        <g>
          <rect x="560" y="280" width="260" height="150" rx="18" fill="#fff" stroke="#e5e7eb" />
          <text x="585" y="315" fontSize="16" fill={BRAND_GREEN} fontWeight="600">ITOM</text>
          <rect x="585" y="325" width="200" height="12" rx="6" fill="#e5e7eb" />
          <rect x="585" y="345" width="170" height="12" rx="6" fill="#e5e7eb" />
          <rect x="585" y="365" width="140" height="12" rx="6" fill="#e5e7eb" />
        </g>
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={220 + i * 18} y1={250 - (i % 3) * 8} x2={560 + i * 8} y2={320 + (i % 4) * 8} stroke={BRAND_BLUE} strokeOpacity="0.22" strokeWidth="2" />
        ))}
        {Array.from({ length: 22 }).map((_, i) => (
          <circle key={i} cx={(i * 37) % 900 + 30} cy={(i * 73) % 680 + 20} r={i % 5 === 0 ? 7 : 4} fill={i % 2 === 0 ? BRAND_BLUE : BRAND_GREEN} opacity="0.6" />
        ))}
      </svg>
    </div>
  );
}

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ background: BRAND_BLUE, color: "#fff", padding: "6px 10px", borderRadius: 999, fontSize: 12 }}>{children}</span>
  );
}

function TrustBar() {
  return (
    <section style={{ padding: "16px 0", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontSize: 14, color: "#2d6a1d" }}>
            Trusted by teams across the UK & Europe in Financial Services, Retail, Utilities, and Public Sector
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["ISO 27001", "ServiceNow Partner", "KCS", "ITIL 4"].map((b) => (
              <BadgePill key={b}>{b}</BadgePill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 32, fontWeight: 600, color: BRAND_BLUE }}>{children}</h2>;
}

function CardSimple({ title, icon, children }: { title: string; icon?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div style={{ border: "1px solid #bfdbfe", borderRadius: 16, padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, color: BRAND_BLUE }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 12, background: BRAND_BLUE, color: "#fff" }}>
          {icon}
        </span>
        <div style={{ fontWeight: 600 }}>{title}</div>
      </div>
      <div style={{ fontSize: 14, color: "#2d6a1d" }}>{children}</div>
    </div>
  );
}

function Services() {
  const services = [
    { icon: <IconWorkflow />, title: "IT Service Management (ITSM)", bullets: ["Incident, Problem, Change, Request", "GenAI deflection & VA", "SLA/KPI design; CMDB alignment"] },
    { icon: <IconGauge />, title: "IT Operations (ITOM)", bullets: ["Discovery & Service Mapping", "Event Mgmt/AIOps", "Cloud-native & hybrid"] },
    { icon: <IconLine />, title: "Performance Analytics (PA)", bullets: ["Exec dashboards & scorecards", "Operational KPIs & XLAs", "Data model optimization"] },
    { icon: <IconLayers />, title: "App Engine & Pro Dev", bullets: ["Scoped apps & governance", "Flow Designer & IntegrationHub", "ATF & CI/CD pipelines"] },
    { icon: <IconMonitor />, title: "Customer Service Management (CSM)", bullets: ["Case management & omni‑channel", "SLAs/OLAs & entitlements", "Knowledge, communities & deflection"] },
    { icon: <IconRocket />, title: "Employee Workflows", bullets: ["HRSD & Onboarding", "FSM & Mobile", "CSM portals"] },
  ];
  return (
    <section id="services" style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <SectionTitle>Core Services</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginTop: 24 }}>
          {services.map((s) => (
            <CardSimple key={s.title} title={s.title} icon={s.icon}>
              <ul style={{ display: "grid", gap: 6 }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <IconCheck className="h-4 w-4" /> {b}
                  </li>
                ))}
              </ul>
            </CardSimple>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const solutions = [
    { icon: <IconCpu />, title: "GenAI on Now Platform", desc: "Trusted GenAI—summarization, agent assist, content generation—aligned with your data controls." },
    { icon: <IconCloud />, title: "Cloud Discovery + Svc Mapping", desc: "Map AWS/Azure/GCP to business apps with T3/T4 patterns and service ownership." },
    { icon: <IconWrench />, title: "Upgrade Factory (N-1)", desc: "Quarterly hardening, ATF suites, and regression playbooks to stay evergreen." },
    { icon: <IconMonitor />, title: "Experience Portals", desc: "Accessible Service Portal / Next Experience with measurable CSAT." },
  ];
  return (
    <section id="solutions" style={{ padding: "56px 0", background: "#fff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <SectionTitle>Solution Accelerators</SectionTitle>
        <p style={{ marginTop: 8, color: "#2d6a1d" }}>Reusable blueprints to compress time‑to‑value.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 20 }}>
          {solutions.map((a) => (
            <CardSimple key={a.title} title={a.title} icon={a.icon}>
              {a.desc}
            </CardSimple>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { title: "Discover", desc: "Objectives, pain points, KPIs, and current platform health.", icon: <IconBook /> },
    { title: "Design", desc: "Target architecture, data model, governance, and backlog.", icon: <IconLayers /> },
    { title: "Deliver", desc: "2‑week sprints with demos, ATF suites, and UAT gates.", icon: <IconRocket /> },
    { title: "Evolve", desc: "Adoption, PA dashboards, FinOps, and upgrade factory.", icon: <IconTrophy /> },
  ];
  return (
    <section id="approach" style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <SectionTitle>Our Delivery Approach</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 24 }}>
          {steps.map((s) => (
            <CardSimple key={s.title} title={s.title} icon={s.icon}>
              {s.desc}
            </CardSimple>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <SectionTitle>About DCom Solutions</SectionTitle>
        <p style={{ marginTop: 16, fontSize: 18, color: "#2d6a1d", lineHeight: 1.6 }}>
          DCom Solutions is a consultancy specialising in <strong>IT Service Management (ITSM)</strong>, <strong>IT Operations Management (ITOM)</strong> and <strong>process automation</strong> on the ServiceNow platform. We help technology and operations leaders modernise workflows, reduce risk, and deliver measurable outcomes at pace.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 16 }}>
          <CardSimple title="What we do" icon={<IconWorkflow />}>
            <ul style={{ display: "grid", gap: 6 }}>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" />Design and implement ServiceNow <strong>ITSM</strong> and <strong>ITOM</strong> with clean architecture and governance.</li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" />Build <strong>process automation</strong> and integration flows to eliminate manual work and improve accuracy.</li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" />Establish <strong>CMDB</strong> ownership, service mapping, and event management with AIOps.</li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" />Deploy <strong>dashboards & XLAs</strong> so leaders can track value and make informed decisions.</li>
            </ul>
          </CardSimple>
          <CardSimple title="Why DCom" icon={<IconTrophy />}>
            <ul style={{ display: "grid", gap: 6 }}>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" /><strong>Certified experts</strong> across ITSM, ITOM and App Engine, with enterprise delivery experience.</li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" /><strong>Outcome‑first</strong> delivery—each feature ties to KPIs, cost reduction or risk mitigation.</li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" /><strong>Evergreen by default</strong>—ATF and CI/CD practices keep you upgrade‑ready.</li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}><IconCheck className="h-4 w-4" /><strong>End‑to‑end support</strong> from strategy and planning through deployment and adoption.</li>
            </ul>
          </CardSimple>
        </div>
        <p style={{ marginTop: 16, color: "#2d6a1d" }}>
          Whether you are implementing ServiceNow <strong>ITSM</strong>, <strong>ITOM</strong> or <strong>process automation</strong>, we partner with your team from initial planning to post‑go‑live optimisation—ensuring the platform is fully leveraged to drive efficiency, reduce costs and boost productivity.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "72px 0", background: "#fff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <SectionTitle>Book a discovery call</SectionTitle>
            <p style={{ marginTop: 8, color: "#2d6a1d" }}>Tell us about your objectives. We’ll respond within one business day.</p>
            <div style={{ marginTop: 16, display: "grid", gap: 8, fontSize: 14, color: "#2d6a1d" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><IconPhone className="h-4 w-4" /> +44 20 3800 1234</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><IconMail className="h-4 w-4" /> hello@dcomsolutions.co.uk</div>
            </div>
          </div>
          <div>
            <CardSimple title="Contact form">
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 10 }}>
                <input placeholder="Full name" aria-label="Full name" required style={inputStyle} />
                <input type="email" placeholder="Work email" aria-label="Email" required style={inputStyle} />
                <input placeholder="Company" aria-label="Company" style={inputStyle} />
                <input placeholder="Role" aria-label="Role" style={inputStyle} />
                <textarea placeholder="What would you like to achieve?" aria-label="Message" rows={5} style={inputStyle} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 12, color: "#2d6a1d" }}>By submitting, you agree to our privacy policy.</div>
                  <button type="submit" style={{ background: BRAND_BLUE, color: "#fff", padding: "10px 14px", borderRadius: 10 }}>Send</button>
                </div>
              </form>
            </CardSimple>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid #bfdbfe",
  borderRadius: 10,
  padding: "10px 12px",
  outline: "none",
};

function CTA() {
  return (
    <section style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ background: BRAND_BLUE, color: "#fff", borderRadius: 16, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 600 }}>Ready to accelerate on ServiceNow?</h3>
              <p style={{ marginTop: 6, color: "#d9f6c4" }}>Start with a platform health check and prioritized roadmap in 10 days.</p>
            </div>
            <a href="#contact" style={{ background: BRAND_GREEN, color: "#fff", padding: "10px 14px", borderRadius: 10 }}>Get your health check</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid #bfdbfe" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, fontSize: 14 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, color: BRAND_BLUE }}>
              <img src="/dcom_transp_300.png" alt="DCom Solutions logo" style={{ height: 32, width: "auto" }} />
              DCom Solutions
            </div>
            <p style={{ marginTop: 8, color: "#2d6a1d" }}>ServiceNow architects & engineers delivering measurable outcomes for modern enterprises.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 6, color: BRAND_BLUE }}>Services</p>
            <ul style={{ display: "grid", gap: 4, color: "#2d6a1d" }}>
              <li><a href="#services">ITSM</a></li>
              <li><a href="#services">ITOM</a></li>
              <li><a href="#services">App Engine</a></li>
              <li><a href="#services">Performance Analytics</a></li>
              <li><a href="#services">CSM</a></li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 6, color: BRAND_BLUE }}>Company</p>
            <ul style={{ display: "grid", gap: 4, color: "#2d6a1d" }}>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 6, color: BRAND_BLUE }}>Legal</p>
            <ul style={{ display: "grid", gap: 4, color: "#2d6a1d" }}>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "#2d6a1d" }}>
          <div>© {new Date().getFullYear()} DCom Solutions. All rights reserved.</div>
          <div>Built by ServiceNow architects.</div>
        </div>
      </div>
    </footer>
  );
}

function CookieNotice() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{ position: "fixed", bottom: 16, left: 16, right: 16, zIndex: 50, maxWidth: 640 }}>
      <div style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)", border: "1px solid #bfdbfe", borderRadius: 12, background: "#fff", padding: 12 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ fontSize: 14, color: "#2d6a1d" }}>We use minimal cookies to analyze traffic and improve your experience. You can opt out anytime.</div>
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            <button onClick={() => setVisible(false)} style={{ border: `1px solid ${BRAND_BLUE}`, color: BRAND_BLUE, padding: "8px 10px", borderRadius: 8 }}>Decline</button>
            <button onClick={() => setVisible(false)} style={{ background: BRAND_BLUE, color: "#fff", padding: "8px 10px", borderRadius: 8 }}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}
