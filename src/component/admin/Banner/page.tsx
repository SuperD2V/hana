import { AdminHeader } from "@/component/shared";
import {
  bannerContainer,
  bulletinContainer,
  buttonStyle,
  imageContainer,
  registerButtonStyle,
  deleteButtonStyle
} from "./index.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={bannerContainer}>
      <div>
        <AdminHeader
          title='배너사진'
          buttonClick={() => {}}
          isButton={false}
          buttonText=''
        />
      </div>
      <div className={imageContainer}>
        <Image src='' alt='banner' width={100} height={100} />
      </div>
      <div className={bulletinContainer}>
        <button className={registerButtonStyle}>사진변경</button>
        <button className={deleteButtonStyle}>삭제하기</button>
      </div>
    </div>
  );
};

export default Banner;
