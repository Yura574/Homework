import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from "react";
import SuperInputText from "../../../h4/common/c1-SuperInputText/SuperInputText";
import SuperInputTextClass from './../../../h4/common/c1-SuperInputText/SuperInputText.module.css'
import pencil from './../../../../pencel.svg'
import SuperEditableSpanClass from './SuperEditableSpan.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType // пропсы для спана
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (props) => {
    const {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,
        ...restProps// все остальные пропсы попадут в объект restProps
    } = props
    const [editMode, setEditMode] = useState<boolean>(false);
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {};

    const onEnterCallback = () => {
        setEditMode(false); // выключить editMode при нажатии Enter


        onEnter && onEnter();
    };
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        // setEditMode(); // выключить editMode при нажатии за пределами инпута
        setEditMode(false)
        onBlur && onBlur(e);
    };
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // setEditMode(); // включить editMode при двойном клике
        setEditMode(true)
        onDoubleClick && onDoubleClick(e);
    };

    const spanClassName = `${"сделать красивый стиль для спана"} ${restProps.className}`;

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        className={SuperInputTextClass.inputClass}

                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={restProps.spanClassName}
                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {restProps.value
                            ? restProps.value
                            : <span><img src={pencil} alt=""
                                         className={SuperEditableSpanClass.pencil}/>{children || restProps.value}</span>
                        }

                    </span>
                )
            }
        </>
    );
}

export default SuperEditableSpan;
