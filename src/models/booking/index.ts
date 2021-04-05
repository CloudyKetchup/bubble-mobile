export const enum BookingStatusTypes {
  Requested = 0,
  Accepted = 1,
  CompletedNotPaid = 2,
  Rejected = 3,
  CompletedAndPaid = 4,
  Cancelled = 5,
  Bidded = 6,
  BiddedTooLate = 7,
  WithdrewBid = 8,
  PendingInterviews = 9,
  LongTermBookingsCreated = 10,
};

export interface BookingSummary {
  id: string;
  parentId: string;
  bookingStatus: BookingStatusTypes;
  requestStatus?: BookingStatusTypes;
  scheduledStart: string;
  scheduledDuration: Number;
  imageUrl: string;
  otherUserFullName: string; lookingForVolunteer?: boolean;
};

export interface ActiveBookingSummary {
  requestedBookings: BookingSummary[];
  confirmedBookings: BookingSummary[];
};

export interface IBooking {
  id: string;
  bookingProcess: number;
  scheduledStart: Date;
  scheduledDateTime: string;
  bookingStatus: BookingStatusTypes;
  scheduledDuration: number;
  specialRequirements: string;
  parent: {
    id: string;
    referralCodeNumber?: number;
    firstName: string;
    lastName: string;
    profileImageUrl: string;
    fullName?: string;
    mobileNumber?: string;
    address?: {
      houseNo: string;
      street: string;
      town: string;
      postcode: string;
    };
  };
};
