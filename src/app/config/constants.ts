import { ICONS } from "@/src/shared/utils/icons";
import { atom } from "jotai";

export const navItems: NavItems[] = [
  {
    title: "Features",
  },
  {
    title: "Pricing",
  },
  {
    title: "Resources",
  },
  {
    title: "Docs",
  },
];

export const partners: PartnersTypes[] = [
  {
    url: "https://mumbrella.com.au/wp-content/uploads/2019/05/10daily_NWB.jpg",
  },
  {
    url: "https://seekvectorlogo.com/wp-content/uploads/2018/11/clickhole-vector-logo.png",
  },
  {
    url: "https://seekvectorlogo.com/wp-content/uploads/2018/11/clickhole-vector-logo.png",
  },
  {
    url: "https://mumbrella.com.au/wp-content/uploads/2019/05/10daily_NWB.jpg",
  },
  {
    url: "https://pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png",
  },
];

export const freePlan: PlanType[] = [
  {
    title: "Up to 2,500 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  },
];

export const GrowPlan: PlanType[] = [
  {
    title: "Up to 10,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "Newsletter community",
  },
];

export const scalePlan: PlanType[] = [
  {
    title: "Up to 100,000 subscribers",
  },
  {
    title: "Referal program",
  },
  {
    title: "AI support",
  },
  {
    title: "Advanced support system",
  },
  {
    title: "Ad Network",
  },
];

export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Profile");

export const sideBarItems: DashboardSideBarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems: DashboardSideBarTypes[] = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/",
    icon: ICONS.world,
  },
];

export const subscribersData: subscribersDataTypes[] = [
  {
    _id: "64f717a45331088de2ce886c",
    email: "ralph@gmail.com",
    createdAt: "5Feb 2024",
    source: "Becodemy website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886c",
    email: "support@santletters.com",
    createdAt: "8Mar 2024",
    source: "External website",
    status: "subscribed",
  },
];