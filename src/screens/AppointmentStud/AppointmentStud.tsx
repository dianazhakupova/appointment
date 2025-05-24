import { ChevronLeftIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { AppointmentBookingSection } from "./sections/AppointmentBookingSection";
import { AppointmentDetailsSection } from "./sections/AppointmentDetailsSection";

export const AppointmentStud = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header */}
        <header className="w-full h-[93px] bg-white border-b border-[#e6eff5] flex items-center justify-between px-6">
          <img
            className="w-[215px] h-[93px] object-cover"
            alt="Aitumed logo"
            src="/aitumed-logo-3-2.png"
          />
          <div className="flex gap-4">
            <div className="w-[60px] h-14 bg-[#f4f6f9] rounded-[30px/27.98px] flex items-center justify-center">
              <img
                className="w-[30px] h-7"
                alt="Notification"
                src="/002-notification-1.svg"
              />
            </div>
            <img
              className="w-[60px] h-14"
              alt="User profile"
              src="/mask-group-1.png"
            />
          </div>
        </header>

        {/* Main content */}
        <main className="flex">
          {/* Left sidebar */}
          <div className="w-[250px] border-r border-[#e6eff5]">
            <AppointmentDetailsSection />
          </div>

          {/* Right content area */}
          <div className="flex-1 bg-[#f4f6f9] min-h-[calc(100vh-93px)]">
            {/* Top navigation */}
            <div className="p-10 pb-4">
              <div className="flex items-center mb-4">
                <Button variant="ghost" size="icon" className="mr-4">
                  <ChevronLeftIcon className="h-10 w-10" />
                </Button>
                <h1 className="font-['Montserrat',Helvetica] font-extrabold text-[#343c6a] text-4xl">
                  Booking an appointment
                </h1>
              </div>

              <div className="flex justify-between items-center mt-8">
                <h2 className="font-['Montserrat',Helvetica] font-semibold text-[#343c6a] text-[22px]">
                  Select data and time
                </h2>
                <Button className="bg-blue-600 hover:bg-blue-700 h-[38px] rounded-md">
                  <PlusIcon className="h-5 w-5 mr-2" />
                  <span className="font-['Montserrat',Helvetica] font-medium text-white text-lg">
                    New
                  </span>
                </Button>
              </div>

              <Separator className="mt-4 mb-6 bg-[#e6eff5]" />

              {/* Appointment booking section */}
              <AppointmentBookingSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
