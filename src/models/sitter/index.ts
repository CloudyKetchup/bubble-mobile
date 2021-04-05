export type ISitter = {
  id: string,
  accountType: number,
  firstName: string,
  lastName: string,
  fullName: string,
  profileImageUrl: string,
  dob: string,
  hourlyRate: number,
  ownTransport: boolean,
  degree: number,
  ratingPercentage: number,
  sits: number,
  approvalStatus: number,
  idVerified: boolean,
  bubbleVerified: false,
  biography: string,
  tags: string[],
  occupation: number,
  dBSChecked: false,
  verifiedDBS: false,
  oFSTEDRegistered: boolean,
  firstAidTrained: boolean,
  otherLanguagesSpoken: {
    value: Record<string, boolean>
  },
  distanceInKm: number,
  available: boolean | null,
  twinsExperience: boolean,
  specialNeedsExperience: boolean,
  referenceChecked: boolean,
  coffeeInterviewEnabled: boolean,
  isHomeSchoolHelper: false,
  medicalStudent: {
    isEnabled: boolean,
    isVerified: boolean,
    schoolName: string | null
  },
  volunteering: {
    nhsEnabled: boolean
  },
  sitterCounts: {
    regularParents: number
  }
}