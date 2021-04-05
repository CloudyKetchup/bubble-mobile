import React, { PropsWithChildren, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button, Divider, Text, withTheme } from "react-native-paper";
import { Entypo } from '@expo/vector-icons'; 
import { Stack, Queue } from "react-native-spacing-system";

import { BookingSummary } from "../../models/booking";

import { useBookings } from "./hooks";

import profileDefault from "../../../assets/profile_default.png";

type HeaderProps = {
  title: string
};

type BookingProps = PropsWithChildren<{ theme: ReactNativePaper.Theme }> & {
  booking: BookingSummary
};

function Header({ title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

//TODO: move to the components module
const Booking = withTheme(({ booking, theme }: BookingProps) =>{
  const { colors } = theme;

  const getStartDate = () => {
    const date = new Date(Date.parse(booking.scheduledStart));

    return date.toLocaleString();
  };

  const onCalendar = () => {
    //TODO: implement
  };

  return (
    <View style={{ ...styles.booking, backgroundColor: theme.colors.backdrop }}>
      <View>
        <Image
          style={styles.bookingImage}
          source={{ uri: booking.imageUrl }}
          defaultSource={profileDefault}
        />
      </View>
      <View style={styles.bookingDescription}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.bookingSitter}>{booking.otherUserFullName}</Text>
          <Stack size={12} />
          <View style={styles.bookingStartDate}>
            <Entypo name="calendar" size={18} color="gray" />
            <Queue size={12} />
            <Text>{getStartDate()}</Text>
          </View>
          <Stack size={6} />
        </View>
        <Button onPress={onCalendar} mode="text" focusable={false} color={colors.primary}>Show in the calendar</Button>
      </View>
    </View>
  );
});

const Bookings = withTheme(({ theme }) => {
  const { confirmedBookings, requestedBookings, fetch } = useBookings();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={{ ...styles.root, backgroundColor: theme.colors.background }}>
      <Header title="Your Bookings" />
      <Divider/>
      <View style={styles.body}>
        {requestedBookings.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Requested Bookings</Text>
            {requestedBookings.map(booking => <Booking key={booking.id} booking={booking} />)}
          </>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Confirmed Bookings</Text>
            {confirmedBookings.map(booking => <Booking key={booking.id} booking={booking} />)}
          </>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    height: '100%'
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: "13%"
  },
  headerTitle: {
    fontFamily: "Quicksand-medium",
    fontSize: 20
  },
  body: {
    height: "87%",
    padding: 10,
    display: 'flex',
    alignItems: "center"
  },
  sectionTitle: {
    margin: 10,
    fontSize: 18,
    color: "gray",
    fontFamily: "Quicksand-bold"
  },
  booking: {
    display: "flex",
    flexDirection: "row",
    width: "96%",
    margin: "2%",
    height: 130,
    padding: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 5
  },
  bookingSitter: {
    fontSize: 18,
    fontFamily: "Quicksand-bold"
  },
  bookingImage: {
    borderRadius: 100,
    height: 100,
    width: 100,
    backgroundColor: "gray"
  },
  bookingDescription: {
    display: "flex"
  },
  bookingStartDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  bookingConfirmed: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 100
  }
});

export default Bookings;