export type IUser = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  // accountType: AccountType;
  address?: {
    houseNo: string;
    street: string;
    town: string;
    postcode: string;
  };
  profileImageUrl?: string; hourlyRate?: number; specialHourlyRate?: number; numberOfChildren?: number;
  // children?: Tribo.IChild[];
  hasPets?: string;
  hasWifi?: boolean;
  hasNetflix?: boolean;
  hasTV?: boolean;
  // parking?: Tribo.Parking;
  // allergies?: Tribo.Allergy[]; otherAllergies?: string;
  biography?: string; referralCodeNumber?: number; mobileNumber?: string; secondaryMobileNumbers?: string[]; passwordResetCode?: string; approvalStatus?: Tribo.ApprovalStatus; premiumUser?: boolean; bookingsCompleted?: {
    total: number;
    postajob: number;
    shortlist: number;
    longterm: number;
    volunteered: number;
  };
  numberOfReviews?: {
    total: number;
    positive: number;
    negative: number;
  };
}