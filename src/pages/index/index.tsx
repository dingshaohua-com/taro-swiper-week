// @ts-nocheck
import { View } from "@tarojs/components";
import { useState } from "react";

export default () => {
  const [day, setDay] = useState("2022-08-11");
  const extraProps = {
    value: day,
    onChange(val) {
      setDay(val);
    }
  };
  return (
    <>
      <View>选中日期：{day}</View>
      <taro-swiper-week props={extraProps} />
    </>
  );
};
