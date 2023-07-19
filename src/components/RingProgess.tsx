import { View } from "react-native";
import SVG, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = "#EE0F55";

const RingProgess = ({
  radius = 100,
  strokeWidth = 35,
  progress,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 2000 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));

  return (
    <View
      style={{ width: radius * 2, height: radius * 2, alignSelf: "center" }}
    >
      <SVG>
        {/* Background */}
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={0.2}
        />
        {/* Foreground */}
        <AnimatedCircle
          animatedProps={animatedProps}
          r={innerRadius}
          cx={radius}
          cy={radius}
          originX={radius}
          originY={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          // strokeDasharray={[circumference * progress, circumference]}
          strokeLinecap="round"
          rotation="-90"
        />
      </SVG>
    </View>
  );
};

export default RingProgess;
