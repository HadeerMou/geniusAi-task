export type CareType = {
  title: string;
  total: number;
  vacant: number;
  rate: number;
  color: string;
  has_mappings: boolean;
};

export type Hospital = {
  id: number;
  name: string;
  total: number;
  occupied: number;
  vacant: number;
  rate: number;
  color: string;
  careTypes: CareType[];
  status_codes: {
    vacant: string[];
    occupied: string[];
  };
};

export type GrandTotal = {
  total_beds: number;
  occupied: number;
  vacant: number;
  rate: number;
  color: string;
};

export type CareTypeTotals = {
  [key: string]: {
    total: number;
    vacant: number;
    rate: number;
    color: string;
  };
};

export type DashboardData = {
  grand_total: GrandTotal;
  care_type_totals: CareTypeTotals;
  hospitals: Hospital[];
};
