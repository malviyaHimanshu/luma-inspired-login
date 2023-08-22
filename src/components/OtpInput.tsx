import { useEffect } from "react";

type PartialInputProps = Pick<React.ComponentPropsWithoutRef<"input">, "className" | "style">;

type Props = {
    value: string;
    onChange(value: string): void;
    size?: number;
    validationPattern?: RegExp;
} & PartialInputProps;

export default function OtpInput(props: Props) {
    const {
        size = 6,
        validationPattern = /[0-9]{1}/,
        value,
        onChange,
        ...restProps
    } = props;
  
    const arr = new Array(size).fill("-");

    useEffect(() => {
        const elem = document.getElementsByClassName("otp-input")[0] as HTMLInputElement | null;
        elem?.focus();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const elem = e.target;
        const val = e.target.value;

        if(!validationPattern.test(val) && val !== "") {
            return;
        }
        const valueArr = value.split("");
        valueArr[index] = val;
        const newVal = valueArr.join("").slice(0, size);
        onChange(newVal);

        if(val) {
            const next = elem.nextElementSibling as HTMLInputElement | null;
            next?.focus();
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const current = e.currentTarget;
        if(e.key === "ArrowLeft" || e.key === "Backspace") {
            const prev = current.previousElementSibling as HTMLInputElement | null;
            prev?.focus();
            prev?.setSelectionRange(0, 1);
            return;
        }
        if(e.key === "ArrowRight") {
            const prev = current.nextSibling as HTMLInputElement | null;
            prev?.focus();
            prev?.setSelectionRange(0, 1);
            return;
        }
    }
    
    return (
        <div className="flex gap-2 my-3">
            {arr.map((_, index) => {
                return (
                    <input
                        key={index}
                        {...restProps}
                        className='otp-input rounded-lg border border-primary-light focus:border-text-primary transition-all ease-in-out duration-150 bg-primary w-full mt-2 font-medium text-sm text-text-primary p-3 text-center outline-none'
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern={validationPattern.source}
                        maxLength={6}
                        value={value[index] ?? ""}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyUp={handleKeyUp}
                    />
                );
            })}
        </div>
    );
};