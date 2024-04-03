import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const SideMenu1: FunctionComponent = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: "/smarthome.svg", path: "/dashboard" },
    { name: "Reports and Analytics", icon: "/listdetails.svg", path: "/reports" },
    { name: "Institute Management", icon: "/listdetails.svg", path: "/institute-management" },
    { name: "Course Management", icon: "/listdetails.svg", path: "/course-management" },
    { name: "Student Management", icon: "/listdetails.svg", path: "/student-management" },
    { name: "Scholarship", icon: "/listdetails.svg", path: "/scholarship" },
    { name: "Applications", icon: "/listdetails.svg", path: "/applications" },
    { name: "Blog Management", icon: "/listdetails.svg", path: "/blog-management" },
  ];

  return (
    <div className="w-[22.5rem] bg-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[71rem] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border text-left text-[0.938rem] font-noto-sans">
      <div className="self-stretch flex flex-row items-center justify-center py-[1.25rem] px-[1rem] gap-[6.75rem]">
        <img
          className="w-[10.938rem] relative h-[3.438rem] object-cover"
          alt="Logo"
          src="/5-911567@2x.png"
          onClick={() => navigate('/')}
        />
        <img
          className="w-[1.25rem] relative h-[1.25rem]"
          alt="Settings"
          src="/circledot.svg"
          onClick={() => navigate('/settings')}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.875rem] gap-[0.25rem]">
        {menuItems.map((item, index) => (
          <div key={index} className="self-stretch rounded-md flex flex-row items-center justify-start py-[0.563rem] px-[1rem] gap-[0.5rem]" onClick={() => navigate(item.path)}>
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt={item.name}
              src={item.icon}
            />
            <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu1;
