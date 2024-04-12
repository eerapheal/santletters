import { useAtom } from "jotai";
import { sideBarActiveItem } from "@/src/app/config/constants";

const useRouteChange = () => {
  const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem);
  return { activeRoute, setActiveRoute };
};

export default useRouteChange;
