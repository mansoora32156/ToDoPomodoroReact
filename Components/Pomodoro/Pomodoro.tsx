import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TimerModeDisplay, TimerModes } from "./TimerModeDisplay";
import { TimerToggleButton } from "./TimerToggleButton";

const FOCUS_TIME_MINUTES = 25 * 60;
const BREAK_TIME_MINUTES = 5 * 60;

export default function Pomodoro() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Focus") {
        setTimerMode("Break");
        setTimerCount(BREAK_TIME_MINUTES);
      } else {
        setTimerMode("Focus");
        setTimerCount(FOCUS_TIME_MINUTES);
      }
      stopCountDown();
    }
  }, [timerCount]);

  const startCountDown = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1), 1000);
    setIntervalId(id);
  };

  const stopCountDown = () => {
    setIsTimerRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(null);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: timerMode === "Break" ? "#2a9d8f" : "#d95550",
  };

  return (
    <View style={containerStyle}>
        
      <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Get Started to Monitor you work with this Pomodoro!!
        </Text>
      </View>
        <TimerModeDisplay timerMode={timerMode} />

        
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{formatTime(timerCount)}</Text>
        </View>

        <TimerToggleButton
          startCountDownHandler={startCountDown}
          isTimerRunning={isTimerRunning}
          setIsTimerRunning={setIsTimerRunning}
          stopCountDownHandler={stopCountDown}
        />
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '##FF0000',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
      },
      headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    marginTop: 20,
  },
  timerText: {
    fontSize: 36,
    color: "#fff",
  },
});
