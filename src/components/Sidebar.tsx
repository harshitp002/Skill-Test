"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: <RiDashboardLine className="w-5 h-5" />, href: "/dashboard" },
    { name: "Skill Test", icon: <FaRegStar className="w-5 h-5" />, href: "/dashboard/skill-test" },
    { name: "Internship", icon: <BsBriefcase className="w-5 h-5" />, href: "/dashboard/internship" },
  ];

  return (
    <aside className="w-48 sm:w-52 md:w-56 lg:w-60 h-full bg-white border-r pt-8 md:pt-10 lg:pt-12">
      <nav className="space-y-1 sm:space-y-1.5 md:space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center space-x-2 md:space-x-3 cursor-pointer p-2 sm:p-2.5 md:p-3 w-full
                  ${isActive
                    ? "bg-blue-200 text-blue-600 rounded-xl md:rounded-2xl"
                    : "text-gray-600 hover:text-black"
                  }
                `}
              >
                {item.icon}
                <span className="text-sm md:text-base font-semibold">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;