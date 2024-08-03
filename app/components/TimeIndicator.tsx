export const TimeIndicator = ({ date }: { date: Date | null }) => {
  return <>{date?.toISOString().slice(11, 23)}</>;
};
