import { props } from "@stylexjs/stylex";

type FunctionArguments<T extends typeof props> = T extends (
  args: infer P
) => any
  ? P
  : never;

type PropsArgs = FunctionArguments<typeof props>;

// abbreviation of Stylex Class Name
export const scn: (...args: PropsArgs[]) => string | undefined = (...args) => {
  return props(args).className;
};
