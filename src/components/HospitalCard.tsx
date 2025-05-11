import type { Hospital } from "../dashboard";

export const HospitalCard: React.FC<{ hospital: Hospital }> = ({
  hospital,
}) => (
  <div className="p-2 w-full flex gap-2">
    <div
      style={{ backgroundColor: hospital.color }}
      className="bg-black/10 items-center flex justify-center rounded-md p-1"
    >
      <h3 className="rotate-[270deg]">{hospital.name}</h3>
    </div>
    <div className="flex w-full gap-2 py-2">
      <div className="flex flex-col gap-2 w-1/2">
        <div className="flex flex-col bg-white/10 p-3 rounded-xl gap-1 ">
          <div className="flex justify-between">
            <p>Occupancy Rate</p>
            <p>{hospital.rate}%</p>
          </div>
          <div
            className="rounded-lg "
            style={{
              background: `${hospital.color}99`,
            }}
          >
            <div
              className="rounded-lg"
              style={{
                padding: "5px",
                backgroundColor: hospital.color,
                width: `${hospital.rate}%`,
                height: "13px",
              }}
            ></div>
          </div>
        </div>
        <div className="flex gap-1">
          {[
            ["Total", hospital.total],
            ["Vacant", hospital.vacant],
            ["Occupied", hospital.occupied],
          ].map(([label, value], idx) => (
            <div
              key={idx}
              className="flex items-center bg-white/10 p-2 gap-2 rounded-xl w-full"
            >
              <div
                style={{ backgroundColor: hospital.color }}
                className="flex rounded-md w-7 max-h-7"
              >
                <img
                  className="w-full"
                  src="assets/sleeping-in-bed-icon-free-svg-file.png"
                  alt=""
                />
              </div>
              <div className="text-xs">
                <p>{label}</p>
                <p className="font-bold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 w-1/3">
        {hospital.careTypes.map((care, i) => (
          <div
            className="flex flex-col gap-1 p-1 rounded-md"
            style={{ background: `${care.color}99` }}
            key={i}
          >
            <div className="flex text-xs justify-between">
              <p>{care.title}</p>
              <b>{care.rate}%</b>
            </div>
            <div className="bg-red-200/20 rounded-lg">
              <div
                style={{
                  background: care.color,
                  width: `${care.rate}%`,
                  height: "10px",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {hospital.careTypes.map((care, i) => (
          <div
            key={i}
            className="flex items-center bg-black/10 p-1 gap-2 w-fit rounded-md"
          >
            <img
              className="w-5 max-h-5 bg-white rounded-md"
              src="assets/sleeping-in-bed-icon-free-svg-file.png"
              alt=""
            />
            <div className="text-[10px]">
              <p>Total</p>
              <p className="font-bold">{care.total}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {hospital.careTypes.map((care, i) => (
          <div
            key={i}
            className="flex items-center p-1 gap-2 w-fit rounded-md"
            style={{
              background: `${care.color}99`,
            }}
          >
            <div className="flex">
              <img
                className="w-5 max-h-5 bg-white rounded-md"
                src="assets/sleeping-in-bed-icon-free-svg-file.png"
                alt=""
              />
            </div>
            <div className="text-[10px]">
              <p>Vacant</p>
              <p className="font-bold">{care.vacant}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
