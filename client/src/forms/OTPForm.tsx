import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios"
import toast from 'react-hot-toast';
import { codeError, useOtpPins } from '../hooks/use_OTP_PINS';
import Button from "../components/Button";
import Form from "../components/Form";
import OTPInput from "../components/OTPInput";
import Title from '../components/Title';
import BoxContainer from "../components/BoxContainer";

const OTPForm = () => {
  const { code, setCode, length, setError } = useOtpPins();
  const navigate = useNavigate();
  const [verified, setVerified] = useState<boolean>(false);
  const [postErrors, setPostErrors] = useState<string[]>([]);

  useEffect(() => {
    postErrors?.map(e => { toast.error(e) })
    if (verified) {
      toast.success('Verified');
    }
  }, [postErrors, verified])

  const checkFields = () => code.reduce((acc: number[], digit: string, index: number) => {
    if (digit === '') {
      acc.push(index);
    }
    return acc;
  }, []);

  const handleResponse = async () => {
    try {
      await axios.post(`${process.env.API_ENDPOINT}/verify`, { code: code.join('') });
      setVerified(true);
      navigate({ to: '/success' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response) {
        setPostErrors(err.response.data.errors);
      } else {
        toast.error('Something Went Wrong');
      }
      setVerified(false);
    }
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVerified(false);
    setPostErrors([]);
    const emptyFields = checkFields();
    if (emptyFields.length === 0) {
      handleResponse();
    } else {
      setError(emptyFields.reduce((acc: codeError, index: number) => {
        acc[index] = { message: "Empty Input", status: true };
        return acc;
      }, {}));
    }
  };

  const resetOTP = () => {
    setCode(Array(length).fill(''));
    setError({});
    setVerified(false);
    setPostErrors([]);
  }

  return (
    <BoxContainer>
      <Title
        title='Enter your OTP'
        className='font-mono text-xl font-semibold mb-5'
      />
      <Form
        onSubmit={onSubmit}
        className="flex flex-row items-end justify-center gap-5 "
      >
        <OTPInput />
        <div
          className='flex items-center gap-5'
        >
          <Button
            type="submit"
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={resetOTP}
            className='!bg-red-500 hover:!bg-white !border-red-500 !ring-red-300 active:!text-red-600 hover:!text-red-600'
          >
            Reset
          </Button>
        </div>
      </Form>
    </BoxContainer>
  )
}


export default OTPForm;
