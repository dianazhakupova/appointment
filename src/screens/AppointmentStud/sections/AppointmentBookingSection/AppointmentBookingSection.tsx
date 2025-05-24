import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AppointmentBookingSection = (): JSX.Element => {
  // Calendar data
  const weekDays = [
    { day: "Mo", color: "text-[#b3b3b3]" },
    { day: "Tu", color: "text-[#b3b3b3]" },
    { day: "We", color: "text-[#b3b3b3]" },
    { day: "Th", color: "text-[#b3b3b3]" },
    { day: "Fr", color: "text-[#b3b3b3]" },
    { day: "Sa", color: "text-[#16a0f9]" },
    { day: "Su", color: "text-[#16a0f9]" },
  ];

  // Time slots data
  const timeSlots = [
    { time: "09:00 AM", selected: true },
    { time: "16:00 PM", selected: false },
  ];

  return (
    <div className="flex flex-wrap gap-8 w-full justify-center md:justify-between">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col w-full items-center">
            {/* Month selector */}
            <div className="flex items-start justify-center w-full pb-1">
              <div className="inline-flex h-6 items-center justify-center px-2 py-0.5 rounded">
                <div className="font-['Montserrat',Helvetica] font-bold text-[#27397b] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                  May
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="flex flex-col items-center justify-between w-full">
              {/* Weekday headers */}
              <div className="flex items-center justify-between w-full">
                {weekDays.map((weekDay, index) => (
                  <div
                    key={index}
                    className="flex w-6 h-6 items-center justify-center rounded"
                  >
                    <div
                      className={`relative w-fit font-['Inter',Helvetica] font-normal ${weekDay.color} text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap`}
                    >
                      {weekDay.day}
                    </div>
                  </div>
                ))}
              </div>

              {/* Calendar rows */}
              {/* Row 1 */}
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    28
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    29
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    30
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center bg-[#27397b] rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-white text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    3
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    4
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    5
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    6
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    7
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    8
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    9
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    10
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    11
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    12
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    13
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    14
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    15
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    16
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    17
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    18
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    19
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    20
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    21
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    22
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    23
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    24
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    25
                  </div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    26
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    27
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    28
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    29
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#b3b3b3] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    30
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#16a0f9] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    31
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#1170af] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    1
                  </div>
                </div>
              </div>

              {/* Row 6 */}
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    3
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    4
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    5
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#606060] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    6
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#1170af] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    7
                  </div>
                </div>
                <div className="flex w-6 h-6 items-center justify-center rounded">
                  <div className="font-['Inter',Helvetica] font-normal text-[#1170af] text-[11px] text-center tracking-[0] leading-normal whitespace-nowrap">
                    8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time selection section */}
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col gap-3">
            {/* Time selection header */}
            <div className="flex items-start gap-1">
              <Button
                variant="outline"
                className="bg-[#27397b26] text-white border-[#27397bcc] border-[0.77px] rounded-[7.65px] px-[13.77px] py-[12.24px]"
              >
                <span className="font-['Lexend_Deca',Helvetica] text-[13.8px] leading-[18.4px] mt-[-0.77px]">
                  09:00
                </span>
              </Button>
              <Button className="bg-[#27397b] text-white border-[0.77px] rounded-[7.65px] px-[16.83px] py-[12.24px]">
                <span className="font-['Lexend_Deca',Helvetica] text-[13.8px] leading-[18.4px] mt-[-0.77px]">
                  Select
                </span>
              </Button>
            </div>

            {/* Time slots */}
            {timeSlots.map((slot, index) => (
              <Button
                key={index}
                variant={slot.selected ? "default" : "outline"}
                className={`w-full rounded-[7.65px] px-[55.09px] py-[12.24px] border-[0.77px] ${
                  slot.selected
                    ? "bg-[#27397b] text-white"
                    : "bg-white border-[#27397b] text-[#27397b6b]"
                }`}
              >
                <span className="font-['Lexend_Deca',Helvetica] text-[13.8px] leading-[18.4px] mt-[-0.77px]">
                  {slot.time}
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
