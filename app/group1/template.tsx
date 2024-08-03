"use client";

import { useEffect, useState } from "react";
import { TimeIndicator } from "../components/TimeIndicator";

export default function GroupTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      group1 template: <TimeIndicator date={date} />
      {children}
    </div>
  );
}
