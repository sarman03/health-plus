export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/sarman.jpg",
    name: "Dr. Sarman",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Rishali",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Aamil",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Chetan",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Nivedita",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Varun",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};