import { Stack } from "expo-router";
import { DeviceType } from "expo-device";

function checktablet() {
  if (DeviceType.TABLET) {
    return true
  } else {
    return false
  }
}
function setorientation() {
  if (checktablet() === true) {
    return "all"
  } else {
    return "default"
  }
}
export default function RootLayout() {
  return <Stack screenOptions={{
    title: "BMI Calculator",
    headerStyle: {
      backgroundColor: "#FFCB1F"
    },
    orientation: setorientation()
  }} />;
}
