/**
 * Single source of truth for site content.
 * Everything here is drawn from the EnerBate capability deck.
 * The deck's internal business-case slides (3, 4, 12, 13) are
 * deliberately excluded — they address a partner audience, not a client.
 */

export const company = {
  name: 'EnerBate Solutions Inc.',
  shortName: 'EnerBate',
  tagline: 'Energy modelling and compliance reporting for Canadian building professionals.',
  phone: '236-516-4668',
  phoneHref: 'tel:+12365164668',
  email: 'energy@enerbate.ca',
  turnaround: '5–10 business days',
  address: {
    line1: '723 Grover Ave #415',
    city: 'Coquitlam',
    region: 'BC',
    postalCode: 'V3J 0L9',
    country: 'CA',
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  deliverable: string;
  codes: string[];
};

export const services: Service[] = [
  {
    slug: 'whole-building-energy-modelling',
    title: 'Whole-Building Energy Modelling',
    short: 'Calibrated hourly models for permit and rebate submissions.',
    summary:
      'Multi-zone hourly simulation in eQUEST and HAP, calibrated against measured utility data and reported against the compliance path your project is filing under.',
    intro:
      'Every permit and rebate submission ultimately rests on one thing: a model an authority having jurisdiction will accept. We build that model to the code path your project is filing under, document the assumptions behind it, and hand you a report that a reviewer can follow without a follow-up call.',
    sections: [
      {
        heading: 'Model development',
        body: 'Geometry is built from your drawings rather than approximated from areas, so orientation-driven loads are real rather than averaged.',
        bullets: [
          'eQUEST v3.65 and HAP v6.4 3D geometry',
          'Massing and window-to-wall ratios taken from the architectural set',
          'CWEC 2016 weather files',
          'Multi-zone breakdown by orientation and occupancy type',
        ],
      },
      {
        heading: 'Calibration and validation',
        body: 'For existing buildings the model is tuned against real consumption before any measure is evaluated — an uncalibrated model produces savings numbers nobody should act on.',
        bullets: [
          'Calibrated against 24 months of utility data',
          'Meets ASHRAE Guideline 14 (±1.7%)',
          'Infiltration tuning against observed performance',
          'Separate base case and proposed case runs',
        ],
      },
      {
        heading: 'Reporting outputs',
        body: 'The deliverable is written for the reviewer who has to approve it, not only for the design team.',
        bullets: [
          'Annual energy use by end use, with EUI and TEDI',
          'GHG emissions using the correct provincial electricity and gas factors',
          'Compliance reporting for Step Code, NECB and OBC SB-10',
        ],
      },
    ],
    deliverable: 'Energy model report with calibrated base and proposed cases.',
    codes: ['BC Energy Step Code', 'NECB', 'ASHRAE 90.1', 'OBC SB-10'],
  },
  {
    slug: 'energy-audit-study',
    title: 'Energy Audit Study',
    short: 'ASHRAE-style audits with costed conservation measures.',
    summary:
      'A walkthrough audit, an end-use breakdown grounded in hourly simulation, and conservation measures with the savings, cost and payback figures an owner needs to make a decision.',
    intro:
      'An audit is only useful if the numbers survive scrutiny. We base savings on hourly simulation rather than spreadsheet rules of thumb, and we present measures with the cost and payback assumptions visible so an owner can challenge them.',
    sections: [
      {
        heading: 'Walkthrough and inventory',
        body: 'Condition assessment of the envelope, mechanical, electrical and domestic hot water systems, documented with photographs and nameplate data.',
      },
      {
        heading: 'End-use energy breakdown',
        body: 'Consumption disaggregated across heating, domestic hot water, lighting, fans and plug loads, so effort goes where the energy actually is.',
      },
      {
        heading: 'Energy conservation measures',
        body: 'Each measure carries simulated annual savings, estimated capital cost and simple payback. Interactive effects between measures are modelled rather than summed.',
      },
      {
        heading: 'M&V and O&M plan',
        body: 'Measurement and verification to IPMVP Option C, alongside the low-cost and no-cost operational measures that usually pay back first.',
      },
    ],
    deliverable: 'Energy audit report with ECMs, savings, cost and payback.',
    codes: ['ASHRAE Level II', 'IPMVP Option C'],
  },
  {
    slug: 'csa-f280-heat-loss-and-gain',
    title: 'CSA F-280 Heat Loss & Gain',
    short: 'Room-by-room design loads for correct equipment sizing.',
    summary:
      'Room-by-room design heat loss and heat gain calculations to CSA F-280-12 — the current requirement under both the National Building Code and the BC Building Code.',
    intro:
      'Oversized equipment short-cycles, costs more to install and rarely delivers the comfort it promised. A room-by-room calculation is what stops that happening, and it is what the building official is entitled to ask for.',
    sections: [
      {
        heading: 'Room-by-room loads',
        body: 'Design heat loss and heat gain calculated for every room, not lumped by floor or by zone.',
      },
      {
        heading: 'CSA F-280-12 compliant',
        body: 'Current requirement under the National Building Code and the BC Building Code, prepared to the standard as written.',
      },
      {
        heading: 'Equipment sizing',
        body: 'Right-sized furnaces, heat pumps and ductwork, with the sizing logic documented so the mechanical contractor can work from it directly.',
      },
      {
        heading: 'Report package',
        body: 'Room schedules, stated assumptions and summary sheets, assembled for permit submission.',
      },
    ],
    deliverable: 'F-280 report package with room-by-room design loads.',
    codes: ['CSA F-280-12', 'NBC', 'BCBC'],
  },
  {
    slug: 'summer-overheating-analysis',
    title: 'Summer Overheating Analysis',
    short: 'Passive performance under current and 2050 climate files.',
    summary:
      'Zonal overheating hours modelled against both current weather and 2050 warming scenarios, with a resilience strategy for the zones that fail.',
    intro:
      'Overheating is increasingly the question a reviewer asks after the heating numbers pass. Modelling it against a future climate file, rather than only today\'s, is what separates a building that ages well from one that needs retrofit cooling in fifteen years.',
    sections: [
      {
        heading: 'Future climate files',
        body: 'Both current weather and 2050 warming scenarios are modelled, so the result reflects the building\'s service life rather than only its first summer.',
      },
      {
        heading: 'Zonal overheating hours',
        body: 'Hours above 26 °C reported by zone and by orientation, which identifies exactly which units are exposed.',
      },
      {
        heading: 'Passive performance',
        body: 'Free-running results calculated before mechanical cooling is introduced, so the envelope is assessed on its own merits.',
      },
      {
        heading: 'Resilience strategy',
        body: 'Shading, ventilation and cool-refuge planning targeted at the zones that actually fail, rather than applied building-wide.',
      },
    ],
    deliverable: 'Overheating analysis with zonal hours above 26 °C.',
    codes: ['Current and 2050 climate files'],
  },
  {
    slug: 'compliance-reporting',
    title: 'Compliance Reporting',
    short: 'Permit and rebate packages across provincial code paths.',
    summary:
      'Submission-ready compliance packages for BC Energy Step Code, NECB, OBC SB-10, Toronto Green Standard and CMHC MLI Select, prepared as the builder\'s agent where the programme allows it.',
    intro:
      'Most rebate programmes are best applied for by the energy consultant acting as the builder\'s agent — the forms assume the modelling detail is already in hand. We prepare the compliance package and the application together, so the two agree.',
    sections: [
      {
        heading: 'Code compliance paths',
        body: 'The reference model is built to the path your project is filing under. We confirm which path applies before any modelling starts, because building to the wrong one means starting again.',
        bullets: [
          'BC Energy Step Code, Steps 3 to 5',
          'NECB 2015, 2017 and 2020',
          'OBC SB-10 and SB-12',
          'Toronto Green Standard V4',
          'NBC 9.36 prescriptive and performance paths',
        ],
      },
      {
        heading: 'Rebate and incentive applications',
        body: 'Programme applications prepared alongside the modelling, so figures in the application match figures in the report.',
        bullets: [
          'CleanBC Better Buildings',
          'FortisBC New Home and Commercial New Construction',
          'BC Hydro multi-unit retrofit',
          'Enbridge Savings by Design and Retrofit',
          'CMHC MLI Select and Green Home',
          'Canada Greener Homes Grant',
        ],
      },
    ],
    deliverable: 'Compliance package with permit and rebate submission forms.',
    codes: ['Step Code', 'NECB', 'SB-10', 'TGS V4', 'MLI Select'],
  },
  {
    slug: 'accessibility-reporting',
    title: 'Accessibility Reporting',
    short: 'CSA B651 and Rick Hansen Foundation site evaluations.',
    summary:
      'Site evaluations against CSA B651 and Rick Hansen Foundation criteria, documented with photo evidence, diagrams and scoring.',
    intro:
      'Accessibility reporting sits naturally alongside energy work: the same site visit, the same drawing set, the same reviewer. Where a project needs both, doing them together removes a second mobilisation.',
    sections: [
      {
        heading: 'Site evaluations',
        body: 'Assessed against Rick Hansen Foundation standards and CSA B651, on site rather than from drawings alone.',
      },
      {
        heading: 'Detailed reports',
        body: 'Mobility, visibility and universal design recommendations, prioritised by the barrier each one removes.',
      },
      {
        heading: 'Design team coordination',
        body: 'Direct work with the design team on retrofit solutions, rather than a report handed over and left.',
      },
      {
        heading: 'Documentation',
        body: 'Photo evidence, diagrams and scoring criteria, assembled so a third-party reviewer can follow the finding to its source.',
      },
    ],
    deliverable: 'Accessibility report with photo evidence and scoring.',
    codes: ['CSA B651', 'Rick Hansen Foundation'],
  },
];

export type Region = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  codes: { name: string; note: string }[];
  programmes: string[];
  experience: string;
};

export const regions: Region[] = [
  {
    slug: 'british-columbia',
    name: 'British Columbia',
    short: 'BC Energy Step Code, CleanBC, FortisBC and BC Hydro programmes.',
    intro:
      'Most of our completed work is in British Columbia — Part 3 and Part 9 projects across Kelowna, the Lower Mainland, Vancouver Island and the North Island. Step Code compliance and the utility incentive programmes that sit alongside it are where our modelling volume is deepest.',
    codes: [
      { name: 'BC Energy Step Code', note: 'Steps 3 to 5, Part 3 and Part 9' },
      { name: 'BC Building Code', note: 'Including CSA F-280-12 design loads' },
      { name: 'NECB', note: 'Where the reference path applies' },
    ],
    programmes: [
      'CleanBC Better Buildings',
      'FortisBC New Home Program (Step 4/5)',
      'FortisBC Commercial New Construction',
      'BC Hydro Multi-Unit Retrofit Program',
    ],
    experience:
      'Kelowna, Surrey, Richmond, Vancouver, Burnaby, North Vancouver, Victoria, Lake Country and Port Hardy.',
  },
  {
    slug: 'ontario',
    name: 'Ontario',
    short: 'Toronto Green Standard, OBC SB-10 and Enbridge programmes.',
    intro:
      'Ontario projects are filed under a different set of paths than BC, and the reference model has to be built to the right one from the start. We confirm whether a project is going through SB-10 or NECB, and SB-12 or NBC 9.36, before any modelling begins.',
    codes: [
      { name: 'Toronto Green Standard V4', note: 'TEUI, TEDI and GHGI reporting' },
      { name: 'OBC SB-10', note: 'Mandatory for applicable Part 3 buildings' },
      { name: 'OBC SB-12', note: 'Part 9 residential performance path' },
    ],
    programmes: [
      'Enbridge Savings by Design',
      'Enbridge Retrofit Program',
      'CMHC MLI Select',
      'Net Zero and Net Positive consulting',
    ],
    experience:
      'Design Development Stage Energy Reports, thermal bridging take-offs and BETBG workbooks for City of Toronto submissions.',
  },
  {
    slug: 'quebec',
    name: 'Québec',
    short: 'Part 9 residential modelling volume across Québec centres.',
    intro:
      'Our Québec work is concentrated in Part 9 residential modelling, delivered at volume across several centres. Where a builder is filing repeat house types, the modelling economics improve substantially with scale.',
    codes: [
      { name: 'NBC 9.36', note: 'Prescriptive and performance paths' },
      { name: 'CSA F-280-12', note: 'Room-by-room design loads' },
    ],
    programmes: ['CMHC MLI Select', 'CMHC Green Home', 'Canada Greener Homes Grant'],
    experience: 'Delson, Montréal, Gatineau, Québec City and other centres.',
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  scope: string[];
  blurb: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: 'gwasala-nakwaxdaxw-childcare-centre',
    name: "Gwa'sala-'Nakwaxda'xw Early Childcare Centre",
    location: '183 Ba’as Rd, Tsulquate Reserve, Port Hardy, BC',
    type: 'Part 3 — Institutional',
    scope: ['Whole-building energy modelling', 'Part 3 compliance report'],
    blurb:
      'An institutional Part 3 building on the North Island, modelled and reported for compliance submission.',
    images: [
      { src: '/images/projects/porthardy-model.webp', alt: 'Three-dimensional eQUEST energy model of the childcare centre, shown in plan and in massing view' },
      { src: '/images/projects/porthardy-report.webp', alt: 'Cover of the Property Energy Analysis report prepared for the childcare centre' },
    ],
  },
  {
    slug: '380-east-1st-north-vancouver',
    name: '380 East 1st Street',
    location: 'North Vancouver, BC',
    type: 'Part 3 — Multi-family',
    scope: ['Whole-building energy modelling', 'Step Code compliance'],
    blurb:
      'A multi-family Part 3 building in North Vancouver, modelled for Step Code compliance.',
    images: [
      { src: '/images/projects/northvan-model.webp', alt: 'Three-dimensional eQUEST energy model of the North Vancouver multi-family building' },
    ],
  },
  {
    slug: 'chung-wah-mansion-victoria',
    name: 'Chung Wah Mansion',
    location: '655 Herald Street, Victoria, BC',
    type: 'Existing multi-family — audit and retrofit',
    scope: [
      'Energy audit study',
      'Whole-building energy modelling',
      'Summer overheating analysis',
    ],
    blurb:
      'An existing multi-family building in Victoria carried through the full sequence: audit, calibrated model, and overheating analysis under current and future climate files.',
    images: [
      { src: '/images/projects/victoria-building.webp', alt: 'Street view of Chung Wah Mansion, an existing multi-family building in Victoria' },
      { src: '/images/projects/victoria-report.webp', alt: 'Cover of the energy audit study prepared for Chung Wah Mansion' },
    ],
  },
];

export const differentiators = [
  {
    title: 'Fast turnaround',
    body: `Most standard projects are delivered in ${company.turnaround}, which is usually the difference between a permit cycle met and a permit cycle missed.`,
  },
  {
    title: 'Accuracy that prevents rework',
    body: 'Models built to the code path as written, so a reviewer’s comment is a question rather than a resubmission.',
  },
  {
    title: 'Reasonable pricing',
    body: 'Costed for the size of the project rather than a flat consultancy rate, which makes small Part 9 work viable.',
  },
  {
    title: 'Direct expert contact',
    body: 'You speak to the person building the model, not to an account manager relaying questions.',
  },
  {
    title: 'Regional code knowledge',
    body: 'Step Code in BC, SB-10 and TGS in Ontario, Part 9 volume in Québec — each with its own reference path.',
  },
];

export const projectTypes = [
  { name: 'Custom homes', note: 'Single-family residential' },
  { name: 'Townhouse developments', note: 'Multi-unit connected housing' },
  { name: 'Small multi-unit', note: 'Low-rise apartment buildings' },
  { name: 'Large multifamily', note: 'High-rise residential towers' },
  { name: 'Commercial and institutional', note: 'Offices, retail and public buildings' },
];
