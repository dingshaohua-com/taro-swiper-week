<div align="center"> 
<h1>taro-swiper-week</h1>

![](https://img.shields.io/badge/taro_swiper_week-v0.0.1-brightgreen)
<br> <br>
taro-swiper-week is a date picker for taro.    
It can be used in many platforms such as H5、mini program!

![img](https://github.com/dingshaohua-cn/taro-swiper-week/blob/main/preview/img.gif?raw=true)

[简体中文](./README.md) | English
</div>






## 🔨 Usage

How to install

```shell
npm install taro-swiper-week
```

Use in page

```js
import SwiperWeek from "taro-swiper-week";
import "taro-swiper-week/lib/index.css";
import { View } from "@tarojs/components";
import { useState } from "react";

export default () => {
  const [day, setDay] = useState("2022-08-11");
  const onChange = val => {
    setDay(val);
  };
  return (
    <>
      <SwiperWeek value={day} onChange={onChange} />
      <View>选中日期：{day}</View>
    </>
  );
};
```

If your environment is H5, you need to modify the configuration items as follows.    
Because the unit conversion of taro does not process node_ Modules, the following configuration can help us convert.
```js
// config/index.js
const config = {
  ...
  h5: {
    esnextModules:['taro-swiper-week'],
    ...
  }
  ...
}
```


## 🍭 Options

| props         | explain                      | type     | default |
| ------------ | -------------------------- | -------- | ---- |
| value        | init value                     | string   | 今天 |
| hideNickname | hide nickname, such as yesterday、 tomorrow | boolean  | true |
| onChange     | date selection callback              | function(value) | - |

## 🤝 thanks
If this project is helpful to you, please click a Star