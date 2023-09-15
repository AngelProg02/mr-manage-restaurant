import React from "react";
import { View, StyleSheet } from "react-native";
import { StyledTextProps } from "../interfaces/StyledTextProps";
import { theme } from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  big: {
    fontSize: theme.fontSizes.body,
  },
  center: {
    textAlign: "center",
  },
  small: {
    fontSize: theme.fontSizes.subheading,
  },
});

export default function StyledText({
  bold,
  big,
  children,
  center,
  small,
}: StyledTextProps) {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    big && styles.big,
    center && styles.center,
    small && styles.small,
  ];

  return <View style={textStyles}>{children}</View>;
}
