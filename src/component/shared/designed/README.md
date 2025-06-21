# 디자인 시스템

## 타이포그래피

Pretendard Variable 폰트를 사용한 타이포그래피 디자인 시스템입니다.

### 폰트 설정

- **폰트 패밀리**: Pretendard Variable
- **폰트 웨이트**: Regular (400), Medium (500), Semibold (600), Bold (700)

### 사용법

#### 1. Typography 컴포넌트 사용

```tsx
import { Typography } from '@/component/shared';

// 기본 사용 (Body 1 Regular)
<Typography>기본 텍스트</Typography>

// variant 지정
<Typography variant="title1Bold">제목 텍스트</Typography>

// 추가 클래스 적용
<Typography variant="headlineSemibold" className="text-blue-600">
  커스텀 스타일이 적용된 텍스트
</Typography>
```

#### 2. 특정 타이포그래피 컴포넌트 사용

```tsx
import {
  LargeTitle1,
  Title1,
  Headline,
  Body1,
  Caption1
} from '@/component/shared';

// Large Title
<LargeTitle1>하나비전교회에 오신 것을 환영합니다</LargeTitle1>

// Title (weight 옵션: 'semibold' | 'medium' | 'bold')
<Title1 weight="bold">하나비전교회 소개</Title1>

// Headline (weight 옵션: 'semibold' | 'medium' | 'regular')
<Headline weight="semibold">주일 예배 시간</Headline>

// Body (weight 옵션: 'medium' | 'regular' | 'semibold')
<Body1 weight="regular">
  하나비전교회는 하나님의 말씀을 중심으로 한 교회입니다.
</Body1>

// Caption (weight 옵션: 'medium' | 'regular')
<Caption1 weight="regular">© 2024 하나비전교회</Caption1>
```

#### 3. 직접 스타일 사용

```tsx
import { text } from '@/component/shared';

// CSS 클래스로 직접 사용
<div className={text.title1Bold}>제목</div>
<div className={text.body1Regular}>본문</div>
```

### 타이포그래피 토큰

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

### 데모 페이지

타이포그래피 디자인 시스템을 확인하려면 `/typography-demo` 페이지를 방문하세요.

### 주의사항

1. Pretendard Variable 폰트는 CDN을 통해 로드됩니다.
2. 모든 타이포그래피 스타일은 vanilla-extract를 사용하여 생성됩니다.
3. 한글 폰트 최적화를 위해 적절한 fallback 폰트가 설정되어 있습니다.
