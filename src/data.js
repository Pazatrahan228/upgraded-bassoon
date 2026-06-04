export const doctors = [
  ["dr-ava", "Dr. Ava Laurent", "Cosmetic Dentist", "AL"],
  ["dr-noah", "Dr. Noah Sinclair", "Orthodontist", "NS"],
  ["dr-maya", "Dr. Maya Petrova", "Prosthodontist", "MP"],
  ["dr-elliot", "Dr. Elliot Rose", "Periodontist", "ER"],
  ["dr-sophia", "Dr. Sophia Kim", "DSD Clinical Lead", "SK"],
].map(([id, name, role, avatar]) => ({
  id,
  name,
  role,
  avatar,
  email: `${name.split(" ")[1].toLowerCase()}@freshvibes.dental`,
}));

export const metrics = [
  [
    "Facial symmetry",
    92,
    "Excellent",
    "Facial thirds and commissure balance are harmonious for presentation planning.",
    "Your smile sits naturally within your facial proportions.",
    "Maintain facial guides during restorative mockup.",
  ],
  [
    "Dental midline",
    78,
    "Good",
    "Subtle right deviation relative to the facial reference line.",
    "The center of the smile is close to ideal with a small shift that can be refined.",
    "Review aligner staging or restorative contouring.",
  ],
  [
    "Smile curve",
    84,
    "Good",
    "Incisal curve follows the lower lip with mild flattening near laterals.",
    "The smile shape is attractive and can be made slightly more youthful.",
    "Add gentle incisal length to laterals in wax-up.",
  ],
  [
    "Tooth proportion",
    70,
    "Needs correction",
    "Central-to-lateral visual width relationship can improve toward golden proportion.",
    "A few teeth can be reshaped visually so the smile looks more balanced.",
    "Use proportional guide during bonding/veneer mockup.",
  ],
  [
    "Gingival display",
    68,
    "Needs correction",
    "Gingival scallop is uneven around laterals with moderate high-smile display.",
    "The gum line can be refined for a cleaner tooth frame.",
    "Consider conservative contouring after periodontal review.",
  ],
  [
    "Incisal edge",
    81,
    "Good",
    "Edge position is presentable with minor central incisor silhouette asymmetry.",
    "The front edge already looks close to the proposed plan.",
    "Refine edge embrasures during final polish.",
  ],
  [
    "Lip support",
    88,
    "Excellent",
    "Lip support appears stable; additive design should remain conservative.",
    "The design should support your lips naturally without looking bulky.",
    "Keep restorative thickness minimal.",
  ],
  [
    "Buccal corridor",
    74,
    "Good",
    "Corridor is slightly broad posteriorly, suggesting optional arch form enhancement.",
    "The sides of the smile can look a little fuller if desired.",
    "Evaluate aligner expansion and cosmetic widening.",
  ],
  [
    "Occlusal plane",
    62,
    "Needs correction",
    "Plane cant is visible against facial horizontal reference; verify with retracted series.",
    "One side of the bite line may appear slightly higher in photos.",
    "Confirm clinically before changing restorative plan.",
  ],
  [
    "Golden ratio",
    76,
    "Good",
    "Anterior width display approximates target proportions.",
    "Your proposed smile can be tuned for a more elegant tooth-size rhythm.",
    "Apply ratio grid to planned preview.",
  ],
].map(
  (
    [
      name,
      score,
      status,
      doctorExplanation,
      patientExplanation,
      recommendedCorrection,
    ],
    index,
  ) => ({
    id: `m${index}`,
    name,
    score,
    status,
    doctorExplanation,
    patientExplanation,
    recommendedCorrection,
  }),
);

const photoTitles = [
  "Full face resting",
  "Full face smile",
  "Close-up smile",
  "Retracted frontal",
  "Retracted left",
  "Retracted right",
  "Upper occlusal",
  "Lower occlusal",
  "Profile left",
  "Profile right",
];
const photoDescriptions = [
  "Neutral expression",
  "Natural maximum smile",
  "Canine-to-canine close-up",
  "Full arch with retractors",
  "Left occlusion",
  "Right occlusion",
  "Mirror upper arch",
  "Mirror lower arch",
  "Left profile",
  "Right profile",
];
const photoStatuses = [
  "Approved",
  "Approved",
  "Uploaded",
  "Approved",
  "Uploaded",
  "Retake needed",
  "Missing",
  "Missing",
  "Uploaded",
  "Uploaded",
];
const photoChecklist = [
  "Frankfort plane level",
  "Eyes open, shoulders relaxed",
  "No motion blur",
  "Teeth lightly together",
  "Molar relationship visible",
  "Avoid cheek shadow",
  "Posterior teeth included",
  "Tongue retracted",
  "Natural head posture",
  "Natural head posture",
];

export const photos = photoTitles.map((title, index) => ({
  id: `p${index}`,
  title,
  description: photoDescriptions[index],
  status: photoStatuses[index],
  checklist: photoChecklist[index],
}));

const treatmentTitles = [
  "Consultation",
  "Photo protocol",
  "Whitening",
  "Aligner correction",
  "Composite bonding",
  "Veneers",
  "Gingival contouring",
  "Final polishing",
  "Follow-up",
];
const treatmentDescriptions = [
  "Review goals and aesthetic risks.",
  "Capture calibrated DSD records.",
  "Pre-restorative shade optimization.",
  "Minor alignment and midline refinement.",
  "Trial additive mockup.",
  "Final ceramic restorations.",
  "Conservative gum-line harmonization.",
  "Texture, gloss, and occlusion refinement.",
  "Post-treatment review.",
];
const treatmentDoctorNotes = [
  "Confirm shade expectations.",
  "Repeat right lateral and occlusals.",
  "Two-week stabilization.",
  "Short cosmetic series if accepted.",
  "Use silicone index.",
  "Keep enamel-guided.",
  "Periodontal clearance required.",
  "Photograph final result.",
  "Deliver guard if indicated.",
];
const treatmentPatientNotes = [
  "Align smile vision before care.",
  "Photos help fit the design to your face.",
  "Brightens the base shade.",
  "Small movements reduce preparation.",
  "Reversible preview.",
  "Durable final smile design.",
  "Refines the frame around teeth.",
  "Finishing for comfort and shine.",
  "Protects the new smile.",
];
const treatmentDurations = [
  "45 min",
  "30 min",
  "2 weeks",
  "10–14 weeks",
  "1 day",
  "3–4 weeks",
  "1 visit",
  "45 min",
  "2 weeks after",
];
const treatmentVisits = [1, 1, 2, 4, 1, 3, 1, 1, 1];
const treatmentPrices = [
  "$250",
  "$180",
  "$650",
  "$3,200",
  "$1,800",
  "$9,600",
  "$900",
  "Included",
  "Included",
];
const treatmentStatuses = [
  "Completed",
  "In progress",
  "Planned",
  "Planned",
  "Planned",
  "Planned",
  "Planned",
  "Planned",
  "Planned",
];

export const treatment = treatmentTitles.map((title, index) => ({
  id: `s${index}`,
  title,
  description: treatmentDescriptions[index],
  doctorNote: treatmentDoctorNotes[index],
  patientNote: treatmentPatientNotes[index],
  duration: treatmentDurations[index],
  visits: treatmentVisits[index],
  price: treatmentPrices[index],
  status: treatmentStatuses[index],
}));

const names = [
  "Isabella Moreno",
  "Aria Volkov",
  "Camille Hart",
  "Sofia Bennett",
  "Elena Rossi",
  "Mila Novak",
  "Lena Whitaker",
  "Amelia Stone",
];
const statuses = [
  "Active",
  "Review",
  "Patient approval",
  "Active",
  "Active",
  "Review",
  "Completed",
  "Completed",
];
const phases = [
  "Analysis complete",
  "Doctor review",
  "Patient presentation",
  "Photo collection",
  "Wax-up planning",
  "Treatment planning",
  "Approved",
  "Final report",
];
const treatmentTypes = [
  "Veneers + whitening",
  "Aligners + bonding",
  "Smile makeover",
  "Photo protocol",
  "Veneers",
  "Gingival contour",
  "Composite bonding",
  "Final presentation",
];

export const cases = names.map((name, index) => ({
  id: `case-${index + 1}`,
  patient: {
    id: `FV-${2400 + index}`,
    name,
    age: [34, 29, 41, 37, 26, 45, 32, 39][index],
    gender: "Female",
    contact: `+1 (212) 555-0${index}28`,
    avatar: name
      .split(" ")
      .map((part) => part[0])
      .join(""),
    membership: index % 2 ? "Signature" : "Concierge",
  },
  doctor: doctors[index % doctors.length],
  status: statuses[index],
  phase: phases[index],
  treatmentType: treatmentTypes[index],
  progress: [86, 62, 74, 35, 48, 58, 100, 96][index],
  createdAt: [
    "2026-05-21",
    "2026-05-19",
    "2026-05-15",
    "2026-05-12",
    "2026-05-09",
    "2026-05-06",
    "2026-04-28",
    "2026-04-20",
  ][index],
  revenue: [
    "$12,400",
    "$4,850",
    "$9,200",
    "$1,100",
    "$14,800",
    "$3,600",
    "$5,700",
    "$10,900",
  ][index],
  priority: index === 0 ? "Concierge" : index % 3 === 0 ? "High" : "Standard",
  summary:
    "Premium facially driven DSD case with photo protocol tracking, mock analysis, patient presentation, and report readiness.",
  metrics: metrics.map((metric) => ({
    ...metric,
    score: Math.max(
      52,
      Math.min(98, metric.score - index * 2 + (index % 3) * 3),
    ),
  })),
  photos: photos.map((photo) => ({
    ...photo,
    status: index > 5 ? "Approved" : photo.status,
  })),
  treatment: treatment.map((step, stepIndex) => ({
    ...step,
    status: index > 5 && stepIndex < 8 ? "Completed" : step.status,
  })),
  timeline: [
    "Photo protocol started",
    "Smile analysis completed",
    "Treatment proposed",
    "Patient approval",
  ].map((title, timelineIndex) => ({
    title,
    date: ["May 21, 2026", "May 22, 2026", "May 25, 2026", "May 29, 2026"][
      timelineIndex
    ],
    state:
      timelineIndex === 0
        ? "done"
        : timelineIndex === 1 && index < 6
          ? "current"
          : index > 5
            ? "done"
            : "upcoming",
    description: [
      "Initial facial and intraoral images uploaded.",
      "Mock DSD metrics generated for doctor review.",
      "Plan and presentation prepared.",
      "Awaiting digital approval and signature.",
    ][timelineIndex],
  })),
  exports: [
    { type: "DSD report PDF", status: index > 1 ? "Ready" : "Draft" },
    { type: "Patient presentation", status: "Draft" },
  ],
  notes: [
    "Mock content supports planning conversations and is not a diagnosis.",
    "Verify all DSD suggestions clinically before treatment.",
    "Patient prefers natural translucency and soft incisal texture.",
  ],
}));

export const getCase = (id) =>
  cases.find((clinicalCase) => clinicalCase.id === id) || cases[0];
