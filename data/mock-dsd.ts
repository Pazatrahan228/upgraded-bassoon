import { DSDCase, DSDMetric, Doctor, Patient, PhotoProtocolItem, TreatmentStep } from '@/types/dsd';

export const doctors: Doctor[] = [
  { id: 'dr-ava', name: 'Dr. Ava Morozova', role: 'Clinical Director', specialty: 'Digital Smile Design', email: 'ava@freshvibes.dental', avatarTone: 'from-[#f3d7b3] to-[#b88a36]' },
  { id: 'dr-noah', name: 'Dr. Noah Kim', role: 'Restorative Dentist', specialty: 'Veneers & bonding', email: 'noah@freshvibes.dental', avatarTone: 'from-[#dce7df] to-[#7e9a83]' },
  { id: 'dr-mila', name: 'Dr. Mila Laurent', role: 'Orthodontic Lead', specialty: 'Aligner planning', email: 'mila@freshvibes.dental', avatarTone: 'from-[#f4dfdc] to-[#c46f64]' },
  { id: 'dr-eli', name: 'Dr. Elias Stone', role: 'Periodontal Advisor', specialty: 'Gingival contouring', email: 'eli@freshvibes.dental', avatarTone: 'from-[#e8e0d2] to-[#81766b]' },
  { id: 'dr-sophia', name: 'Dr. Sophia Vale', role: 'Aesthetic Dentist', specialty: 'Smile makeovers', email: 'sophia@freshvibes.dental', avatarTone: 'from-[#fff3cf] to-[#c9a45c]' }
];

export const patients: Patient[] = [
  { id: 'p-001', name: 'Sofia Bennett', age: 34, gender: 'Female', contact: '+1 (415) 555-0198', avatarTone: 'from-[#f6d7bd] to-[#c9a45c]', goals: 'Natural bright smile with softer incisal edges for photography.' },
  { id: 'p-002', name: 'Daniel Hart', age: 41, gender: 'Male', contact: '+1 (212) 555-0162', avatarTone: 'from-[#d7e4ef] to-[#6f8faa]', goals: 'Professional alignment and broader smile for public speaking.' },
  { id: 'p-003', name: 'Amelia Ross', age: 29, gender: 'Female', contact: '+1 (305) 555-0181', avatarTone: 'from-[#f8dfe8] to-[#c46f64]', goals: 'Minimal-prep veneer evaluation and symmetry refinement.' },
  { id: 'p-004', name: 'Marcus Lee', age: 38, gender: 'Male', contact: '+1 (646) 555-0134', avatarTone: 'from-[#ded9ce] to-[#81766b]', goals: 'Correct midline perception and improve buccal corridor.' },
  { id: 'p-005', name: 'Elena Petrova', age: 45, gender: 'Female', contact: '+1 (310) 555-0109', avatarTone: 'from-[#e9ead8] to-[#7e9a83]', goals: 'Comprehensive smile rejuvenation with staged treatment plan.' }
];

export const analysisMetrics: DSDMetric[] = [
  { id: 'm1', name: 'Facial symmetry', score: 92, status: 'Excellent', doctorExplanation: 'Facial thirds and commissure balance are highly harmonious in frontal smile capture.', patientExplanation: 'Your smile is already well balanced with your face.', recommendedCorrection: 'Maintain facial reference midline and use it as the master planning axis.' },
  { id: 'm2', name: 'Dental midline', score: 78, status: 'Good', doctorExplanation: 'Dental midline is slightly right of facial midline; clinically acceptable but visible in close-up imagery.', patientExplanation: 'The center of the front teeth is a little offset, but it is subtle.', recommendedCorrection: 'Refine with aligner setup or restorative width distribution.' },
  { id: 'm3', name: 'Smile curve', score: 84, status: 'Good', doctorExplanation: 'Incisal curvature follows the lower lip with mild flattening near laterals.', patientExplanation: 'The smile shape is attractive and can be made more youthful.', recommendedCorrection: 'Lengthen lateral incisal edges by 0.4–0.6 mm in the mockup.' },
  { id: 'm4', name: 'Tooth proportion', score: 73, status: 'Needs correction', doctorExplanation: 'Central-to-lateral visible width ratio is below ideal golden proportion guidance.', patientExplanation: 'A few front teeth look slightly narrow compared with the smile frame.', recommendedCorrection: 'Use additive bonding/veneer wax-up to harmonize visible widths.' },
  { id: 'm5', name: 'Gingival display', score: 88, status: 'Good', doctorExplanation: 'Gingival exposure remains within aesthetic range with slight asymmetry at tooth 12.', patientExplanation: 'Gum display is healthy-looking with one area that can be refined.', recommendedCorrection: 'Consider conservative gingival contouring if restorative phase proceeds.' },
  { id: 'm6', name: 'Incisal edge', score: 69, status: 'Needs correction', doctorExplanation: 'Incisal edge plane has mild cant from left canine to right lateral segment.', patientExplanation: 'The biting edge line can be made smoother and more even.', recommendedCorrection: 'Adjust edge position in DSD proposal before final ceramic design.' },
  { id: 'm7', name: 'Lip support', score: 91, status: 'Excellent', doctorExplanation: 'Upper lip support is stable, with favorable vermillion display during full smile.', patientExplanation: 'The planned smile can enhance your teeth without changing lip balance.', recommendedCorrection: 'Avoid over-bulking restorations; preserve natural emergence profile.' },
  { id: 'm8', name: 'Buccal corridor', score: 76, status: 'Good', doctorExplanation: 'Mild dark corridor is present bilaterally, more pronounced on patient right.', patientExplanation: 'The smile could look slightly wider and fuller.', recommendedCorrection: 'Broaden premolar display through alignment and restorative contour planning.' },
  { id: 'm9', name: 'Occlusal plane', score: 64, status: 'Needs correction', doctorExplanation: 'Smile plane shows minor cant relative to interpupillary reference line.', patientExplanation: 'The smile line tilts slightly and can be visually balanced.', recommendedCorrection: 'Verify with retracted photographs and mounted digital model.' },
  { id: 'm10', name: 'Golden ratio', score: 82, status: 'Good', doctorExplanation: 'Anterior tooth display approximates ideal proportion with central dominance preserved.', patientExplanation: 'The front teeth already have a pleasing shape relationship.', recommendedCorrection: 'Fine-tune lateral and canine visual width in final mockup.' }
];

export const photoProtocol: PhotoProtocolItem[] = [
  { id: 'ph1', title: 'Full face resting', angle: 'Portrait / natural head position', status: 'Approved', checklist: 'Eyes level, lips relaxed, neutral background.' },
  { id: 'ph2', title: 'Full face smile', angle: 'Maximum natural smile', status: 'Approved', checklist: 'Capture facial symmetry and lip dynamics.' },
  { id: 'ph3', title: 'Close-up smile', angle: 'Dental smile crop', status: 'Uploaded', checklist: 'Sharp focus from canine to canine.' },
  { id: 'ph4', title: 'Retracted frontal', angle: 'Intraoral frontal', status: 'Approved', checklist: 'Teeth apart, retractors visible, no fogging.' },
  { id: 'ph5', title: 'Retracted left', angle: 'Left buccal', status: 'Uploaded', checklist: 'Show canine and molar relationship.' },
  { id: 'ph6', title: 'Retracted right', angle: 'Right buccal', status: 'Retake needed', checklist: 'Retake for occlusal plane clarity.' },
  { id: 'ph7', title: 'Upper occlusal', angle: 'Mirror occlusal', status: 'Missing', checklist: 'Use mirror, capture complete arch.' },
  { id: 'ph8', title: 'Lower occlusal', angle: 'Mirror occlusal', status: 'Missing', checklist: 'Use mirror, capture complete arch.' },
  { id: 'ph9', title: 'Profile left', angle: 'Left profile', status: 'Uploaded', checklist: 'Natural head position for lip support.' },
  { id: 'ph10', title: 'Profile right', angle: 'Right profile', status: 'Uploaded', checklist: 'Natural head position for facial thirds.' }
];

export const treatmentPlans: TreatmentStep[] = [
  { id: 't1', title: 'Consultation', description: 'Review goals, DSD records, shade expectations, and clinical limitations.', doctorNote: 'Confirm patient priorities before wax-up approval.', patientNote: 'We align the visual goal with a safe clinical plan.', duration: '45 min', visits: 1, price: '$250', status: 'Completed' },
  { id: 't2', title: 'Photo protocol', description: 'Complete facial, intraoral, and occlusal image set for DSD planning.', doctorNote: 'Retake right buccal and occlusal views.', patientNote: 'Photos help us design your smile with your face, not just your teeth.', duration: '30 min', visits: 1, price: '$180', status: 'In progress' },
  { id: 't3', title: 'Whitening', description: 'Pre-restorative whitening to establish final shade baseline.', doctorNote: 'Schedule before shade matching.', patientNote: 'This gives us a brighter foundation before final design.', duration: '2 weeks', visits: 2, price: '$650', status: 'Planned' },
  { id: 't4', title: 'Aligner correction', description: 'Minor alignment refinement to improve midline and arch form.', doctorNote: 'Digital setup should preserve gingival architecture.', patientNote: 'Clear aligners can improve symmetry with minimal intervention.', duration: '10–14 weeks', visits: 4, price: '$3,800', status: 'Planned' },
  { id: 't5', title: 'Composite bonding', description: 'Additive edge and proportion refinement for laterals and canines.', doctorNote: 'Use mockup index for predictable incisal length.', patientNote: 'Bonding reshapes selected teeth conservatively.', duration: '2 hrs', visits: 1, price: '$1,600', status: 'Planned' },
  { id: 't6', title: 'Veneers', description: 'Optional ceramic veneers for long-term shade and proportion control.', doctorNote: 'Discuss minimal-prep versus no-prep after aligner phase.', patientNote: 'Veneers may be considered if you want maximum polish and durability.', duration: '3–4 weeks', visits: 3, price: '$8,500', status: 'Planned' },
  { id: 't7', title: 'Gingival contouring', description: 'Conservative gumline refinement where indicated.', doctorNote: 'Evaluate biologic width before definitive recommendation.', patientNote: 'Small gumline changes can improve symmetry.', duration: '60 min', visits: 1, price: '$900', status: 'Planned' },
  { id: 't8', title: 'Final polishing', description: 'Surface texture, line angles, and shine refinement.', doctorNote: 'Photograph after dehydration resolves.', patientNote: 'This is the detail appointment for a natural finish.', duration: '45 min', visits: 1, price: 'Included', status: 'Planned' },
  { id: 't9', title: 'Follow-up', description: 'Review comfort, photos, retention, and patient satisfaction.', doctorNote: 'Capture final DSD presentation images.', patientNote: 'We confirm the smile feels and looks right.', duration: '30 min', visits: 1, price: 'Included', status: 'Planned' }
];

const caseSummaries = [
  ['case-001', 'p-001', 'dr-ava', 'Active', 'DSD analysis', 'Veneers + bonding', 72, '$12,480', 'VIP'],
  ['case-002', 'p-002', 'dr-mila', 'Waiting review', 'Photo validation', 'Aligners', 38, '$4,200', 'High'],
  ['case-003', 'p-003', 'dr-noah', 'Patient approval', 'Presentation sent', 'Minimal-prep veneers', 86, '$9,800', 'VIP'],
  ['case-004', 'p-004', 'dr-sophia', 'Active', 'Workspace design', 'Bonding + whitening', 61, '$3,950', 'Standard'],
  ['case-005', 'p-005', 'dr-eli', 'Completed', 'Final report', 'Full smile rejuvenation', 100, '$15,200', 'VIP'],
  ['case-006', 'p-001', 'dr-noah', 'Draft', 'Intake', 'Whitening', 16, '$650', 'Standard'],
  ['case-007', 'p-002', 'dr-sophia', 'Active', 'Treatment planning', 'Aligners + bonding', 58, '$6,700', 'High'],
  ['case-008', 'p-003', 'dr-ava', 'Completed', 'Signed approval', 'Composite bonding', 100, '$2,900', 'Standard']
] as const;

export const dsdCases: DSDCase[] = caseSummaries.map((item, index) => ({
  id: item[0],
  patientId: item[1],
  doctorId: item[2],
  status: item[3] as DSDCase['status'],
  createdAt: `2026-0${Math.min(index + 1, 5)}-${String(10 + index).padStart(2, '0')}`,
  currentPhase: item[4],
  treatmentType: item[5],
  progress: item[6],
  revenue: item[7],
  priority: item[8] as DSDCase['priority'],
  summary: 'Premium DSD case prepared with facially driven smile analysis, patient-facing explanation, and staged treatment options.',
  clinicalNotes: 'Mock clinical content for planning only. Final recommendations must be verified by the treating dentist after examination, radiographs, and patient consent.',
  metrics: analysisMetrics.map((m, i) => ({ ...m, score: Math.max(54, Math.min(98, m.score - index + (i % 3))) })),
  treatmentPlan: treatmentPlans.map((s, i) => ({ ...s, status: index > 4 && i < 4 ? 'Completed' : s.status })),
  photos: photoProtocol.map((p, i) => ({ ...p, status: index % 3 === 0 && i > 6 ? 'Missing' : p.status })),
  timeline: [
    { id: 'e1', label: 'Case created', date: '2026-04-12', detail: 'Patient goals and clinical intake recorded.' },
    { id: 'e2', label: 'Photo protocol started', date: '2026-04-14', detail: 'Facial and intraoral views uploaded for review.' },
    { id: 'e3', label: 'DSD overlay drafted', date: '2026-04-18', detail: 'Midline, smile curve, and proportion guides prepared.' },
    { id: 'e4', label: 'Treatment proposed', date: '2026-04-22', detail: 'Staged plan generated for doctor review.' }
  ],
  exports: [
    { id: 'ex1', caseId: item[0], type: 'Patient presentation', status: 'Ready', updatedAt: '2026-04-24' },
    { id: 'ex2', caseId: item[0], type: 'Clinical notes', status: 'Draft', updatedAt: '2026-04-23' },
    { id: 'ex3', caseId: item[0], type: 'Photo protocol', status: 'Needs update', updatedAt: '2026-04-20' }
  ]
}));

export function getCase(id: string) { return dsdCases.find((caseItem) => caseItem.id === id) ?? dsdCases[0]; }
export function getPatient(id: string) { return patients.find((patient) => patient.id === id) ?? patients[0]; }
export function getDoctor(id: string) { return doctors.find((doctor) => doctor.id === id) ?? doctors[0]; }
