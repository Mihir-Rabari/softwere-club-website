"use client";

import * as React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
