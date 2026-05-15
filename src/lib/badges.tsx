import React from "react";
import {
  Leaf,
  ShieldCheck,
  RectangleVertical,
  Droplets,
  Anchor,
  Award,
  FlaskConical,
  BadgeCheck,
} from "lucide-react";

export function getBadgeClass(badge: string): string {
  switch (badge) {
    case "Ognioodporny":
      return "bg-red-600 hover:bg-red-700 text-white";
    case "EMICODE EC1":
    case "EC1 plus R":
      return "bg-emerald-700 hover:bg-emerald-800 text-white";
    case "Mikroemisyjny":
      return "bg-teal-600 hover:bg-teal-700 text-white";
    case "D4":
    case "EPI · D4":
      return "bg-blue-600 hover:bg-blue-700 text-white";
    case "IMO":
      return "bg-blue-800 hover:bg-blue-900 text-white";
    case "EN 15425":
      return "bg-indigo-600 hover:bg-indigo-700 text-white";
    case "RAL GZ 716":
    case "RAL GZ 716/1":
      return "bg-amber-500 hover:bg-amber-600 text-white";
    case "Do luster":
      return "bg-sky-600 hover:bg-sky-700 text-white";
    default:
      return "bg-slate-600 hover:bg-slate-700 text-white";
  }
}

export function getBadgeIcon(badge: string): React.ReactElement {
  switch (badge) {
    case "Ognioodporny":
      return <ShieldCheck className="h-3 w-3" />;
    case "EMICODE EC1":
    case "EC1 plus R":
    case "Mikroemisyjny":
      return <Leaf className="h-3 w-3" />;
    case "D4":
    case "EPI · D4":
      return <Droplets className="h-3 w-3" />;
    case "IMO":
      return <Anchor className="h-3 w-3" />;
    case "EN 15425":
      return <FlaskConical className="h-3 w-3" />;
    case "RAL GZ 716":
    case "RAL GZ 716/1":
      return <Award className="h-3 w-3" />;
    case "Do luster":
      return <RectangleVertical className="h-3 w-3" />;
    default:
      return <BadgeCheck className="h-3 w-3" />;
  }
}
