"use client";
import { ICONS } from "@/src/shared/utils/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Emaileditor from "@/src/shared/components/editor/email.editor"
const Page = () => {
  const searchParams = useSearchParams();
  const subject: string = searchParams.get("subject")!;
  const subjectTitle = subject.replace(/-/g, " ");

  return (
    <div className="w-full flex bg-[#F7F7F7]">
      <div className="w-full p-5 bg-white rounded-r-xl">
        <Link
          href={"/dashboard/write"}
          className="opacity-[.7] w-min flex text-xl items-center"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
        {/* Emaileditor */}
        <Emaileditor subjectTitle={subjectTitle} />
      </div>

    </div>
  );
};

export default Page;
