import { TextInput, CustomTextInput } from '@findxdn/erp-theme';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Constants from 'utils/Constants';
import { convertNumberToString } from 'utils/String';
import PropTypes from 'prop-types';
import Validator from 'utils/Validate';

const FormInput = (props) => {
    const {
        defaultValue,
        fieldName,
        validate,
        placeholder,
        format = '',
        readOnly = false,
        isTooltip = false,
        max = 1000000000,
        min = 0,
        isMui = false,
        icon,
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();
    // let arr = fieldName.split(".");
    // let error = {}
    // if (arr.length > 1) {
    //     let result = arr.reduce((rs, e) => {
    //         if (rs[e]) {
    //             return rs = rs[e]
    //         }
    //         return {}

    //     }, errors)
    //     error = result
    // }
    return (
        <div className="Input w-100">
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        const onChangeValue = (e) => {
                            if (
                                format == Constants.FormInputFormat.MONEY.VALUE
                            ) {
                                let val = e.target.value.replace(
                                    /[^0-9]+/g,
                                    '',
                                );
                                val = val?.replace(/^0+/, '');
                                if (val == '') {
                                    onChange('');
                                    props.onChangeValue &&
                                        props.onChangeValue('');
                                } else {
                                    if (val >= max) {
                                        props.onChangeValue &&
                                            props.onChangeValue(max);
                                        onChange(max);
                                    } else {
                                        if (val <= min) {
                                            props.onChangeValue &&
                                                props.onChangeValue(min);
                                            onChange(min);
                                        } else {
                                            props.onChangeValue &&
                                                props.onChangeValue(val);
                                            onChange(parseInt(val));
                                        }
                                    }
                                }
                            } else {
                                props.onChangeValue &&
                                    props.onChangeValue(e.target.value);
                                onChange(e.target.value);
                            }
                        };
                        const onKeyPress = (e) => {
                            if (
                                format == Constants.FormInputFormat.MONEY.VALUE
                            ) {
                                if (!/^[0-9.]*$/i.test(e.key)) {
                                    e.preventDefault();
                                    return false;
                                }
                            }
                        };
                        const convertValue = (val) => {
                            if (
                                format == Constants.FormInputFormat.MONEY.VALUE
                            ) {
                                if (
                                    val?.toString() != '' &&
                                    parseInt(val) == 0
                                ) {
                                    return 0;
                                }
                                if (val != '' && parseInt(val) > 0) {
                                    val = parseInt(val);
                                    return convertNumberToString(
                                        val.toString().split('.').join(''),
                                        '.',
                                    );
                                }
                                if (val == null || val == undefined) {
                                    return '';
                                }
                            } else if (
                                format ==
                                Constants.FormInputFormat.DECIMAL.VALUE
                            ) {
                                if (
                                    val?.toString() == '' &&
                                    parseInt(val) == 0
                                ) {
                                    return 0;
                                }
                                if (val != '' && parseFloat(val) > 0) {
                                    val = parseFloat(val);
                                    return convertNumberToString(
                                        val.toString(),
                                    );
                                }
                                if (val == null || val == undefined) {
                                    return 0;
                                }
                            } else {
                                return val;
                            }
                        };
                        return (
                            <>
                                {isMui ? (
                                    <TextInput
                                        _props={{ inputRef: ref }}
                                        name={fieldName}
                                        onChange={onChangeValue}
                                        onBlur={onBlur}
                                        value={convertValue(value)}
                                        placeholder={`${placeholder}`}
                                        errors={errors}
                                        required={false}
                                        defaultValue={defaultValue}
                                        onKeyPress={onKeyPress}
                                        readOnly={readOnly}
                                        onFocus={(e) => e.target.select()}
                                        isTooltip={isTooltip}
                                        _inputProps={{
                                            maxLength: props.maxLength,
                                            style: {
                                                textAlign:
                                                    format ==
                                                    Constants.FormInputFormat
                                                        .MONEY.VALUE
                                                        ? 'right'
                                                        : 'left',
                                            },
                                        }}
                                    />
                                ) : (
                                    <CustomTextInput
                                        fieldref={ref}
                                        name={fieldName}
                                        onChange={onChangeValue}
                                        onBlur={onBlur}
                                        value={convertValue(value)}
                                        placeholder={placeholder}
                                        errors={errors}
                                        required={false}
                                        defaultValue={defaultValue}
                                        onKeyPress={onKeyPress}
                                        disabled={readOnly}
                                        onFocus={(e) => e.target.select()}
                                        isTooltip={isTooltip}
                                        style={{
                                            textAlign:
                                                format ==
                                                    Constants.FormInputFormat
                                                        .MONEY.VALUE ||
                                                format ==
                                                    Constants.FormInputFormat
                                                        .DECIMAL.VALUE
                                                    ? 'right'
                                                    : 'left',
                                            paddingRight:
                                                format ==
                                                    Constants.FormInputFormat
                                                        .MONEY.VALUE ||
                                                format ==
                                                    Constants.FormInputFormat
                                                        .DECIMAL.VALUE
                                                    ? 10
                                                    : 0,
                                        }}
                                        maxLength={props.maxLength}
                                        icon={icon}
                                    />
                                )}
                            </>
                        );
                    }}
                />
            </div>
            {/* {error?.message && (
                <MessageError type={error?.type} message={error?.message} />
            )} */}
        </div>
    );
};
FormInput.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
};

FormInput.propTypes = {
    isMui: PropTypes.bool,
};
export default FormInput;
