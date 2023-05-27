interface CardButtonProps {
  action: () => Promise<void> | void;
  children: string;
}

export default function CardButton({ action, children }: CardButtonProps) {
  return <button onClick={action}>{children}</button>;
}
