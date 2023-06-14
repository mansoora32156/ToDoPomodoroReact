import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  countDownDate: Date;
  countDownTime: number;
  formatTime: (time: number) => string;
};

// interface TimerCountDownDisplayProps {
//   countDownTime: number;
//   formatTime: (time: number) => string;
// }


export const TimerCountDownDisplay: React.FC<Props> = ({ countDownDate,countDownTime,
  formatTime,
 }) => {
  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {countDownDate.getMinutes().toString().padStart(2, "0")}:
        {countDownDate.getSeconds().toString().padStart(2, "0")}
      </Text>
      <Text style={{ fontSize: 36 }}>{formatTime(countDownTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerCountDownText: {
    fontWeight: "800",
    fontSize: 40,
    color: "#fff",
  },
});
