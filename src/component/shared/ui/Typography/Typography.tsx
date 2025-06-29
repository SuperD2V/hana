import { text } from "@/component/shared";

interface TypographyProps {
  variant?: keyof typeof text;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1Regular",
  children,
  className = ""
}) => {
  const textClass = text[variant];

  return <span className={`${textClass} ${className}`}>{children}</span>;
};

// 편의를 위한 특정 타이포그래피 컴포넌트들
export const LargeTitle1: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <Typography variant='largetitle1' className={className}>
    {children}
  </Typography>
);

export const LargeTitle2: React.FC<{
  children: React.ReactNode;
  weight?: "bold" | "semibold";
  className?: string;
}> = ({ children, weight = "bold", className }) => (
  <Typography
    variant={weight === "bold" ? "largetitle2Bold" : "largetitle2Semibold"}
    className={className}
  >
    {children}
  </Typography>
);

export const Title1: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium" | "bold";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "title1Semibold",
    medium: "title1Medium",
    bold: "title1Bold"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};

export const Title2: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium" | "bold";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "title2Semibold",
    medium: "title2Medium",
    bold: "title2Bold"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};

export const Title3: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium" | "bold";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "title3Semibold",
    medium: "title3Medium",
    bold: "title3Bold"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};

export const Headline: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium" | "regular";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "headlineSemibold",
    medium: "headlineMedium",
    regular: "headlineRegular"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};

export const Body1: React.FC<{
  children: React.ReactNode;
  weight?: "medium" | "regular" | "semibold";
  className?: string;
}> = ({ children, weight = "regular", className }) => {
  const variantMap = {
    medium: "body1Medium",
    regular: "body1Regular",
    semibold: "body1Semibold"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};

export const Body2: React.FC<{
  children: React.ReactNode;
  weight?: "medium" | "regular";
  className?: string;
}> = ({ children, weight = "regular", className }) => {
  const variantMap = {
    medium: "body2Medium",
    regular: "body2Regular"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};

export const Caption1: React.FC<{
  children: React.ReactNode;
  weight?: "medium" | "regular";
  className?: string;
}> = ({ children, weight = "regular", className }) => {
  const variantMap = {
    medium: "caption1Medium",
    regular: "caption1Regular"
  } as const;

  return (
    <Typography variant={variantMap[weight]} className={className}>
      {children}
    </Typography>
  );
};
