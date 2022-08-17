import dayjs from "dayjs";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import { getWeekName, getWeekDay, getSwiperIndex } from "./helper";
import { useState } from "react";
import cs from "classnames";
import "./style.scss";

export default props => {
  // Swiper初始化 上周 本周 下周的数据
  const [weekDays, setWeekDays] = useState<any>(getWeekDay());
  // Swiper当前展示的面板索引 默认是1 即显示本周的日期组
  const [activeSwiper, setActiveSwiper] = useState(1);
  // 当前激活的选中日期
  const [activeDay, setActiveDay] = useState(props.value);

  /**
   * 日期点击
   */
  const dayClick = item => {
    setActiveDay(item);
    props.onChange(item);
  };

  /**
   * Swiper 滚动事件
   * 通过滚动 提前计算并复制好 即将到来的一周日期组
   */
  const onSwiperChange = e => {
    const oIndex = e.detail.current;
    let ind = oIndex - activeSwiper;
    const comeGroup = weekDays[oIndex];
    if (ind === 1 || ind === -2) {
      // 向左滑动:给即将到来的下一轮设置新值
      const lastDay = comeGroup[comeGroup.length - 1];
      const swiperIndex = getSwiperIndex(oIndex);
      weekDays[swiperIndex] = getWeekDay(lastDay)[1];
    } else if (ind === -1 || ind === 2) {
      // 向右滑动:给即将到来的上一轮设置新值
      const fistDay = comeGroup[0];
      console.log(fistDay, getWeekDay(fistDay)[0]);
      const swiperIndex = getSwiperIndex(oIndex, "pre");
      weekDays[swiperIndex] = getWeekDay(fistDay)[0];
    }
    setActiveSwiper(oIndex);
  };

  return (
    <View className="week-swiper">
      <Swiper
        circular
        current={activeSwiper}
        onChange={onSwiperChange}
        className="week-swiper-wrapp"
      >
        {weekDays.map((weekDay, index) => (
          <SwiperItem key={index}>
            <View className="items" key={index}>
              {weekDay.map((item,itemIndex) => (
                <View
                  key={index+'-'+itemIndex}
                  className={cs("item", {
                    tody: dayjs().isSame(item, "day"),
                    active: dayjs(activeDay).isSame(dayjs(item), "date")
                  })}
                  onClick={() => {
                    dayClick(item);
                  }}
                >
                  <View className="week">{getWeekName(item, props.hideNickname)}</View>
                  <View className="day">{dayjs(item).format("MM-DD")}</View>
                </View>
              ))}
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};
