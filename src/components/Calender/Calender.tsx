import { useCallback } from 'react';
import styled from 'styled-components';
import useCalender from '../../hooks/useCalender';
import useCalenderData from '../../hooks/useCalenderData';
import { formatYearMonth } from '../../utils/dateFormat';
import CalenderHeader from './CalenderHeader';
import CalenderInner from './CalenderInner';

export type CellClickEventHandler = (timestamp: string) => void;

const Calender = () => {
  const {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  } = useCalender();
  const { attendence, addAttendence } = useCalenderData();

  /**
   * @description
   * 클릭 시 출석 체크를 진행한다.
   * ANCHOR
   * 현재는 임시로 구현된 부분이므로, 추후 변경되어야 함
   * try...catch block을 이용하여 정시에 출석체크 했는지 체크
   * 이미 출석했다면, 눌러도 반응이 없도록 해야 함
   * 자료 구조를 set으로 바꿔야 할 필요성도 있음
   * 출석하기 버튼은 따로 두고, 달력 cell 클릭 시 출석 정보를 불러오도록 하기
   */
  const handleClickItem: CellClickEventHandler = useCallback(async () => {
    await addAttendence();
  }, [addAttendence]);

  return (
    <Container>
      <CalenderHeader
        title={formatYearMonth(calender.year, calender.month)}
        onCurrent={setCurrentMonthCalender}
        onNext={setNextMonthCalender}
        onPrev={setPrevMonthCalender}
      />
      <CalenderInner
        calender={calender}
        items={attendence}
        onClickItem={handleClickItem}
      />
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
