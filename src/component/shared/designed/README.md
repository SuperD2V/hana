# 디자인 시스템

## 타이포그래피

한글과 영어를 위한 이중 타이포그래피 디자인 시스템입니다.

### 폰트 설정

#### 한글 (Pretendard Variable)

- **폰트 패밀리**: Pretendard Variable
- **폰트 웨이트**: Regular (400), Medium (500), Semibold (600), Bold (700)

#### 영어 (Poppins)

- **폰트 패밀리**: Poppins
- **폰트 웨이트**: Regular (400), Medium (500), Semibold (600), Bold (700), Extrabold (800)

### 사용법

#### 1. 한글 타이포그래피 컴포넌트 사용

```tsx
import { Typography, Title1, Body1 } from '@/component/shared';

// 기본 사용 (Body 1 Regular)
<Typography>기본 텍스트</Typography>

// variant 지정
<Typography variant="title1Bold">제목 텍스트</Typography>

// 특정 컴포넌트 사용
<Title1 weight="bold">하나비전교회 소개</Title1>
<Body1 weight="regular">본문 텍스트</Body1>
```

#### 2. 영어 타이포그래피 컴포넌트 사용

```tsx
import { TypographyEn, Title1En, LargeTitle1En } from '@/component/shared';

// 기본 사용 (Headline Medium)
<TypographyEn>Default English text</TypographyEn>

// variant 지정
<TypographyEn variant="title1Semibold">English title</TypographyEn>

// 특정 컴포넌트 사용
<LargeTitle1En>Welcome to Hana Vision Church</LargeTitle1En>
<Title1En weight="semibold">About Our Church</Title1En>
```

#### 3. 직접 스타일 사용

```tsx
import { text, textEn } from '@/component/shared';

// 한글 CSS 클래스로 직접 사용
<div className={text.title1Bold}>한글 제목</div>
<div className={text.body1Regular}>한글 본문</div>

// 영어 CSS 클래스로 직접 사용
<div className={textEn.largetitle1}>English title</div>
<div className={textEn.headlineMedium}>English headline</div>
```

### 타이포그래피 토큰

#### 한글 타이포그래피 (Pretendard)

| Level         | Font Size | Line Height | Letter-spacing | Weight                    | 사용 예시     |
| ------------- | --------- | ----------- | -------------- | ------------------------- | ------------- |
| Large Title 1 | 36px      | 70px        | 0.41px         | Bold                      | `LargeTitle1` |
| Large Title 2 | 36px      | 44px        | 0.37px         | Bold, Semibold            | `LargeTitle2` |
| Title 1       | 28px      | 36px        | 0.36px         | Semibold, Medium, Bold    | `Title1`      |
| Title 2       | 24px      | 30px        | 0.35px         | Semibold, Medium, Bold    | `Title2`      |
| Title 3       | 20px      | 26px        | 0.38px         | Semibold, Medium, Bold    | `Title3`      |
| Headline      | 18px      | 24px        | -0.41px        | Semibold, Medium, Regular | `Headline`    |
| Body 1        | 16px      | 26px        | -0.28px        | Medium, Regular, Semibold | `Body1`       |
| Body 2        | 14px      | 20px        | -0.5px         | Medium, Regular           | `Body2`       |
| Caption 1     | 12px      | 16px        | 0px            | Medium, Regular           | `Caption1`    |

#### 영어 타이포그래피 (Poppins)

| Level         | Font Size | Line Height | Weight           | 사용 예시       |
| ------------- | --------- | ----------- | ---------------- | --------------- |
| Large Title 1 | 80px      | 80px        | Bold             | `LargeTitle1En` |
| Large Title 2 | 60px      | 72px        | Extrabold        | `LargeTitle2En` |
| Large Title 3 | 40px      | 48px        | Bold, Medium     | `LargeTitle3En` |
| Title 1       | 28px      | 36px        | Semibold, Medium | `Title1En`      |
| Title 2       | 24px      | 30px        | Semibold, Bold   | `Title2En`      |
| Title 3       | 20px      | 28px        | Semibold, Medium | `Title3En`      |
| Headline      | 18px      | 26px        | Medium           | `HeadlineEn`    |

### 컴포넌트 목록

#### 한글 컴포넌트

- `Typography` - 범용 타이포그래피 컴포넌트
- `LargeTitle1`, `LargeTitle2` - 대제목
- `Title1`, `Title2`, `Title3` - 제목
- `Headline` - 헤드라인
- `Body1`, `Body2` - 본문
- `Caption1` - 캡션

#### 영어 컴포넌트

- `TypographyEn` - 범용 영어 타이포그래피 컴포넌트
- `LargeTitle1En`, `LargeTitle2En`, `LargeTitle3En` - 대제목
- `Title1En`, `Title2En`, `Title3En` - 제목
- `HeadlineEn` - 헤드라인

### 데모 페이지

타이포그래피 디자인 시스템을 확인하려면 `/typography-demo` 페이지를 방문하세요.

### 주의사항

1. Pretendard Variable과 Poppins 폰트는 CDN을 통해 로드됩니다.
2. 모든 타이포그래피 스타일은 vanilla-extract를 사용하여 생성됩니다.
3. 한글과 영어 폰트에 적절한 fallback 폰트가 설정되어 있습니다.
4. 언어별로 적절한 컴포넌트를 사용하여 최적의 가독성을 확보하세요.
