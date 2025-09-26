import { Ripple } from "@/components/magicui/ripple";

export default function Loading() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden flex items-center justify-center">
      <Ripple className="opacity-90" mainCircleOpacity={0.22} numCircles={9} />
      <div className="relative z-10 text-2xl sm:text-3xl font-medium text-foreground">
        Loading
      </div>
    </div>
  );
}
