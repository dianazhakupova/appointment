import {
  FileIcon,
  FileTextIcon,
  HomeIcon,
  LineChartIcon,
  MessageSquareIcon,
  PhoneIcon,
  PillIcon,
} from "lucide-react";
import React from "react";

export const AppointmentDetailsSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    {
      icon: <HomeIcon className="w-5 h-5" />,
      label: "Dashboard",
      active: false,
    },
    {
      icon: (
        <img
          className="w-5 h-5"
          alt="Icon appointment"
          src="/---icon--appointment--1.png"
        />
      ),
      label: "Appointments",
      active: true,
    },
    {
      icon: (
        <img
          className="w-5 h-5"
          alt="Icon human queue"
          src="/---icon--human-queue--1.png"
        />
      ),
      label: "Queue system",
      active: false,
    },
    {
      icon: <FileTextIcon className="w-5 h-5" />,
      label: "Certificates",
      active: false,
    },
    {
      icon: <PillIcon className="w-5 h-5" />,
      label: "Medicines",
      active: false,
    },
    {
      icon: <MessageSquareIcon className="w-5 h-5" />,
      label: "AI Chatbot (FAQ)",
      active: false,
    },
    {
      icon: <LineChartIcon className="w-5 h-5" />,
      label: "Symptom tracker",
      active: false,
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: "Call",
      active: false,
    },
    {
      icon: <FileIcon className="w-5 h-5" />,
      label: "Prescriptions",
      active: false,
    },
  ];

  return (
    <nav className="w-[274px] h-full py-8 border-r">
      <div className="relative h-full">
        {/* Active indicator for selected menu item */}
        <div className="absolute w-1.5 h-[60px] top-[38px] left-0 bg-[#27387d] rounded-[0px_10px_10px_0px]" />

        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center px-9 relative">
              <span className="flex items-center justify-center w-6 h-6">
                {item.icon}
              </span>
              <span
                className={`ml-6 font-medium text-lg ${
                  item.active ? "text-[#27397b]" : "text-[#b1b1b1]"
                } font-['Murecho',Helvetica]`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
