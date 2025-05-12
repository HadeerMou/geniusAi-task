import type { DashboardData } from "../dashboard";
import { HospitalCard } from "./HospitalCard";

export const Dashboard: React.FC<{ data: DashboardData }> = ({ data }) => (
  <div className="h-full w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      {data.hospitals.map((hospital) => (
        <HospitalCard key={hospital.id} hospital={hospital} />
      ))}
    </div>
  </div>
);
