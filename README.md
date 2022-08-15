<div align="center"> 
<h1>taro-swiper-week</h1>

![](https://img.shields.io/badge/taro_swiper_week-v0.0.1-brightgreen)
<br> <br>

</div>

## 简介

taro-swiper-week 是一个基于 taro 的日期选择器控件。  
![img](https://github.com/dingshaohua-cn/taro-swiper-week/blob/main/preview/img.gif?raw=true)

## 使用

先安装

```shell
npm install taro-swiper-week
```

再引入页面

```js
import SwiperWeek from "taro-swiper-week";
import { View } from "@tarojs/components";
import { useState } from "react";

export default () => {
  const [day, setDay] = useState("2022-08-11");
  const onChange = (val) => {
    setDay(val);
  };
  return (
    <>
      <View>选中日期：{day}</View>
      <SwiperWeek value={day} onChange={onChange} />
    </>
  );
};
```

## 配置项

| 参数         | 说明                       | 类型    | 默认 |
| ------------ | -------------------------- | ------- | ---- |
| value        | 初始值                     | string  | 今天 |
| hideNickname | 隐藏日期别名，如昨天、明天 | boolean | true |
