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
  style = {},
  fontFamily = "Pretendard"
}) => {
  const textClass = textEn[variant];

  return (
    <div
      className={`${textClass} ${className}`}
      style={{ ...style, fontFamily }}
    >
      {children}
    </div>
  );
};

// 편의를 위한 특정 타이포그래피 컴포넌트들 (영어)
export const LargeTitle1En: React.FC<{
  children: React.ReactNode;
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, className, fontFamily, style }) => (
  <TypographyEn
    variant='largetitle1'
    className={className}
    fontFamily={fontFamily}
    style={style}
  >
    {children}
  </TypographyEn>
);

export const LargeTitle2En: React.FC<{
  children: React.ReactNode;
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, className, fontFamily, style }) => (
  <TypographyEn
    variant='largetitle2'
    className={className}
    fontFamily={fontFamily}
    style={style}
  >
    {children}
  </TypographyEn>
);

export const LargeTitle3En: React.FC<{
  children: React.ReactNode;
  weight?: "bold" | "medium";
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, weight = "bold", className, fontFamily, style }) => (
  <TypographyEn
    variant={weight === "bold" ? "largetitle3Bold" : "largetitle3Medium"}
    className={className}
    fontFamily={fontFamily}
    style={style}
  >
    {children}
  </TypographyEn>
);

export const Title1En: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium";
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, weight = "semibold", className, fontFamily, style }) => {
  const variantMap = {
    semibold: "title1Semibold",
    medium: "title1Medium"
  } as const;

  return (
    <TypographyEn
      variant={variantMap[weight]}
      className={className}
      fontFamily={fontFamily}
      style={style}
    >
      {children}
    </TypographyEn>
  );
};

export const Title2En: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "bold";
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, weight = "semibold", className, fontFamily, style }) => {
  const variantMap = {
    semibold: "title2Semibold",
    bold: "title2Bold"
  } as const;

  return (
    <TypographyEn
      variant={variantMap[weight]}
      className={className}
      fontFamily={fontFamily}
      style={style}
    >
      {children}
    </TypographyEn>
  );
};

export const Title3En: React.FC<{
  children: React.ReactNode;
  weight?: "semibold" | "medium";
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, weight = "semibold", className, fontFamily, style }) => {
  const variantMap = {
    semibold: "title3Semibold",
    medium: "title3Medium"
  } as const;

  return (
    <TypographyEn
      variant={variantMap[weight]}
      className={className}
      fontFamily={fontFamily}
      style={style}
    >
      {children}
    </TypographyEn>
  );
};

export const HeadlineEn: React.FC<{
  children: React.ReactNode;
  className?: string;
  fontFamily?: string;
  style?: React.CSSProperties;
}> = ({ children, className, fontFamily, style }) => (
  <TypographyEn
    variant='headlineMedium'
    className={className}
    fontFamily={fontFamily}
    style={style}
  >
    {children}
  </TypographyEn>
);
