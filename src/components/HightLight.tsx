interface HighLightProps {
  children: React.ReactNode;
  className?: string;
}
export default function HighLight({ children, className }: HighLightProps) {
  return (
    <strong style={{ backgroundColor: 'yellow' }} className={className}>
      {children}
    </strong>
  );
}
