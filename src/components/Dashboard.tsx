import type { DashboardData } from "../dashboard";
import { HospitalCard } from "./HospitalCard";

export const Dashboard: React.FC<{ data: DashboardData }> = ({ data }) => (
  <div className="h-full w-full">
    {/*     <h2>Total Beds: {data.grand_total.total_beds}</h2>
     */}{" "}
    <div className="grid grid-cols-2">
      {data.hospitals.map((hospital) => (
        <HospitalCard key={hospital.id} hospital={hospital} />
      ))}
    </div>
  </div>
);
