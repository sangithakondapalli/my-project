import React from "react";

function ProfileCard() {
    const checkIns = [
  {
    title: "Weekly Standup",
    description: "Shared updates on project progress and blockers.",
    startDate: "2025-07-20T09:00:00Z",
    endDate: "2025-07-20T09:30:00Z"
  },
  {
    title: "UI Design Review",
    description: "Reviewed homepage and profile page mockups with the design team.",
    startDate: "2025-07-18T14:00:00Z",
    endDate: "2025-07-18T15:00:00Z"
  },
  {
    title: "Backend Sync",
    description: "Discussed API integration plan for new features.",
    startDate: "2025-07-15T10:30:00Z",
    endDate: "2025-07-15T11:00:00Z"
  },
  {
    title: "Sprint Planning",
    description: "Defined tasks for Sprint 12 and assigned responsibilities.",
    startDate: "2025-07-13T16:00:00Z",
    endDate: "2025-07-13T17:00:00Z"
  },
  {
    title: "Bug Bash",
    description: "Team-wide bug fixing session before deployment.",
    startDate: "2025-07-10T13:00:00Z",
    endDate: "2025-07-10T15:30:00Z"
  }
];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-6 bg-gray-100">
        <div className="flex gap-12">
      <div className="h-[500px] w-full px-4 py-6 shadow-lg md:w-1/3 rounded-xl">
        <div className="relative h-[90px] w-full rounded-lg bg-gray-300">
          <div className="absolute -bottom-6 left-[135px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="default icon"
              className="h-[60px] w-[60px] rounded-full transition-opacity duration-100 hover:opacity-75"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 px-2 py-4 hover:scale-105">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-normal text-gray-900 hover:text-gray-700">
              Name:
            </h3>
            <p className="cursor-pointer text-lg text-gray-800 hover:text-gray-900">
              Sangitha Kondapalli
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-normal text-gray-900 hover:text-gray-700">
              Branch:
            </h3>
            <p className="cursor-pointer text-lg text-gray-800 hover:text-gray-900">
              CSE
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-normal text-gray-900 hover:text-gray-700">
              Section:
            </h3>
            <p className="cursor-pointer text-lg text-gray-800 hover:text-gray-900">
              Q
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-normal text-gray-900 hover:text-gray-700">
              CGPA:
            </h3>
            <p className="cursor-pointer text-lg text-gray-800 hover:text-gray-900">
              9.324
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 px-4 py-2 md:w-2/3">
         <h3 className="text-2xl font-medium text-gray-800 hover:text-gray-700"> Check In History</h3>
         <div>
            {
                checkIns.map((checkIn,index)=>( <div key={index} className="w-full h-[130px] mt-4 rounded-lg hover:scale-103 shadow-lg p-4">
                    <div className="flex flex-col justify-center mb-3">
                    <span>Start Date :{checkIn.startDate}</span>
                     <span>End Date :{checkIn.endDate}</span>
                     </div>
                     

        </div>))
            }
         </div>
       

      </div>
      </div>
    </div>
  );
}

export default ProfileCard;
