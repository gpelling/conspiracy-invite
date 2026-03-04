import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disherwasher Crimes",
  description: "Wanted for crimes against the kitchen",
};

export default function DisherwasherCrimesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Rye&display=swap"
        rel="stylesheet"
      />
      <style>{`
        body {
          background: #5c4a2a !important;
          color: #1a0a00 !important;
          font-family: 'Special Elite', serif !important;
          overflow: auto !important;
          min-height: 100vh;
        }
      `}</style>
      {children}
    </>
  );
}
