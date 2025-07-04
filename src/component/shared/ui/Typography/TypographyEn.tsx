import { textEn } from "@/component/shared";

interface TypographyEnProps {
  variant?: keyof typeof textEn;
  children: React.ReactNode;
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}

export const TypographyEn: React.FC<TypographyEnProps> = ({
  variant = "headlineMedium",
  children,
  className = "",
  style = {}
}) => {
  const textClass = textEn[variant];

  return (
    <div className={`${textClass} ${className}`} style={style}>
      {children}
    </div>
  );
};

// 편의를 위한 특정 타이포그래피 컴포넌트들 (영어)
export const LargeTitle1En: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <TypographyEn variant='largetitle1' className={className}>
    {children}
  </TypographyEn>
);

export const LargeTitle2En: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <TypographyEn variant='largetitle2' className={className}>
    {children}
  </TypographyEn>
);

export const LargeTitle3En: React.FC<{
  children: React.ReactNode;
  weight?: "bold" | "medium";
  className?: string;
}> = ({ children, weight = "bold", className }) => (
  <TypographyEn
    variant={weight === "bold" ? "largetitle3Bold" : "largetitle3Medium"}
    className={className}
  >
    {children}
  </TypographyEn>
);

export const Title1En: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "title1Semibold",
    medium: "title1Medium"
  } as const;

  return (
    <TypographyEn variant={variantMap[weight]} className={className}>
      {children}
    </TypographyEn>
  );
};

export const Title2En: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "bold";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "title2Semibold",
    bold: "title2Bold"
  } as const;

  return (
    <TypographyEn variant={variantMap[weight]} className={className}>
      {children}
    </TypographyEn>
  );
};

export const Title3En: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium";
  className?: string;
}> = ({ children, weight = "semibold", className }) => {
  const variantMap = {
    semibold: "title3Semibold",
    medium: "title3Medium"
  } as const;

  return (
    <TypographyEn variant={variantMap[weight]} className={className}>
      {children}
    </TypographyEn>
  );
};

export const HeadlineEn: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <TypographyEn variant='headlineMedium' className={className}>
    {children}
  </TypographyEn>
);
