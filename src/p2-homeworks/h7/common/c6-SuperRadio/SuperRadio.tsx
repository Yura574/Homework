import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import SuperRadioClass from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    debugger
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        debugger
        onChange && onChange(e)
       onChangeOption&& onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i} className={SuperRadioClass.rad_label}>
            <input
                type={"radio"}
                onChange={ onChangeCallback}
                checked={o === value}
                value={o}
                name={name}
                className={SuperRadioClass.radio}
            />
            <div className={SuperRadioClass.rad_design}></div>
            <div className={SuperRadioClass.rad_text}>{o}</div>
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
