import Image from "next/image";
import login from "../../../public/projects/tempory/login.png";
import route from "../../../public/projects/tempory/route.png";
import customer from "../../../public/projects/tempory/customer.png";
import customers from "../../../public/projects/tempory/customers.png";
import ProjectPreviewNexory from "@/app/components/ProjectPreviewNexory";
import MoreProjects from "@/app/components/MoreProjects";

export const metadata = {
  title: "Tempory | André Thiele",
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function Tempory() {
  return (
    <div className="text-justify mx-auto">
      <p className="text-4xl font-bold text-center pt-32">Tempory</p>
      <div className="text-center text-slate-400 pb-8 pt-4">
        <a href="https://tempory.app/" target="_blank">
          Visit Website
        </a>
      </div>
      <div className="text-xl max-w-4xl text-slate-400">
        <p className="text-center text-white">
          The idea behind Tempory was to create an intuitive, easy to use app to
          help my father schedule the visits of his customers. Having to manage
          over 80 of them can be difficult and the app automates a lot of it.
        </p>
        <Image src={login} alt="Image showing the sign-up screen of the app" />
        <p className="font-bold text-white pb-4">Sign-up</p>
        <p>
          After opening the app for the first time, the user is greeted with a
          minimalistic sign-up page where the user can choose between
          traditional email sign-up or to sign-up with Google or Microsoft.
          Should the user enter an email that is already registered, a dialog is
          shown to inform the user about it. Should the user choose to login,
          the already entered email is transferred to the sign-in screen where
          the user only needs to enter his password and is ready to go. If an
          account is already present, the user can choose to sign in instead by
          clicking on the highlighted text.
        </p>
        <Image
          src={route}
          alt="Image showing the Start Route screen of the app"
        />
        <p className="font-bold text-white pb-4">Route management</p>
        <p>
          After logging in, the user transitions the home screen. The home
          screen acts as a single hub where the user can see the most important
          and recent data. At the top, the current schedule is displayed and a
          "Start Route" button appears where the user can start a Google Maps
          navigation with the scheduled visits. The user can also glimpse at the
          latest visits and choose to view all of them by clicking on "Expand".
          An important detail is that the user can click on any of the customers
          to get instant access to quick actions.
        </p>
        <Image
          src={customer}
          alt="Image showing the Customer screen of the app"
        />
        <p className="font-bold text-white pb-4">Customer</p>
        <p>
          The customer screen offers access to several quick actions such as
          calling, messaging or navigation. You get immediate access to the
          latest visit which can be set to a different date. The app is built in
          such a way that anomalies are avoided which means that should a user
          try to set the last visit to a date that is before the current last
          visit, the user can choose to delete the latter. Another important
          part of the app is the "Priority"-slider which determines the interval
          in which a customer should be visited.
        </p>
        <Image
          src={customers}
          alt="Image showing the Customers screen of an app called Tempory"
        />
        <MoreProjects>
          <ProjectPreviewNexory />
        </MoreProjects>
      </div>
    </div>
  );
}
