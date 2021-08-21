import { getTimeProps } from "antd/lib/date-picker/generatePicker";
import React,{useState, useEffect} from "react";
import styled from "styled-components";
import {days, months} from "utils/constants";

const TodoHeadBlock = styled.div`
  display: inline-block;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;
const Wrap = styled.div`
  display: flex;
  place-content: center;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TimeText = styled.div`
  font-size: 15px;
  color: #105f777d;
  padding-top: 10px;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const [now, setNow] = useState(new Date());
  const day : string = days[now.getDay()];
  const month : string = months[now.getMonth()];
  const date : number = now.getDate();
  const year : number = now.getFullYear();
  let hour : string = now.getHours().toString().length < 2 ? '0'+now.getHours().toString() : now.getHours().toString();
  let minute : string = now.getMinutes().toString().length < 2 ? '0'+now.getMinutes().toString() : now.getMinutes().toString();
  let seconds : string = now.getSeconds().toString().length < 2 ? '0'+now.getSeconds().toString() : now.getSeconds().toString();

  useEffect(() => {
    setTimeout(()=> getNow(), 1000)
  }, [now])
  const getNow = () => {
    setNow(new Date());
  }
  
  return (
    <TodoHeadBlock>
      <Wrap>
        <DayText>{day}</DayText>
        <DateText>{month} {date}, {year}</DateText>
      </Wrap>
      <Wrap>
        <TimeText>{hour} : {minute} : {seconds}</TimeText>
      </Wrap>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
