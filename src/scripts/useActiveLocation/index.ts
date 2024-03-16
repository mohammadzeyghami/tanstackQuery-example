import { useLocation } from "react-router-dom";
interface activeLocationProps {
  target: string;
  isWrapper?: boolean;
}
export const useCurrentLocation = () => {
  const location = useLocation();
  return location.pathname;
};
export const useActivelocation = ({
  target,
  isWrapper = false,
}: activeLocationProps) => {
  const location = useCurrentLocation();
  if (isWrapper) {
    return location === "/" + target;
  } else {
    return location?.indexOf(target) !== -1;
  }
};
