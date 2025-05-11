import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaMoneyBill, FaUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FaWindowClose, FaLock } from "react-icons/fa";
import { IoTimer, IoSearch } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { BiSolidPhoneIncoming, BiSupport } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './styles/SideBar.css'


const routes = [
  {
    path: "/admin",
    name: "New Project Calls",
    icon: <BiSolidPhoneIncoming />,
  },
  {
    path: "/pendingcalls",
    name: "Pending Project Calls",
    icon: <IoTimer />,
  },
  {
    path: "/completedcalls",
    name: "Completed Project Calls",
    icon: <IoMdDoneAll />,
  },
  {
    path: "/closedcalls",
    name: "Closed Project Calls",
    icon: <FaWindowClose />,
  },
  {
    path: "/searchedcalls",
    name: "Search Projects",
    icon: <IoSearch />,
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: "/settings/2fa",
    //     name: "2FA",
    //     icon: <FaLock />,
    //   },
    //   {
    //     path: "/settings/billing",
    //     name: "Billing",
    //     icon: <FaMoneyBill />,
    //   },
    // ],
  },
  {
    path: "/supportstaff",
    name: "Support Team",
    icon: < BiSupport />,
  },
  {
    path: "/managesection",
    name: "Manage Section",
    icon: <MdManageHistory />,
    exact: true,
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: "/settings/2fa",
    //     name: "2FA",
    //     icon: <FaLock />,
    //   },
    //   {
    //     path: "/settings/billing",
    //     name: "Billing",
    //     icon: <FaMoneyBill />,
    //   },
    // ],
  },
  {
    path: "/managepassword",
    name: "Change Password",
    icon: <FaLock />,
  },
];

const resolverRoutes = [
  {
    path: '/actionresolver',
    name: 'Inbox',
    icon: <FaHome />
  },
  {
    path: '/resolverpendingcalls',
    name: 'All Pending Calls',
    icon: <IoTimer />
  },
  {
    path: '/managepassword',
    name: 'Change Password',
    icon: <FaLock />
  }
];


const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };


  const role = localStorage.getItem('role')

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            {/* <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 Hello ,
                </motion.h1>
              )}
            </AnimatePresence> */}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {/* {
              role !== 'resolver' ? && (<>
                {
                  {
                    routes.map((route, index) => {
                      if (route.subRoutes) {
                        return (
                          <SidebarMenu
                            setIsOpen={setIsOpen}
                            route={route}
                            showAnimation={showAnimation}
                            isOpen={isOpen}
                          />
                        );
                      }

                      return (
                        <NavLink
                          to={route.path}
                          key={index}
                          className="link"
                          activeClassName="active"
                        >
                          <div className="icon">{route.icon}</div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                              >
                                {route.name}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </NavLink>
                      );
                    })
                  }
              </>) : (<>
                </>) */}




            {
              role !== 'resolver' ? (
                <>
                  {routes.map((route, index) => {
                    if (route.subRoutes) {
                      return (
                        <SidebarMenu
                          setIsOpen={setIsOpen}
                          route={route}
                          showAnimation={showAnimation}
                          isOpen={isOpen}
                          key={index}
                        />
                      );
                    }

                    return (
                      <NavLink
                        to={route.path}
                        key={index}
                        className="link"
                        activeClassName="active"
                      >
                        <div className="icon">{route.icon}</div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={showAnimation}
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              className="link_text"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </NavLink>
                    );
                  })}
                </>
              ) : (
                <>
                  {resolverRoutes.map((route, index) => {
                    if (route.subRoutes) {
                      return (
                        <SidebarMenu
                          setIsOpen={setIsOpen}
                          route={route}
                          showAnimation={showAnimation}
                          isOpen={isOpen}
                          key={index}
                        />
                      );
                    }

                    return (
                      <NavLink
                        to={route.path}
                        key={index}
                        className="link"
                        activeClassName="active"
                      >
                        <div className="icon">{route.icon}</div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={showAnimation}
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              className="link_text"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </NavLink>
                    );
                  })}
                </>
              )
            }

          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;