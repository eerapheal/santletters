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
    url: "https://as1.ftcdn.net/v2/jpg/05/42/42/82/1000_F_542428260_vcubF3anWUTOsdYJGmEwJHexB6WKcxVg.jpg",
  },
  {
    url: "https://seekvectorlogo.com/wp-content/uploads/2018/11/clickhole-vector-logo.png",
  },
  {
    url: "https://thumbs.dreamstime.com/b/newsletter-text-written-over-blue-background-newsletter-blue-texture-blocks-127782740.jpg",
  },
  {
    url: "https://th.bing.com/th/id/OIP.1w73xZIW0e9_WI3WGFdq8AHaDU?w=700&h=314&rs=1&pid=ImgDetMain",
  },
];

export const freePlan: PlanType[] = [
  {
    title: "Up to 3,000 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  }
];

export const GrowPlan: PlanType[] = [
  {
    title: "Up to 15,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "ADs free",
  },
  {
    title: "API integration support",
  },
  {
    title: "Newsletter community",
  },
];

export const scalePlan: PlanType[] = [
  {
    title: "Up to 150,000 subscribers",
  },
  {
    title: "Referral program",
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
    source: "Santletters website",
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