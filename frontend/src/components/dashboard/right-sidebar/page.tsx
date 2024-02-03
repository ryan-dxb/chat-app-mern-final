import React, { FC } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import CustomButton from "../common/CustomButton";
import {
  PiHeartStraightLight,
  PiHeartStraightFill,
  PiPhoneCall,
  PiVideoCamera,
} from "react-icons/pi";
import {
  MdOutlineBlock,
  MdOutlineFileDownload,
  MdMoreHoriz,
} from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface RightSidebarProps {
  // Add your prop types here
  open?: boolean;
}

const RightSidebar: FC<RightSidebarProps> = ({ open }) => {
  return (
    <motion.div
      animate={{ width: open ? 0 : 300 }}
      transition={{ duration: 0.3 }}
      className="border-l flex flex-shrink-0 h-full w-0 box-border"
    >
      <div className="h-[calc(100vh-64px)] ">
        <ScrollArea className="w-full flex-1 h-full ">
          <div className="relative flex flex-1 h-36 bg-gray-100">
            {/* Cover Image */}
            <div
              className="flex items-center justify-center w-16 h-16 bg-gray-700 absolute bottom-0 right-1/2 
          transform translate-x-1/2 translate-y-1/2 overflow-hidden rounded-md"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-sm"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-12">
            <h2 className="text-sm font-semibold ">John Doe</h2>
            <div className="flex items-center gap-2 justify-center mt-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs  font-normal text-slate-400">
                Active Now
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-4 px-2">
            <CustomButton icon={PiPhoneCall} className="aspect-square h-full" />
            <CustomButton
              icon={PiVideoCamera}
              className="aspect-square h-full"
            />
            <CustomButton
              icon={MdOutlineBlock}
              className="aspect-square h-full"
            />
            <CustomButton
              icon={PiHeartStraightLight}
              className="aspect-square h-full"
            />
          </div>

          <Separator className="my-4" />

          <div>
            <h3 className="text-sm font-semibold px-2">About</h3>
            <p className="text-xs text-slate-400 px-2 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold px-2">Info</h3>
            <div className="flex px-2 flex-col gap-1 ">
              <div className="">
                <span className="text-xs text-slate-400">Email</span>
                <p className="text-xs">abc@test.com</p>
              </div>
              <div className="">
                <span className="text-xs text-slate-400">Location</span>
                <p className="text-xs">Dubai, UAE</p>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <h3 className="text-sm font-semibold px-2">Media</h3>
          <div className="grid grid-cols-4 gap-1  px-2 mt-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-slate-100 rounded-md"
              ></div>
            ))}
          </div>

          <Separator className="my-4" />

          <h3 className="text-sm font-semibold px-2">Attached Files</h3>
          <div className="flex flex-col gap-1 px-2 mt-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-row h-12 gap-3  rounded-md w-full items-center px-2 border border-slate-100 hover:bg-slate-100 transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                  <FaRegFileAlt className="w-4 h-4 text-green-500 font-normal" />
                </div>
                <div className="flex flex-1 flex-row justify-between">
                  <div className="flex flex-1 flex-shrink-0 flex-col justify-center overflow-hidden">
                    <span className="text-xs font-semibold">File Name</span>
                    <span className="text-xs text-slate-400">1.2MB</span>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-end">
                    <Button
                      variant="ghost"
                      className="p-1 m-0 hover:bg-transparent transition duration-300 ease-in-out"
                    >
                      <MdOutlineFileDownload className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="p-1 m-0 hover:bg-transparent"
                    >
                      <MdMoreHoriz className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default RightSidebar;
