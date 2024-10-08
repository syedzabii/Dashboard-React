import { useSelector } from "react-redux";
import { ReduxState } from "../../store";
import TimeOfDay from "./TimeoFDay";

const Profile = () => {
  const admin: any = useSelector((state: ReduxState) => state.auth.admin);
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Evening";
    } else {
      return "Night";
    }
  };
  return (
    <>
      <h5 className="text-xs">
        Hi<span className="uppercase ml-1 font-mono">{admin.name},</span>
        {` Good ${getTimeOfDay()}`}
      </h5>
    </>
  );
};

export default Profile;
