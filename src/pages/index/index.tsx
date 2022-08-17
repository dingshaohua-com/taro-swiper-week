// @ts-ignore
import SwiperWeek from "../../components/taro-swiper-week";
import { View } from "@tarojs/components";
import { useState } from "react";

export default () => {
  const [day, setDay] = useState("2022-08-11");
  const onChange = val => {
    setDay(val);
  };
  return (
    <>
      <SwiperWeek hideNickname={true} value={day} onChange={onChange} />
      <View>选中日期：{day}</View>
    </>
  );
};
