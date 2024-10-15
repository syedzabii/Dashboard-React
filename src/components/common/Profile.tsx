import { useSelector } from "react-redux";
import { ReduxState } from "../../store";
import TimeOfDay from "./TimeoFDay";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
  const getTheInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };
  return (
    <>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${admin.name}&backgroundType=gradientLinear&backgroundColor=7cb342,43a047`}
            alt={admin.name}
          />
          <AvatarFallback className="font font-semibold">
            {getTheInitials(admin.name)}
          </AvatarFallback>
        </Avatar>
        <span className="text-black text-md">
          Hi, {admin.name}, Good {getTimeOfDay()}
        </span>
      </div>
    </>
  );
};

export default Profile;
