import { useButton } from "@react-aria/button";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import { useHover, useObjectRef } from "react-aria";
import { borderRadius } from "./foundation/border-radius.stylex";
import { colors } from "./foundation/colors.stylex";
import { spacing } from "./foundation/spacing.stylex";
import { typography } from "./foundation/typography.stylex";
import type { AriaButtonOptions } from "@react-aria/button";
import type { StyleXStyles } from "@stylexjs/stylex";
import { scn } from "./utils";

interface Props extends AriaButtonOptions<"button"> {
  variant?: "primary" | "secondary" | "danger" | "plus" | "ghost";
  size?: "small" | "medium";
  isDisabled?: boolean;
  alignment?: "left" | "center";
  iconLeft?: string;
  iconRight?: string;
  children: string;
  stylex?: StyleXStyles;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const {
      children,
      variant = "primary",
      size = "small",
      alignment = "center",
      stylex,
      isDisabled,
    } = props;
    const objRef = useObjectRef(ref);
    const { buttonProps, isPressed } = useButton(props, objRef);
    const { hoverProps, isHovered } = useHover({ isDisabled });
    return (
      <button
        ref={ref}
        {...buttonProps}
        {...hoverProps}
        className={scn(
          buttonStyles.base,
          sizeStyles[size],
          alignmentStyles[alignment],
          buttonVariantsStyles[variant],
          isHovered && buttonVariantsHoverStyles[variant],
          isPressed && buttonVariantsActiveStyles[variant],
          isDisabled && buttonStyles.disabled,
          isDisabled && buttonVariantsDisabledStyles[variant],
          stylex
        )}
      >
        {children}
      </button>
    );
  }
);

const buttonStyles = stylex.create({
  base: {
    borderRadius: borderRadius["rounded-md"],
    font: typography.TextSmMedium,
    display: "flex",
    alignItems: "center",
    gap: spacing["2"],
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
  disabled: {
    cursor: "not-allowed",
  },
});

const buttonVariantsStyles = stylex.create({
  primary: {
    backgroundColor: colors["brand-600"],
    border: "1px solid",
    borderColor: colors["brand-500"],
    color: colors["black-100"],
  },
  secondary: {
    backgroundColor: colors["gray-600"],
    border: "1px solid",
    borderColor: colors["gray-500"],
    color: colors["white-100"],
  },
  danger: {
    backgroundColor: colors["red-800"],
    border: "1px solid",
    borderColor: colors["red-700"],
    color: colors["white-100"],
  },
  plus: {
    backgroundColor: colors["orange-600"],
    border: "1px solid",
    borderColor: colors["orange-500"],
    color: colors["white-100"],
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors["gray-100"],
  },
});

const buttonVariantsHoverStyles = stylex.create({
  primary: {
    backgroundColor: colors["brand-500"],
    borderColor: colors["brand-400"],
  },
  secondary: {
    backgroundColor: colors["gray-500"],
    borderColor: colors["gray-400"],
  },
  danger: {
    backgroundColor: colors["red-700"],
    borderColor: colors["red-600"],
  },
  plus: {
    backgroundColor: colors["orange-500"],
    borderColor: colors["orange-400"],
  },
  ghost: {
    backgroundColor: colors["alpha-gray-75"],
  },
});

const buttonVariantsActiveStyles = stylex.create({
  primary: {
    backgroundColor: colors["brand-400"],
    borderColor: colors["brand-300"],
  },
  secondary: {
    backgroundColor: colors["gray-400"],
    borderColor: colors["gray-300"],
  },
  danger: {
    backgroundColor: colors["red-600"],
    borderColor: colors["red-500"],
  },
  plus: {
    backgroundColor: colors["orange-400"],
    borderColor: colors["orange-300"],
  },
  ghost: {
    backgroundColor: colors["alpha-gray-75"],
  },
});

const buttonVariantsDisabledStyles = stylex.create({
  primary: {
    backgroundColor: colors["brand-600"],
    color: colors["brand-900"],
    borderColor: colors["brand-600"],
  },
  secondary: {
    backgroundColor: colors["gray-600"],
    color: colors["gray-200"],
    borderColor: colors["gray-600"],
  },
  danger: {
    backgroundColor: colors["gray-600"],
    color: colors["gray-200"],
    borderColor: colors["gray-600"],
  },
  plus: {
    backgroundColor: colors["gray-600"],
    color: colors["gray-200"],
    borderColor: colors["gray-600"],
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors["gray-300"],
    borderColor: "transparent",
  },
});

const sizeStyles = stylex.create({
  small: {
    height: 32,
    padding: `0 ${spacing["3"]}`,
  },
  medium: {
    height: 40,
    padding: `0 ${spacing["4"]}`,
  },
});

const alignmentStyles = stylex.create({
  left: {
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
  },
});
