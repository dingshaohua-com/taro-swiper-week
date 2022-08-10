import dayjs from "dayjs";

/**
 * 获取日期别称
 * 根据传入日期，返回前天 昨天 今天 明天 后天等
 * @param curren 当前日期
 * @returns前天 昨天 今天 明天 后天等日期别称
 */

const getDateNickname = current => {
  const dataNickname = {
    // "-2": "前天",
    "-1": "昨天",
    "0": "今天",
    "1": "明天",
    // "2": "后天"
  };
  const today = dayjs().format("YYYY-MM-DD");
  const diffDay = dayjs(current).diff(today, "day", true);
  return dataNickname[diffDay];
};

/**
 * 根据传入日期，返回周几
 * @param curren 当前日期
 * @returns 周几
 */
export const getWeekName = (current, hideNickname=false) => {
  const dataNickname = getDateNickname(current);
  if (dataNickname && !hideNickname) {
    return dataNickname;
  } else {
    const dayNum = dayjs(current).get("day");
    return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][dayNum];
  }
};

const weekArr = [1, 2, 3, 4, 5, 6, 7];

/**
 * 传入当前日期 获取上周 本周 下周的日期二维数组
 * @param current 当前日期
 * @returns 上周 本周 下周的日期二维数组
 */
export const getWeekDay = (current = new Date()) => {
  // 获取当前一周的 7天日期
  const weekFirstDay = dayjs(current)
    .startOf("week")
    .add(1, "day"); // 当前周的第一天
  const currentWeekDay = weekArr.map((_, index) =>
    dayjs(weekFirstDay)
      .add(index, "day")
      .format("YYYY-MM-DD")
  );

  // 获取当前一周的 7天日期（将今天放在在第一位 而不是将周一放在第一位）
  // const currentWeekDay = weekArr.map((item, index) =>
  //   dayjs(current)
  //     .add(index, "day")
  //     .format("YYYY-MM-DD")
  // );

  // 获取上周的 7天日期
  const preWeekDay = weekArr
    .map(item =>
      dayjs(currentWeekDay[0])
        .subtract(item, "day")
        .format("YYYY-MM-DD")
    )
    .reverse();

  // 获取下周的 7天日期
  const nextWeekDay = weekArr.map(item =>
    dayjs(currentWeekDay[currentWeekDay.length - 1])
      .add(item, "day")
      .format("YYYY-MM-DD")
  );

  return [preWeekDay, currentWeekDay, nextWeekDay];
};

export const getSwiperIndex = (current, type = "next") => {
  const nextDict = {
    0: 1,
    1: 2,
    2: 0
  };
  const preDict = {
    0: 2,
    1: 0,
    2: 1
  };
  return type === "pre" ? preDict[current] : nextDict[current];
};
