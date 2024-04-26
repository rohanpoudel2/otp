import { useOtpPins } from './use_OTP_PINS';

const useOTPValidator = () => {
  const { error, setError } = useOtpPins();

  const validateInput = (input: string, index: number) => {
    if (!/^\d+$/.test(input) && input.length !== 0) {
      setError({ ...error, [index]: { message: 'Invalid Input', status: true } });
      return '';
    }
    setError({ ...error, [index]: { message: '', status: false } });
    return input;
  };

  return { validateInput, error };
};

export default useOTPValidator;