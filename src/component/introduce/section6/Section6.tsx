import React from "react";
import { Typography } from "@/component/shared";

import Image from "next/image";
import Button from "../Button";
import { useResponsiveTypography } from "@/component/shared";

const Section6 = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div
      className={`flex !mx-auto max-w-[1680px] ${
        mounted && isMobile ? "flex-col gap-[20px]" : "flex-row gap-[20px]"
      } justify-between items-center ${
        mounted && isMobile ? "!px-[20px]" : "!px-[120px]"
      } !py-[100px]`}
    >
      {/* 왼쪽 영역: 교회 이름 변천사 */}
      <div
        className={`flex flex-col items-center rounded-[20px] bg-[#FFFFFF] ${
          mounted && isMobile ? "h-full w-full" : "h-[396px] w-[68.8%]"
        }  !p-[40px]`}
        style={{
          boxShadow: "0px 0px 20px 0px #2C25070A"
        }}
      >
        <div className='flex flex-col h-full justify-between'>
          <div>
            <div className='flex flex-col items-center'>
              <Typography
                variant='largetitle2Bold'
                className='!text-[#0E4287] !mb-[20px]'
              >
                교회 이름 변천사
              </Typography>

              <Typography
                variant='body1Regular'
                className='!text-[#44423C] !mb-[12px] whitespace-pre-line text-center'
              >
                원천하나비전교회는 이름은 원천교회에서 시작되었습니다.
                원천1교회가 원천하나교회로, 분립개척하면서 하나비전교회로
                되었습니다. 숫자에서 시작되었지만, 이름이 변화되면서 '함께
                하나님 나라를 바라본다'(하나비전)는 의미를 가지게 되었습니다.
              </Typography>
            </div>
            <div
              className={`flex ${
                mounted && isMobile && "flex-col"
              } items-center gap-[12px] !mt-[40px] bg-[#F5F9FF] rounded-[12px] w-full !py-[20px] justify-center`}
            >
              <Typography variant='title2Bold' className='!text-[#1B5FB8]'>
                1교회
              </Typography>
              <Image
                src='/images/arrow.png'
                alt='arrow'
                width={34}
                height={22}
                className={`w-[24px] ${
                  mounted && isMobile && "rotate-[90deg]"
                }`}
              />
              <Typography variant='title2Bold' className='!text-[#1B5FB8]'>
                하나교회
              </Typography>
              <Image
                src='/images/arrow.png'
                alt='arrow'
                width={34}
                height={22}
                className={`w-[24px] ${
                  mounted && isMobile && "rotate-[90deg]"
                }`}
              />
              <Typography variant='title2Bold' className='!text-[#1B5FB8]'>
                하나비전교회
              </Typography>
            </div>
          </div>

          <Button
            title={"원천교회 바로가기"}
            onClick={() => {
              window.open("https://www.wonchon.org/", "_blank");
            }}
          />
        </div>
      </div>

      {/* 오른쪽 영역: 소속 정보 */}
      <div
        className={`flex flex-col items-center rounded-[20px] bg-[#FFFFFF] ${
          mounted && isMobile ? "h-full w-full" : "h-[396px] w-[31.2%]"
        }  !p-[40px]`}
      >
        <div className='flex flex-col h-full justify-between'>
          <div>
            <div className='flex flex-col items-center'>
              <Typography
                variant='largetitle2Bold'
                className='!text-[#0E4287] !mb-[20px]'
              >
                소속
              </Typography>

              <Typography
                variant='body1Regular'
                className='!text-[#44423C] text-center whitespace-pre-line !leading-[28px]'
              >
                하나비전교회는 한국독립교회선교협의회(kaicam.org)에 소속되어
                있습니다. 이외 소속 교회로는 원천안디옥교회(김정환 원로목사),
                한빛두란노교회 (김상복 원로목사), CCC(한국대학생선교회),
                베이직처치(조정민목사), 라이프하우스처치(홍민기목사) 등이
                소속되어 있습니다.
              </Typography>
            </div>
          </div>

          <Button
            title={"소속연합 바로가기"}
            onClick={() => {
              window.open("https://home.kaicam.org/index.asp", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
