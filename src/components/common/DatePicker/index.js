import React, {memo} from 'react';
import moment from 'moment'
import {DatePicker} from "native-base";

const CURRENT_DATE = moment.utc();
const MAX_DATE = CURRENT_DATE.clone().add(10, 'year');
const MIN_DATE = CURRENT_DATE.clone().subtract(10, 'year');

const DatePickerComponent = memo((props) => (
    <DatePicker
        defaultDate={CURRENT_DATE.toDate()}
        minimumDate={MIN_DATE.toDate()}
        maximumDate={MAX_DATE.toDate()}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Select date"
        textStyle={{color: "green"}}
        placeHolderTextStyle={{color: "#d3d3d3"}}
        disabled={false}
        {...props}
    />
));

export default DatePickerComponent;