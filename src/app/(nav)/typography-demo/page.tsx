import React from "react";
import {
  LargeTitle1,
  LargeTitle2,
  Title1,
  Title2,
  Title3,
  Headline,
  Body1,
  Body2,
  Caption1,
  Typography,
  LargeTitle1En,
  LargeTitle2En,
  LargeTitle3En,
  Title1En,
  Title2En,
  Title3En,
  HeadlineEn,
  TypographyEn
} from "@/component/shared";

export default function TypographyDemoPage() {
  return (
    <div className='p-8 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>
        타이포그래피 디자인 시스템 데모
      </h1>

      {/* 한글 타이포그래피 섹션 */}
      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-8 text-blue-600'>
          한글 타이포그래피 (Pretendard)
        </h2>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Large Title</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Large Title 1 (Bold)</h4>
              <LargeTitle1>하나비전교회에 오신 것을 환영합니다</LargeTitle1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Large Title 2 (Bold)</h4>
              <LargeTitle2 weight='bold'>
                하나비전교회에 오신 것을 환영합니다
              </LargeTitle2>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>
                Large Title 2 (Semibold)
              </h4>
              <LargeTitle2 weight='semibold'>
                하나비전교회에 오신 것을 환영합니다
              </LargeTitle2>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Title</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 1 (Semibold)</h4>
              <Title1 weight='semibold'>하나비전교회 소개</Title1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 1 (Medium)</h4>
              <Title1 weight='medium'>하나비전교회 소개</Title1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 1 (Bold)</h4>
              <Title1 weight='bold'>하나비전교회 소개</Title1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 2 (Semibold)</h4>
              <Title2 weight='semibold'>교회 비전과 미션</Title2>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 3 (Semibold)</h4>
              <Title3 weight='semibold'>예배 안내</Title3>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Headline</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Headline (Semibold)</h4>
              <Headline weight='semibold'>주일 예배 시간</Headline>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Headline (Medium)</h4>
              <Headline weight='medium'>주일 예배 시간</Headline>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Headline (Regular)</h4>
              <Headline weight='regular'>주일 예배 시간</Headline>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Body</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Body 1 (Regular)</h4>
              <Body1 weight='regular'>
                하나비전교회는 하나님의 말씀을 중심으로 한 교회입니다. 우리는
                예수 그리스도를 통해 하나님과의 관계를 회복하고, 서로를 사랑하며
                섬기는 공동체를 만들어갑니다.
              </Body1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Body 1 (Medium)</h4>
              <Body1 weight='medium'>
                하나비전교회는 하나님의 말씀을 중심으로 한 교회입니다. 우리는
                예수 그리스도를 통해 하나님과의 관계를 회복하고, 서로를 사랑하며
                섬기는 공동체를 만들어갑니다.
              </Body1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Body 1 (Semibold)</h4>
              <Body1 weight='semibold'>
                하나비전교회는 하나님의 말씀을 중심으로 한 교회입니다. 우리는
                예수 그리스도를 통해 하나님과의 관계를 회복하고, 서로를 사랑하며
                섬기는 공동체를 만들어갑니다.
              </Body1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Body 2 (Regular)</h4>
              <Body2 weight='regular'>
                주일 예배는 오전 10시 30분에 시작됩니다. 모든 분들을 환영합니다.
              </Body2>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Body 2 (Medium)</h4>
              <Body2 weight='medium'>
                주일 예배는 오전 10시 30분에 시작됩니다. 모든 분들을 환영합니다.
              </Body2>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Caption</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Caption 1 (Regular)</h4>
              <Caption1 weight='regular'>
                © 2024 하나비전교회. All rights reserved.
              </Caption1>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Caption 1 (Medium)</h4>
              <Caption1 weight='medium'>
                © 2024 하나비전교회. All rights reserved.
              </Caption1>
            </div>
          </div>
        </div>
      </section>

      {/* 영어 타이포그래피 섹션 */}
      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-8 text-green-600'>
          영어 타이포그래피 (Poppins)
        </h2>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Large Title</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Large Title 1 (Bold)</h4>
              <LargeTitle1En>Welcome to Hana Vision Church</LargeTitle1En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>
                Large Title 2 (Extrabold)
              </h4>
              <LargeTitle2En>Welcome to Hana Vision Church</LargeTitle2En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Large Title 3 (Bold)</h4>
              <LargeTitle3En weight='bold'>
                Welcome to Hana Vision Church
              </LargeTitle3En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>
                Large Title 3 (Medium)
              </h4>
              <LargeTitle3En weight='medium'>
                Welcome to Hana Vision Church
              </LargeTitle3En>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Title</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 1 (Semibold)</h4>
              <Title1En weight='semibold'>About Hana Vision Church</Title1En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 1 (Medium)</h4>
              <Title1En weight='medium'>About Hana Vision Church</Title1En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 2 (Semibold)</h4>
              <Title2En weight='semibold'>Vision and Mission</Title2En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 2 (Bold)</h4>
              <Title2En weight='bold'>Vision and Mission</Title2En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 3 (Semibold)</h4>
              <Title3En weight='semibold'>Worship Information</Title3En>
            </div>
            <div>
              <h4 className='text-lg font-medium mb-2'>Title 3 (Medium)</h4>
              <Title3En weight='medium'>Worship Information</Title3En>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl font-semibold mb-6'>Headline</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-lg font-medium mb-2'>Headline (Medium)</h4>
              <HeadlineEn>Sunday Service Time</HeadlineEn>
            </div>
          </div>
        </div>
      </section>

      {/* 직접 사용 예시 섹션 */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-6'>
          Typography 컴포넌트 직접 사용
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-medium mb-2'>
              한글 - 직접 variant 지정
            </h3>
            <Typography variant='title1Bold' className='text-blue-600'>
              커스텀 스타일이 적용된 한글 제목
            </Typography>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-2'>
              영어 - 직접 variant 지정
            </h3>
            <TypographyEn variant='title1Semibold' className='text-green-600'>
              Custom styled English title
            </TypographyEn>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-2'>
              기본 Body 1 Regular (한글)
            </h3>
            <Typography>기본 variant로 설정된 한글 텍스트입니다.</Typography>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-2'>
              기본 Headline Medium (영어)
            </h3>
            <TypographyEn>
              Default English text with headline medium variant.
            </TypographyEn>
          </div>
        </div>
      </section>
    </div>
  );
}
