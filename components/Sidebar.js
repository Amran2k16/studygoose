import SidebarButton from "./SidebarButton";
import { useRouter } from "next/router";

const buttonInformation = [
  { icon: "home", text: "Home", url: "" },
  { icon: "ondemand_video", text: "Courses", url: "courses" },
  { icon: "menu_book", text: "Quizzes", url: "quizzes" },
  { icon: "message", text: "Messages", url: "messages" },
  { icon: "exit_to_app", text: "Log Out", url: "logout" }
];

const Sidebar = () => {
  const router = useRouter();
  const buttons = buttonInformation.map((button, index) => {
    return (
      <SidebarButton
        key={index}
        icon={button.icon}
        url={button.url}
        text={button.text}
      ></SidebarButton>
    );
  });

  return (
    <div className="">
      <div className="row ">
        <div className="col-12 p-5">
          <h1
            className="font-weight-bold text-center"
            style={{ color: "#07689F" }}
          >
            StudyGoose
          </h1>
        </div>
        {/* <p className="col ">StudyGoose</p> */}
      </div>
      <div className="row">
        <div className="col p-2">{buttons}</div>
      </div>
    </div>
  );
};

export default Sidebar;

// const router = useRouter();
// const buttons = buttonInformation.map((button, index) => {
//   if (router.route == "/" + button.url) {
//     return (
//       <SidebarButton
//         key={index}
//         icon={button.icon}
//         url={button.url}
//         color="#07689F"
//         text={button.text}
//       ></SidebarButton>
//     );
//   } else {
//     return (
//       <SidebarButton
//         key={index}
//         icon={button.icon}
//         url={button.url}
//         text={button.text}
//       ></SidebarButton>
//     );
//   }
// });
// return (
//   <div className="">
//     <div className="row ">
//       <div className="col-12 p-5">
//         <h1
//           className="font-weight-bold text-center"
//           style={{ color: "#07689F" }}
//         >
//           StudyGoose
//         </h1>
//       </div>
//       {/* <p className="col ">StudyGoose</p> */}
//     </div>
//     <div className="row">
//       <div className="col p-2">{buttons}</div>
//     </div>
//   </div>
// );
