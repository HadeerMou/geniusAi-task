import type { Hospital } from "../dashboard";

export const HospitalCard: React.FC<{ hospital: Hospital }> = ({
  hospital,
}) => (
  <div className="p-2 w-full flex gap-2 hospital-card-3xl">
    <div
      style={{ backgroundColor: hospital.color }}
      className="bg-black/10 items-center flex justify-center rounded-md p2"
    >
      <h3 className="rotate-[270deg] header">{hospital.name}</h3>
    </div>
    <div className="flex w-full gap-1 gap4 py-2 py3">
      <div className="flex flex-col gap-2 gap6 md:w-1/3 lg:w-1/2">
        <div
          style={{
            background: `${hospital.color}99`,
          }}
          className="flex flex-col bg-white/10 p-3 p7 rounded-xl rounded3xl gap-2 gap6"
        >
          <div className="flex justify-between">
            <p className="text-base lg:text-sm xl:text-sm occupancy-rate">
              Occupancy Rate
            </p>
            <b className="text-sm text4xl">{hospital.rate}%</b>
          </div>
          <div
            className="rounded-lg rounded2xl"
            style={{
              background: `${hospital.color}99`,
            }}
          >
            <div
              className="rounded-lg rounded2xl h-2 h8"
              style={{
                padding: "5px",
                backgroundColor: hospital.color,
                width: `${hospital.rate}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="flex gap-2 gap5 ">
          {[
            ["Total", hospital.total],
            ["Vacant", hospital.vacant],
            ["Occupied", hospital.occupied],
          ].map(([label, value], idx) => (
            <div
              style={{
                background: `${hospital.color}99`,
              }}
              key={idx}
              className="flex items-center bg-white/10 p-2 p4 gap-2 gap5 rounded-xl rounded3xl w-full"
            >
              <div
                style={{ backgroundColor: hospital.color }}
                className="flex rounded-md rounded2xl w-7 w20h20 h-7"
              >
                <img
                  className="w-full"
                  src="assets/sleeping-in-bed-icon-free-svg-file.png"
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-xs text4xl gap2">
                <p>{label}</p>
                <p className="font-bold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1.5 gap4 md:w-1/4 lg:w-1/3">
        {hospital.careTypes.map((care, i) => (
          <div
            className="flex flex-col gap-1 p-1 p4 gap3 rounded-lg rounded3xl"
            style={{ background: `${care.color}99` }}
            key={i}
          >
            <div className="flex text-xs justify-between care-title">
              <p>{care.title}</p>
              <b>{care.rate}%</b>
            </div>
            <div className="bg-red-200/20 rounded-lg h-2 care-type-bar">
              <div
                className="h-2 care-type-bar rounded-lg rounded4xl"
                style={{
                  background: care.color,
                  width: `${care.rate}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 care-details">
        {hospital.careTypes.map((care, i) => (
          <div
            key={i}
            className="flex items-center bg-gray-600/20 p-1 p3 gap3 gap-1 w-fit rounded-lg rounded3xl"
          >
            <img
              className="w-5 h-5 care-image bg-white rounded-md"
              src="assets/sleeping-in-bed-icon-free-svg-file.png"
              alt=""
            />
            <div className="text-[10px] text2xl">
              <p>Total</p>
              <p className="font-bold">{care.total}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 care-details">
        {hospital.careTypes.map((care, i) => (
          <div
            key={i}
            className="flex items-center p-1 p3 gap-1 gap3 w-fit rounded-lg rounded3xl"
            style={{
              background: `${care.color}99`,
            }}
          >
            <div className="flex">
              <img
                className="w-5 h-5 bg-white rounded-md care-image"
                src="assets/sleeping-in-bed-icon-free-svg-file.png"
                alt=""
              />
            </div>
            <div className="text-[10px] text2xl">
              <p>Vacant</p>
              <p className="font-bold">{care.vacant}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
