import { useEffect, useRef } from 'react';
import { useOtpPins } from '../hooks/use_OTP_PINS';
import useOTPValidator from '../hooks/useOTPValidator';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';

const OTPInput = () => {
  const { initialiseCodeLength, code, length, setCode } = useOtpPins();
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const { validateInput, error } = useOTPValidator();

  useEffect(() => {
    inputRef?.current[0]?.focus();
    initialiseCodeLength(6);
  }, [initialiseCodeLength]);

  const handleInput = (input: string, index: number) => {
    const pin = [...code];
    pin[index] = validateInput(input, index);
    setCode(pin);

    if (pin[index] !== '') {
      if (input.length === 1 && index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }

      if (input.length === 0 && index > 0) {
        inputRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const pastedChars = pastedData.split('');
    if (pastedChars.length === length) {
      const newCode = pastedChars.map((char, i) => validateInput(char, i));
      setCode(newCode);
    }
  };

  return (
    <div className="flex items-center gap-5 flex-wrap">
      {
        Array.from({ length }, (_, index) => (
          <div key={index} className='relative'>
            <InputField
              ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
              type='text'
              maxLength={1}
              value={code[index]}
              onChange={e => handleInput(e.target.value, index)}
              onPaste={e => handlePaste(e)}
              className='!w-12 text-center border'
              style={{ borderColor: error[index]?.status ? 'red' : 'gray' }}
            />
            {error[index]?.status && (<ErrorMessage error={error[index].message} />)}
          </div>
        ))
      }
    </div>
  );
};

export default OTPInput;
