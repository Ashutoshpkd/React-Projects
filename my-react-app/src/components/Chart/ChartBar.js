import React from "react";
import * as S from './ChartBar.style';

const ChartBar = (props) => {
    const {
        label,
        maxValue,
        value,
    } = props;

    const percentageFill = maxValue > 0 ? `${(value/maxValue)*100}%` : '0%';
    console.log(percentageFill);
    console.log('ASHUTOSH')

    return (
        <S.CharBar>
            <S.ContentWrapper>
                <S.BarFill style={{height: percentageFill}}>
                </S.BarFill>
            </S.ContentWrapper>
            <S.Label>{label}</S.Label>
        </S.CharBar>
    );
};

export default ChartBar;